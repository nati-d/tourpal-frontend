"use client"
import {Sparkles} from "lucide-react";
import Image from "next/image";
import React from "react";
import PlanDialog from "./PlanDialog";

const Hero = () => {
	const [open, setOpen] = React.useState(false);
	const handleOpenModal = () => {
		setOpen(true);
	}

	const handleCloseModal = () => {
		setOpen(false);
	}

	

	return (
		<div className='container h-[60dvh] w-full relative rounded-lg overflow-hidden flex items-center px-20'>
			<Image
				src='https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600'
				alt='hero'
				fill
				objectFit='cover'
			/>
			<div className='bg-black  w-full opacity-30  h-full absolute left-0 top-0'></div>

			<div className='bg-white w-[400px] z-10 absolute p-8 rounded-md space-y-4'>
				<h1 className='text-[36px] leading-tight font-bold'>Let AI plan your perfect adventure</h1>
				<p className='text-[16px]'>Receive a customized itinerary filled with exciting ideas—delivered instantly.</p>
				<button className='flex gap-2 items-center px-6 py-3 bg-secondary rounded-full' onClick={handleOpenModal}>
					<Sparkles size={12} /> Explore Now
				</button>
			</div>
			<PlanDialog open = {open} handleCloseModal = {handleCloseModal}/>
		</div>

	);
};

export default Hero;
