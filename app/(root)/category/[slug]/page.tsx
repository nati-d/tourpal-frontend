"use client";
import {Suspense} from "react";
import {generateDummyHotels} from "@/utils/dummyData";
import HotelList from "@/components/HotelList";
import SearchFilters from "@/components/SearchFilters";
import {Hotel} from "@/types";

export default function HotelsPage({searchParams}: {searchParams?: {[key: string]: string | string[] | undefined}}) {
	const page = Number(searchParams?.page) || 1;
	const search = (searchParams?.search as string) || "";
	const minRating = Number(searchParams?.minRating) || 1;
	const maxPrice = Number(searchParams?.maxPrice) || 1000;
	const amenities = ((searchParams?.amenities as string) || "").split(",").filter(Boolean);
	const propertyType = (searchParams?.propertyType as string) || "";

	const allHotels = generateDummyHotels(50);

	const filteredHotels = allHotels.filter(
		(hotel: Hotel) =>
			hotel.name.toLowerCase().includes(search.toLowerCase()) &&
			hotel.rating >= minRating &&
			hotel.price <= maxPrice &&
			(amenities.length === 0 || amenities.every((amenity) => hotel.amenities.includes(amenity))) &&
			(propertyType === "" || hotel.propertyType === propertyType)
	);

	const paginatedHotels = filteredHotels.slice((page - 1) * 10, page * 10);

	return (
		<div className='min-h-screen'>
			<div className='container mx-auto px-4 py-8 my-10'>
				<div className='flex flex-col md:flex-row gap-8 my-10'>
					<Suspense fallback={<div className='text-center'>Loading filters...</div>}>
						<div className='w-full md:w-1/4'>
							<SearchFilters />
						</div>
					</Suspense>
					<Suspense fallback={<div className='text-center'>Loading hotels...</div>}>
						<div className='w-full md:w-3/4'>
							<HotelList
								hotels={paginatedHotels}
								totalHotels={filteredHotels.length}
							/>
						</div>
					</Suspense>
				</div>
			</div>
		</div>
	);
}
