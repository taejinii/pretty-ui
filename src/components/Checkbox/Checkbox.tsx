import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

export const Checkbox = () => {
  return (
    <div className="flex gap-1 items-center">
      <CheckboxPrimitive.Root
        className="flex items-center justify-center border border-black w-5 h-5 rounded-md"
        id="checkbox"
      >
        <CheckboxPrimitive.CheckboxIndicator>
          <CheckIcon />
        </CheckboxPrimitive.CheckboxIndicator>
      </CheckboxPrimitive.Root>
      <label htmlFor="checkbox" className="select-none">
        Checkbox
      </label>
    </div>
  );
};
