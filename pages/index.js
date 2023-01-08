import Spotlight from "../components/Spotlight/Spotlight";
import FavoriteButton from "../components/FavoriteButton";

import { useContext, useState } from "react";
import { myDataContext } from "./_app";

export default function SpotlightPage() {
  const globalData = useContext(myDataContext);
  console.log(globalData);

  return (
    <div>
      <Spotlight />
      <FavoriteButton />
    </div>
  );
}
