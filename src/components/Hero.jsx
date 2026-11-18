import { ArrowRight, ShieldCheck } from 'lucide-react'
import produto from '../assets/produto.png'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-yellow-100 text-slate-900">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-6 py-16 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 lg:px-10 lg:py-20">
        <div className="relative z-10 max-w-2xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-indigo-700">
            Tecnologia para cuidar com mais leveza
          </p>

          <h1 className="max-w-xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-slate-900 sm:text-6xl lg:text-[4.5rem]">
            O remédio certo,
            <br />
            no horário certo.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
            O iPills combina uma caixa inteligente e um aplicativo simples para organizar doses,
            lembrar horários e dar mais autonomia para quem cuida — e mais tranquilidade para a família.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contato"
              className="inline-flex items-center gap-3 rounded-full bg-indigo-600 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
            >
              Testar a demonstração
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center rounded-full bg-white px-7 py-4 text-base font-semibold text-slate-800 shadow-sm ring-1 ring-slate-200 transition hover:ring-indigo-300"
            >
              Conhecer o projeto
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-slate-500">
            <ShieldCheck className="h-5 w-5 text-indigo-500" />
            Pensado para uma rotina mais segura e humana.
          </div>
        </div>

        <div className="relative flex min-h-[360px] items-center justify-center lg:min-h-[520px]">
          <div
            className="absolute inset-8 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(196, 181, 253, 0.55) 0%, rgba(255, 247, 214, 0) 70%)' }}
          />

          <div className="relative w-full max-w-2xl">
            <img
              src={produto}
              className="relative z-10 w-full rounded-2xl object-cover shadow-2xl shadow-purple-200/70"
              alt="Caixa inteligente iPills e aplicativo"
            />

            <div className="absolute -bottom-5 right-2 z-20 max-w-[155px] rounded-2xl bg-white px-5 py-4 shadow-xl shadow-slate-300/40 sm:right-5">
              <strong className="block text-sm font-bold text-indigo-700">Mais autonomia</strong>
              <span className="mt-1 block text-sm leading-5 text-slate-600">para cada dose</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
