import React, { createContext} from "react";
import useLocalStorage from "./useLocalStorage";

const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
  const [accountStatus, setAccountStatus] = useLocalStorage("status", "");
  return (
    <AccountContext.Provider value={{ accountStatus, setAccountStatus }}>
      {children}
    </AccountContext.Provider>
  );
};

export default AccountContext;
