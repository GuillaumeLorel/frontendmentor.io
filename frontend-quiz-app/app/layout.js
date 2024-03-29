import { Rubik } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./ui/global/ThemeContextProvider";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Frontend Mentor | Quiz app",
  description: "Quiz app about web development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${rubik.className} antialiased bg-light-grey dark:bg-dark-navy h-screen text-body-s text-dark-navy dark:text-white background-top-left`}>
        <div className="py-10 md:pt-[83px] px-6 sm:px-16 md:px-16 xl:px-36">
          <ThemeProvider>{children}</ThemeProvider>
        </div>
      </body>
    </html>
  );
}
