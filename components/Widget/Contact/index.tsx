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
    <div className="project">
      <ul>
        {" "}
        <li className="mb-3 text-[#68666c] text-base xl:text-sm 2xl:text-base">
          <span className="text-black capitalize font-semibold mr-1">
            Address:
          </span>
          {address}
        </li>
        <li className="mb-3 text-[#68666c] text-base xl:text-sm 2xl:text-base">
          <span className="text-black capitalize font-semibold mr-1">
            Mail:{" "}
          </span>
          {mail}
        </li>
        <li className="mb-3 text-[#68666c] text-base xl:text-sm 2xl:text-base">
          <span className="text-black capitalize font-semibold mr-1">
            Phone:{" "}
          </span>
          {phone}
        </li>{" "}
      </ul>
    </div>
  );
};
