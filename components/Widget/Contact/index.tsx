export interface IContactProps {
  address?: string;
  mail?: string;
  phone?: string;
}

export const ContactComponent: IComponent<IContactProps> = ({
  address,
  mail,
  phone,
}) => {
  return (
    <div className="contact dark:text-white text-widget">
      <ul>
        {" "}
        <li className="mb-3 text-sm md:text-base">
          <span className="dark:text-inherit text-black capitalize font-semibold mr-1">
            Address:
          </span>
          {address}
        </li>
        <li className="mb-3 text-sm md:text-base">
          <span className="dark:text-inherit text-black capitalize font-semibold mr-1">
            Mail:{" "}
          </span>
          {mail}
        </li>
        <li className="mb-3 text-sm md:text-base">
          <span className="dark:text-inherit text-black capitalize font-semibold mr-1">
            Phone:{" "}
          </span>
          {phone}
        </li>{" "}
      </ul>
    </div>
  );
};
