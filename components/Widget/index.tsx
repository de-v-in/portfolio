import { ContactComponent } from "./Contact";
import { ProjectComponent } from "./Project";

interface IWidgetComponentProps {
  title: string;
  list: TList;
}
export const WidgetComponent: IComponent<IWidgetComponentProps> = ({
  title,
  list,
}) => {
  const { project, contact } = list;
  return (
    <div className="widget p-9 border-2 border-[#f7f7f7] mb-8 rounded-lg">
      <h5 className="widget-title text-2xl font-bold text-center mb-6 capitalize">
        {title}
      </h5>
      <>
        {list.project ? (
          <ProjectComponent {...project} />
        ) : (
          <ContactComponent {...contact} />
        )}
      </>
    </div>
  );
};
