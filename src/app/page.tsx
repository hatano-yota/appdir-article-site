import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1>新着記事</h1>
      <ul>
        <li>記事１</li>
        <li>記事２</li>
        <li>記事３</li>
      </ul>
    </div>
  );
}
