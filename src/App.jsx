import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import BgSblc from './pages/BgSblc'
import Contact from './pages/Contact'
import FinancialInsights from './pages/FinancialInsights'
import PrivacyPolicy from './pages/PrivacyPolicy'
import ServicePage from './pages/ServicePage'
import { servicePages } from './data/servicePages'
import './App.css'

function App() {
  return (
    <div className="wrapper">
      <Header />

      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/bg-sblc" element={<BgSblc />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/financial-insights" element={<FinancialInsights />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        {servicePages.map((page) => (
          <Route
            key={page.path}
            path={page.path}
            element={
              <ServicePage
                title={page.title}
                description={page.description}
                points={page.points}
                image={page.image}
              />
            }
          />
        ))}
      </Routes>

      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
