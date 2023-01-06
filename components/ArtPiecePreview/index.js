import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <>
      <h2>{title}</h2>
      <Image src={image} alt={title} width={300} height={300} />
      <p>{artist}</p>
    </>
  );
}
