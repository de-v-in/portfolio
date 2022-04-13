import Logo from "@public/logo.png";
import Image from "next/image";

export const FooterComponent: IComponent = () => {
  return (
    <>
      <footer className="p-3 flex items-center  bg-zinc-50">
        <div className="">
          <Image src={Logo} alt="deVin Logo" height="40" width="42" />
        </div>
        <div className="grow">
          <p className="text-center font-normal">
            © 2022 deVin Team. All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
};
