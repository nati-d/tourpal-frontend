"use client";
import {CATEGORIES, NAV_LINKS} from "@/constants";
import Image from "next/image";
import React, {useState} from "react";

const Navbar = () => {
	const [activeLink, setActiveLink] = useState<string | null>(null);

	return (
		<div className='shadow-md mb-12'>
			<div className='w-[100%] max-w-[1200px] m-auto py-6 space-y-4'>
				<div className=' flex justify-between items-center '>
					{/* Logo */}
					<Image
						src='/images/logo.png'
						width={100}
						height={130}
						alt='logo'
					/>

					{/* Navigation */}
					<nav>
						<ul className='flex gap-10 text-[14px] leading-[18px] '>
							{NAV_LINKS.map((link, index) => (
								<li
									key={index}
									onClick={() => setActiveLink(link.name)}
									className={`cursor-pointer tracking-wide font-semibold ${
										activeLink === link.name ? "text-primary" : "text-black"
									} hover:text-primary transition-colors duration-200`}
								>
									{link.name}
								</li>
							))}
						</ul>
					</nav>
				</div>
				{/* <div>
					<nav>
						<ul className='flex gap-10 text-[14px] leading-[18px] '>
							{CATEGORIES.map((link, index) => (
								<li
									key={index}
									className={`cursor-pointer tracking-wide  hover:text-primary transition-colors duration-200`}
								>
									{link.name}
								</li>
							))}
						</ul>
					</nav>
				</div> */}
			</div>
		</div>
	);
};

export default Navbar;
