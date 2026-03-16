import Link from "next/link";

export default function Header() {
return (
<header className="hidden md:flex mx-auto max-w-6xl px-4 py-6">
<div className="hidden md:flex flex items-center justify-between rounded-2xl border border-[var(--stroke)] bg-white/70 px-6 py-4 shadow-sm backdrop-blur">
<Link href="/" className="hidden md:flex text-lg font-semibold">
Three Angels Message
</Link>

<nav className="hidden md:flex flex flex-wrap gap-4 text-sm">
<Link href="/bible">Bíblia</Link>
<Link href="/three-angels-message">Mensagem</Link>
<Link href="/studies">Estudos</Link>
<Link href="/books">Livros</Link>
<Link href="/downloads">Downloads</Link>
</nav>
</div>
</header>
);
}
