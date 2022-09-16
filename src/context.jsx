import { useState, useEffect, useContext } from "react";

const Context = useContext({});

export const ContextProvider = ({ children }) => {
  const [auth, setAuth] = useState("");

  class Update {
    constructor() {
      this.UpdateAuth = () => setAuth(!auth);
    }
  }

  useEffect(() => {
    window.onbeforeunload = () => {
      return "";
    };
  }, []);

  return (
    <Context.Provider value={{ auth, Update }}>{children}</Context.Provider>
  );
};

export const UpdateContext = () => {
  const { Update } = useContext(Context);
  const Updater = new Update();

  return Updater;
};

export const ReadContext = () => {
  const { auth } = useContext(Context);

  const value = { auth };

  return value;
};
