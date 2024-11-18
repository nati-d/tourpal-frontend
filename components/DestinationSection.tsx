import React from "react";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "./ui/carousel";
import DestinationCard from "./DestinationCard";
import { AA_DESTINATIONS } from "@/constants";

const DestinationSection = () => {
	return (
		<div className='container '>
			<h1 className='text-[28px] font-semibold'>The Best Destinations in Addis Ababa</h1>
			<p className='text-[16px] mb-4'>Discover African Capital Choice Best of the Best Destinations.</p>
			<Carousel className='w-full'>
				<CarouselContent className='-ml-4'>
					{AA_DESTINATIONS.map(item => (
						<CarouselItem
							key={item.href}
							className='pl-4 md:basis-1/2 lg:basis-1/4 gap-3'
						>
							<DestinationCard name = {item.name} img = {item.image}/>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
};

export default DestinationSection;
