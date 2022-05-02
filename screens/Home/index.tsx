import { Banner } from "@components/Banner";
import { Projects } from "@configs/detail";
import { cx } from "@utils/tools";
import Head from "next/head";

import { ProjectCard } from "./ProjectCard";
import styles from "./styles.module.scss";

export const AppScreen: IComponent = ({}) => {
  const projectArr = Object.values(Projects);

  return (
    <div className={cx("dark:text-white")}>
      <Head>
        <title>DEVIN PORTFOLIO</title>
        <meta name="description" content="HIGH STANDARD, HIGH RESPONSIBILITY" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner />
      <div id="projects" className={styles.main}>
        <h1 className="font-semibold lg:text-4xl">
          {"Our works".toUpperCase()}
        </h1>

        <div
          className={cx(
            styles.grid,
            "flex flex-row justify-center items-start mt-12"
          )}
        >
          <div>
            {projectArr
              .slice(0, projectArr.length / 2)
              .map((projectInfo, idx) => (
                <ProjectCard
                  url={projectInfo.route}
                  key={idx}
                  projectInfo={projectInfo.data}
                ></ProjectCard>
              ))}
          </div>
          <div>
            {projectArr.slice(projectArr.length / 2).map((projectInfo, idx) => (
              <ProjectCard
                url={projectInfo.route}
                key={idx}
                projectInfo={projectInfo.data}
              ></ProjectCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
