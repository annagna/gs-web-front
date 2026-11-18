import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'

export default function Contato() {
  const [email, setEmail] = useState('')
  const [nome, setNome] = useState('')
  const [enviado, setEnviado] = useState(false)
  const [erro, setErro] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    if (!nome.trim() || !emailValido) {
      setErro('Preencha seu nome e um e-mail válido.')
      return
    }

    setErro('')
    setEnviado(true)
    // Em produção: enviar {nome, email} para o backend/serviço de e-mail marketing.
  }

  return (

  <section id="contato" className="py-24 bg-cream min-h-[400px] text-purple-900 mb-0">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Cadastre para saber das novidades.
            </h2>
            <p className="mt-4 text-cream/80 max-w-sm">
              Digite seu e-mail e receba cupons de promoção e avisos de lançamentos.
            </p>
          </div>

          <div>
            {enviado ? (
              <div className="flex items-center gap-3 bg-white rounded-2xl p-6">
                <CheckCircle2 className="w-6 h-6 shrink-0" />
                <p>Recebemos seu e-mail! Em breve você terá notícias de novidades sobre IPills.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label htmlFor="nome" className="block text-sm mb-1.5 text-purple-600">
                    Nome
                  </label>
                  <input
                    id="nome"
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Seu nome"
                    className="w-full rounded-xl bg-white text-ink placeholder:text-ink/40 px-4 py-3 outline-none focus:ring-2 focus:ring-ink"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm mb-1.5 text-purple-600">
                    E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="voce@email.com"
                    className="w-full rounded-xl bg-white text-ink placeholder:text-ink/40 px-4 py-3 outline-none focus:ring-2 focus:ring-ink"
                  />
                </div>

                {erro && <p className="text-sm bg-ink/10 rounded-lg px-3 py-2">{erro}</p>}

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 text-white font-medium px-6 py-3.5 hover:bg-purple-500 transition-colors"
                >
                  Quero receber novidades <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
)}