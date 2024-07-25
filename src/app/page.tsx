import Link from "next/link";

const links = ["bottom-sheet", "parallax-images", "folder-tree"];

export default function Home() {
  return (
    <main className="h-screen w-screen bg-gradient-to-l from-gray-200 via-fuchsia-200 to-stone-100">
      <div className="flex items-center justify-center h-screen">
        <ul className="p-4 rounded-2xl bg-gray-300/20  ring ring-gray-100">
          {links.map((link, i) => (
            <ListItem link={link} key={i} />
          ))}
        </ul>
      </div>
    </main>
  );
}

function ListItem({ link }: { link: string }) {
  return (
    <li className=" p-2">
      <Link href={link}>{link}</Link>
    </li>
  );
}
