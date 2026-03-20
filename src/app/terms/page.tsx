import type { Metadata } from "next";
import SectionHeading from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Lê os termos de uso do projeto Three Angels Message.",
};

export default function TermsPage() {
  return (
    <main className="container-premium py-8 md:py-12">
      <section className="overflow-hidden rounded-[2rem] border border-[var(--tam-line)] bg-[linear-gradient(135deg,rgba(255,255,255,0.82),rgba(239,231,218,0.96))] p-6 shadow-[0_20px_60px_rgba(17,17,17,0.06)] md:p-10">
        <SectionHeading
          eyebrow="Termos"
          title="Termos de Uso"
          description="Estas condições definem o uso geral deste projeto e da sua plataforma digital."
        />
      </section>

      <section className="mt-8 card-premium p-6 md:p-8">
        <div className="space-y-6 text-sm leading-8 text-[var(--tam-muted)] md:text-base">
          <div>
            <h2 className="text-2xl font-semibold text-[var(--tam-ink)]">
              1. Aceitação
            </h2>
            <p className="mt-3">
              Ao utilizar o site {siteConfig.name}, assumes que concordas com
              estes termos de uso e com a utilização responsável da plataforma.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[var(--tam-ink)]">
              2. Finalidade do conteúdo
            </h2>
            <p className="mt-3">
              Este site foi criado com propósito espiritual, educativo e
              missionário. Os conteúdos têm como objetivo apoiar leitura bíblica,
              estudo, reflexão e crescimento cristão.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[var(--tam-ink)]">
              3. Uso responsável
            </h2>
            <p className="mt-3">
              O utilizador compromete-se a usar a plataforma de forma respeitosa,
              lícita e coerente com a sua finalidade, evitando abuso, manipulação
              ou uso indevido dos recursos disponíveis.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[var(--tam-ink)]">
              4. Conteúdo e atualização
            </h2>
            <p className="mt-3">
              O projeto está em desenvolvimento contínuo. Algumas áreas podem
              ser atualizadas, reorganizadas ou expandidas com o tempo, sem aviso
              prévio, com o objetivo de melhorar a experiência e a missão.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[var(--tam-ink)]">
              5. Contacto
            </h2>
            <p className="mt-3">
              Para dúvidas relacionadas com estes termos, o contacto principal é{" "}
              <strong className="text-[var(--tam-ink)]">
                {siteConfig.contact.email}
              </strong>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
