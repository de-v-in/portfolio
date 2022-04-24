interface IProjectProps {
  date: string;
  location: string;
  client: string;
  category: string;
  projectLink: string;
}
export const ProjectComponent: IComponent<IProjectProps> = (props) => {
  const listProject: any[] = [];
  Object.entries(props).forEach(([key, value]) => {
    listProject.push(
      <li key={key} className="mb-3">
        <span className="capitalize font-semibold mr-1">{`${key}:   `}</span>
        {value}
      </li>
    );
  });

  return (
    <div className="project">
      <ul>{listProject}</ul>
    </div>
  );
};
