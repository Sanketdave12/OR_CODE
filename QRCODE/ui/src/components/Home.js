import React, { useState, useEffect } from "react";

const Home = (props) => {
  const [menus, setMenus] = useState([]);

  useEffect(async () => {
    await fetch("/api/menu/")
      .then((res) => res.json())
      .then((data) => setMenus(data));
  }, []);

  const generate = () => {
    let final = [];
    menus.map((menu) => {
      final.push(
        <>
          <h1>hii</h1>
          <h5>{menu.category}</h5>
        </>
      );
    });

    return final;
  };

  return <h1>{menus.length !== 0 ? generate() : null}</h1>;
};

export default Home;
