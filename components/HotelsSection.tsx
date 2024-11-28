import React from "react";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "./ui/carousel";
import DestinationCard from "./DestinationCard";
import {HOTELS} from "@/constants";

const HotelsSection = () => {
	return (
		<div className='container mt-10'>
			<h1 className='text-[28px] font-semibold mb-4'>Featured Places in Tourpal</h1>
			{/* <p className='text-[16px] mb-4'>Discover African Capital Choice Best of the Best Destinations.</p> */}
			<Carousel className='w-full'>
				<CarouselContent className='-ml-4'>
					{HOTELS.map((item) => (
						<CarouselItem
							key={item.href}
							className='pl-4 md:basis-1/2 lg:basis-1/4 gap-3'
						>
							<DestinationCard
								name={item.name}
								img={item.image}
								amenties={item.amenities}
								rating={item.rating}
							/>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
};

export default HotelsSection;
