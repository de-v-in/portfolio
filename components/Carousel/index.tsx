import Slider from "react-slick";

import { ICarouselItemComponent } from "./CarouselItems";

interface CarouselComponentProps {
  slides: any[];
}

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style }} onClick={onClick} />;
}
function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style }} onClick={onClick} />;
}

export const CarouselComponent: IComponent<CarouselComponentProps> = ({
  slides,
}) => {
  const paramURLOfThisProject = window.location.pathname.split("/").pop();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="w-full md:p-10 xl:p-24">
        {/* <TypedCarousel renderItems={}>{renderSlide}</TypedCarousel> */}
        <Slider {...settings}>
          {slides.map((slide, idx) => {
            if (slide.route.split("/").pop() !== paramURLOfThisProject)
              return (
                <ICarouselItemComponent
                  key={idx}
                  url={slide.route}
                  content={slide.data.content}
                />
              );
            return null;
          })}
        </Slider>
      </div>
    </>
  );
};
