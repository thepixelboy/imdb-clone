import "./globals.css";

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Providers from "./Providers";
import SearchBox from "@/components/SearchBox";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <Navbar />
          <SearchBox />

          {children}
        </Providers>
      </body>
    </html>
  );
}
