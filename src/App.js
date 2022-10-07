import { Fragment } from "react";
import Canvas from "./components/Canvas";
import Content from "./layout/Content";
import Header from "./layout/Header";

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
