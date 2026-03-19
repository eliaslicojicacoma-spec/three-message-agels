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
    <main className="container-premium py-10 md:py-14">
      <SectionHeading
        eyebrow="Apoio"
        title={donationsConfig.title}
        description={donationsConfig.message}
      />

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <article className="card-premium p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-60">
            {donationsConfig.pix.label}
          </p>
          <h2 className="mt-3 text-2xl font-semibold">Contribuição por Pix</h2>
          <p className="mt-3 text-sm leading-7 opacity-75">
            {donationsConfig.pix.description}
          </p>

          <div className="mt-5 rounded-2xl border bg-neutral-50 px-4 py-3 text-sm font-medium break-all">
            {donationsConfig.pix.value}
          </div>
        </article>

        <article className="card-premium p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-60">
            {donationsConfig.paypal.label}
          </p>
          <h2 className="mt-3 text-2xl font-semibold">Contribuição por PayPal</h2>
          <p className="mt-3 text-sm leading-7 opacity-75">
            {donationsConfig.paypal.description}
          </p>

          <div className="mt-5 rounded-2xl border bg-neutral-50 px-4 py-3 text-sm font-medium break-all">
            {donationsConfig.paypal.value}
          </div>
        </article>
      </section>

      <section className="mt-10 card-premium p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-60">
          Missão
        </p>

        <h2 className="mt-3 text-2xl font-semibold">
          Porque apoiar este projeto?
        </h2>

        <p className="mt-4 text-sm leading-8 opacity-75 md:text-base">
          O objetivo deste projeto é proclamar a verdade bíblica com clareza,
          beleza, organização e acesso digital moderno. O teu apoio ajuda a
          manter o site online, expandir a base bíblica, criar estudos,
          desenvolver recursos e alcançar mais pessoas.
        </p>

        <div className="mt-6 rounded-2xl border bg-neutral-50 p-4 text-sm leading-7 opacity-80">
          <strong>Contato:</strong> {siteConfig.contact.email}
          {siteConfig.contact.whatsapp ? ` · ${siteConfig.contact.whatsapp}` : ""}
        </div>
      </section>
    </main>
  );
}
