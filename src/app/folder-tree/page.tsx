import { Folder, FolderTree } from "@/components/folder-tree";

const folders: Folder[] = [
  {
    name: "Home",
    folders: [
      {
        name: "Movies",
        folders: [
          {
            name: "Actions",
            folders: [
              {
                name: "2020",
                folders: [
                  { name: "DIE HARD.mp4" },
                  { name: "THE DARK KNIGHT.mp4" },
                ],
              },
              { name: "2010", folders: [] },
            ],
          },
        ],
      },
      {
        name: "Music",
        folders: [
          {
            name: "K-POP",
            folders: [
              {
                name: "Girls",
                folders: [
                  { name: "NewJeans", folders: [{ name: "hype-boy.mp4" }] },
                ],
              },
              { name: "Boys", folders: [] },
            ],
          },
        ],
      },
      { name: "Documents", folders: [] },
    ],
  },
];

function Page() {
  return (
    <div className=" h-1/2 w-96">
      <FolderTree folders={folders} />
    </div>
  );
}
export default Page;
