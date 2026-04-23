"use client";
import React from "react";

const Spinner = () => {
    return (
        <div className="flex justify-center items-center py-4">
            <div className="w-8 h-8 border-4 border-t-primary border-b-primary border-l-transparent border-r-transparent rounded-full animate-spin"></div>
        </div>
    );
};

export default Spinner;