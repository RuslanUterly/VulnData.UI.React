import type Keycloak from "keycloak-js";

export type HeaderUIProps = {
  opened: boolean;
  toggle: () => void;
  keycloak: Keycloak;
};
