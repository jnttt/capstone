import React from "react";
import { Link } from "react-router-dom"; // Import the Link component if you're using React Router
import images from "../imagesData";

class Gallery extends React.Component {
  render() {
    return (
      <div className="imgsDiv">
        {images.map((shiba, id) => (
          <div key={id}>
            <Link to={`/Gallery/${shiba.name}`}>
              <img className="images" src={shiba.img} alt={shiba.name} />
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Gallery;
