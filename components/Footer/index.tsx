import { SocialMediaGroupComponent } from "@components/SocialMediaGroup";
import Logo from "@public/devin.png";
import Image from "next/image";
import Link from "next/link";

export const FooterComponent: IComponent = () => {
  return (
    <>
      <footer
        id="footer"
        className="p-2 lg:p-5 xl:grid xl:grid-cols-4 items-center  bg-default"
      >
        <div className="mb-12 xl:m-0 p-8 h-full  col-span-3 flex items-center relative">
          <div className="text-white xl:border-r-2 xl:border-white w-full">
            <h2 className="font-bold text-4xl md:text-5xl xl:text-3xl">FAQ</h2>
            <h3 className="text-[#BEBEBE] mt-5 text-lg md:text-2xl xl:text-xl">
              Who are we?
            </h3>
            <p className="mt-3 pb-4 text-lg">
              We are Vietnamese developers who bring global criteria into your
              products with the best price.
            </p>
            <h3 className="text-[#BEBEBE] mt-5 text-lg md:text-2xl xl:text-xl">
              What is our technical skills ?
            </h3>
            <p className="mt-3 pb-4 text-lg">
              We do full-stack development, establish Devops workflows, build
              core crypto functions.
            </p>
          </div>
        </div>
        <div className="flex items-center flex-col">
          <Link href="/">
            <a className="inline-flex items-center justify-center p-2">
              <Image src={Logo} alt="deVin Logo" height="53" width="200" />
            </a>
          </Link>
          <span className="p-1 text-[#BEBEBE] text-xxs lg:text-xs text-thin  text-center">
            @Copyright by DEVIN 2022
          </span>
          <div className="p-1 my-3 flex items-center   justify-center lg:h-fit  lg:my-1">
            <SocialMediaGroupComponent />
          </div>
        </div>
      </footer>
    </>
  );
};
