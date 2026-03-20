import type { Metadata } from "next";
import SectionHeading from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Lê a política de privacidade do projeto Three Angels Message.",
};

export default function PrivacyPage() {
  return (
    <main className="container-premium py-8 md:py-12">
      <section className="overflow-hidden rounded-[2rem] border border-[var(--tam-line)] bg-[linear-gradient(135deg,rgba(255,255,255,0.82),rgba(239,231,218,0.96))] p-6 shadow-[0_20px_60px_rgba(17,17,17,0.06)] md:p-10">
        <SectionHeading
          eyebrow="Privacidade"
          title="Política de Privacidade"
          description="Esta página explica, de forma simples, como este projeto lida com informações e navegação."
        />
      </section>

      <section className="mt-8 card-premium p-6 md:p-8">
        <div className="space-y-6 text-sm leading-8 text-[var(--tam-muted)] md:text-base">
          <div>
            <h2 className="text-2xl font-semibold text-[var(--tam-ink)]">
              1. Introdução
            </h2>
            <p className="mt-3">
              O projeto {siteConfig.name} procura respeitar a privacidade dos
              visitantes e utilizar recursos digitais de forma responsável.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[var(--tam-ink)]">
              2. Dados de navegação
            </h2>
            <p className="mt-3">
              Este site pode recolher informações básicas de navegação, como
              páginas visitadas, interações e métricas de uso, com o objetivo de
              melhorar a experiência e a organização do conteúdo.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[var(--tam-ink)]">
              3. Favoritos e preferências locais
            </h2>
            <p className="mt-3">
              Algumas funcionalidades, como favoritos bíblicos, podem ser
              guardadas localmente no teu dispositivo para melhorar a experiência
              de uso. Esses dados não são, por padrão, enviados para um servidor
              remoto.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[var(--tam-ink)]">
              4. Ligações externas
            </h2>
            <p className="mt-3">
              O site pode conter links para redes sociais, plataformas de apoio
              ou outros recursos externos. Cada serviço externo possui as suas
              próprias políticas e práticas.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[var(--tam-ink)]">
              5. Contacto
            </h2>
            <p className="mt-3">
              Para questões relacionadas com privacidade, podes entrar em
              contacto através de: <strong className="text-[var(--tam-ink)]">{siteConfig.contact.email}</strong>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
