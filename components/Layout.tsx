import { ReactElement } from "react";
import LinkNavs from "./LinkNavs";

export default function Layout(page: ReactElement) {
  return (
    <div className="layout">
      <LinkNavs />
      {page}
    </div>
  );
}
