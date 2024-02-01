import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Login, Characters, Movies, Comics, Page404 } from "./src/pages";


const RouterApp: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Characters />} />
      <Route path="/login" element={<Login />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/comics" element={<Comics />} />
      <Route path="/*" element={<Page404 />} />
    </Routes>

  );
};

export default RouterApp;
