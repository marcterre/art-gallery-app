import { useImmer } from "use-immer";
import ArtPiecePreview from "../ArtPiecePreview/index";

export default function ArtPieces({ pieces }) {
  // const [artList, setArtList] = useImmer(pieces);

  console.log(pieces);

  return (
    <ul>
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecePreview
            image={piece.imageSource}
            artist={piece.artist}
            title={piece.name}
          />
        </li>
      ))}
    </ul>
  );
}
