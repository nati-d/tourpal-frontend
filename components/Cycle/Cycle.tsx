import React from "react";
import "./Cycle.scss";
import Image from "next/image";

const Cycle: React.FC = () => {
	return (
		<div className='hero'>
			<div className='parallax-layer layer-6'></div>
			<div className='parallax-layer layer-5'></div>
			<div className='parallax-layer layer-4'></div>
			<div className='parallax-layer bike-1'></div>
			<div className='parallax-layer bike-2'></div>
			<div className='parallax-layer layer-3'></div>
			<div className='parallax-layer layer-2'></div>
			<div className='parallax-layer layer-1'></div>
			<div className='logo'>
				<Image
					src='/images/logo.png'
					alt='Logo'
                    width={100}
                    height={100}
				/>
			</div>
		</div>
	);
};

export default Cycle;
