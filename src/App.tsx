import "./output.css";

import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./layout/header";
import HeaderMobile from "./layout/headerMobile";
import HeaderGhost from "./layout/headerGhost";
import Footer from "./layout/footer";

function App() {
  const [modalActive, setModalActive] = useState(true);
  useEffect(() => console.log(`modalActive ${modalActive}`));
  return (
    <div className="selection:bg-color-of-selection  selection:text-white">
      <Header />
      <HeaderMobile
        modalActive={modalActive}
        clickHandler={(value) => {
          setModalActive(value);
        }}
      />
      <HeaderGhost
        clickHandler={(value) => {
          setModalActive(value);
        }}
        modalActive={modalActive}
      />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
