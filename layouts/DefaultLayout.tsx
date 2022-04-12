import { TopBarComponent } from "@components/TopBar";

export const DefaultLayout: IComponent = ({ children }) => {
  return (
    <div className="default-layout">
      <TopBarComponent />
      <div>{children}</div>
    </div>
  );
};
