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
      <a className="carousel-item block m-5 p-6 w-full h-[36vh] rounded-md text-base shadow-md bg-white dark:bg-default border-2 border-zinc-100 dark:border-white md:p-4 2xl:p-5">
        <div className="item-img w-full h-1/2 relative rounded-md">
          <Image
            src={imageSrc}
            alt="Details_01"
            layout="fill"
            className="rounded-md"
          />
        </div>
        <div className="item-content flex flex-col justify-center sm:justify-start items-start overflow-y-hidden">
          <h1 className="p-1 text-xl my-5 sm:my-1 md:text-sm xl:text-xl font-medium">
            {heading}
          </h1>
          <p className="hidden p-1 sm:block sm:text-xs md:text-[12px] xl:text-xs xl:py-0 2xl:text-[14px] text-widget  overflow-y-hidden">
            {description}
          </p>
        </div>
      </a>
    </Link>
  );
};
