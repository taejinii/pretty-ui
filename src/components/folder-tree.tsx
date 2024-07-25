"use client";

import {
  FolderIcon,
  DocumentIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type Folder = { name: string; folders?: Folder[] };

export const FolderTree = ({ folders }: { folders: Folder[] }) => {
  return (
    <ul>
      {folders.map((folder) => (
        <Folder folder={folder} key={folder.name} />
      ))}
    </ul>
  );
};

function Folder({ folder }: { folder: Folder }) {
  const [isOpen, setIsOpen] = useState(false);
  const isEmptyInFolders = folder.folders?.length === 0;

  return (
    <li className="my-1.5" key={folder.name}>
      <span className="flex items-center gap-1 ">
        {folder.folders && folder.folders?.length > 0 && (
          <button onClick={() => setIsOpen(!isOpen)}>
            <ChevronRightIcon className="size-6 text-gray-500" />
          </button>
        )}
        {folder.folders ? (
          <FolderIcon
            className={`text-sky-500 size-6 ${isEmptyInFolders ? "ml-1" : ""}`}
          />
        ) : (
          <DocumentIcon className="size-6 ml-1 text-gray-900" />
        )}
        {folder.name}
      </span>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
              exit: { opacity: 0, height: 0 },
            }}
            className="pl-6 overflow-hidden"
          >
            {folder.folders?.map((folder) => (
              <Folder folder={folder} key={folder.name} />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}
