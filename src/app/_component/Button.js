"use client";
import React, { useState } from "react";

const Button = ({ children }) => {
  const [isCensored, setIsCensored] = useState(false);
  return (
    <>
      <button
        className={isCensored ? "censored" : undefined}
        onClick={() => setIsCensored(!isCensored)}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
