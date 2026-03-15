export default function Footer(){
return(
<footer className="mx-auto max-w-6xl px-4 pb-10 pt-16">
<div className="rounded-2xl border border-[var(--stroke)] bg-white/70 p-8 shadow-sm backdrop-blur">
<p className="text-sm text-[var(--muted)]">
© {new Date().getFullYear()} Three Angels Message
</p>

<p className="mt-3 text-sm text-[var(--muted)]">
Plataforma missionária digital dedicada à proclamação do evangelho eterno.
</p>
</div>
</footer>
)
}
