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
              className="mx-auto mt-6 mb-0 block rounded-full bg-indigo-600 px-5 py-2.5 text-white shadow-sm transition hover:bg-indigo-700"
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
