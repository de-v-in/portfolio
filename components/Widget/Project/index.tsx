export interface IProjectProps {
  date?: string;
  location?: string;
  client?: string;
  category?: string;
  link?: string;
}

export const ProjectComponent: IComponent<IProjectProps> = ({
  date,
  location,
  client,
  category,
  link,
}) => {
  return (
    <div className="project">
      <ul>
        <li className="mb-3 text-[#68666c] text-base xl:text-sm 2xl:text-base">
          <span className="text-black capitalize font-semibold mr-1">
            Date:{" "}
          </span>
          {date}
        </li>
        <li className="mb-3 text-[#68666c] text-base xl:text-sm 2xl:text-base">
          <span className="text-black capitalize font-semibold mr-1">
            Location:{" "}
          </span>
          {location}
        </li>
        <li className="mb-3 text-[#68666c] text-base xl:text-sm 2xl:text-base">
          <span className="text-black capitalize font-semibold mr-1">
            Client:{" "}
          </span>
          {client}
        </li>
        <li className="mb-3 text-[#68666c] text-base xl:text-sm 2xl:text-base">
          <span className="text-black capitalize font-semibold mr-1">
            Category:{" "}
          </span>
          {category}
        </li>
        <li className="mb-3 text-[#68666c] text-base xl:text-sm 2xl:text-base">
          <span className="text-black capitalize font-semibold mr-1 ">
            Link:{" "}
          </span>
          <a href="" className="text-[#0054ff]">
            {link}
          </a>
        </li>
      </ul>
    </div>
  );
};
