import AllDataShowPage from "..";
import { type GetStaticProps } from "next";
import {
  projectBlogGetStaticProps,
  projectBlogGetStaticPaths,
} from "~/app_function/project_blog/project_blog_server";

export async function getStaticPaths() {
  return projectBlogGetStaticPaths("blogs");
}

export const getStaticProps: GetStaticProps = async (context) => {
  return projectBlogGetStaticProps({ context, type: "blogs" });
};

export default AllDataShowPage;
