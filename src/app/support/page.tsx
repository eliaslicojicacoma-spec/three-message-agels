import type { Metadata } from "next";
import SectionHeading from "@/components/ui/section-heading";
import { donationsConfig } from "@/config/donations";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Apoie esta missão",
  description:
    "Contribua para apoiar o desenvolvimento e a expansão desta missão digital cristã.",
};

export default function SupportPage() {
  return (
    <main className="container-premium py-8 md:py-12">
      <section className="overflow-hidden rounded-[2rem] border border-[var(--tam-line)] bg-[linear-gradient(135deg,rgba(255,255,255,0.82),rgba(239,231,218,0.96))] p-6 shadow-[0_20px_60px_rgba(17,17,17,0.06)] md:p-10">
        <SectionHeading
          eyebrow="Apoio"
          title={donationsConfig.title}
          description={donationsConfig.message}
        />
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <article className="card-premium p-6">
          <p className="eyebrow-premium">{donationsConfig.pix.label}</p>
          <h2 className="mt-4 text-2xl font-semibold text-[var(--tam-ink)]">
            Contribuição por Pix
          </h2>
          <p className="mt-3 text-sm leading-7 text-[var(--tam-muted)]">
            {donationsConfig.pix.description}
          </p>
          <div className="mt-5 rounded-2xl border bg-white/65 px-4 py-3 text-sm font-medium break-all">
            {donationsConfig.pix.value}
          </div>
        </article>

        <article className="card-premium p-6">
          <p className="eyebrow-premium">{donationsConfig.paypal.label}</p>
          <h2 className="mt-4 text-2xl font-semibold text-[var(--tam-ink)]">
            Contribuição por PayPal
          </h2>
          <p className="mt-3 text-sm leading-7 text-[var(--tam-muted)]">
            {donationsConfig.paypal.description}
          </p>
          <div className="mt-5 rounded-2xl border bg-white/65 px-4 py-3 text-sm font-medium break-all">
            {donationsConfig.paypal.value}
          </div>
        </article>
      </section>

      <section className="mt-8 card-premium p-6 md:p-8">
        <p className="eyebrow-premium">Missão</p>
        <h2 className="mt-4 text-2xl font-semibold text-[var(--tam-ink)]">
          Porque apoiar este projeto?
        </h2>
        <p className="mt-4 text-sm leading-8 text-[var(--tam-muted)] md:text-base">
          O teu apoio ajuda a manter o site online, expandir a base bíblica,
          criar novos estudos, desenvolver recursos úteis e alcançar mais pessoas
          com uma experiência cristã organizada e reverente.
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
