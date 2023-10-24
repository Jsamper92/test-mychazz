// LocaleContext.js
import { createContext, useContext, useState } from 'react';


interface LocaleContextType {
  locale: string;
  setLocale: (newLocale: string) => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);


export function LocaleProvider({ children }: { children: JSX.Element }) {
  const [locale, setLocale] = useState('es'); // Establece un valor inicial, por ejemplo 'es'

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
