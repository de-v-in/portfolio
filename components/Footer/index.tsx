import { SocialMediaGroupComponent } from "@components/SocialMediaGroup";
import Logo from "@public/devin.png";
import Image from "next/image";
import Link from "next/link";

export const FooterComponent: IComponent = () => {
  return (
    <>
      <footer
        id="footer"
        className="p-2 lg:p-5 grid grid-cols-4 items-center  bg-default"
      >
        <div className="p-5 h-full border-r-2 border-white col-span-3 flex items-center">
          <div className="text-white">
            <h2 className="font-bold lg:text-xl text-base">FAQ</h2>
            <h3 className="text-[#BEBEBE] mt-3 text-xxs md:text-sm lg:text-base">
              Who are we?
            </h3>
            <p className="lg:text-base md:text-sm text-xxs">
              We Vietnamese developers who bring global criteria into your
              products with the best price.
            </p>
            <h3 className="text-[#BEBEBE] mt-3 text-xxs md:text-sm lg:text-base">
              What is our technical skills ?
            </h3>
            <p className="lg:text-base md:text-sm text-xxs">
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
