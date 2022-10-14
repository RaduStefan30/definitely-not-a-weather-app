import { Fragment } from "react";
import Canvas from "./components/Canvas/Canvas";
import Content from "./layout/Content/Content";
import Header from "./layout/Header/Header";

function App() {
  return (
    <Fragment>
      <Canvas />
      <Header />
      <Content />
    </Fragment>
  );
}

export default App;
