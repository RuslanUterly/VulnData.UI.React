import { Outlet } from 'react-router-dom';
import { Header } from "../../../modules/header";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}