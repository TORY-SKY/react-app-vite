import { createContext } from "react";
interface LoginContextProps {
  userName: string;
}
const LoginContext = createContext<LoginContextProps | undefined>(undefined);

export default LoginContext;
