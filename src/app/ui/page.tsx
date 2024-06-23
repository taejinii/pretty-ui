"use client";

import BottomSheet from "@/components/bottom-sheet/bottom-sheet";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

export default function UI() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isOpen]);

  return (
    <div className="h-screen flex justify-center items-center">
      <button
        className="bg-black w-20 text-white p-2 rounded-lg"
        onClick={() => setIsOpen(true)}
      >
        Open
      </button>
      <AnimatePresence>
        {isOpen && (
          <BottomSheet open={isOpen} onClose={() => setIsOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
