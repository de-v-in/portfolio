import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.scss";

interface IContentOfCarouselItem {
  imageSrc: string;
  heading: string;
}

interface ICarouselItemProps {
  url: string;
  content: IContentOfCarouselItem;
}

export const ICarouselItemComponent: IComponent<ICarouselItemProps> = ({
  url,
  content,
}) => {
  const { imageSrc, heading } = content;
  return (
    <div className={styles.embla__slide}>
      <div className={styles.embla__slide__inner}>
        <div className={styles.embla__slide__img}>
          <Link href={url} passHref>
            <Image
              src={imageSrc}
              alt="Details_01"
              width={600}
              height={300}
              layout="fill"
              className="rounded-20"
            />
          </Link>
        </div>
        <div className={styles.embla__slide__title}>
          <p className="text-center font-normal sm:text-base md:text-lg lg:text-4xl ">
            {heading}
          </p>
        </div>
      </div>
    </div>
  );
};
