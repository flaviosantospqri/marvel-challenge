import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Login, Characters, Movies, Comics, Page404, Home, SignUp } from "./src/pages";
import { PrivateRoute } from "./src/components";


const RouterApp: FC = () => {
  return (
    <Routes>
      <Route path="/characters" element={<PrivateRoute />}>
        <Route path="/characters" element={<Characters />} />
      </Route>
      <Route path="/movies" element={<PrivateRoute />}>
        <Route path="/movies" element={<Movies />} />
      </Route>
      <Route path="/comics" element={<PrivateRoute />}>
        <Route path="/comics" element={<Comics />} />
      </Route>
      <Route path="/characters" element={<PrivateRoute />}>
        <Route path="/characters" element={<Characters />} />
      </Route>
      <Route path="/characters" element={<PrivateRoute />}>
        <Route path="/characters" element={<Characters />} />
      </Route>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/*" element={<Page404 />} />
    </Routes>

  );
};

export default RouterApp;
