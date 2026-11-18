import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Ícones do Lucide que você já está usando

export default function Header() {
  // Estado que controla se o menu mobile está aberto (true) ou fechado (false)
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="bg-brown-50 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-indigo-600">IPills</span>
          </div>

          {/* Menu de Navegação Desktop */}
          <nav className="hidden md:flex space-x-8">
            <a href="#sobre" className="text-slate-700 hover:text-indigo-600 font-medium transition-colors">Sobre</a>
            <a href="#loja" className="text-slate-700 hover:text-indigo-600 font-medium transition-colors">Loja</a>
            <a href="#contato" className="text-slate-700 hover:text-indigo-600 font-medium transition-colors">Contato</a>
          </nav>

          {/* Botão Entrar Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#entrar" className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
              Entrar
            </a>
          </div>

          {/* Botão Mobile */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMenuAberto(!menuAberto)}
              aria-label="Abrir menu"
              className="text-slate-700 focus:outline-none hover:text-indigo-600"
            >
              {/* Alterna entre o ícone de X (fechar) e Menu (hambúrguer) */}
              {menuAberto ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Menu Mobile: Só é renderizado na tela se menuAberto for true */}
      {menuAberto && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-4 space-y-2">
          <a href="#inicio" className="block text-slate-700 hover:text-indigo-600 py-2 font-medium">Início</a>
          <a href="#sobre" className="block text-slate-700 hover:text-indigo-600 py-2 font-medium">Sobre</a>
          <a href="#servicos" className="block text-slate-700 hover:text-indigo-600 py-2 font-medium">Serviços</a>
          <a href="#contato" className="block text-slate-700 hover:text-indigo-600 py-2 font-medium">Contato</a>
          
          <div className="pt-4 border-t border-slate-100 flex flex-col space-y-2">
            <a href="#entrar" className="text-center text-slate-700 hover:text-indigo-600 py-2 font-medium">
              Entrar
            </a>
            <a href="#cadastrar" className="text-center bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700">
              Cadastrar
            </a>
          </div>
        </div>
      )}
    </header>
  );
}