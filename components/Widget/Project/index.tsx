import React from "react";

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
    <div className="project dark:text-white text-widget">
      <ul>
        <li className="mb-3 text-sm md:text-base">
          <span className="dark:text-inherit text-black capitalize font-semibold mr-1">
            Date:{" "}
          </span>
          {date}
        </li>
        <li className="mb-3 text-sm md:text-base">
          <span className="dark:text-inherit text-black capitalize font-semibold mr-1">
            Location:{" "}
          </span>
          {location}
        </li>
        <li className="mb-3 text-sm md:text-base">
          <span className="dark:text-inherit text-black capitalize font-semibold mr-1">
            Client:{" "}
          </span>
          {client}
        </li>
        <li className="mb-3 text-sm md:text-base">
          <span className="dark:text-inherit text-black capitalize font-semibold mr-1">
            Category:{" "}
          </span>
          {category}
        </li>
        <li className="mb-3 text-sm md:text-base">
          <span className="dark:text-inherit text-black capitalize font-semibold mr-1">
            Link:{" "}
          </span>
          <a href={link} className="text-[#0054ff] hover:underline">
            {link}
          </a>
        </li>
      </ul>
    </div>
  );
};
