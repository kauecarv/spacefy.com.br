"use client";

import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

type CookieContextType = {
  acceptCookies: () => void;
  hasAcceptedCookies: boolean;
};

// Fornecendo valores padrão para o contexto
const CookieContext = createContext<CookieContextType>({
  acceptCookies: () => {},
  hasAcceptedCookies: false,
});

export function CookieProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [hasAcceptedCookies, setHasAcceptedCookies] = useState(false);

  useEffect(() => {
    setMounted(true);
    const accepted = Cookies.get("cookiesAccepted") === "true";
    setHasAcceptedCookies(accepted);
  }, []);

  const acceptCookies = () => {
    Cookies.set("cookiesAccepted", "true", { expires: 365 });
    setHasAcceptedCookies(true);
  };

  const value = {
    acceptCookies,
    hasAcceptedCookies,
  };

  if (!mounted) return <>{children}</>;

  return (
    <CookieContext.Provider value={value}>
      {children}
    </CookieContext.Provider>
  );
}

export const useCookies = () => {
  const context = useContext(CookieContext);
  if (!context) throw new Error("useCookies must be used within a CookieProvider");
  return context;
}; 