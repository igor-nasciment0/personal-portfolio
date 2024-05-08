import { createContext } from "react";

const LanguageContext = createContext("pt_br");

export interface LanguageContent {
    [key: string]: Record<string, string | JSX.Element>
}

export default LanguageContext;