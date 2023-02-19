import "./globals.css";

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Providers from "./Providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <Navbar />
          {/* TODO: SearchBox */}

          {children}
        </Providers>
      </body>
    </html>
  );
}
