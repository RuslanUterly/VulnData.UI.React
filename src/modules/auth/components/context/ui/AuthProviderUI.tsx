import { AuthContext } from "../AuthContext.ts";
import type {AuthProviderUIProps} from "../../../types.ts";

export const AuthProviderUI = ({ value, children }: AuthProviderUIProps) => {
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};