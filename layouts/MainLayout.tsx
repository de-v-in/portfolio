import { DarkmodeAtom } from "@atoms/app";
import { cx } from "@utils/tools";
import { useRecoilValue } from "recoil";

export const MainLayout: IComponent = ({ children }) => {
  // Manual switch darkmode with state
  const darkmode = useRecoilValue(DarkmodeAtom);

  return (
    <div
      className={cx(
        {
          dark: darkmode === "dark",
        },
        "w-full h-full overflow-x-hidden"
      )}
    >
      {/* Smooth out darkmode transition with transition-all */}
      <div
        className="w-full bg-white dark:bg-default transition-all"
        style={{ minHeight: "100%" }}
      >
        {children}
      </div>
    </div>
  );
};
