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
      <link rel="icon" href="/assets/images/flag.png" />
    </Head>
  );
};

export default PageHead;
