import Keycloak from "keycloak-js";
import type {ReactNode} from "react";

export interface AuthContextType {
  keycloak: Keycloak | null;
  initialized: boolean;
}

export type AuthProviderUIProps = {
  children: ReactNode;
  value: AuthContextType;
}