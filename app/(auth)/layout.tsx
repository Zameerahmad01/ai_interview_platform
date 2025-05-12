import { isUserAuthenticated } from "@/lib/actions/auth.actions";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const isAuthenticated = await isUserAuthenticated();
  if (isAuthenticated) {
    redirect("/");
  }
  return <div className="auth-layout">{children}</div>;
};

export default AuthLayout;
