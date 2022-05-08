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
  const { imageSrc, heading, subheading, paragraphs, techs, scope } = props;
  return (
    <div className="content text-sm md:text-base">
      <div className="item-img  relative rounded-md">
        <Image
          src={imageSrc}
          alt="Details_01"
          width={950}
          height={500}
          className="rounded-lg"
          layout="responsive"
        />
      </div>
      <div className="content my-5 p-1">
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
