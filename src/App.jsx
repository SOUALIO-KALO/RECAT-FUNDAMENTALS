import { useState } from "react";
import "./App.css";
import { Header } from "components";
import { Outlet } from "react-router";

const NAV_ITEMS = [
  { title: "Présentation", link: "/presentation" },
  { title: "Projects", link: "/project" },
  { title: "Contacts", link: "/contact" },
];

const App = () => {
  return (
    <>
      <Header props={{ NAV_ITEMS }} />
      <main className="main-container">
        <Outlet />
      </main>
    </>
  );
};

export default App;
