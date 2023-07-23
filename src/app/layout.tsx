import HideAppBar from "src/components/globalComponents/HideAppBar/page";
import { Inter } from "next/font/google";
import "./reset.css";
import CustomThemeProvider from "src/utils/theme/CustomThemeProvider";

const inter = Inter({ subsets: ["latin"] });
type PropsType = {
  children: React.ReactNode;
};
export const metadata = {
  title: "Prevestor",
  description: "Prevestor :: Predict & invest for everything."
};

export default function RootLayout({ children }: PropsType) {
  return (
    <html lang="ko">
      <body suppressHydrationWarning={true} className={inter.className}>
        <CustomThemeProvider>
          <HideAppBar>
            <main>{children}</main>
          </HideAppBar>
        </CustomThemeProvider>
      </body>
    </html>
  );
}
