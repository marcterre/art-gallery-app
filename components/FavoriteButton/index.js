import Image from "next/image";
import { useContext } from "react";

import { favoriteButton } from "../../pages/_app";

export default function FavoriteButton({ onToggleFavorite }) {
  function isFavorite() {}
  const favoriteButtonData = useContext(favoriteButton);
  return (
    <button type="button" onChange={isFavorite} onClick={onToggleFavorite}>
      <Image
        src={favoriteButtonData}
        alt={favoriteButtonData}
        width={100}
        height={100}
      ></Image>
    </button>
  );
}
