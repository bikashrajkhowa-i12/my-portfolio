"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [screenshots, setScreenshots] = useState([]);
  const [websiteUrl, setWebsiteUrl] = useState(null);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setScreenshots([]);
    setIsOpenModal(false);
  };

  // cursor-glow listener
  useEffect(() => {
    const area = document.documentElement;

    const hasPointer = window.matchMedia("(pointer: fine)").matches;

    if (!hasPointer) {
      // Disable the glow completely
      area.style.setProperty("--x", `-9999px`);
      area.style.setProperty("--y", `-9999px`);
      return;
    }

    const handleMove = (e) => {
      area.style.setProperty("--x", `${e.clientX}px`);
      area.style.setProperty("--y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        isOpenModal,
        openModal,
        closeModal,
        setIsOpenModal,
        screenshots,
        setScreenshots,
        websiteUrl,
        setWebsiteUrl,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
