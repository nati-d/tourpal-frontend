import React from "react";
import Hero from "@/components/Hero";
import CategoriesSection from "@/components/CategoriesSection";
import DestinationSection from "@/components/DestinationSection";
import VideoSection from "@/components/VideoSection";
import HotelsSection from "@/components/HotelsSection";

const HomePage = () => {
	return (
		<section>
			<Hero />
			<CategoriesSection />
			<DestinationSection />
			<VideoSection />
			{/* <DestinationSection /> */}
			<HotelsSection />
		</section>
	);
};

export default HomePage;
