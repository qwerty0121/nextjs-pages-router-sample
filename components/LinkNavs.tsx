import Link from "next/link";
import style from "@/components/LinkNavs.module.css";

export default function LinkNavs() {
  return (
    <ul className={style.linkNavs}>
      <li className={style.linkItem}>
        <Link href="/about">About</Link>
      </li>
      <li className={style.linkItem}>
        <Link href="/route-1">Route1</Link>
      </li>
      <li className={style.linkItem}>
        <Link
          href={{
            pathname: "/dynamic/[id]",
            query: { id: 234 },
          }}
        >
          Dynamic
        </Link>
      </li>
      <li className={style.linkItem}>
        <Link href="/ssr">SSR</Link>
      </li>
      <li className={style.linkItem}>
        <Link href="/csr">CSR</Link>
      </li>
      <li className={style.linkItem}>
        <Link href="/static/abc">Static</Link>
      </li>
      <li className={style.linkItem}>
        <Link href="/isr">ISR</Link>
      </li>
    </ul>
  );
}
