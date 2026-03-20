import type { Metadata } from "next";
import SectionHeading from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conhece a missão, o propósito e a visão do projeto Three Angels Message.",
};

export default function AboutPage() {
  return (
    <main className="container-premium py-8 md:py-12">
      <section className="overflow-hidden rounded-[2rem] border border-[var(--tam-line)] bg-[linear-gradient(135deg,rgba(255,255,255,0.82),rgba(239,231,218,0.96))] p-6 shadow-[0_20px_60px_rgba(17,17,17,0.06)] md:p-10">
        <SectionHeading
          eyebrow="Sobre"
          title="Uma missão digital centrada na verdade bíblica"
          description="Three Angels Message é um projeto cristão criado para organizar Bíblia, estudos, livros e recursos espirituais numa experiência moderna, reverente e acessível."
        />
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <article className="card-premium p-6 md:p-8">
          <p className="eyebrow-premium">Missão</p>
          <h2 className="mt-4 text-2xl font-semibold text-[var(--tam-ink)]">
            Proclamar com clareza, reverência e beleza
          </h2>
          <p className="mt-4 text-sm leading-8 text-[var(--tam-muted)] md:text-base">
            Este projeto existe para ajudar pessoas a ler, pesquisar, estudar e
            guardar a Palavra de Deus com mais organização, profundidade e
            acessibilidade digital.
          </p>
        </article>

        <article className="card-premium p-6 md:p-8">
          <p className="eyebrow-premium">Visão</p>
          <h2 className="mt-4 text-2xl font-semibold text-[var(--tam-ink)]">
            Um ecossistema cristão digital útil e duradouro
          </h2>
          <p className="mt-4 text-sm leading-8 text-[var(--tam-muted)] md:text-base">
            A visão é construir uma plataforma sólida, bela e funcional, capaz
            de servir leitores, estudantes bíblicos, famílias e missionários com
            recursos espirituais de qualidade.
          </p>
        </article>
      </section>

      <section className="mt-8 card-premium p-6 md:p-8">
        <p className="eyebrow-premium">Identidade</p>
        <h2 className="mt-4 text-2xl font-semibold text-[var(--tam-ink)]">
          Um projeto com propósito
        </h2>
        <p className="mt-4 text-sm leading-8 text-[var(--tam-muted)] md:text-base">
          {siteConfig.brand.mission}
        </p>

        <div className="mt-6 rounded-2xl border bg-white/65 p-4 text-sm leading-7 text-[var(--tam-muted)]">
          <strong className="text-[var(--tam-ink)]">Contato:</strong>{" "}
          {siteConfig.contact.email}
          {siteConfig.contact.whatsapp ? ` · ${siteConfig.contact.whatsapp}` : ""}
        </div>
      </section>
    </main>
  );
}
