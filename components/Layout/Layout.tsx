import { ReactNode } from "react";
import Header from "./Header";

export default function Layout({ children }: { children: ReactNode}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black text-slate-50">
      <Header />
      {children}
    </div>
  )
}
