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
      <a className="carousel-item block h-[274px] rounded-md shadow-md bg-white dark:bg-default border-2 border-zinc-100 dark:border-white">
        <div className="item-img w-full h-full relative rounded-md">
          <div className="item-img-overlay"></div>
          <Image
            src={imageSrc}
            alt={imageSrc}
            className="rounded-lg"
            layout="fill"
          />
        </div>
        <div className="z-10 item-content flex flex-col justify-center sm:justify-start items-start ">
          <h1 className="">{heading}</h1>
          <p className="">{description}</p>
        </div>
      </a>
    </Link>
  );
};
