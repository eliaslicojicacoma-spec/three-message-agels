import Link from "next/link";

export default function BibleLink() {
  return (
    <Link
      href="/bible"
      className="text-sm font-medium hover:underline"
    >
      Bíblia
    </Link>
  );
}
