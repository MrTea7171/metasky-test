"use client";
import { useEffect, useState } from "react";
import { redirect, usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { login } from "@/store/authSlice";

export default function isAuth(Component: any) {
  return function IsAuth(props: any) {
    const path = usePathname();
    const [auth, setAuth] = useState(false);
    const isLoggedIn = useSelector(
      (store: RootState) => store.authSlice.isLoggedIn
    );
    const dispatch = useDispatch();

    useEffect(() => {
      const isAuthenticated = () => {
        if (isLoggedIn) {
          return true;
        }
        const getCredentials = localStorage.getItem("credentials");
        if (getCredentials) {
          dispatch(login());
          return true;
        }
        return false;
      };
      setAuth(isAuthenticated());
      const insideAuth = isAuthenticated();
      if (path !== "/" && !insideAuth) {
        return redirect("/");
      }
      if (insideAuth && path === "/") {
        return redirect("/dashboard");
      }
    }, []);

    if ((path !== "/" && !auth) || (auth && path === "/")) {
      return null;
    }

    return <Component {...props} />;
  };
}
