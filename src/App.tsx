import { ReactKeycloakProvider } from '@react-keycloak/web';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserInfo } from "./modules/profile";
import { keycloak } from "./modules/auth";
import { Layout } from "./shared";
import { AuthProvider } from "./modules/auth";

function App() {
  return (
    <ReactKeycloakProvider
        authClient={keycloak}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<div>Главная страница</div>} />
            <Route path="/profile" 
                   element={
              <AuthProvider>
                <UserInfo />
              </AuthProvider>
            }/>
          </Route>
        </Routes>
      </BrowserRouter>
    </ReactKeycloakProvider>
  )
}

export default App
