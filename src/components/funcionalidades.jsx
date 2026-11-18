
import {Pill, Clock, UserRound, Users} from 'lucide-react'

const ITENS = [
  {
    icon: Pill,
    title: 'Organização inteligente de remédios',
    text: 'Mantenha o controle de todos os seus medicamentos, horários e doses em um só lugar.',
  },
  {
    icon: Clock,
    title: 'Lembretes de medicação personalizados',
    text: 'Som, luz e mensagem ajudam a sinalizar a dose, mesmo quando o celular não está por perto.',
  },
  {icon: UserRound,
    title: 'Histórico confiável de medicação',
    text: 'A abertura do compartimento e a confirmação manual registram o que aconteceu na rotina.',
  },
  {icon: Users,
    title: 'Tranquilidade para você e sua família',
    text: 'Família e profissionais podem acompanhar o histórico sem substituir a autonomia do usuário.',
  }
]

export default function Funcionalidades() {
  return (
    <section id="funcionalidades" className="py-24 bg-purple-100">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-4">
                  <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-indigo-700">
          Uma rotina mais leve e organizada, com menos preocupações e mais segurança.
        </p>
          <h2 className="font-semibold text-4xl md:text-5xl ">
            Praticidade no que você precisa.
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 gap-px bg-ink/10 rounded-3xl overflow-hidden">
          {ITENS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-yellow-100 p-8 hover:bg-yellow-150 transition-colors">
              <div className="w-11 h-11 rounded-full bg-coral/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-purple-400" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 font-display text-xl text-ink">{title}</h3>
              <p className="mt-2 text-ink/60 text-sm leading-relaxed max-w-xs">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}