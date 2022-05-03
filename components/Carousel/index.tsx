import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useRef, useState } from "react";

import { DotButton, NextButton, PrevButton } from "./CarouselButtons";
import { ICarouselItemComponent } from "./CarouselItems";
import styles from "./styles.module.scss";

interface EmblaCarouselComponentProps {
  options?: EmblaOptionsType;
  slides: any[];
}

export const EmblaCarouselComponent: IComponent<
  EmblaCarouselComponentProps
> = ({ options = { loop: false, skipSnaps: false }, slides }) => {
  const paramURLOfThisProject = window.location.pathname.split("/").pop();
  const [viewportRef, embla] = useEmblaCarousel(options);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([0]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (index: number) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <>
      <div className={styles.embla}>
        <div className={styles.embla__viewport} ref={viewportRef}>
          <div className={styles.embla__container}>
            {slides
              .filter(
                (slide) =>
                  slide.route.split("/").pop() !== paramURLOfThisProject
              )
              .map((slide, idx) => (
                <ICarouselItemComponent
                  key={idx}
                  url={slide.route}
                  content={slide.data.content}
                ></ICarouselItemComponent>
              ))}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
      <div className={styles.embla__dots}>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
      <div className={styles.alt_list}>
        <ul className="font-bold list-disc mb-7 pl-5">
          {slides
            .filter(
              (slide) => slide.route.split("/").pop() !== paramURLOfThisProject
            )
            .map((slide, idx) => (
              <li key={idx} className="ml-5 font-normal">
                <Link href={slide.route}>
                  <a className="text-[#3f3f3f] hover:underline text-xl font-semibold dark:text-white">
                    {slide.data.content.heading}
                  </a>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};
