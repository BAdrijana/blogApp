// ClientLayout.tsx (Client Component)
"use client";

import { Provider } from "react-redux";
import store from "../src/utilis/store/index";
import { ReactNode } from "react";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
