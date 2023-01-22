import { createContext } from "react";

import IContentContext from "./interfaces/IContentContext";

export const contentContext = createContext<IContentContext>(null);