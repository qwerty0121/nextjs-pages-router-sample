import { useEffect, useState } from "react";

export default function CSR() {
  const [data, setData] = useState<{ name: string } | null>(null);

  useEffect(() => {
    fetch("/api/hello").then((response) => {
      setTimeout(async () => setData(await response.json()), 500);
    });
  }, []);

  const content = data ? <p>{data.name}</p> : <p>Loading...</p>;
  return (
    <div>
      <h1>CSR</h1>
      {content}
    </div>
  );
}
