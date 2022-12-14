import React from "react";
import Examples from "../components/Examples";
import CodeSnippets from "../components/CodeSnippets";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Socials from "../components/Socials";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Examples />
      <CodeSnippets />
      <Socials />
    </>
  );
}
