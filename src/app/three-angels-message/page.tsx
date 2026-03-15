import type { Metadata } from "next";
import {
  angelMessages,
  threeAngelsBaseText,
  threeAngelsIntro,
  threeAngelsMission,
} from "@/content/three-angels-message";

export const metadata: Metadata = {
  title: "Mensagem dos Três Anjos",
  description:
    "Conheça a mensagem profética de Apocalipse 14:6-12 e sua importância para os últimos dias.",
};

export default function ThreeAngelsMessagePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <section className="max-w-3xl">
        <p className="text-sm text-[var(--muted)]">{threeAngelsIntro.eyebrow}</p>
        <h1 className="mt-2 text-4xl font-bold md:text-5xl">
          {threeAngelsIntro.title}
        </h1>
        <p className="mt-4 text-base leading-7 text-[var(--muted)] md:text-lg">
          {threeAngelsIntro.description}
        </p>
      </section>

      <section className="mt-10 rounded-3xl border border-[var(--stroke)] bg-white/70 p-8 shadow-sm">
        <h2 className="text-2xl font-semibold">{threeAngelsBaseText.title}</h2>
        <p className="mt-4 leading-7 text-[var(--muted)]">
          “{threeAngelsBaseText.verse}”
        </p>
        <p className="mt-4 text-sm font-medium text-[var(--muted)]">
          {threeAngelsBaseText.reference}
        </p>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        {angelMessages.map((message) => (
          <article
            key={message.id}
            className="rounded-3xl border border-[var(--stroke)] bg-white/70 p-6 shadow-sm"
          >
            <p className="text-sm text-[var(--muted)]">{message.label}</p>
            <h2 className="mt-2 text-2xl font-semibold">{message.title}</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              {message.description}
            </p>
          </article>
        ))}
      </section>

      <section className="mt-12 rounded-3xl border border-[var(--stroke)] bg-white/70 p-8 shadow-sm">
        <h2 className="text-2xl font-semibold">{threeAngelsMission.title}</h2>
        <p className="mt-4 leading-7 text-[var(--muted)]">
          {threeAngelsMission.description}
        </p>
      </section>
    </main>
  );
}
