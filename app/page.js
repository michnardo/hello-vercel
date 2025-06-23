'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Hello from Michnardo!</h1>
      <p>This is my first Next.js app.</p>
      <p>
        👉 <Link href="/math">Chloe’s 4th Grade Math Game</Link>
      </p>
    </main>
  );
}
