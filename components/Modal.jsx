"use client";

import React from "react";

import { useAppContext } from "@/context/AppContext";

import CustomCarousel from "./CustomCarousel";

export default function Modal() {
  const { isOpenModal, closeModal, screenshots } = useAppContext() || {};

  return (
    isOpenModal &&
    screenshots?.length > 0 && (
      <div className="fixed inset-0 bg-black/50 z-150 backdrop-blur-sm">
        <div
          className="min-h-screen flex justify-center items-center"
          onClick={closeModal}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <CustomCarousel screenshots={screenshots} />
          </div>
        </div>
      </div>
    )
  );
}
