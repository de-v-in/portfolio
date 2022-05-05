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
      <a className="block item p-8 h-[640px] xl:h-[560px] 2xl:h-[640px] w-full bg-white rounded-md m-3 text-base shadow-md dark:bg-default dark:border-2 border border-zinc-100 dark:border-white">
        <div className="item-img w-full h-1/2 relative rounded-md">
          <Image
            src={imageSrc}
            alt="Details_01"
            layout="fill"
            className="rounded-md"
          />
        </div>
        <div className="item-content flex flex-col justify-start items-start">
          <h1 className="p-1 text-2xl my-5 font-medium xl:text-xl 2xl:text-2xl">
            {heading}
          </h1>
          <p className="p-1 text-widget text-base xl:text-sm 2xl:text-base">
            {description}
          </p>
        </div>
      </a>
    </Link>
  );
};
