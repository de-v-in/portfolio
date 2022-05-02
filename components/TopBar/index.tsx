import { ToggleTopBarAtom } from "@atoms/app";
import { SocialMediaGroupComponent } from "@components/SocialMediaGroup";
import Logo from "@public/devin.png";
import Image from "next/image";
import Link from "next/link";
import { useRecoilState } from "recoil";

export const TopBarComponent: IComponent = () => {
  const [toggleMode, setToggleMode] = useRecoilState(ToggleTopBarAtom);
  const handleToggleTopBar = () => {
    setToggleMode((status) => (status === "hidden" ? "show" : "hidden"));
  };
  return (
    <>
      <nav className="relative lg:grid lg:grid-cols-2  items-center  bg-default py-2.5 lg:px-12 ">
        <Link href="/">
          <a className="inline-flex items-center p-2">
            <Image src={Logo} alt="deVin Logo" height="40" width="150" />
          </a>
        </Link>
        <button
          className="absolute  top-[22px] right-2 inline-flex p-1  rounded lg:hidden  mr-0 text-white outline-none hover:text-amber-300"
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
          className={`${toggleMode === "hidden" ? "hidden" : "flex"} lg:flex`}
        >
          <div className="flex flex-row justify-end w-full bg-default">
            <div className="flex flex-col justify-center items-center lg:flex-row pr-12">
              <Link href="#projects" passHref>
                <a className="px-6 py-2 font-medium  text-center  text-white text-sm md:text-base lg:text-lg hover:underline hover:underline-offset-1">
                  Projects
                </a>
              </Link>
              <Link href="#footer">
                <a className="px-6 py-2 font-medium  text-center  text-white text-sm md:text-base lg:text-lg hover:underline hover:underline-offset-1">
                  FAQ
                </a>
              </Link>
            </div>
            <div className="h-screen p-1 my-4 flex items-start   justify-center lg:h-fit  lg:my-0">
              <SocialMediaGroupComponent />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
