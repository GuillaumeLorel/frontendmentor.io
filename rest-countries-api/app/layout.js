import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/global/Header";
import { ThemeProvider } from "@/components/global/ThemeContextProvider";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Rest countries API",
  description: "Rest countries API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
