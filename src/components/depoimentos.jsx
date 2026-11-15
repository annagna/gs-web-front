const DEPOIMENTOS = [
  {
    nome: 'Tatiana Silva',
    cidade: 'São Paulo, SP',
    texto:
      'Comecei a usar o IPills depois de ter sofrido um acidente em que necessitava de varias medicações por dia, a mais do que eu já tomava. O app me ajudou a organizar tudo e não perder nenhuma dose.',
    iniciais: 'TS',
  },
  {
    nome: 'Mario Andrade',
    cidade: 'Mogi das Cruzes, SP',
    texto:
      'O IPills me ajudou a organizar a rotina de medicação do meu pai, que tem dificuldade de lembrar de tomar e se tomou os remédios na hora certa. Recomendo para todos que precisam de ajuda com a gestão de medicamentos.',
    iniciais: 'MA',
  },
  {
    nome: 'Luisa Pereira',
    cidade: 'Curitiba, PR',
    texto:
      'O IPills é um aplicativo incrível! Com a correria do dia a dia, ele me ajudou a organizar a rotina de medicação do meu cachorro e me deu a tranquilidade de saber que não vou esquecer nenhuma dose.',
    iniciais: 'LP',
  },
]

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-4xl md:text-5xl text-ink max-w-md">
          Quem já pediu, conta.
        </h2>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {DEPOIMENTOS.map((d) => (
            <figure
              key={d.nome}
              className="rounded-2xl bg-gold/10 p-7 flex flex-col justify-between"
            >
              <blockquote className="text-ink/80 leading-relaxed">
                “{d.texto}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-coral text-cream flex items-center justify-center font-medium text-sm">
                  {d.iniciais}
                </div>
                <div>
                  <p className="text-sm font-medium text-ink">{d.nome}</p>
                  <p className="text-xs text-ink/50">{d.cidade}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}