import SampleConfig from "./projects/_sample.json";
import ConcreteAI from "./projects/concreteai.json";
import CrystalConfig from "./projects/crystal.json";
import DMSConfig from "./projects/dms.json";
import EParkingConfig from "./projects/eparking.json";
import WalletConfig from "./projects/wallet.json";

export const Projects: {
  [key: string]: { route: string; data: typeof SampleConfig };
} = {
  concreteai: {
    route: "/details/concreteai",
    data: ConcreteAI,
  },
  dms: {
    route: "/details/dms",
    data: DMSConfig,
  },
  eparking: {
    route: "/details/eparking",
    data: EParkingConfig,
  },
  crystal: {
    route: "/details/crystal",
    data: CrystalConfig,
  },
  wallet: {
    route: "/details/wallet",
    data: WalletConfig,
  },
};
