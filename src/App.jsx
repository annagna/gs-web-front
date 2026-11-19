import Funcionalidades from './components/Funcionalidades.jsx'
import Depoimentos from './components/Depoimentos.jsx'
import Header from './components/Header.jsx'
import Contato from './components/Contato.jsx'
import Hero from './components/Hero.jsx'
import Sobre from './components/Sobre.jsx'

import Footer from './components/Footer.jsx'
import { useState } from 'react';
import MedicationManager from './components/MedicationManager.jsx';

export default function App() {
  const [mostrarDemo, setMostrarDemo] = useState(false);

  return (
    <div className="min-h-screen">
      <Header onTry={() => setMostrarDemo(true)} />
      <main>
        {mostrarDemo ? (
          <>
            <button
              onClick={() => setMostrarDemo(false)}
              className="m-4 rounded-lg bg-indigo-600 px-4 py-2 text-white"
            >
              Voltar ao início
            </button>

            <MedicationManager />
          </>
        ) : (
          <>
            <Hero />
            <Sobre />
            <Funcionalidades />
            <Depoimentos />
            <Contato />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}