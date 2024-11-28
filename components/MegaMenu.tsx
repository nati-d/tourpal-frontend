"use client";
import * as React from "react";
import Link from "next/link";
import {ChevronDown} from "lucide-react";
import {Button} from "@/components/ui/button";
import {DropdownMenu, DropdownMenuContent, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import Image from "next/image";

const sectors = [
	{
		name: "Hotel",
		items: ["Luxury Hotels", "Budget Hotels", "Resorts", "Boutique Hotels"],
	},
	{
		name: "Restaurant",
		items: ["Fine Dining", "Cafes", "Buffets", "Fast Food"],
	},
	{
		name: "Car Rental",
		items: ["Economy Cars", "Luxury Cars", "SUVs", "Vans"],
	},
];

const MegaMenu = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='ghost'
					className='h-full px-6 py-3 text-sm '
				>
					Explore <ChevronDown className='ml-1 h-5 w-5' />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-screen p-20 shadow-lg bg-white mx-auto border border-gray-200'>
				<div className='container grid grid-cols-4 gap-8'>
					{/* Left: List of sectors */}
					<div className='col-span-3 grid grid-cols-3 gap-6'>
						{sectors.map((sector) => (
							<div
								key={sector.name}
								className='space-y-4'
							>
								<h3 className='text-xl font-bold text-gray-900'>{sector.name}</h3>
								<ul className='space-y-2'>
									{sector.items.map((item) => (
										<li key={item}>
											<Link
												href={`/book/${sector.name.toLowerCase()}/${item.toLowerCase().replace(" ", "-")}`}
												className='text-gray-700 hover:text-gray-900 text-sm'
											>
												{item}
											</Link>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>

					{/* Right: Images or promotional content */}
					<div className='col-span-1 space-y-6'>
						<h3 className='text-xl font-bold text-gray-900'>Explore More</h3>
						<div className='space-y-4'>
							<Image
								src='/images/adwa.jpg'
								alt='Luxury Hotels'
								width={400}
								height={250}
								className='rounded-lg shadow'
							/>
						</div>
					</div>
				</div>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default MegaMenu;
