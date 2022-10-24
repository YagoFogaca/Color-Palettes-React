import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/header/header';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Auth } from './utils/api/auth/auth';
import { CreatePalette } from './pages/create-palette/create-palette';

export function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Auth />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-palette" element={<CreatePalette />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
