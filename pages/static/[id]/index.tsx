import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticPaths = (async () => {
  return {
    paths: [
      {
        params: {
          id: "abc",
        },
      },
      {
        params: {
          id: "def",
        },
      },
    ],
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async ({ params }) => {
  return { props: { id: params?.id } };
}) satisfies GetStaticProps;

export default function Static({ id }: { id: string }) {
  return (
    <div>
      <h1>Static</h1>
      <p>id: {id}</p>
    </div>
  );
}
