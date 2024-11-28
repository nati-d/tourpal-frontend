"use client";
import React, {useRef, useEffect} from "react";
import Image from "next/image";
import img1 from "@/public/images/adwa.jpg";
import img2 from "@/public/images/entoto.jpg";
import img3 from "@/public/images/friendship.jpg";
import img4 from "@/public/images/meskel.jpg";
import styles from "./Hero.module.css";

const Hero = () => {
	const carouselRef: any = useRef();
	const sliderRef: any = useRef();
	const thumbnailRef: any = useRef();
	const timeRef: any = useRef();
	const timeoutRef: any = useRef();
	const autoNextTimeoutRef: any = useRef();

	const timeRunning = 3000;
	const timeAutoNext = 7000;

	const slidesData = [
		{
			image: img1,
			author: "TOURISM",
			title: "ANIMAL KINGDOM",
			topic: "ANIMAL",
			description:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam.",
		},
		{
			image: img2,
			author: "TOURISM",
			title: "MOUNTAIN SCENE",
			topic: "TRAVEL",
			description: "Discover the beauty of nature. Climb mountains and enjoy breathtaking views. Experience tranquility like never before.",
		},
		{
			image: img3,
			author: "TOURISM",
			title: "FRIENDSHIP MOMENTS",
			topic: "SOCIAL",
			description: "Friendship is the golden thread that ties the hearts of all the world. Explore unforgettable memories with friends.",
		},
		{
			image: img4,
			author: "TOURISM",
			title: "CULTURAL FESTIVAL",
			topic: "CULTURE",
			description: "Celebrate the rich traditions and diverse cultures through vibrant festivals. Immerse yourself in a world of colors and music.",
		},
	];

	const showSlider = (type: any) => {
		const sliderItems: any = sliderRef.current.querySelectorAll(`.${styles.item}`);
		const thumbnailItems = thumbnailRef.current.querySelectorAll(`.${styles.item}`);

		if (type === "next") {
			sliderRef.current.appendChild(sliderItems[0]);
			thumbnailRef.current.appendChild(thumbnailItems[0]);
			carouselRef.current.classList.add(styles.next);
		} else {
			sliderRef.current.prepend(sliderItems[sliderItems.length - 1]);
			thumbnailRef.current.prepend(thumbnailItems[thumbnailItems.length - 1]);
			carouselRef.current.classList.add(styles.prev);
		}

		clearTimeout(timeoutRef.current);
		timeoutRef.current = setTimeout(() => {
			carouselRef.current.classList.remove(styles.next, styles.prev);
		}, timeRunning);

		clearTimeout(autoNextTimeoutRef.current);
		autoNextTimeoutRef.current = setTimeout(() => {
			showSlider("next");
		}, timeAutoNext);
	};

	useEffect(() => {
		autoNextTimeoutRef.current = setTimeout(() => {
			showSlider("next");
		}, timeAutoNext);

		return () => {
			clearTimeout(timeoutRef.current);
			clearTimeout(autoNextTimeoutRef.current);
		};
	}, []);

	return (
		<div
			className={`${styles.carousel} `}
			ref={carouselRef}
		>
			<div
				className={styles.list}
				ref={sliderRef}
			>
				{slidesData.map((slide, index) => (
					<div
						className={`${styles.item} relative`}
						key={index}
					>
						<Image
							src={slide.image}
							alt={`Slide ${index + 1}`}
							layout='fill'
							objectFit='cover'
						/>
						<div className='absolute bg-black h-full w-full bg-opacity-40'></div>
						<div className={styles.content}>
							<div className={styles.author}>{slide.author}</div>
							<div className={styles.title}>{slide.title}</div>
							<div className={styles.topic}>{slide.topic}</div>
							<div className={styles.des}>{slide.description}</div>
							<div className={styles.buttons}>
								<button>EXPLORE</button>
								<button>SUBSCRIBE</button>
							</div>
						</div>
					</div>
				))}
			</div>
			<div
				className={styles.thumbnail}
				ref={thumbnailRef}
			>
				{slidesData.map((slide, index) => (
					<div
						className={styles.item}
						key={index}
					>
						<Image
							src={slide.image}
							alt={`Thumbnail ${index + 1}`}
							layout='fill'
							objectFit='cover'
						/>
						<div className={styles.content}>
							<div className={styles.title}>{slide.title}</div>
						</div>
					</div>
				))}
			</div>
			<div className={styles.arrows}>
				<button onClick={() => showSlider("prev")}>{"<"}</button>
				<button onClick={() => showSlider("next")}>{">"}</button>
			</div>
			<div
				className={styles.time}
				ref={timeRef}
			></div>
		</div>
	);
};

export default Hero;
