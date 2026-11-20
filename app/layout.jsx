import "./globals.css";

export const metadata = {
  title: "SkyHost — Hosting Cepat, Andal, dan Aman",
  description: "Web hosting modern untuk website dan bisnis Anda. Mulai online bersama SkyHost.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
