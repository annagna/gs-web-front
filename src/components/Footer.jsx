
import { UtensilsCrossed } from 'lucide-react'

export default function Footer() {
  return (
    <>
      {/* Footer - html*/}
      <footer className="bg-white border-t border-slate-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-slate-800 mb-2">Fale conosco</h2>
            <p className="text-slate-600 max-w-3xl">
              Estamos em constante evolução. O IPills é um projeto desenvolvido por estudantes que buscam, por trás da tecnologia e inovação acadêmica, melhorar a vida do cliente. Tem alguma sugestão, crítica ou gostaria de colaborar? Nossa equipe de desenvolvedores está pronta para ouvir você.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-16 gap-y-6 text-sm text-slate-600 border-t border-slate-100 pt-8">
            <div>
              <p className="font-bold text-slate-800 mb-2">Contato</p>
              <p>contato@ipills.app</p>
              <p>0800 555 0199</p>
            </div>
            <div>
              <p className="font-bold text-slate-800 mb-2">Empresa</p>
              <a href="#sobre" className="block hover:text-indigo-600 mb-1">Sobre</a>
              <a href="#contato" className="block hover:text-indigo-600">Contato</a>
            </div>
            <div>
              <p className="font-bold text-slate-800 mb-2">Redes sociais</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-indigo-600">Instagram</a>
                
                <a href="#" className="hover:text-indigo-600">Twitter</a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap justify-between items-center text-sm">
            <span className="text-slate-600">&copy; 2026 IPills. Todos os direitos reservados.</span>
            <div className="space-x-4">
              <a href="#" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Política de Privacidade</a>
              <a href="#" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Termos de Serviço</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}