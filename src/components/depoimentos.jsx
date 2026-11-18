
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
    <section id="depoimentos" className="py-24 bg-yellow-100">
      <div className="mx-auto max-w-6xl px-6">
                <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-indigo-700">
          Cuidado que cabe na rotina
        </p>
        <h2 className="font-semibold text-4xl md:text-5xl ">
          Quem experimenta, conta.
        </h2>
        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {DEPOIMENTOS.map((d) => (
            <figure
              key={d.nome}
              className="rounded-2xl bg-purple-100 p-7 flex flex-col justify-between"
            >
              <blockquote className="text-ink/80 leading-relaxed">
                “{d.texto}”
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white text-purple-600 flex items-center justify-center font-medium text-sm">
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
