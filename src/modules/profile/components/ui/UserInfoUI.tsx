import {Badge, Button, Container, Group, Loader, Paper, Space, Title} from "@mantine/core";
import type {UserInfoUIProps} from "../../types.ts";

export const UserInfoUI = ({keycloak, initialized}: UserInfoUIProps) => {
  return (
    <Container>
      {!initialized && (<Loader/>)}
      <Paper shadow="xs" radius="md" withBorder p="xl">
        <Group gap="xs">{keycloak.realmAccess?.roles.map(role =>
          <Badge variant="light" key={role}>{role}</Badge>
        )}
        </Group>

        <Title>{keycloak.tokenParsed?.preferred_username}</Title>

        <Space h="lg"></Space>

        <Button
          onClick={() => keycloak.logout()}
          radius="md"
          variant="outline">
          Выход
        </Button>
      </Paper>
    </Container>
  );
}