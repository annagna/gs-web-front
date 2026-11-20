--------------------------iPills-------------------------------------------


O iPills é uma solução composta por uma caixa inteligente de medicamentos e um aplicativo mobile. Com o objetivo de ajudar pessoas idosas, familiares, 
cuidadores e profissionais de saúde a organizar horários, doses e registros de medicação.
O projeto foi desenvolvido com React, buscando aplicar componentização, React Hooks, Custom Hooks e integração com uma API externa.

------EQUIPE------

-Giulia Stella
-Anna Giazzi
-Erick Diego
-Rafael Morales
-Lucas Octaviano

----- O PROBLEMA ------

O envelhecimento da população brasileira e as mudanças nos arranjos familiares têm aumentado a importância de soluções voltadas ao cuidado e à autonomia das pessoas.
Segundo o IBGE, em 2022 o Brasil possuía aproximadamente 32,1 milhões de pessoas com 60 anos ou mais, representando um crescimento de 56% em relação a 2010. No mesmo período, também foi observado o crescimento dos domicílios unipessoais, compostos por apenas um morador.
Nosso principal público são pessoas idosas que moram sozinhas ou não possuem acompanhamento diário, especialmente aquelas que utilizam vários medicamentos e precisam administrar seus tratamentos com autonomia. Também pensamos nos familiares e cuidadores que se preocupam com essa rotina.

Diante desse cenário, desenvolvemos o iPills, uma solução que busca proporcionar mais autonomia, organização e segurança na rotina de medicamentos.


-------- SOLUÇÃO ------

A proposta do iPills é unir:
- Caixa fisica e inteligente
- Um app pára cadastro e acompanhamento]
- Alertas sonoros, luminosos e visuais
- Registros das doses
- Historico da rotina
- Monitoramento em tempo real para os responsaveis 

O sistema busca oferecer mais autonomia para o usuario e mais tranquilidade para a familia.

-------- FUNCIONALIDADES --------

Landing Page:
- Proposta do iPills
- Imagem REAL do produto
- Seção sobre o problema 
- Funcionalidades
- Depoimentos
- Formulário de contato

A Demonstração:
- Cadastrar medicamentos
- Informar dosagem
- Frequência, horário e observações
- Visualizar os medicamentos cadastrados
- Editar e excluir os medicamentos cadastrados
- Receber mensagens de sucesso ou erro


-------------- TECNOLOGIAS UTILIZADAS -------------------

React
Vite
JavaScript
CSS
Tailwind CSS
MockAPI 

--------- Pré-requisitos ----------------------------

Para executar o projeto, é necessário ter:

Node.js instalado.
npm instalado junto com o Node.js.
Visual Studio Code ou outro editor de código.
Conexão com a internet para acessar a API externa.

Instale as dependências:

npm install

Configuração da API:

O projeto utiliza a MockAPI como API REST externa para armazenar e gerenciar os registros de medicamentos.
O arquivo .env deve estar na raiz do projeto e conter a variável- VITE_MEDICATION_API_URL=https://6afddab43a0e70bc8d52e73a.mockapi.

Execução do projeto:
npm run dev

Para verificar a compilação de produção, execute:

npm run build

link repositorio no github:
https://github.com/annagna/gs-web-front


Deploy Aplicação publicada na Vercel:


------------ Ficha ------------------

- Nome: IPills
- Cidade e bairro: São Paulo, [bairro]
- Cidadão beneficiado: idosos que moram sozinhos ou sem acompanhamento diário, e seus familiares e cuidadores
- Problema, em uma frase: idosos que usam vários medicamentos esquecem doses e deixam o estoque acabar, e a família só descobre quando algo já deu errado
- Como funciona: caixa inteligente (ESP32) + aplicativo; esta parte em Python é o "cérebro" que processa os dados e decide os alertas
- O que cada parte faz: Front e Web = demonstração do app; ESP32 = alertas na caixa; Matemática = modelo de concentração do remédio
- Repositório: [link do GitHub]
- Indicador de impacto: % de doses tomadas no horário (adesão)
- ODS conectados: 3 (Saúde e bem-estar) e 10 (Redução das desigualdades)

------------------------ APLICAÇÃO NO PROJETO --------------------------------------

O que foi gerado ou alterado:
 - Interface e Estilização: Auxílio na criação de um cabeçalho responsivo (Header com menu mobile/desktop), alinhamento da imagem ao lado do texto no banner (Flexbox) e correção de classes do Tailwind (criação de código para cores inexistentes por padrões como bg-slate-50 e bg-cream).
- Migração para React (.jsx): Reestruturação do index.html para carregar o src/main.jsx e organização dos componentes no src/App.jsx (Header, Hero, Sobre, Funcionalidades, Depoimentos, Contato e Footer).
- Configuração do Ambiente: Auxílio na criação do vite.config.js integrando os plugins do React e do Tailwind CSS v4, além do ajuste da importação global do style.css.

---------------------------- VALIDAÇÃO DAS RESPOSTAS --------------------------------------------------

Foi utilizado para testes e ajustes, como:
- Testes Visuais: Identificação, correção e explicação do fundo escuro herdado do template do Vite, imagem desalinhada por falta de flex e botões sem estilo devido ao uso incorreto de className em HTML puro.
- Depuração no Terminal (Vite): Instalação de pacotes ausentes (react, react-dom, @vitejs/plugin-react e lucide-react), correção do caminho do arquivo CSS e remoção de importação duplicada no App.jsx.
- Depuração no Navegador (DevTools F12): Resolução de tela branca identificando a falta de export default e useState no Contato.jsx, além da remoção da tag de componente inexistente (<Pratos/>).
- Controle de Versão (Git): Correção dos erros que apareciam e auxílio para fazer os commits para o GitHub.