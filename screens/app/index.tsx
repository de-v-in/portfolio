import { ProjectInfoListAtom } from "@atoms/app";
import { Banner } from "@components/Banner";
import { ProjectCard } from "@components/ProjectCard/index";
import { cx } from "@utils/tools";
import Head from "next/head";
import { useRecoilState } from "recoil";

import styles from "./styles.module.scss";

export const AppScreen: IComponent = ({}) => {
  const [projectInfoList] = useRecoilState(ProjectInfoListAtom);

  return (
    <div className={cx("dark:text-white")}>
      <Head>
        <title>DEVIN PORTFOLIO</title>
        <meta name="description" content="HIGH STANDARD, HIGH RESPONSIBILITY" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner />
      <main className={styles.main}>
        <h1 className="font-semibold lg:text-4xl">
          {"Our works".toUpperCase()}
        </h1>

        <div
          className={cx(
            styles.grid,
            "flex flex-row justify-center items-start mt-12"
          )}
        >
          <div className="">
            {projectInfoList
              .slice(0, projectInfoList.length / 2)
              .map((projectInfo, idx) => (
                <ProjectCard key={idx} projectInfo={projectInfo}></ProjectCard>
              ))}
          </div>
          <div className="">
            {projectInfoList
              .slice(projectInfoList.length / 2)
              .map((projectInfo, idx) => (
                <ProjectCard key={idx} projectInfo={projectInfo}></ProjectCard>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
};
