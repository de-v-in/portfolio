import DMSConfig from "./projects/dms.json";

export const Projects: {
  [key: string]: { route: string; data: typeof DMSConfig };
} = {
  dms: {
    route: "/details/dms",
    data: DMSConfig,
  },
};
