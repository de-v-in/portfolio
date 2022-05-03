import { ToggleTopBarAtom } from "@atoms/app";
import { SocialMediaGroupComponent } from "@components/SocialMediaGroup";
import Logo from "@public/devin.png";
import { cx } from "@utils/tools";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export const TopBarComponent: IComponent = () => {
  const router = useRouter();
  const [toggleMode, setToggleMode] = useRecoilState(ToggleTopBarAtom);
  const handleToggleTopBar = () => {
    setToggleMode((status) => (status === "hidden" ? "show" : "hidden"));
  };

  useEffect(() => {
    // Auto hide when route changed
    setToggleMode("hidden");
  }, [router.pathname, setToggleMode]);

  return (
    <>
      <nav
        className={cx(
          "z-10 w-full lg:grid lg:grid-cols-2 items-center py-2.5 lg:px-12 px-6",
          {
            absolute: router.pathname === "/",
            "bg-default": router.pathname !== "/" || toggleMode === "show",
            "h-screen lg:h-auto": toggleMode === "show",
          }
        )}
      >
        <Link href="/">
          <a className="inline-flex items-center p-2">
            <Image src={Logo} alt="deVin Logo" height="40" width="150" />
          </a>
        </Link>
        <button
          className="absolute top-[22px] right-2 inline-flex p-1 px-6 rounded lg:hidden mr-0 text-white outline-none hover:text-amber-300"
          onClick={handleToggleTopBar}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`${
            toggleMode === "hidden" ? "hidden" : "flex"
          } lg:flex h-full`}
        >
          <div className="flex justify-center lg:justify-end relative w-full h-full">
            <div className="h-full lg:h-auto flex flex-col justify-center items-center lg:flex-row lg:pr-12">
              <Link href="/#projects" passHref>
                <a className="px-6 py-2 font-medium text-center text-white text-2xl lg:text-lg hover:underline hover:underline-offset-1">
                  Projects
                </a>
              </Link>
              <Link href="#footer">
                <a className="px-6 py-2 font-medium text-center text-white text-2xl lg:text-lg hover:underline hover:underline-offset-1">
                  FAQ
                </a>
              </Link>
            </div>
            <div className="absolute lg:relative right-0 p-1 my-4 flex items-start justify-center lg:h-fit lg:my-0">
              <SocialMediaGroupComponent isMenu />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
