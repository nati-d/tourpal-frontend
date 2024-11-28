"use client"
import React, { useState } from "react";
import "./Cycle.scss";
import { Button } from "../ui/button";
import PlanDialog from "../PlanDialog";
import { Sparkles } from "lucide-react";

const Cycle: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <div className="hero">
      <div className="parallax-layer layer-6"></div>
      <div className="parallax-layer layer-5"></div>
      <div className="parallax-layer layer-4"></div>
      <div className="parallax-layer bike-1"></div>
      <div className="parallax-layer bike-2"></div>
      <div className="parallax-layer layer-3"></div>
      <div className="parallax-layer layer-2"></div>
      <div className="parallax-layer layer-1"></div>
      <div className="logo flex w-full items-center justify-center">
        <button className="py-4 px-4 rounded-full bg-white text-black font-bold flex items-center gap-4 opacity-85" onClick={handleOpenModal}><Sparkles/>Travel With AI</button>
      </div>
      <PlanDialog open={open} handleCloseModal={handleCloseModal} />
    </div>
  );
};

export default Cycle;
