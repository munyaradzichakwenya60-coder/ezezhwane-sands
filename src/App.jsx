import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Pricing from './pages/Pricing'
import WhatsAppButton from './components/WhatsAppButton'
import { PickerProvider } from './components/ProductPicker'
import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <PickerProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
      </PickerProvider>
    </BrowserRouter>
  )
}
