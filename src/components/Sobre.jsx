import { useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
export default function Hero() {
  return (
    /* Sobre - html */
    <div className="bg-cream py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-indigo-700">
          Por que o iPills existe
        </p>
        <h2 className="text-3xl font-bold text-slate-800 mb-8">Cuidar da saúde não deveria depender da memória.</h2>
        <p className="text-slate-600 mb-4">
          Entre horários, nomes parecidos e uma rotina cheia, esquecer uma dose pode acontecer com qualquer pessoa. Para idosos, familiares e cuidadores, esse desafio fica ainda maior quando não há acompanhamento diário.
        </p>
        <p className="text-slate-600">
          O iPills transforma a prescrição em uma rotina visível, lembrada e compartilhada — sem tirar a autonomia de quem usa.

        </p>
      </div>
    </div>
  )
}