"use client";

import {Star} from "lucide-react";
import {Card, CardContent} from "@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";

export default function TestimonialsSection() {

	const testimonials = [
		{
			name: "Sarah Johnson",
			role: "Travel Enthusiast",
			image: "/placeholder.svg?height=100&width=100",
			rating: 5,
			content:
				"The booking process was seamless! I found the perfect vacation spot within minutes. The customer service team was incredibly helpful when I needed to modify my dates.",
			initials: "SJ",
		},
		{
			name: "Michael Chen",
			role: "Business Traveler",
			image: "/placeholder.svg?height=100&width=100",
			rating: 5,
			content:
				"As a frequent business traveler, I appreciate how easy it is to manage my bookings. The interface is intuitive and the confirmation process is quick.",
			initials: "MC",
		},
		{
			name: "Emma Davis",
			role: "Family Vacation",
			image: "/placeholder.svg?height=100&width=100",
			rating: 5,
			content:
				"Planning a family vacation was stress-free with this platform. The filters helped us find family-friendly accommodations that met all our needs.",
			initials: "ED",
		},
		{
			name: "James Wilson",
			role: "Weekend Getaway",
			image: "/placeholder.svg?height=100&width=100",
			rating: 4,
			content: "Great selection of properties for weekend getaways. The photos and reviews helped us make the perfect choice for our anniversary trip.",
			initials: "JW",
		},
		{
			name: "Lisa Thompson",
			role: "Solo Traveler",
			image: "/placeholder.svg?height=100&width=100",
			rating: 5,
			content:
				"The best booking experience I've had as a solo traveler. The detailed property descriptions and safety information gave me peace of mind.",
			initials: "LT",
		},
		{
			name: "David Rodriguez",
			role: "Group Booking",
			image: "/placeholder.svg?height=100&width=100",
			rating: 5,
			content: "Coordinating accommodations for our group retreat was a breeze. The group booking features saved us time and money.",
			initials: "DR",
		},
	];

	return (
		<section className='w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900'>
			<div className='container px-4 md:px-6'>
				<div className='flex flex-col items-center justify-center space-y-4 text-center'>
					<div className='space-y-2'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>What Our Guests Are Saying</h2>
						<p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
							Don&apos;t just take our word for it. Here&apos;s what travelers have to say about their booking experience.
						</p>
					</div>
				</div>
				<div className='py-12'>
					<Carousel
						opts={{
							align: "start",
							loop: true,
						}}
						className='w-full'
					>
						<CarouselContent className='-ml-2 md:-ml-4'>
							{testimonials.map((testimonial, index) => (
								<CarouselItem
									key={index}
									className='pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3'
								>
									<Card className='relative overflow-hidden'>
										<CardContent className='p-6'>
											<div className='flex items-start gap-4'>
												<Avatar className='h-12 w-12'>
													<AvatarImage
														alt={testimonial.name}
														src={testimonial.image}
													/>
													<AvatarFallback>{testimonial.initials}</AvatarFallback>
												</Avatar>
												<div className='grid gap-1'>
													<h3 className='font-semibold leading-none'>{testimonial.name}</h3>
													<p className='text-sm text-gray-500 dark:text-gray-400'>{testimonial.role}</p>
												</div>
											</div>
											<div
												className='flex gap-0.5 pt-4'
												aria-label={`Rated ${testimonial.rating} out of 5 stars`}
											>
												{Array(testimonial.rating)
													.fill(null)
													.map((_, i) => (
														<Star
															key={i}
															className='h-4 w-4 fill-primary text-primary'
															aria-hidden='true'
														/>
													))}
												{Array(5 - testimonial.rating)
													.fill(null)
													.map((_, i) => (
														<Star
															key={i + testimonial.rating}
															className='h-4 w-4 text-gray-300 dark:text-gray-600'
															aria-hidden='true'
														/>
													))}
											</div>
											<blockquote className='pt-4 text-gray-700 dark:text-gray-300'>&quot;{testimonial.content}&quot;</blockquote>
										</CardContent>
									</Card>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious className='hidden md:flex' />
						<CarouselNext className='hidden md:flex' />
					</Carousel>
				</div>
			</div>
		</section>
	);
}
