import Link from "next/link";
import Header from "@/components/header";

export default function Home() {
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <Link href="/about">About us SPA</Link>
      </p>
      <p>
        <a href="/about">About us</a>
      </p>
    </main>
  );
}
