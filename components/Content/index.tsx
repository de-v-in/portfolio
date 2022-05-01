import details01 from "@public/details01.png";
import Image from "next/image";

interface IContentComponentProps {
  imageSrc: string;
  heading: string;
  subheading: string;
  paragraphs: string[];
  techs: string[];
  scope: string;
}
export const ContentComponent: IComponent<IContentComponentProps> = (props) => {
  const { heading, subheading, paragraphs, techs, scope } = props;
  return (
    <div className="content text-sm md:text-base">
      <div className="image mb-5">
        {/* content.src*/}
        <Image
          src={details01}
          alt="Details_01"
          height={430}
          className="rounded-lg"
          layout="responsive"
        />
      </div>
      <div className="content mb-5 p-1">
        <h1 className="text-3xl font-bold ">{heading}</h1>
        <h2 className="text-2xl font-medium ">{subheading}</h2>
      </div>
      <div>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-inherit mb-7 text-widget">
            {paragraph}
          </p>
        ))}
      </div>
      <div>
        <ul className="font-bold list-disc mb-7">
          Tech stack:
          {techs.map((tech, index) => (
            <li key={index} className="ml-5 font-normal">
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-inherit mb-7 text-widget">
          <span className="italic"> Scope of work: </span> {scope}
        </p>
      </div>
    </div>
  );
};
