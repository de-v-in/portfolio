import { LanguageBackground } from "@components/Languages";
import Link from "next/link";

export const Banner: IComponent = () => {
  return (
    <div className="flex min-h-screen px-6 md:px-20 flex-col w-full bg-default text-white pt-52 pb-96 md:pb-64 relative justify-center items-center">
      <div className="z-10">
        <h1 className="md:text-6xl sm:text-3l text-3xl">
          Are you finding a team who can provide Reliable and Scalable software
          products?
        </h1>
        <p className="my-6 md:my-4 text-xl">
          Look no further! We are the catalyst your business needs to thrive at
          every stage of its journey!
        </p>
        <Link href="/youridea" passHref>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 rounded-full bg-yellow-300 text-black focus:outline-none text-xl  px-5 py-2.5 text-center mr-2 mb-8"
          >
            Let&lsquo;s talk about your <b>IDEA</b>
          </a>
        </Link>
      </div>
      <div className="w-full h-full absolute top-0 left-0">
        <LanguageBackground />
      </div>
      <Link href="#projects" passHref>
        <div
          className="absolute hidden lg:flex bottom-6 flex-col items-center animate-pulse cursor-pointer active:scale-90 duration-300"
          style={{ animationDuration: "4s" }}
        >
          <span className="text-sm mb-1 text-white">
            The journey begin here
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
            />
          </svg>
        </div>
      </Link>
    </div>
  );
};
