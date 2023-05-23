import React from "react";
import images from "../components/imagesData";
import { useParams } from "react-router-dom";

function ImageDetail() {
  const { shibaName } = useParams();

  if (!shibaName) {
    return <div>Invalid image</div>;
  }

  const shiba = images.find((shiba) => shiba.name === shibaName);

  if (!shiba) {
    return <div>Image not found</div>;
  }

  return (
    <div className="imageDetail">
      <img className="image" src={shiba.img} alt={shiba.name} />
    </div>
  );
}

export default ImageDetail;
