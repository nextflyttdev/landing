import Head from "next/head";

interface SeoProps {
  title: string;
  description: string;
  route: string;
  image?: string;
  keywords?: string;
  ogType?: "website" | "product" | "article"; // add more types if needed
}
const BASELINK = "https://nextflytt.se";

const Seo: React.FC<SeoProps> = ({
  title,
  description,
  route,
  image = "/images/woman-laptop.jpg",
  keywords,
  ogType = "website", // default to website
}) => {
  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {route && <meta property="og:url" content={BASELINK + route} />}

      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Head>
  );
};

export default Seo;
