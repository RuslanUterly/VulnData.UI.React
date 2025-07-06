import React from 'react';
import {useAuth} from "../../auth";
import {UserInfoUI} from "./ui/UserInfoUI.tsx";

export const UserInfo: React.FC = () => {
  const { keycloak, initialized } = useAuth();

  if (keycloak === null) 
    return null;
  
  return (
    <UserInfoUI 
      keycloak={keycloak}
      initialized={initialized}
    />
  );
};

