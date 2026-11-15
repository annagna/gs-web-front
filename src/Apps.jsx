import Funcionalidades from './components/funcionalidades.jsx'
import Depoimentos from './components/depoimentos.jsx'


export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Funcionalidades />
        <Pratos />
        <Depoimentos />
        <Contato />
      </main>
      <Footer />
    </div>
  )
}