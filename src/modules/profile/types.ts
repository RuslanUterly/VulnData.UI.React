import type Keycloak from "keycloak-js";

export type UserInfoUIProps = {
  keycloak: Keycloak;
  initialized: boolean;
};