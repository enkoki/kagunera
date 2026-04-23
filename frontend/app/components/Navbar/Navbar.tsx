"use client";

import { Suspense } from "react";
import NavbarContent from "./NavbarContent";
import Spinner from "@/app/assets/icons/Spinner";

export default function Navbar({ isloggedin = false }) {
  return (
     <Suspense fallback={<div className="flex justify-center p-10"><Spinner /></div>}>
        <NavbarContent isloggedin={isloggedin}/>
    </Suspense>
  );
}