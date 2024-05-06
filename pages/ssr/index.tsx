export async function getServerSideProps() {
  // throw new Error("dummy server error");
  return { props: { data: "abc" } };
}

export default function SSR({ data }: { data: string }) {
  return (
    <div>
      <h1>SSR</h1>
      <p>{data}</p>
    </div>
  );
}
