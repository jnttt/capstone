import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import images from "../../components/imagesData";
import Comment from "../../components/Comment/Comment";

function ImageDetail() {
  const { shibaName } = useParams();
  const currentIndex = images.findIndex((shiba) => shiba.name === shibaName);
  const currentShiba = images[currentIndex];

  const previousIndex = (currentIndex - 1 + images.length) % images.length;
  const nextIndex = (currentIndex + 1) % images.length;

  const previousShiba = images[previousIndex];
  const nextShiba = images[nextIndex];

  console.log("currentIndex:", currentIndex);
  console.log("currentShiba:", currentShiba);

  // State for comments
  const [comments, setComments] = useState({});

  return (
    <div className="image-detail">
      <div className="navigation-buttons">
        <Link to={`/Gallery/${previousShiba.name}`}>
          &lt; Previous
        </Link>
        <Link to={`/Gallery/${nextShiba.name}`}>Next &gt;</Link>
      </div>
      <div className="image-container">
        <img className="image" src={currentShiba.img} alt={currentShiba.name} />
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
