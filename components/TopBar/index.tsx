import { ToggleTopBarAtom } from "@atoms/app";
import Logo from "@public/logo.png";
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
      <nav className="relative lg:grid lg:grid-cols-2  items-center  bg-zinc-50 py-2.5 lg:px-2.5 ">
        <Link href="/">
          <a className="inline-flex items-center p-2">
            <Image src={Logo} alt="deVin Logo" height="40" width="42" />
            <span className="ml-2 text-black text-lg font-bold font-logo uppercase tracking-wide lg:text-xl">
              devin
            </span>
          </a>
        </Link>
        <button
          className="absolute  top-[22px] right-2 inline-flex p-1  hover:bg-gray-900 rounded lg:hidden  mr-0 hover:text-white outline-none"
          onClick={handleToggleTopBar}
        >
          <svg
            className="w-6 h-6"
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
          } bg-white lg:flex lg:bg-zinc-50`}
        >
          <div className="flex flex-col lg:grid lg:grid-cols-3 lg:items-center w-full">
            <Link href="/projects">
              <a className="p-2 font-medium text-sm text-left  text-zinc-700 border-b border-[#EAEFF0] lg:border-0 lg:ml-2 lg:text-lg hover:underline hover:underline-offset-1">
                Projects
              </a>
            </Link>
            <Link href="/details">
              <a className="p-2 font-medium text-sm text-left  text-zinc-700 border-b border-[#EAEFF0] lg:border-0 lg:ml-2 lg:text-lg hover:underline hover:underline-offset-1 ">
                Details
              </a>
            </Link>
            <div className=" h-screen p-1 my-4 flex items-start    justify-center lg:h-fit  lg:my-0">
              <div className="flex justify-around p-1 bg-white lg:rounded-2xl  md:w-1/6 lg:shadow-_xl  lg:w-3/4  ">
                <a
                  className=" p-1"
                  href="https://www.linkedin.com/in/tcdnguyen/"
                >
                  <svg
                    className="w-4 h-4  lg:w-5 lg:h-5 text-blue-500 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                  </svg>
                </a>
                <a
                  className="p-1"
                  href="https://www.facebook.com/tranhuyducseven/"
                >
                  <svg
                    className="w-4 h-4  lg:w-5 lg:h-5 text-blue-600 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a className="p-1" href="https://github.com/de-v-in">
                  <svg
                    viewBox="0 0 16 16"
                    className="w-4 h-4  lg:w-5 lg:h-5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
