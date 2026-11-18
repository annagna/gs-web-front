
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
    text: 'Configure alertas de acordo com sua rotina e preferências, garantindo que você nunca perca uma dose importante.',
  },
  {icon: UserRound,
    title: 'Praticidade no cotidiano e mais autonomia',
    text: 'Tenha informações importantes sobre seus medicamentos de maneira mais acessível  e um acompanhamento da sua rotina de cuidados com maior independência e facilidade.',
  },
  {icon: Users,
    title: 'Tranquilidade para você e sua família',
    text: 'tenha um apoio adicional na organização dos cuidados com a saúde.',
  }
]

export default function Funcionalidades() {
  return (
    <section id="funcionalidades" className="py-24 bg-yellow-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <h2 className="font-display text-4xl md:text-5xl text-ink max-w-md">
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