import {Star} from "lucide-react";
import Image from "next/image";
import React from "react";
import StarRating from "./StarRating";

type ProductCardProps = {
	name: string;
	img: string;
	rating?: number;
	amenties?: string[];
};

const DestinationCard = ({name, img, amenties, rating}: ProductCardProps) => {
	return (
		<div>
			<div className='relative  h-[200px] rounded-2xl overflow-hidden'>
				<Image
					src={img}
					fill
					alt='category'
				/>
			</div>
			<h2 className='font-semibold text-[16px] mt-2'>{name}</h2>
			{/* <p className='text-[14px]'>Boat Tours, Walking Tours</p> */}
			{amenties && (
				<ul className='flex flex-wrap gap-2 my-2'>
					{amenties.map((item, index) => (
						<li
							key={index}
							className='text-[12px] bg-gray-100 px-2 py-1 rounded-md'
						>
							{item}
						</li>
					))}
				</ul>
			)}

			{rating && <StarRating rating={rating} />}
		</div>
	);
};

export default DestinationCard;
