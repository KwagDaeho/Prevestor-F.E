"use client";

import HideAppBar from "src/components/globalComponents/HideAppBar/page";
import { Inter } from "next/font/google";
import "./reset.css";
import CustomThemeProvider from "src/utils/theme/CustomThemeProvider";
import { RecoilRoot } from "recoil";
import Footer from "@/components/globalComponents/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });
type PropsType = {
  children: React.ReactNode;
};

// 세 => Say , 3
// 세모
// 투 => Two, Too, 2
// 네이밍은 더 고민해보기..
//   export const metadata = {
//   title: "세모투",
//   description: "세모투 - 세상의 모든것을 투자하라.",
// };

export default function RootLayout({ children }: PropsType) {
  return (
    <html lang="ko">
      <RecoilRoot>
        <body suppressHydrationWarning={true} className={inter.className}>
          <CustomThemeProvider>
            <HideAppBar>
              <main>{children}</main>
            </HideAppBar>
            <Footer />
          </CustomThemeProvider>
        </body>
      </RecoilRoot>
    </html>
  );
}
