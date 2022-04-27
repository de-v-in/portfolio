import { memo } from "react";

import { ContactComponent, IContactProps } from "./Contact";
import { IProjectProps, ProjectComponent } from "./Project";

interface IWidgetComponentProps {
  title: string;
  project?: IProjectProps;
  contact?: IContactProps;
}
export const WidgetComponent: IComponent<IWidgetComponentProps> = ({
  title,
  project,
  contact,
}) => {
  return (
    <div className="widget p-9 border-2 border-[#f7f7f7] mb-8 rounded-lg">
      <h5 className="widget-title text-2xl xl:text-xl 2xl:text-2xl font-bold text-left mb-6 capitalize">
        {title}
      </h5>
      {!!project && <ProjectComponent {...project} />}{" "}
      {!!contact && <ContactComponent {...contact} />}
    </div>
  );
};
