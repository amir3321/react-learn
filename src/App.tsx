import { type ReactNode } from "react";
import "./App.css";
import Card from "@/component/Card/Card";
import Post from "@/component/Post/Post";


export default function App(): ReactNode {
  return (
  <div className="app">
    <Card/>
    <Post/>
  </div>
  )
}
