import { useRouter } from "next/router";
import { useContext } from "react";
import { myDataContext } from "../../_app";
import ArtPieceDetails from "../../../components/ArtPieceDetails";

export default function Piece() {
  const globalData = useContext(myDataContext);

  const router = useRouter();
  const { slug } = router.query;

  const currentPiece = globalData.find((piece) => piece.slug === slug);

  if (slug === "art-pieces") {
    () => router.back();
  }

  if (!currentPiece) {
    return <h1>404</h1>;
  }

  const { artist, name, imageSource, year, genre } = currentPiece;

  return (
    <ArtPieceDetails
      name={name}
      artist={artist}
      image={imageSource}
      year={year}
      genre={genre}
    />
  );
}
