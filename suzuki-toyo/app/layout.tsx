import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "鈴木トーヨー住器 | 碧南・西三河の窓・玄関ドア・リフォーム",
  description:
    "碧南市で創業50年。LIXIL製品を中心に、窓・サッシ交換、内窓断熱、玄関ドア、カーポート、水まわりリフォームまで。地域密着で丁寧に対応します。",
  openGraph: {
    title: "鈴木トーヨー住器 | 碧南・西三河の窓・玄関ドア・リフォーム",
    description:
      "創業50年、碧南市の窓・玄関ドア・リフォーム専門店。LIXIL正規取扱店。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
