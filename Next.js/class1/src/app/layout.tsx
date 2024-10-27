import { Inter, Sora } from "next/font/google";
import { NextRequest } from "next/server";
import "./custom.css";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
  res,
}: Readonly<{
  children: React.ReactNode;
  res: NextRequest;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={sora.className}>
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
