import { type ReactNode } from "react";


import { Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage/HomePage";
import { BoardPage } from "./pages/BoardPage/BoardPage";
import RootLayout from "./layouts/RootLayout";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";


export default function App(): ReactNode {
  return (
    <Routes>
      <Route element={<RootLayout/>}>
        <Route index element={<HomePage/>} />
        <Route path="board/:id"  element={<BoardPage/>}/>
        <Route path="*" element={<NotFoundPage/>} />
      </Route>
    </Routes>
  );
}
