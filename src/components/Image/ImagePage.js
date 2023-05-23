import React from "react";
import { useParams } from "react-router-dom";
import images from "../imagesData";

const ImagePage = () => {
  const { id } = useParams();
  const selectedImage = images.find((image) => image.name === id);

  if (!selectedImage) {
    return <div>Image not found</div>;
  }

  return (
    <div>
      <h2>{selectedImage.name}</h2>
      <img src={selectedImage.img} alt={selectedImage.name} />
    </div>
  );
};

export default ImagePage;
