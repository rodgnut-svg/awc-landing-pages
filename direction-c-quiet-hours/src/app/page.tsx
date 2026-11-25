import Link from "next/link";

// Simple index so you can jump between the two ad landing pages while presenting.
export default function Home() {
  return (
    <main className="index">
      <h1>Anywhere Clubs landing pages</h1>
      <p>Pick the page you want to open.</p>
      <div className="index-links">
        <Link href="/gym-owners">Gym owners page</Link>
        <Link href="/trainers">Trainers page</Link>
      </div>
    </main>
  );
}
