import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.scss";

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
    <div className="item p-4 h-[640px] w-full bg-white rounded-md m-3 text-base shadow-md">
      <div className="item-img w-full h-1/2 relative rounded-md">
        <Link href={url} passHref>
          <Image
            src={imageSrc}
            alt="Details_01"
            width={200}
            height={100}
            layout="fill"
            className="rounded-md"
          />
        </Link>
      </div>
      <div className="item-content h-1/2 flex flex-col justify-start items-start">
        <h1 className="p-1 text-2xl my-5 font-medium">{heading}</h1>
        <p className="p-1 ">{description}</p>
      </div>
    </div>
  );
};
