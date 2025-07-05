import '@mantine/core/styles.css';
import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {IconMoon, IconSun} from "@tabler/icons-react";
import App from "./App.tsx";

createRoot(document.getElementById('root')!).render(
  <MantineProvider theme={{
    other: {
      icons: {
        theme: {
          light: IconSun, // Компонент для светлой темы
          dark: IconMoon,  // Компонент для темной темы
        },
      },
    },
  }}>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />}/>
      </Routes>
    </BrowserRouter>
  </MantineProvider>
)