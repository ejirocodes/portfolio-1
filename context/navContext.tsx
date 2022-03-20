import React, { createContext, useState, useContext } from "react";

export const NavContext = createContext(false);
export const NavUpdateContext = createContext(null);

export function useNav() {
  return useContext(NavContext);
}

export function useNavUpdate() {
  return useContext(NavUpdateContext);
}
            // @ts-ignore
export function NavProvider({ children }) {
  const [isNav, setIsNav] = useState(false);

  function toggleNav(payload: boolean) {
    if (payload) return setIsNav(payload);
    setIsNav((prev) => !prev);
  }
  return (
    <NavContext.Provider value={isNav}>
                  {/*  @ts-ignore */}
      <NavUpdateContext.Provider value={toggleNav}>
        {children}
      </NavUpdateContext.Provider>
    </NavContext.Provider>
  );
}
