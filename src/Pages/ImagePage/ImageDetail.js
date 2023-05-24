import React, { useState } from "react";
import { useParams } from "react-router-dom";
import images from "../../components/imagesData";
import Comment from "../../components/Comment/Comment";

function ImageDetail() {
  const { shibaName } = useParams();
  const currentIndex = images.findIndex((shiba) => shiba.name === shibaName);
  const currentShiba = images[currentIndex];

  console.log("currentIndex:", currentIndex);
  console.log("currentShiba:", currentShiba);

  // State for comments
  const [comments, setComments] = useState({});

  return (
    <div className="image-detail">
      <div className="navigation-buttons">
        {/* Navigation buttons */}
      </div>
      <div className="image-container">
        {/* Image */}
      </div>
      <Comment
        imageId={currentShiba?.name}
        comments={comments}
        setComments={setComments}
      />
    </div>
  );
}

export default ImageDetail;
