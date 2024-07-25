"use client";

import { Button } from "@ive-design-system/core";

function Page() {
  return (
    <>
      <Button
        className="bg-red-200 w-20 rounded-md"
        onClick={() => alert("test")}
      >
        IDS
      </Button>
    </>
  );
}
export default Page;
