import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";

//initialize firebase App
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  //handel user register
  const handleUserRegister = (email, password, name) => {
    //save user to the database
    saveUser(email, name);

    return createUserWithEmailAndPassword(auth, email, password);
  };

  //handel user name
  const handleUserName = (name) => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };

  //handel user login
  const handleUserLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  //Sign out content
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };

  const saveUser = (email, displayName) => {
    const user = { email, displayName };
    fetch("https://quiet-mountain-69399.herokuapp.com/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  return {
    user,
    isLoading,
    handleUserRegister,
    handleUserLogin,
    handleUserName,
    logOut,
  };
};
export default useFirebase;
