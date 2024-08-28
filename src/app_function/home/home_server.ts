import { type MeProps } from "~/components/me_section/me";
import {
  addBlur,
  getApps,
  getBlogs,
  getCompany,
  getDBConfigs,
  getData,
  getProjects,
  getTesti,
  getTechs,
  getBlurData,
} from "../utils/utils-server";
import { type MeSectionProps } from "~/components/me_section/me_section";
import { type TestimonialsProps } from "~/components/work_for_t/testimonials";
import { type ProjectsProps } from "~/components/projects/recent_projects";
import { type RecentBlogsProps } from "~/components/blogs/recent_blogs";
import {
  type Company,
  type App,
  type Blog,
  type Project,
  type Techs,
  type WorkForProps,
} from "../utils/interfaces";
import { type AppsProps } from "~/components/apps/recent_apps";
import { type TechsProps } from "~/components/techs/recent_techs";
import { getDataUrl } from "../utils/utils";
import { env } from "../../env.mjs";
import { type Testimonial } from "~/components/work_for_t/testi_card";

export interface Configs {
  appName: string;
  twitterHandle: string;
  repoPath: string;
  resumePath: string;
  baseUrl: string;
  baseImgPath: string;
}

export interface HomeProps {
  meSection: MeSectionProps;
  workFor: WorkForProps;
  testis: TestimonialsProps;
  recentApps: AppsProps;
  recentTechs: TechsProps;
  recentProjects: ProjectsProps;
  recentBlogs: RecentBlogsProps;
}

export async function HomeServer() {
  const dbConfig = await getDBConfigs();

  const dataBio = (await getData("home/bio.json")).toString();
  const me = JSON.parse(dataBio) as MeProps;

  // const dataExpertise = (await getData("home/expertise.json")).toString();
  // const techs = JSON.parse(dataExpertise) as RXTProps;

  const testis = await getTesti();

  const allProsRaw = await getProjects();

  const allTechsRaw = await getTechs();

  const allAppsRaw = await getApps();

  const allBlogsRaw = await getBlogs();

  const allCompanyRaw = await getCompany();

  const RPros: Project[] = await addBlur(allProsRaw.projects);
  const RApps: App[] = await addBlur(allAppsRaw.apps, 6);
  const RBlogs: Blog[] = await addBlur(allBlogsRaw.blogs);
  const RTechs: Techs[] = await addBlur(allTechsRaw.techs);
  const RCompany: Company[] = await addBlur(allCompanyRaw.company);
  const RTestis: Testimonial[] = await addBlur(
    testis.testis,
    testis.testis.length,
  );

  const testimonialAddUrl =
    getDataUrl(env.NEXT_PUBLIC_REPO_PATH) + "home/testimonials.json";

  const blurUrlItem = await getBlurData(me.imgUrl);

  const homeProps: HomeProps = {
    meSection: {
      me: {
        blurDataURL: blurUrlItem ? blurUrlItem.base64 : null,
        ...me,
      },
    },
    workFor: { data: RCompany, total: dbConfig.companyTotal },
    testis: { testis: RTestis, addUrl: testimonialAddUrl },
    recentApps: {
      data: RApps,
      total: dbConfig.appTotal,
    },
    recentTechs: {
      data: RTechs,
      total: dbConfig.techsTotal,
    },
    recentProjects: {
      data: RPros,
      total: dbConfig.projectTotal,
    },
    recentBlogs: {
      data: RBlogs,
      total: dbConfig.blogTotal,
    },
  };

  return {
    props: homeProps,
  };
}
