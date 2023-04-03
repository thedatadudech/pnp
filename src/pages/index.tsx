import { type NextPage } from "next";
import Head from "next/head";
import Hero from "~/components/hero/hero";
import ResentProjects from "~/components/projects/resent_projects";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto space-y-2 md:mt-5">
        <Hero />
        <ResentProjects />
      </div>
    </>
  );
};

export default Home;
