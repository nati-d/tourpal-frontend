"use client";
import Itinerary from "@/components/plan/Itinerary";
import PackingChecklist from "@/components/plan/PackingChecklist";
import TopActivities from "@/components/plan/TopActivities";
import TopPlacesToVisit from "@/components/plan/TopPlacesToVisit";
import TopRestaurantsToTry from "@/components/plan/TopRestaurantsToTry";
import Weather from "@/components/plan/Weather";
import {useEffect, useState} from "react";

interface Itinerary {
	DaysPlan: Array<any>;
	TopPlacesToVisit: string[];
	TopRestaurantsToTry: string[];
	TopActivitiesToDo: string[];
	PackingChecklist: string[];
}

const PlansPage = () => {
	// Use generic type for the state to include null and Itinerary
	const [itinerary, setItinerary] = useState<Itinerary | null>(null);
	const [city, setCity] = useState<string>("");

	useEffect(() => {
		// Retrieve itinerary from localStorage
		const storedItinerary = localStorage.getItem("itinerary");
		const storedCity = localStorage.getItem("city");
		if (storedItinerary) {
			setItinerary(JSON.parse(storedItinerary));
		}

		if (storedCity) {
			setCity(storedCity);
		}
	}, []);

	if (!itinerary) {
		return <div>Loading your itinerary...</div>;
	}


	console.log(itinerary.DaysPlan, "Top Activities to Do");

	return (
		<div className='container flex flex-col'>
			<TopActivities activities={itinerary.TopActivitiesToDo} />
			<Weather placeName='London' />
			<TopPlacesToVisit topPlacesToVisit={itinerary.TopPlacesToVisit} />
			<Itinerary itinerary={itinerary.DaysPlan} />
			<TopRestaurantsToTry recommendations={itinerary.TopRestaurantsToTry} />
			<PackingChecklist checklist={itinerary.PackingChecklist} />
		</div>
	);
};

export default PlansPage;
