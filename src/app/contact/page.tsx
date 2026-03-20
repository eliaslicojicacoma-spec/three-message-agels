import type { Metadata } from "next";
import SectionHeading from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site";
import { socialLinks } from "@/config/social";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Entra em contacto com o projeto Three Angels Message para apoio, dúvidas, colaboração ou acompanhamento.",
};

export default function ContactPage() {
  return (
    <main className="container-premium py-8 md:py-12">
      <section className="overflow-hidden rounded-[2rem] border border-[var(--tam-line)] bg-[linear-gradient(135deg,rgba(255,255,255,0.82),rgba(239,231,218,0.96))] p-6 shadow-[0_20px_60px_rgba(17,17,17,0.06)] md:p-10">
        <SectionHeading
          eyebrow="Contacto"
          title="Fala connosco"
          description="Se quiseres apoiar, tirar dúvidas, colaborar ou simplesmente entrar em contacto, aqui estão os canais principais."
        />
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <article className="card-premium p-6 md:p-8">
          <p className="eyebrow-premium">Contacto direto</p>
          <h2 className="mt-4 text-2xl font-semibold text-[var(--tam-ink)]">
            Canais principais
          </h2>

          <div className="mt-5 space-y-4 text-sm leading-7 text-[var(--tam-muted)] md:text-base">
            <p>
              <strong className="text-[var(--tam-ink)]">Email:</strong>{" "}
              {siteConfig.contact.email}
            </p>

            {siteConfig.contact.whatsapp ? (
              <p>
                <strong className="text-[var(--tam-ink)]">WhatsApp:</strong>{" "}
                {siteConfig.contact.whatsapp}
              </p>
            ) : null}
          </div>
        </article>

        <article className="card-premium p-6 md:p-8">
          <p className="eyebrow-premium">Redes</p>
          <h2 className="mt-4 text-2xl font-semibold text-[var(--tam-ink)]">
            Presença digital
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="button-premium-light"
              >
                {item.label}
              </a>
            ))}
          </div>
        </article>
      </section>

      <section className="mt-8 card-premium p-6 md:p-8">
        <p className="eyebrow-premium">Mensagem</p>
        <h2 className="mt-4 text-2xl font-semibold text-[var(--tam-ink)]">
          Um projeto aberto à missão e à colaboração
        </h2>

        <p className="mt-4 text-sm leading-8 text-[var(--tam-muted)] md:text-base">
          Three Angels Message procura servir com fidelidade, clareza e utilidade.
          Se quiseres partilhar uma ideia, sugerir melhorias, colaborar ou apoiar
          esta missão digital, este espaço também é teu.
        </p>
      </section>
    </main>
  );
}
