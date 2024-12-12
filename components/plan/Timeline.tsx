import {Sun, Sunrise, Sunset, TrashIcon} from "lucide-react";
import {ReactNode} from "react";
import ItineraryDayHeader from "./ItineraryDayHeader";

// Define the types for the data structure
type ActivityItem = {
	itineraryItem: string;
	briefDescription: string;
};

type Activities = {
	morning: ActivityItem[];
	afternoon: ActivityItem[];
	evening: ActivityItem[];
};

type Day = {
	title: string;
	activities: Activities;
};

type TimelineProps = {
	itinerary: Day[] | undefined; // Pass the itinerary as an array of `Day` objects
};

const Timeline = ({itinerary}: TimelineProps) => {
	if (itinerary && itinerary.length === 0) return <div className='flex justify-center items-center p-4'>Click + Add a day to plan an itinerary</div>;

	const filteredItinerary = itinerary?.filter((day) => {
		const isMorningEmpty = day.activities.morning.length === 0;
		const isAfternoonEmpty = day.activities.afternoon.length === 0;
		const isEveningEmpty = day.activities.evening.length === 0;

		return !(isMorningEmpty && isAfternoonEmpty && isEveningEmpty);
	});

	return (
		<ol className='relative border-s border-gray-200 dark:border-foreground/40 ml-10 mt-5'>
			{filteredItinerary?.map((day) => (
				<li
					className='mb-10 ms-6'
					key={day.title}
				>
					<span className='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
						<svg
							className='w-2.5 h-2.5 text-blue-800 dark:text-blue-300'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='currentColor'
							viewBox='0 0 20 20'
						>
							<path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z' />
						</svg>
					</span>
					<ItineraryDayHeader title={day.title} />
					<div className='flex flex-col gap-5'>
						<Activity
							activity={day.activities.morning}
							heading='Morning'
							icon={<Sunrise className='w-4 h-4 text-blue-500' />}
						/>
						<Activity
							activity={day.activities.afternoon}
							heading='Afternoon'
							icon={<Sun className='w-4 h-4 text-yellow-500' />}
						/>
						<Activity
							activity={day.activities.evening}
							heading='Evening'
							icon={<Sunset className='w-4 h-4 text-gray-600 dark:text-white' />}
						/>
					</div>
				</li>
			))}
		</ol>
	);
};

const Activity = ({
	activity,
	heading,
	icon,
}: {
	activity: ActivityItem[]; // Typed activity array
	heading: string;
	icon: ReactNode;
}) => {
	if (activity.length == 0) return null;
	return (
		<div className='flex flex-col gap-2 shadow-md p-2 bg-muted rounded-sm'>
			<h3 className='text-sm leading-none text-gray-600 w-max p-2 font-semibold flex justify-center gap-2 items-center capitalize'>
				{icon}
				<div className='text-foreground'>{heading}</div>
			</h3>
			<ul className='space-y-1 text-muted-foreground pl-2'>
				{activity.map((act, index) => (
					<li key={index}>
						<div className='w-full p-1 overflow-hidden'>
							<span className='text-foreground font-semibold'>{act.itineraryItem}</span>
							<p className='max-w-md md:max-w-full text-wrap whitespace-pre-line'>{act.briefDescription}</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Timeline;