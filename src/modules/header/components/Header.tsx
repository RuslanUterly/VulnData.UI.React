import { useDisclosure } from "@mantine/hooks";
import { useKeycloak } from "@react-keycloak/web";
import {HeaderUI} from "./ui/HeaderUI.tsx";

export const Header = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const { keycloak } = useKeycloak();
  
  return (
    <HeaderUI 
      opened={opened}
      toggle={toggle}
      keycloak={keycloak}/>
  );
}