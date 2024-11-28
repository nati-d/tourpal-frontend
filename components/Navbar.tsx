"use client";

import * as React from "react";
import Link from "next/link";
import {Menu, X} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import MegaMenu from "./MegaMenu";
import Image from "next/image";
import {SignedIn, UserButton, SignedOut} from "@clerk/nextjs";

const navItems = [
	{name: "Home", href: "/"},
	{name: "About", href: "/about"},
	{name: "Contact", href: "/contact"},
];

const Navbar = () => {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<nav className='bg-white shadow'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between h-16'>
					<div className='flex'>
						<div className='flex-shrink-0 flex items-center'>
							<Image
								src='/images/logo.png'
								alt='Logo'
								width={120}
								height={40}
							/>
						</div>
						<div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
							<MegaMenu />
							{navItems.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									className='inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
								>
									{item.name}
								</Link>
							))}
						</div>
					</div>
					<div className='hidden sm:ml-6 sm:flex sm:items-center'>
						<Button
							variant='ghost'
							className='mr-2'
						>
							<SignedIn>
								<UserButton />
							</SignedIn>
							<SignedOut>Sign In</SignedOut>
						</Button>
						<Button>Book Now</Button>
					</div>
					<div className='-mr-2 flex items-center sm:hidden'>
						<Sheet
							open={isOpen}
							onOpenChange={setIsOpen}
						>
							<SheetTrigger asChild>
								<Button
									variant='ghost'
									className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
								>
									<span className='sr-only'>Open main menu</span>
									{isOpen ? (
										<X
											className='block h-6 w-6'
											aria-hidden='true'
										/>
									) : (
										<Menu
											className='block h-6 w-6'
											aria-hidden='true'
										/>
									)}
								</Button>
							</SheetTrigger>
							<SheetContent
								side='right'
								className='w-[300px] sm:w-[400px]'
							>
								<div className='pt-5 pb-6 px-5'>
									<div className='flex items-center justify-between'>
										<Image
											src='/images/logo.png'
											alt='Logo'
											width={40}
											height={40}
										/>
										<div className='-mr-2'>
											<Button
												variant='ghost'
												onClick={() => setIsOpen(false)}
											>
												<span className='sr-only'>Close menu</span>
												<X
													className='h-6 w-6'
													aria-hidden='true'
												/>
											</Button>
										</div>
									</div>
									<div className='mt-6'>
										<nav className='grid gap-y-8'>
											{navItems.map((item) => (
												<Link
													key={item.name}
													href={item.href}
													className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'
												>
													<span className='ml-3 text-base font-medium text-gray-900'>{item.name}</span>
												</Link>
											))}
										</nav>
									</div>
								</div>
								<div className='py-6 px-5 space-y-6'>
									<div className='grid grid-cols-2 gap-y-4 gap-x-8'>
										<Button
											variant='outline'
											className='w-full'
											onClick={() => setIsOpen(false)}
										>
											Sign In
										</Button>
										<Button
											className='w-full'
											onClick={() => setIsOpen(false)}
										>
											Book Now
										</Button>
									</div>
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
