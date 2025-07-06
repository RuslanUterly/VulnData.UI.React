import '@mantine/core/styles.css';
import { createRoot } from 'react-dom/client'
import { MantineProvider} from '@mantine/core'
import App from "./App.tsx";
import { theme } from "./shared";

createRoot(document.getElementById('root')!).render(
  <MantineProvider theme={theme}>
    <App />
  </MantineProvider>
)