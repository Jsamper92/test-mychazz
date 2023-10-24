import { createContext } from 'react';

interface LocaleContextType {
  locale: string;
  setLocale: (newLocale: string) => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export default LocaleContext;
