import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Home } from './pages/home/home';
import { Palette } from './pages/palette/palette';

export function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/palette/:id" element={<Palette />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
