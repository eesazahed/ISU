import { NextPage } from "next";
import Head from "next/head";

interface Props {
  title: string;
}

const PageHead: NextPage<Props> = ({ title }) => {
  return (
    <Head>
      {title ? (
        <title>Explore Ontario | {`${title}`}</title>
      ) : (
        <title>Explore Ontario</title>
      )}
      <link
        rel="icon"
        href="https://cdn.britannica.com/25/3225-004-EB60D413/Flag-Ontario.jpg"
      />
    </Head>
  );
};

export default PageHead;
