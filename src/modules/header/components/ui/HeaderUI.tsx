import classes from "../../styles/Header.module.css";
import {Anchor, Burger, Button, Container, Group, Title} from "@mantine/core";
import {Link} from "react-router-dom";
import {ThemeToggle} from "../../../../shared/components/theme/ThemeToogle.tsx";
import type {HeaderUIProps} from "../../types.ts";

export const HeaderUI = ({ opened, toggle, keycloak }: HeaderUIProps) => {
  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          <Anchor component={Link} to="/" underline="never">
            <Title className={classes.logo} order={1}>VulnData</Title>
          </Anchor>
          <Group visibleFrom="sm" gap="xl">
            <Group visibleFrom="sm">
              <ThemeToggle/>
            </Group>
            <Group>
              {!keycloak.authenticated && (
                <Button
                  onClick={() => keycloak.login()}
                  radius="md"
                  variant="filled">
                  Вход через Keycloak
                </Button>)}
              {!!keycloak.authenticated && (
                <Button
                  component={Link} to="/profile"
                  radius="md"
                  variant="outline">
                  Профиль
                </Button>
              )}
            </Group>
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  );
}