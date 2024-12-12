"use client";

import {ScrollArea} from "@/components/ui/scroll-area";
import {MapPin} from "lucide-react";
import {useEffect, useState} from "react";
import SectionWrapper from "./SectionWrapper";
import {Button} from "@/components/ui/button";
import Map from "../Map";

const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF", "#33FFF5"];

// You should define your place type here
type location = {
	lat: number;
	lng: number;
};

type TopPlacesToVisitProps = {
	topPlacesToVisit: string[] | undefined;
};

const TopPlacesToVisit = ({topPlacesToVisit}: TopPlacesToVisitProps) => {
	const [selectedPlace, setSelectedPlace] = useState<TopPlacesToVisitProps | null>(null);

	{
	}
	useEffect(() => {
		if (!topPlacesToVisit || topPlacesToVisit.length === 0) return;
		setSelectedPlace(topPlacesToVisit);
	}, [topPlacesToVisit]);

	const onClickPlace = (e: React.MouseEvent<HTMLLIElement>, coordinates: location) => {
		e.preventDefault();
		setSelectedPlace(coordinates);
	};

	return (
		<SectionWrapper id='topplacestovisit'>
			<h2 className='mb-2 text-lg font-semibold tracking-wide flex items-center'>
				<MapPin className='mr-2' /> Top places to visit
			</h2>

			<div className='flex flex-col bg-blue-50 dark:bg-background rounded-md lg:flex-row'>
				<div className='w-full h-[30rem]'>
					<div className='p-2 h-full flex justify-center items-start'>
						<ScrollArea className='h-full w-full rounded-md border'>
							<ol className='flex-1 flex flex-col gap-2 p-5'>
								{topPlacesToVisit?.map((place, index) => (
									<li
										key={index}
										className='p-5 dark:bg-muted bg-white font-bold cursor-pointer
                        flex-1 shadow-md hover:shadow-lg flex justify-between items-center
                        hover:ring-2 hover:ring-blue-300 duration-500'
										// onClick={(e) => onClickPlace(e, place.coordinates)}
									>
										<div>
											<span
												className='mr-2'
												style={{color: `${colors[index % 6]}`}}
											>
												{index + 1}.
											</span>
											<span className='font-normal dark:text-muted-foreground'>{place}</span>
										</div>
									</li>
								))}
							</ol>
						</ScrollArea>
					</div>
				</div>
				<div className='w-full p-2 h-[30rem]'>
					<Map />
				</div>
			</div>
		</SectionWrapper>
	);
};

export default TopPlacesToVisit;
