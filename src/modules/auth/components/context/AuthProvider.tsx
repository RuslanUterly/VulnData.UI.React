import React from 'react';
import {useKeycloak} from '@react-keycloak/web';
import {AuthProviderUI} from "./ui/AuthProviderUI.tsx";
import {Navigate} from "react-router-dom";

export const AuthProvider :React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { keycloak, initialized } = useKeycloak();

  if (!keycloak?.authenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <AuthProviderUI value={{ keycloak, initialized }}>
      {children}
    </AuthProviderUI>
  );
};