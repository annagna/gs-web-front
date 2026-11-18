import { useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import produto from '../assets/produto.png'


export default function Hero() {
  return (
      /*Banner */
    <section className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-yellow-200 py-16 bg-center">
      <div className="flex items-center gap-6 p-6">
        <img src={produto} className="rounded-lg w-175 h-125 object-cover shadow-md" alt="Caixa IPills" />
        <div className="flex flex-col gap-2">
          <h5 className="text-2xl font-bold text-purple-800">IPills</h5>
          <h4 className="text-xl font-semibold text-slate-700">O jeito inteligente de cuidar de quem você ama.</h4>
          <p className="text-slate-600 mt-1">Descubra como o IPills pode transformar a forma como você cuida de sua família. O uso dos remédios, agora, é mais simples e inteligente com nosso produto.</p>
        </div>
      </div>

    
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href="#contato"
          className="inline-flex items-center rounded-full bg-indigo-600 text-white font-medium px-7 py-3.5 hover:bg-indigo-700 transition-colors"
        >
          Iniciação da compra
        </a>
        <a
          href="#contato"
          className="inline-flex items-center rounded-full border border-slate-300 bg-white text-slate-800 font-medium px-7 py-3.5 hover:border-slate-400 transition-colors"
        >
          Fale conosco
        </a>
      </div>
    </section>
  )}