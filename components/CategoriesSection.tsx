import * as React from "react";
import {Hotel, Utensils, Landmark, MapPin, Car} from "lucide-react";
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";

interface Category {
	label: string;
	icon: React.ReactNode;
	description: string;
}

const categories: Category[] = [
	{
		label: "Hotel",
		icon: <Hotel className='w-6 h-6' />,
		description: "Stay in luxurious hotels and resorts",
	},
	{
		label: "Restaurant",
		icon: <Utensils className='w-6 h-6' />,
		description: "Indulge in amazing culinary experiences",
	},
	{
		label: "Attraction",
		icon: <Landmark className='w-6 h-6' />,
		description: "Explore famous tourist spots",
	},
	{
		label: "Tour Guide",
		icon: <MapPin className='w-6 h-6' />,
		description: "Find experienced tour guides for your trips",
	},
	{
		label: "Car Rental",
		icon: <Car className='w-6 h-6' />,
		description: "Rent cars for your travels",
	},
];

export default function CategorySection() {
	return (
		<div className='w-full py-8 space-y-8'>
			<div className='container px-4 md:px-6'>
				<div className='flex items-center justify-between'>
					<div className='space-y-1'>
						<h2 className='text-2xl font-semibold tracking-tight'>Browse by category</h2>
						<p className='text-sm text-muted-foreground'>Find your perfect service or property from our diverse collection</p>
					</div>
				</div>
			</div>
			<ScrollArea className='w-full overflow-hidden'>
				<div className='container px-4 md:px-6'>
					<div className='grid grid-flow-col auto-cols-max gap-4'>
						{categories.map((category, index) => (
							<Button
								key={index}
								variant='outline'
								className='group h-auto p-4 hover:border-primary transition-colors'
								asChild
							>
								<a
									href='/category/hotel'
									className='space-y-3'
								>
									<div
										className={cn(
											"mx-auto rounded-xl w-12 h-12 flex items-center justify-center",
											"bg-muted group-hover:bg-primary group-hover:text-primary-foreground",
											"transition-colors duration-300 ease-in-out"
										)}
									>
										{category.icon}
									</div>
									<div className='space-y-1 text-center'>
										<h3 className='font-semibold leading-none tracking-tight'>{category.label}</h3>
										<p className='text-xs text-muted-foreground line-clamp-2'>{category.description}</p>
									</div>
								</a>
							</Button>
						))}
					</div>
					<ScrollBar
						orientation='horizontal'
						className='mt-4'
					/>
				</div>
			</ScrollArea>
		</div>
	);
}
