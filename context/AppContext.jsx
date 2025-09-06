"use client";

import React, { createContext, useContext, useState } from "react";

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
