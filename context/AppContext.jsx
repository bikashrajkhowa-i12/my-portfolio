"use client";

import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <AppContext.Provider
      value={{ isOpenModal, openModal, closeModal, setIsOpenModal }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
