import Carousel from "react-elastic-carousel";

import { ICarouselItemComponent } from "./CarouselItems";

interface CarouselComponentProps {
  options?: string;
  slides: any[];
}

export const CarouselComponent: IComponent<CarouselComponentProps> = ({
  slides,
}) => {
  const paramURLOfThisProject = window.location.pathname.split("/").pop();
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <>
      <div className="App">
        <div className="carousel-wrapper w-full">
          <Carousel breakPoints={breakPoints}>
            {slides.map((slide, idx) => {
              if (slide.route.split("/").pop() !== paramURLOfThisProject)
                return (
                  <ICarouselItemComponent
                    key={idx}
                    url={slide.route}
                    content={slide.data.content}
                  ></ICarouselItemComponent>
                );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
};
