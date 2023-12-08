"use client";

import React from "react";

const Back = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <button
      onClick={handleBack}
      className="font-sans font-light text-right italic text-sm sm:text-md md:text-lg lg:text-xl"
    >
      {"<<"} Go Back
    </button>
  );
};

export default Back;
