import {Button} from "@/components/ui/button";
import {Navigation} from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import Timeline from "./Timeline";

type Activity = {
	Time: string;
	Place: string;
	Description: string;
	Latitude: string;
	Longitude: string;
};

type DayPlan = {
	day: string;
	activities: Activity[];
};

type ItineraryProps = {
	itinerary: Record<string, Activity[]>[] | undefined;
};

const transformItinerary = (itinerary: Record<string, Activity[]>[] | undefined) => {
	if (!itinerary || !Array.isArray(itinerary)) return undefined;

	return itinerary.map((dayObj) => {
		const [dayTitle, activities] = Object.entries(dayObj)[0];

		const categorizedActivities = {morning: [], afternoon: [], evening: []} as {
			morning: Activity[];
			afternoon: Activity[];
			evening: Activity[];
		};

		const validActivities = Array.isArray(activities) ? activities : [];

		validActivities.forEach((activity) => {
			if (activity.Time.toLowerCase() === "morning") {
				categorizedActivities.morning.push(activity);
			} else if (activity.Time.toLowerCase() === "afternoon") {
				categorizedActivities.afternoon.push(activity);
			} else if (activity.Time.toLowerCase() === "evening") {
				categorizedActivities.evening.push(activity);
			}
		});

		return {
			title: dayTitle,
			activities: {
				morning: categorizedActivities.morning.map((act) => ({
					itineraryItem: act.Place,
					briefDescription: act.Description,
				})),
				afternoon: categorizedActivities.afternoon.map((act) => ({
					itineraryItem: act.Place,
					briefDescription: act.Description,
				})),
				evening: categorizedActivities.evening.map((act) => ({
					itineraryItem: act.Place,
					briefDescription: act.Description,
				})),
			},
		};
	});
};

const Itinerary = ({itinerary}: ItineraryProps) => {
	const transformedItinerary = transformItinerary(itinerary);
	console.log(transformItinerary, "Transform Itinerary");

	return (
		<SectionWrapper id='itinerary'>
			<div className='mb-2 flex justify-between items-center'>
				<h2 className='text-lg font-semibold tracking-wide flex items-center'>
					<Navigation className='mr-2' /> Itinerary
				</h2>
			</div>

			<Timeline itinerary={transformedItinerary} />
		</SectionWrapper>
	);
};

export default Itinerary;
