import Image from "next/image";
import Link from "next/link";

interface IContentOfCarouselItem {
  imageSrc: string;
  heading: string;
  description: string;
}

interface ICarouselItemProps {
  url: string;
  content: IContentOfCarouselItem;
}

export const ICarouselItemComponent: IComponent<ICarouselItemProps> = ({
  url,
  content,
}) => {
  const { imageSrc, heading, description } = content;
  return (
    <Link href={url} passHref>
      <a className="carousel-item block m-5 p-6 xl:p-7 w-full h-[36vh]  rounded-md text-base shadow-md bg-white dark:bg-default border-2 border-zinc-100 dark:border-white">
        <div className="item-img w-full h-1/2 relative rounded-md">
          <Image
            src={imageSrc}
            alt="Details_01"
            layout="fill"
            className="rounded-md"
          />
        </div>
        <div className="item-content flex flex-col justify-center sm:justify-start items-start overflow-y-hidden">
          <h1 className="p-1 text-base md:text-2xl xl:text-xl  my-3 xl:my-2 font-medium">
            {heading}
          </h1>
          <p className="hidden sm:block p-1 text-sm sm:text-md text-widget  overflow-y-hidden">
            {description}
          </p>
        </div>
      </a>
    </Link>
  );
};
