import React from "react";
import CategoriesSection from "@/components/CategoriesSection";

import FeaturedSite from "@/components/FeauredSites";
import Testimonials from "@/components/Testimonials";
import Cycle from "@/components/Cycle/Cycle";
import Hero from "@/components/Hero/Hero";

const HomePage = () => {
	return (
		<section>
			<Hero />
			<CategoriesSection />
			<Cycle />
			<FeaturedSite />
			<Testimonials />
		</section>
	);
};

export default HomePage;
