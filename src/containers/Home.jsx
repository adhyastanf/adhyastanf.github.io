// import { Component } from "react";
import Contact from "../pages/Contact";
import About from "../pages/AboutMe";
import Portolio from "../pages/Portofolio";
import Main from "../layout/Main";
import SideImg from "../layout/SideImage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <div className="flex w-screen h-screen container px-10 mx-auto lg:mx-0 lg:px-0">
        <div className="side w-0 h-full bg-white lg:w-96 ">
          <SideImg />
        </div>
        <main className="grow h-full bg-white mx-0 lg:mx-16">
          <BrowserRouter>
            <Main>
              <Routes>
                <Route path={"/"} element={<About />} />
                <Route path={"/portofolio"} element={<Portolio />} />
                <Route path={"/contact"} element={<Contact />} />
              </Routes>
            </Main>
          </BrowserRouter>
        </main>
      </div>
    </div>
  );
};

export default Home;
