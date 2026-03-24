"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setShowBanner(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#f3eee7] bg-white shadow-lg">
      <div className="mx-auto max-w-[100rem] px-8 py-6 md:px-16">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="flex flex-1 items-start gap-4">
            <span className="mt-1 text-2xl text-[#b88a4a]">🍪</span>
            <div>
              <h3 className="mb-2 text-lg text-[#171411]">Cookies e Privacidade</h3>
              <p className="text-sm leading-relaxed text-[#6d675f]">
                Utilizamos cookies para melhorar sua experiência de navegação e analisar o uso do site.
                Ao continuar navegando, você concorda com nossa{" "}
                <Link href="/privacy" className="text-[#b88a4a] underline transition hover:text-[#9f7438]">
                  Política de Privacidade
                </Link>.
              </p>
            </div>
          </div>

          <div className="flex flex-shrink-0 items-center gap-3">
            <button
              onClick={declineCookies}
              className="rounded-none border border-[#6d675f] px-5 py-3 text-[#6d675f] transition hover:bg-[#f5f1ea]"
              type="button"
            >
              Recusar
            </button>
            <button
              onClick={acceptCookies}
              className="rounded-none bg-[#b88a4a] px-5 py-3 text-black transition hover:bg-[#9f7438]"
              type="button"
            >
              Aceitar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
