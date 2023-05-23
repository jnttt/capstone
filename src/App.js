// imports
import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "./utilities/users-service";
// pages
import AboutPage from "./Pages/AboutPage/AboutPage";
import AuthPage from "./Pages/AuthPage/AuthPage";
import GalleryPage from "./Pages/GalleryPage/GalleryPage";
// components
import NavBar from "./components/NavBar/NavBar";
import ImageDetail from "./components/ImageDetail";

function App() {
  const [user, setUser] = useState(getUser());
  // console.log('current user', user)

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/Gallery/:shibaName" element={<ImageDetail />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
