import { ReactElement } from "react";
import { NextPageWithLayout } from "@/pages/_app";
import { useRouter } from "next/router";

const Route1: NextPageWithLayout = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Route1</h1>
      <button onClick={() => router.push("/about")}>move to About</button>
    </div>
  );
};

Route1.getLayout = function getLayout(page: ReactElement) {
  return <div className="layout-per-page">{page}</div>;
};

export default Route1;
