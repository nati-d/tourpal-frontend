"use client";
import {Utensils} from "lucide-react";
import {useState} from "react";
import SectionWrapper from "./SectionWrapper";
import List from "./List";
import Header from "./Header";

type TopRestaurantsToTryProps = {
	recommendations: string[];
};

export default function TopRestaurantsToTry({recommendations}: TopRestaurantsToTryProps) {
	return (
		<SectionWrapper id='localcuisinerecommendations'>
			<Header
				icon={<Utensils />}
				title='Top Restaurants To Try'
			/>
			<div className='ml-8'>
				<List list={recommendations} />
			</div>
		</SectionWrapper>
	);
}
