'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>For My daughter and all curious kids.</h1>
  
      <br />
      <p>
        👉 <Link href="/addition">Addition Game</Link>
      </p>
      <p>
        👉 <Link href="/fractions">Fractions Game (New!)</Link>
      </p>
      
      <p>
        👉 <Link href="/division">Division Game (New!)</Link>
      </p>
    </main>
  );

}
