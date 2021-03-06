import NextHead from "next/head";
import { string } from "prop-types";

const ogImage =
  "https://res.cloudinary.com/george-swift/image/upload/v1646748543/bucketlist_vodp3s.png";

const Head = (props) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title}</title>
    <meta name="description" content="Personal Travel Planner" />
    <meta name="image" property="og:image" content={ogImage} />
    <link rel="icon" href="/favicon/favicon.ico" />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/favicon/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicon/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicon/favicon-16x16.png"
    />
    <link rel="manifest" href="/favicon/site.webmanifest" />
  </NextHead>
);

Head.proptypes = { title: string };

export default Head;
