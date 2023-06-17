import { atom } from "recoil";

/**
 * Global dark mode state of app
 */
const DarkmodeAtom = atom<TDarkModeStatus>({
  key: "DARK_MODE_STATE",
  default: "auto",
});
const ToggleTopBarAtom = atom<TTopBarStatus>({
  key: "TOP_BAR_STATUS",
  default: "hidden",
});
const ProjectInfoListAtom = atom<TProjectInfo[]>({
  key: "PROJECT_INFO",
  default: [
    {
      name: "concreteai.io",
      description: `
        Create an app to monitor and manage the status of the concrete mixing`,
      imageSrc: "",
    },
    {
      name: "Doorlock Management System",
      description:
        "Provide Backend core service APIs for the IoT system of Ho Chi Minh City University of Education",
      imageSrc: "",
    },
    {
      name: "e-Parking",
      description: `
      Create an ecosystem for smart parking solutions for cars:
      - Kiosk app that controls parking operations.
      - Web app that manages user, parking data.
      - Core service APIs using AWS Lambda.
      - Marketing website.`,
      imageSrc: "",
    },
    {
      name: "CRYSTAL WORLD WEB3",
      description:
        "Create NFT token collection for crypto Games in order to trade between players.",
      imageSrc: "",
    },
    {
      name: "CRYPTO WALLET PAYMENT",
      description:
        "Core payment for DEX wallet using Threshold Signature Scheme ( 2P-ECDSA )",
      imageSrc: "",
    },
  ],
});

export { DarkmodeAtom, ProjectInfoListAtom, ToggleTopBarAtom };
