"use client";

import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs";

export const AuthProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <KindeProvider>{children}</KindeProvider>;
};
