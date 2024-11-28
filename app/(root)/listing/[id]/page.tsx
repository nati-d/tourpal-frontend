
import {Badge} from "@/components/ui/badge";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Gallery from "@/components/listing/Gallery";
import Reviews from "@/components/listing/Reviews";
import ReservationBox from "@/components/listing/ReservationBox";
import Amenities from "@/components/listing/Amenties";

export default function ListingPage() {
	return (
		<div className='container mx-auto px-4 py-8 '>
			<h1 className='text-3xl font-bold my-4'>Cozy Beachfront Cottage</h1>
			<div className='flex items-center space-x-2 mb-4'>
				<Badge variant='secondary'>Superhost</Badge>
				<span className='text-sm text-muted-foreground'>Santa Barbara, California, United States</span>
			</div>

			<Gallery />

			<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 space-y-8'>
				<div className='md:col-span-2'>
					<Card>
						<CardHeader>
							<CardTitle>About this space</CardTitle>
						</CardHeader>
						<CardContent>
							<p className='text-muted-foreground'>
								Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views, direct beach access, and all the
								comforts of home.
							</p>
							<h3 className='font-semibold mt-4 mb-2'>The space</h3>
							<p className='text-muted-foreground'>
								This cozy 2-bedroom cottage features a fully equipped kitchen, spacious living area, and a private deck perfect for watching
								sunsets.
							</p>
							<h3 className='font-semibold mt-4 mb-2'>Guest access</h3>
							<p className='text-muted-foreground'>Guests have access to the entire cottage, private deck, and direct beach access.</p>
						</CardContent>
					</Card>

					<Amenities />

					<Reviews />
				</div>

				<div>
					<ReservationBox />
				</div>
			</div>
		</div>
	);
}
