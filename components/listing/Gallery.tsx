"use client";

import {useState} from "react";
import Image from "next/image";
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {ChevronLeft, ChevronRight, X} from "lucide-react";

export default function AboutPlace() {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const images = [
		{src: "/images/adwa.jpg", caption: "Historic Adwa Mountains"},
		{src: "/images/merkato.jpg", caption: "Vibrant Merkato Market"},
		{src: "/images/meskel.jpg", caption: "Meskel Square at Sunset"},
		{src: "/images/national-museum.jpg", caption: "National Museum of Ethiopia"},
		{src: "/images/entoto.jpg", caption: "Scenic Entoto Hills"},
	];

	const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
	const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

	return (
		<div className='space-y-6'>
			{/* Gallery */}
			<section className='relative'>
				<h2 className='text-2xl font-semibold'>Gallery</h2>
				<div className='grid grid-cols-4 grid-rows-2 gap-2 h-[400px] mt-4'>
					<Dialog>
						<DialogTrigger asChild>
							<div className='col-span-2 row-span-2 relative group cursor-pointer'>
								<Image
									src={images[0].src}
									alt={images[0].caption}
									width={800}
									height={600}
									className='object-cover w-full h-full rounded-l-lg'
								/>
								<div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center'>
									<span className='text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
										View all photos
									</span>
								</div>
							</div>
						</DialogTrigger>
						<DialogContent className='max-w-4xl w-full h-[80vh] p-0'>
							<div className='relative w-full h-full'>
								<Image
									src={images[currentImageIndex].src}
									alt={images[currentImageIndex].caption}
									layout='fill'
									objectFit='contain'
								/>
								<Button
									variant='ghost'
									className='absolute top-2 right-2 text-white'
									onClick={() => setCurrentImageIndex(0)}
								>
									<X className='w-6 h-6' />
								</Button>
								<Button
									variant='ghost'
									className='absolute left-2 top-1/2 transform -translate-y-1/2 text-white'
									onClick={prevImage}
								>
									<ChevronLeft className='w-8 h-8' />
								</Button>
								<Button
									variant='ghost'
									className='absolute right-2 top-1/2 transform -translate-y-1/2 text-white'
									onClick={nextImage}
								>
									<ChevronRight className='w-8 h-8' />
								</Button>
								<div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full'>
									{currentImageIndex + 1} / {images.length}: {images[currentImageIndex].caption}
								</div>
							</div>
						</DialogContent>
					</Dialog>
					{images.slice(1).map((image, index) => (
						<Dialog key={index}>
							<DialogTrigger asChild>
								<div className={`relative group cursor-pointer ${index === 1 ? "rounded-tr-lg" : index === 3 ? "rounded-br-lg" : ""}`}>
									<Image
										src={image.src}
										alt={image.caption}
										width={400}
										height={300}
										className='object-cover w-full h-full'
									/>
									<div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300' />
								</div>
							</DialogTrigger>
							<DialogContent className='max-w-4xl w-full h-[80vh] p-0'>
								<div className='relative w-full h-full'>
									<Image
										src={image.src}
										alt={image.caption}
										layout='fill'
										objectFit='contain'
									/>
									<Button
										variant='ghost'
										className='absolute top-2 right-2 text-white'
										onClick={() => setCurrentImageIndex(0)}
									>
										<X className='w-6 h-6' />
									</Button>
								</div>
							</DialogContent>
						</Dialog>
					))}
				</div>
			</section>

			{/* Map */}
			<section>
				<h2 className='text-2xl font-semibold'>Location</h2>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.487577917169!2d-122.41941568468107!3d37.77492967975996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064b0c2a1cd%3A0x6c1b77b3deca04e3!2sSan%20Francisco!5e0!3m2!1sen!2sus!4v1616624029342!5m2!1sen!2sus'
					width='100%'
					height='400'
					style={{border: 0}}
					allowFullScreen={false}
					loading='lazy'
				></iframe>
			</section>
		</div>
	);
}
