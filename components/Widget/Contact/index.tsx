interface IContactProps {
  address: string;
  mail: string;
  phone: string;
}
export const ContactComponent: IComponent<IContactProps> = (props) => {
  const listContact: any[] = [];
  Object.entries(props).forEach(([key, value]) => {
    listContact.push(
      <li key={key} className="mb-3">
        <span className="capitalize font-semibold mr-1">{`${key}:   `}</span>
        {value}
      </li>
    );
  });
  return (
    <div className="contact">
      <ul>{listContact}</ul>
    </div>
  );
};
