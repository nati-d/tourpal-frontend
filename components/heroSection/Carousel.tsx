'use client'
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import img1 from "@/public/images/adwa.jpg";
import img2 from "@/public/images/entoto.jpg";
import img3 from "@/public/images/friendship.jpg";
import img4 from "@/public/images/meskel.jpg";
import styles from "./Carousel.module.css";

const Carousel = () => {
  const carouselRef: any = useRef();
  const sliderRef: any = useRef();
  const thumbnailRef: any = useRef();
  const timeRef: any = useRef();
  const timeoutRef: any = useRef();
  const autoNextTimeoutRef: any = useRef();

  const timeRunning = 3000;
  const timeAutoNext = 7000;

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
    <div className={styles.carousel} ref={carouselRef}>
      <div className={styles.list} ref={sliderRef}>
        {[img1, img2, img3, img4].map((image, index) => (
          <div className={`${styles.item} relative`} key={index}>
            <Image src={image} alt={`Slide ${index + 1}`} layout="fill" objectFit="cover" />
            <div className="absolute bg-black h-full w-full bg-opacity-40" ></div>
            <div className={styles.content}>
              <div className={styles.author}>LUNDEV</div>
              <div className={styles.title}>DESIGN SLIDER</div>
              <div className={styles.topic}>ANIMAL</div>
              <div className={styles.des}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam
                nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid
                assumenda facere ab et quasi ducimus aut doloribus non numquam.
              </div>
              <div className={styles.buttons}>
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.thumbnail} ref={thumbnailRef}>
        {[img1, img2, img3, img4].map((image, index) => (
          <div className={styles.item} key={index}>
            <Image src={image} alt={`Thumbnail ${index + 1}`} layout="fill" objectFit="cover" />
            <div className={styles.content}>
              <div className={styles.title}>Name Slider</div>
              <div className={styles.description}>Description</div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.arrows}>
        <button onClick={() => showSlider("prev")}>{"<"}</button>
        <button onClick={() => showSlider("next")}>{">"}</button>
      </div>
      <div className={styles.time} ref={timeRef}></div>
    </div>
  );
};

export default Carousel;
