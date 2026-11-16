

{/* Script do menu mobile */}
      const btn = document.getElementById('menu-btn');
      const menu = document.getElementById('mobile-menu');
      btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
      });


// Header Principal - html
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
        {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-indigo-600">IPills</span>
          </div>

          {/* Menu de Navegação */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-slate-700 hover:text-indigo-600 font-medium transition-colors">Sobre</a>
            <a href="#" className="text-slate-700 hover:text-indigo-600 font-medium transition-colors">Loja</a>
            <a href="#" className="text-slate-700 hover:text-indigo-600 font-medium transition-colors">Contato</a>
          </nav>

          {/* Botão Entrar */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors">Entrar</a>
          </div>

          {/* Botão Mobile */}
          <div className="flex md:hidden items-center">
            <button id="menu-btn" className="text-slate-700 focus:outline-none hover:text-indigo-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Menu Mobile */}
      <div id="mobile-menu" className="hidden md:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-4 space-y-2">
        <a href="#" className="block text-slate-700 hover:text-indigo-600 py-2 font-medium">Início</a>
        <a href="#" className="block text-slate-700 hover:text-indigo-600 py-2 font-medium">Sobre</a>
        <a href="#" className="block text-slate-700 hover:text-indigo-600 py-2 font-medium">Serviços</a>
        <a href="#" className="block text-slate-700 hover:text-indigo-600 py-2 font-medium">Contato</a>
        <div className="pt-4 border-t border-slate-100 flex flex-col space-y-2">
          <a href="#" className="text-center text-slate-700 hover:text-indigo-600 py-2 font-medium">Entrar</a>
          <a href="#" className="text-center bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700">Cadastrar</a>
        </div>
      </div>
    </header>