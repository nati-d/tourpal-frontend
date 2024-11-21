import * as React from "react";

import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import CategoryCard from "./CategoryCard";
import { CATEGORY_LIST } from "@/constants";

const CategoriesSection = () => {
	return (
		<div className="container ">
			<h1 className="text-[28px] mb-2 font-semibold">Discover the best categories here</h1>
			<Carousel className='w-full'>
				<CarouselContent className='-ml-4'>
					{CATEGORY_LIST.map(item  => (
						<CarouselItem
							key={item.href}
							className='pl-4 md:basis-1/2 lg:basis-1/5 gap-3'
						>
			
							<CategoryCard name = {item.name} img = {item.image}/>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
};

export default CategoriesSection;
