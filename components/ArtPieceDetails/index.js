import Head from "next/head";
import Image from "next/image";
import FavoriteButton from "../FavoriteButton";
import { useRouter } from "next/router";

export default function ArtPieceDetails({ image, name, artist, year, genre }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <h1>
        {name}
        <small>{year}</small>
      </h1>
      <h2>{genre}</h2>
      <Image src={image} alt={name} width={300} height={300}></Image>
      <p>{artist}</p>
      <FavoriteButton />
      <button type="button" aria-label="Go Back" onClick={() => router.back()}>
        Return
      </button>
    </>
  );
}
