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
      <a className="carousel-item block h-[33vh] m-2 p-5 rounded-md shadow-md bg-white dark:bg-default border-2 border-zinc-100 dark:border-white lg:p-4 ">
        <div className="item-img w-full h-1/2 relative rounded-md">
          <Image
            src={imageSrc}
            alt="Details_01"
            layout="fill"
            className="rounded-md"
          />
        </div>
        <div className="item-content flex flex-col justify-center sm:justify-start items-start ">
          <h1 className="p-1 font-medium">{heading}</h1>
          <p className="p-1 text-widget">{description}</p>
        </div>
      </a>
    </Link>
  );
};
