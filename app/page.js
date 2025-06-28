'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>For My daughter Coco and all curious kids.</h1>
  
      <br />
      <p>
        👉 <Link href="/addition">Addition Game</Link>
      </p>
      <p>
        👉 <Link href="/addition-mcq">Addition MCQ</Link>
      </p>
      <p>
        👉 <Link href="/multiplication">Multiplication Game</Link>
      </p>
      <p>
        👉 <Link href="/multiplication-mcq">Multiplication MCQ (New!)</Link>
      </p>
      <p>
        👉 <Link href="/division">Division Game</Link>
      </p>
      <p>
        👉 <Link href="/division-mcq">Division MCQ</Link>
      </p>
      <p>
        👉 <Link href="/fraction">Fraction Game </Link>
      </p>
      <p>
        👉 <Link href="/fraction-mcq">Fraction MCQ</Link>
      </p>
    </main>
  );

}
