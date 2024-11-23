import { Outfit, Unbounded } from "next/font/google"; // Import both fonts
import "./globals.css";

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--display-font",
});

const outfit = Outfit({
  variable: "--body-font",
  subsets: ["latin"],
});
export const metadata = {
  title: "Kris Furer | Web Development",
  description:
    "I create sleek, user-friendly, responsive websites. Discover some of my favourite projects here. Want to work together? Get in touch!",
  robots: "index, follow",
  keywords:
    "web development, responsive websites, HTML, CSS, JavaScript, front-end development, web designer, freelance web developer",
  og: {
    title: "Kris Furer | Web Developer",
    description:
      "I create sleek, user-friendly, responsive websites. Discover some of my favourite projects here.",
    url: "https://krisfurer.vercel.app/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html className={` ${unbounded.variable} ${outfit.variable} `} lang="en">
      <body className="font-body">
        {children}
        <script
          async
          src="https://scripts.simpleanalyticscdn.com/latest.js"
        ></script>
      </body>
    </html>
  );
}
