import Link from "next/link";

const links = ["bottom-sheet", "parallax-images", "checkbox"];

export default function Home() {
  return (
    <main className="">
      <ul className="border p-4 rounded-lg w-96 bg-black backdrop-blur-lg">
        {links.map((link, i) => (
          <ListItem link={link} key={i} />
        ))}
      </ul>
    </main>
  );
}

function ListItem({ link }: { link: string }) {
  return (
    <li className="p-2 rounded-lg hover:bg-white hover:text-black text-white">
      <Link href={link}>{link}</Link>
    </li>
  );
}
