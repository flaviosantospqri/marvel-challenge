import { FC, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Login, Characters, Movies, Comics, Page404, Home } from "./src/pages";


const RouterApp: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="/login" element={<Login />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/comics" element={<Comics />} />
      <Route path="/*" element={<Page404 />} />
    </Routes>

  );
};

export default RouterApp;
