"use client";

import {
  AnimatePresence,
  motion,
  useDragControls,
  useMotionValue,
} from "framer-motion";

interface BottomSheetProps {
  onClose: () => void;
  open: boolean;
}

function BottomSheetItem({ children }: { children: React.ReactNode }) {
  return (
    <button className=" active:bg-gray-300 rounded-xl p-2 w-full active:scale-90 transition-all ">
      {children}
    </button>
  );
}

function Overlay({
  onClose,
  children,
}: {
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute min-w-screen min-h-screen bg-black/20 inset-0 overflow-hidden"
      onClick={onClose}
    >
      {children}
    </motion.div>
  );
}

function BottomSheet({ onClose, open }: BottomSheetProps) {
  const controls = useDragControls();
  const dragY = useMotionValue(0);

  return (
    <AnimatePresence>
      {open && (
        <Overlay onClose={onClose}>
          <motion.div
            className="bg-white inset-x-0 w-80  mx-auto items-center text-black p-2 fixed bottom-4 flex flex-col overflow-hidden"
            style={{ borderRadius: 30, y: dragY }}
            initial={{ y: 336, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 500, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeIn" }}
            drag="y"
            layout
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.5 }}
            dragListener={false}
            dragControls={controls}
            onDragEnd={() => {
              if (dragY.get() >= 50) {
                onClose();
              }
            }}
            onPointerDown={(e) => controls.start(e)}
          >
            <button>
              <hr className="w-14 h-2 bg-black rounded-xl cursor-grab active:cursor-grabbing mb-2" />
            </button>
            <BottomSheetItem>1</BottomSheetItem>
            <BottomSheetItem>2</BottomSheetItem>
            <BottomSheetItem>3</BottomSheetItem>
            <BottomSheetItem>4</BottomSheetItem>
          </motion.div>
        </Overlay>
      )}
    </AnimatePresence>
  );
}
export default BottomSheet;
