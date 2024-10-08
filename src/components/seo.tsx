import keyword_extractor from "keyword-extractor";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { type CardItem } from "~/app_function/utils/interfaces";
import { env } from "../env.mjs";

interface SEOProps {
  title: string;
  imgUrl?: string;
  ogType?: string;
  itemView?: CardItem;
}

function SEO({ imgUrl: img, title, itemView, ogType = "website" }: SEOProps) {
  const router = useRouter();
  const pageUrl = `${env.NEXT_PUBLIC_BASE_URL}${router.asPath}`;
  const keywords = keyword_extractor
    .extract((itemView ? itemView.fileName : "") + " ", {
      language: "english",
      remove_digits: true,
      return_changed_case: true,
      remove_duplicates: true,
    })
    .filter((x) => !/[^\w\s]/.test(x));
  return (
    <NextSeo
      title={title}
      canonical={pageUrl}
      additionalLinkTags={[
        {
          rel: "icon",
          href: `${env.NEXT_PUBLIC_BASE_URL}/favicon.ico`,
        },
      ]}
      openGraph={{
        url: pageUrl,
        title,
        images: img
          ? [
              {
                url: img,
              },
            ]
          : undefined,
        site_name: env.NEXT_PUBLIC_PERSON_NAME,
        type: ogType,
        article: itemView && {
          publishedTime: new Date(itemView.date).toISOString(),
          authors: [env.NEXT_PUBLIC_BASE_URL],
          tags: keywords,
        },
      }}
      facebook={{ appId: env.NEXT_PUBLIC_FACEBOOK_APPID }}
      twitter={{
        handle: env.NEXT_PUBLIC_TWITTER_HANDLE,
        site: env.NEXT_PUBLIC_TWITTER_HANDLE,
        cardType: "summary_large_image",
      }}
    />
  );
}

export default SEO;
