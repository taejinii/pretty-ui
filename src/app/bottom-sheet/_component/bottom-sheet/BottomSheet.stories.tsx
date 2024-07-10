import BottomSheet from "@/app/bottom-sheet/_component/bottom-sheet/bottom-sheet";
import { useState } from "react";

const meta = {
  component: BottomSheet,
};
export default meta;

export const Primary = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button onClick={() => setOpen(true)}>Open</button>
        <BottomSheet open={open} onClose={() => setOpen(false)} />
      </>
    );
  },
  args: {},
};
