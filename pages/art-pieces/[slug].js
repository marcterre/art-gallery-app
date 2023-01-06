import { useRouter } from "next/router";
import { useContext } from "react";
import { myDataContext } from "../_app";
import Head from "next/head";
import Image from "next/image";

export default function Piece() {
  const globalData = useContext(myDataContext);

  const router = useRouter();
  const { slug } = router.query;

  const currentPiece = globalData.find((piece) => piece.slug === slug);

  if (!currentPiece) {
    return <h1>404</h1>;
  }

  const { artist, name, imageSource, year, genre } = currentPiece;

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
      <Image src={imageSource} alt={name} width={300} height={300}></Image>
      <p>{artist}</p>
    </>
  );
}
