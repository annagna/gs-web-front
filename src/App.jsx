import Funcionalidades from './components/Funcionalidades.jsx'
import Depoimentos from './components/Depoimentos.jsx'
import Header from './components/Header.jsx'
import Contato from './components/Contato.jsx'
import Hero from './components/Hero.jsx'
import Sobre from './components/Sobre.jsx'

import Footer from './components/Footer.jsx'


export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Funcionalidades />

        <Depoimentos />
        <Contato />
      </main>
      <Footer />
    </div>
  )
}