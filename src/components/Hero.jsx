import React from "react";
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col ">
      <nav className="flex justify-between items-center w-full mb-10 pt-3 ">
        <img src={logo} alt="web-logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() => window.open("https://https://github.com/hothaian")}
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Article with <br className="max-md:hidden"/>
        <span className="green_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Summary text content from given URL by OpenAI GPT-4
      </h2>
    </header>
  );
};

export default Hero;
