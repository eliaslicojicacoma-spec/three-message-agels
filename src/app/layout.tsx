import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body>
        <div className="min-h-screen flex flex-col">
          
          {/* conteúdo */}
          <main className="flex-1">
            {children}
          </main>

        </div>
      </body>
    </html>
  );
}
