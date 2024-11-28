import {Facebook, Instagram, Linkedin, Twitter, Youtube} from "lucide-react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className='w-full border-t bg-white py-8'>
			<div className='container px-4 md:px-6 py-12'>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
					{/* Company Info */}
					<div className='space-y-4'>
						<h3 className='text-lg font-semibold'>TourPal</h3>
						<p className='text-sm text-muted-foreground'>Making your journey comfortable and memorable with the perfect stay.</p>
						<div className='flex space-x-4'>
							<Link
								href='#'
								className='text-muted-foreground hover:text-primary'
							>
								<Facebook className='h-5 w-5' />
								<span className='sr-only'>Facebook</span>
							</Link>
							<Link
								href='#'
								className='text-muted-foreground hover:text-primary'
							>
								<Twitter className='h-5 w-5' />
								<span className='sr-only'>Twitter</span>
							</Link>
							<Link
								href='#'
								className='text-muted-foreground hover:text-primary'
							>
								<Instagram className='h-5 w-5' />
								<span className='sr-only'>Instagram</span>
							</Link>
							<Link
								href='#'
								className='text-muted-foreground hover:text-primary'
							>
								<Youtube className='h-5 w-5' />
								<span className='sr-only'>YouTube</span>
							</Link>
							<Link
								href='#'
								className='text-muted-foreground hover:text-primary'
							>
								<Linkedin className='h-5 w-5' />
								<span className='sr-only'>LinkedIn</span>
							</Link>
						</div>
					</div>

					{/* Quick Links */}
					<div className='space-y-4'>
						<h3 className='text-lg font-semibold'>Quick Links</h3>
						<ul className='space-y-2 text-sm'>
							<li>
								<Link
									href='#'
									className='text-muted-foreground hover:text-primary'
								>
									Search Properties
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='text-muted-foreground hover:text-primary'
								>
									List Your Property
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='text-muted-foreground hover:text-primary'
								>
									Vacation Rentals
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='text-muted-foreground hover:text-primary'
								>
									Travel Guides
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='text-muted-foreground hover:text-primary'
								>
									Special Offers
								</Link>
							</li>
						</ul>
					</div>

					{/* Support */}
					<div className='space-y-4'>
						<h3 className='text-lg font-semibold'>Support</h3>
						<ul className='space-y-2 text-sm'>
							<li>
								<Link
									href='#'
									className='text-muted-foreground hover:text-primary'
								>
									Help Center
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='text-muted-foreground hover:text-primary'
								>
									Cancellation Options
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='text-muted-foreground hover:text-primary'
								>
									Safety Information
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='text-muted-foreground hover:text-primary'
								>
									Contact Us
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='text-muted-foreground hover:text-primary'
								>
									COVID-19 Response
								</Link>
							</li>
						</ul>
					</div>

					{/* Newsletter */}
					<div className='space-y-4'>
						<h3 className='text-lg font-semibold'>Newsletter</h3>
						<p className='text-sm text-muted-foreground'>Subscribe to our newsletter for travel inspiration and special offers.</p>
						<form className='space-y-2'>
							<Input
								className='max-w-full'
								placeholder='Enter your email'
								type='email'
								required
							/>
							<Button
								className='w-full'
								type='submit'
							>
								Subscribe
							</Button>
						</form>
					</div>
				</div>

				{/* Bottom Section */}
				<div className='mt-12 pt-8 border-t'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left'>
						<div className='text-sm text-muted-foreground'>© {new Date().getFullYear()} TravelStay. All rights reserved.</div>
						<div className='flex flex-wrap justify-center md:justify-end gap-4 text-sm text-muted-foreground'>
							<Link
								href='#'
								className='hover:text-primary'
							>
								Privacy Policy
							</Link>
							<Link
								href='#'
								className='hover:text-primary'
							>
								Terms of Service
							</Link>
							<Link
								href='#'
								className='hover:text-primary'
							>
								Cookie Settings
							</Link>
							<Link
								href='#'
								className='hover:text-primary'
							>
								Sitemap
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
