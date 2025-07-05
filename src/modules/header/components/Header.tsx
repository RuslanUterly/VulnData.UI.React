import {Burger, Button, Container, Group, Title} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from './Header.module.css';
import { ThemeToggle } from "../../../shared/components/theme/ThemeToogle.tsx";

export const Header = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const mainColor = "#bc2828";
  
  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          <Title className={classes.logo} order={1}>VulnData</Title>
          <Group visibleFrom="sm" gap="xl">
            <Group visibleFrom="sm">
              <ThemeToggle/>
            </Group>
            <Group>
              <Button
                onClick={() => openAuthModal(LOGIN)}
                radius="md"
                color={mainColor}
                variant="filled">
                Вход через Keycloak
              </Button>
            </Group>
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  );
}