import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans/Vans';
import VanDetails from './pages/Vans/VanDetails';
import Layout from './components/Layout';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostLayout from './components/HostLayout';
import HostVans from './pages/Host/HostVans';
import HostVanDetails from './pages/Host/HostVanDetails';
import HostVanInfoDetail from './pages/HostVanInfo/HostVanInfoDetail';
import HostVanInfoPricing from './pages/HostVanInfo/HostVanInfoPricing';
import HostVanInfoPhotos from './pages/HostVanInfo/HostVanInfoPhotos';
import NotFound from './pages/NotFound';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<VanDetails />} />
          <Route path='login' element={<Login />} />
          <Route path='host' element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='vans' element={<HostVans />} />
            <Route path='vans/:id' element={<HostVanDetails />}>
              <Route index element={<HostVanInfoDetail />} />
              <Route path='pricing' element={<HostVanInfoPricing />} />
              <Route path='photos' element={<HostVanInfoPhotos />} />
            </Route>
            <Route path='reviews' element={<Reviews />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
