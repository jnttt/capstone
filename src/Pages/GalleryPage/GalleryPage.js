import React from "react";
import { Routes, Route } from "react-router-dom";
import Gallery from "../../components/Gallery/Gallery";
import ImageDetail from "../ImagePage/ImageDetail";

export default function GalleryPage() {
  return (
    <div>
      <h1>Gallery</h1>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/gallery/:shibaName" element={<ImageDetail />} />
      </Routes>
    </div>
  );
}
