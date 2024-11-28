"use client";

import {motion} from "framer-motion";
import {Star, MapPin, ArrowRight} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

interface FeaturedPlace {
	id: string;
	name: string;
	location: string;
	description: string;
	rating: number;
	price: string;
	imageUrl: string;
	category: string;
	featured?: boolean;
}

const featuredPlaces: FeaturedPlace[] = [
	{
		id: "1",
		name: "Luxury Ocean Resort",
		location: "Maldives",
		description: "Experience paradise with overwater villas and pristine beaches. Enjoy world-class dining and spa services.",
		rating: 4.9,
		price: "$599/night",
		imageUrl: "/images/adwa.jpg",
		category: "Resort",
		featured: true,
	},
	{
		id: "2",
		name: "Mountain View Lodge",
		location: "Swiss Alps",
		description: "Ski-in/ski-out luxury lodge with breathtaking mountain views. Perfect for winter sports enthusiasts.",
		rating: 4.8,
		price: "$399/night",
		imageUrl: "/images/merkato.jpg",
		category: "Lodge",
	},
	{
		id: "3",
		name: "Historic City Hotel",
		location: "Prague",
		description: "Boutique hotel in the heart of Old Town. Walking distance to all major attractions.",
		rating: 4.7,
		price: "$299/night",
		imageUrl: "/images/meskel.jpg",
		category: "Hotel",
	},
	{
		id: "4",
		name: "Beachfront Villa",
		location: "Bali",
		description: "Private villa with infinity pool and direct beach access. Experience luxury island living.",
		rating: 4.9,
		price: "$499/night",
		imageUrl: "/images/national-museum.jpg",
		category: "Villa",
		featured: true,
	},
	{
		id: "5",
		name: "Desert Oasis Resort",
		location: "Dubai",
		description: "Luxury desert resort with private pools and traditional Arabian hospitality.",
		rating: 4.8,
		price: "$699/night",
		imageUrl: "/images/entoto.jpg",
		category: "Resort",
	},
	{
		id: "6",
		name: "Rainforest Eco Lodge",
		location: "Costa Rica",
		description: "Sustainable luxury in the heart of the rainforest. Experience nature at its finest.",
		rating: 4.7,
		price: "$349/night",
		imageUrl: "/images/adwa.jpg",
		category: "Eco Lodge",
	},
];

const containerVariants = {
	hidden: {opacity: 0},
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const itemVariants = {
	hidden: {opacity: 0, y: 20},
	show: {opacity: 1, y: 0},
};

export default function FeaturedSite() {
	return (
		<section className='w-full py-12 bg-gray-50'>
			<div className='container px-4 md:px-6'>
				<motion.div
					initial={{opacity: 0, y: -20}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.5}}
					className='flex flex-col items-center justify-center space-y-4 text-center mb-12'
				>
					<div className='container px-4'>
						<div className='flex items-center justify-start'>
							<div className='space-y-1'>
								<h2 className='text-2xl font-semibold tracking-tight text-left'>Featured Destinations</h2>
								<p className='text-sm text-muted-foreground'>
									{" "}
									Discover our handpicked selection of extraordinary places to stay around the world
								</p>
							</div>
						</div>
					</div>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial='hidden'
					animate='show'
					className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
				>
					{featuredPlaces.map((place) => (
						<motion.div
							key={place.id}
							variants={itemVariants}
							whileHover={{y: -5}}
							className='group relative bg-white rounded-xl overflow-hidden shadow-lg'
						>
							<div className='relative h-64 overflow-hidden'>
								<Image
									src={place.imageUrl}
									alt={place.name}
									fill
									className='object-cover transition-transform group-hover:scale-110'
								/>
								{place.featured && <Badge className='absolute top-4 left-4 bg-primary text-primary-foreground'>Featured</Badge>}
								<div className='absolute top-4 right-4 flex items-center space-x-1 bg-black/50 text-white px-2 py-1 rounded-full'>
									<Star className='w-4 h-4 fill-current text-yellow-400' />
									<span className='text-sm font-medium'>{place.rating}</span>
								</div>
							</div>
							<div className='p-6'>
								<div className='flex items-center justify-between mb-2'>
									<Badge
										variant='secondary'
										className='text-sm'
									>
										{place.category}
									</Badge>
									<span className='text-lg font-bold text-primary'>{place.price}</span>
								</div>
								<h3 className='text-xl font-bold mb-2'>{place.name}</h3>
								<div className='flex items-center text-gray-500 mb-4'>
									<MapPin className='w-4 h-4 mr-1' />
									<span className='text-sm'>{place.location}</span>
								</div>
								<p className='text-gray-600 mb-4 line-clamp-2'>{place.description}</p>
								<Link href={`/listing/${place.id}`}>
									<Button className='w-full group'>
										View Details
										<ArrowRight className='w-4 h-4 ml-2 transition-transform group-hover:translate-x-1' />
									</Button>
								</Link>
							</div>
						</motion.div>
					))}
				</motion.div>

				<motion.div
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					transition={{delay: 0.5}}
					className='flex justify-center mt-12'
				>
					<Button
						variant='outline'
						size='lg'
					>
						View All Destinations
					</Button>
				</motion.div>
			</div>
		</section>
	);
}
