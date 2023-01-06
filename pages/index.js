import useSWR from "swr";
import ArtPieces from "../components/ArtPieces";

const URL = "https://example-apis.vercel.app/api/art";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(URL);

  console.log(`HomePage: ${data}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{"ERROR: " + error.message}</h1>;
  }

  return (
    <div>
      <ArtPieces pieces={data} />
    </div>
  );
}
