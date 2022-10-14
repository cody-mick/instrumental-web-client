import React, { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

const UserContext = createContext(undefined);

export default function AuthContext({ children }: any) {
  const createUser = (email: any, password: any) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    // @ts-ignore
    <UserContext.Provider value={createUser}>{children}</UserContext.Provider>
  );
}

export const UserAuth = () => {
  return UserContext(UserContext);
};
