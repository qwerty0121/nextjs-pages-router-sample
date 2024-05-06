export const getStaticProps = () => {
  return {
    props: { date: new Date().toISOString() },
    revalidate: 10,
  };
};

export default function ISR({ date }: { date: string }) {
  return (
    <div>
      <h1>ISR</h1>
      <p>{date}</p>
      <style jsx>{`
        p {
          color: red;
        }
      `}</style>
    </div>
  );
}
