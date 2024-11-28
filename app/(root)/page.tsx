import React from "react";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturedSite from "@/components/FeauredSites";
import Testimonials from "@/components/Testimonials";
import Cycle from "@/components/Cycle/Cycle";
import Hero from "@/components/Hero/Hero";
import VideoSection from "@/components/VideoSection";

const HomePage = () => {
	return (
		<section>
			<Hero />
			<CategoriesSection />
			<Cycle />
			<FeaturedSite />
			<VideoSection />
			<Testimonials />
		</section>
	);
};

export default HomePage;
