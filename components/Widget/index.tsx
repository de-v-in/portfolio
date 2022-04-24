interface IWidgetComponentProps {
  title: string;
  date?: string;
  location?: string;
  client?: string;
  category?: string;
  link?: string;
  address?: string;
  mail?: string;
  phone?: string;
}
export const WidgetComponent: IComponent<IWidgetComponentProps> = (props) => {
  const anotherPropsOfWidgetComponent: any[] = [];
  Object.entries(props).forEach(([key, value]) => {
    anotherPropsOfWidgetComponent.push(
      <li key={key} className="mb-3">
        <span className="capitalize font-semibold mr-1">{`${key}:   `}</span>
        {value}
      </li>
    );
  });
  return (
    <div className="widget p-9 border-2 border-[#f7f7f7] mb-8 rounded-lg">
      <h5 className="widget-title text-2xl font-bold text-center mb-6 capitalize">
        {props.title}
      </h5>
      <div className="project">
        <ul>{anotherPropsOfWidgetComponent}</ul>
      </div>
    </div>
  );
};
