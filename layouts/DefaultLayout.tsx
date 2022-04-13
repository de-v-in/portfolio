import { FooterComponent } from "@components/Footer";
import { TopBarComponent } from "@components/TopBar";

export const DefaultLayout: IComponent = ({ children }) => {
  return (
    <div className="default-layout">
      <TopBarComponent />
      <div>{children}</div>
      <FooterComponent />
    </div>
  );
};
