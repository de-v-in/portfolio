import Logo2 from "@public/logo2.0.png";
import Image from "next/image";

export const FooterComponent: IComponent = () => {
  return (
    <>
      <footer className="p-2 flex items-center  bg-zinc-50">
        <div className="">
          <Image src={Logo2} alt="deVin Logo" height="50" width="52" />
        </div>
        <div className="grow">
          <p className="pr-5 text-slate-600 text-right font-medium text-sm">
            © 2022 deVin Team
          </p>
        </div>
      </footer>
    </>
  );
};
