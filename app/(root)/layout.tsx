import { isUserAuthenticated } from "@/lib/actions/auth.actions";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const isAuthenticated = await isUserAuthenticated();
  if (!isAuthenticated) {
    redirect("/sign-in");
  }
  return (
    <div className="root-layout">
      <nav>
        <Link href="/" className="flex items-center gap-2 ">
          <Image src="/logo.svg" alt="logo" height={32} width={38} />
          <h2 className="text-primary-100">PerpWise</h2>
        </Link>
      </nav>
      {/* This is the main content area */}
      {children}
    </div>
  );
};

export default RootLayout;
