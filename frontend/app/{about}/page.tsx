"use client";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import AboutFeatures from "../components/AboutFeatures/AboutFeatures";
import AboutFooter from "../components/AboutFooter/AboutFooter";
import AboutIconsFeatures from "../components/AboutIconsFeatures/AboutIconsFeatures";
import useAuth from "../hooks/useAuth";

const page = () => {
  const {isLoggedIn} = useAuth()
  return (
    <>
      <Navbar isloggedin={isLoggedIn}/>
      <Banner />
      <AboutFeatures />
      <AboutIconsFeatures />
      <AboutFooter />
    </>
  );
};

export default page;
