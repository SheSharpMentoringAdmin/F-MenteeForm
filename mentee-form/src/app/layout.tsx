"use client";

import { Provider } from "react-redux";
import { store } from "@/redux/store/store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
