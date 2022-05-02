import SampleConfig from "@configs/projects/_sample.json";
import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.scss";

export interface IProjectCardProps {
  url: string;
  projectInfo: typeof SampleConfig;
}

export const ProjectCard: IComponent<IProjectCardProps> = ({
  url,
  projectInfo,
}) => {
  return (
    <section className={`${styles.card}`}>
      <h2 className="font-semibold lg:text-xl text-base">
        {projectInfo.content.heading.toUpperCase()}
      </h2>
      <p className="!text-sm whitespace-pre-line">
        {projectInfo.content.description}
      </p>
      <section className="my-8">
        <Image
          src={projectInfo.content.imageSrc}
          alt="Details_01"
          width={400}
          height={300}
          className="rounded-lg"
          layout="responsive"
        />
      </section>
      <footer className="mt-4">
        <Link href={url} passHref>
          <button className="rounded-full border-2 active:border-yellow-300 border-slate-300 focus:outline-none text-xl px-4 py-2 text-center">
            <svg
              className="fill-slate-300 active:fill-yellow-300"
              width="32"
              height="20"
              viewBox="0 0 60 23"
              fill="none"
            >
              <path d="M58.6532 12.3474C59.239 11.7616 59.239 10.8119 58.6532 10.2261L49.1073 0.680141C48.5215 0.094355 47.5717 0.094355 46.9859 0.680141C46.4002 1.26593 46.4002 2.21568 46.9859 2.80146L55.4712 11.2867L46.9859 19.772C46.4002 20.3578 46.4002 21.3076 46.9859 21.8933C47.5717 22.4791 48.5215 22.4791 49.1073 21.8933L58.6532 12.3474ZM0.914612 12.7867L57.5925 12.7867V9.78674L0.914612 9.78674L0.914612 12.7867Z" />
            </svg>
          </button>
        </Link>
      </footer>
    </section>
  );
};
