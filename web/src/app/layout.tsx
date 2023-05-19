import "./globals.css";
import { Roboto_Flex, Bai_Jamjuree } from "next/font/google";

const roboto = Roboto_Flex({ subsets: ["latin"], variable: "--font-roboto" });
const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-bai-jamjuree",
});

export const metadata = {
  title: "NLW Spacetime",
  description:
    "Uma capsula do tempo contruida com react,Next.js,TailwindCSS,Typescript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans  bg-gray-900 text-gray-100`}>
        {children}
      </body>
    </html>
  );
}
