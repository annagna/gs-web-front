# Documentando o uso de Inteligência Artificial

## 1. Ferramentas utilizadas

Durante o desenvolvimento do projeto iPills, foi utilizada a ferramentas como Manus, ChatGPT, Claude como apoio técnico e documental.

As ferramentas foram utilizadas para:

- Analisar a estrutura do projeto.
- Auxílio na estruturação do código JavaScript e React.
- Apoio na organização da lógica de cadastro, consulta, edição e exclusão de medicamentos.
- Orientação para integração com uma API externa utilizando MockAPI.
- Explicar as alterações realizadas.
- Identificação e correção de problemas de integração entre componentes.
- Sugestões de melhorias na interface e na organização dos componentes.


A Inteligência Artificial não foi utilizada para substituir completamente o trabalho da equipe. A equipe definiu a proposta do iPills, suas funcionalidades, identidade visual e objetivos. As sugestões geradas foram analisadas, adaptadas e validadas pelo grupo.

---

## 2. Alguns exemplos de solicitações realizadas:

Pergunta
como eu configuro a api?

Resposta
Vamos configurar juntas, passo a passo. Você não precisa mexer no código da sua colega agora. Primeiro vamos criar a API no MockAPI e pegar o endereço que vai conectar o JavaScript ao banco de dados online.
Atenção: o MockAPI vai guardar os medicamentos na nuvem, permitindo que os dados continuem disponíveis quando você fechar e abrir o site novamente.
1. Criar sua conta e projeto
1. Entre em MockAPI.io.
2. Crie sua conta ou entre com Google.
3. Crie um projeto chamado iPills.
4. Dentro dele, procure a opção para criar um Resource.
5. Dê o nome medications.
2. Criar os campos do recurso
Dentro de medications, adicione estes cinco campos:
Nome do campo	Tipo
name	String
dosage	String
frequency	String
time	String
notes	String

O id normalmente é criado automaticamente pela plataforma. Não precisa adicionar manualmente.
Como deve ficar
medications
5 campos
name
dosage
frequency
time
notes
3. Copiar a URL da API
Depois de criar o recurso, procure a URL dele. Ela deve ter um formato parecido com este:
https://SEU-PROJETO.mockapi.io/api/v1/medications

Não copie o exemplo acima: você precisa da URL exclusiva que aparecer no seu projeto.
4. Colocar a URL no código
No VS Code:
1. Abra a pasta do projeto web da equipe.
2. Na raiz, no mesmo nível do package.json, crie um arquivo chamado .env.
3. Dentro dele, coloque:
VITE_MEDICATION_API_URL=https://SUA-URL-REAL

pergunta
mas o professor fala p fazer isso? nao eh p usar uma api externa?
Resposta
Sim! E você está certa em questionar. O professor exige uma API externa, mas não determina qual plataforma ou serviço devemos utilizar.
Conferi novamente o PDF oficial da Global Solution, páginas 59 e 61. Ele exige expressamente:
Consumir API externa com operações completas de CRUD: criação, consulta, atualização e exclusão de registros.
Então, o MockAPI serve?
Sim! O MockAPI é um serviço externo que disponibiliza uma API REST para armazenar e manipular registros. Ele pode atender ao requisito, desde que implementemos e testemos as quatro operações

pergunta
confira se esta certa https://6afddab43a0e70bc8d52e73a.mockapi.io/medications
Perfeito!! 🎉 Sua API foi criada corretamente e está respondendo!

Pergunta
Medicamento cadastrado com sucesso.
Medicamentos cadastrados  2 registro(s)
Nenhum medicamento cadastrado ainda 
pq esta dando que eu registrei 2 medicamentos que esta certo pq eu realmente registrei, mas nn esta retornando na aba de baixo, onde deveriam estar listados todos os medicamentos que eu ja cadastrei?
Resposta
Precisamos verificar se o problema está na comunicação entre o cadastro e a consulta da MockAPI.
O comportamento indica que:
- O POST está funcionando (cadastro retorna sucesso).
- O contador está recebendo os dois registros.
- A listagem pode estar fazendo uma requisição GET incorreta ou não atualizando depois do cadastro.
Me manda estes arquivos:
1. medicationApi.js — serviço que faz as requisições para a MockAPI.
2. useMedicationRecords.js — hook que controla os medicamentos.
3. O componente que exibe a lista de medicamentos cadastrados.
Vou conferir o fluxo POST → GET → atualização da tela e te passar exatamente o que substituir, preservando o restante do iPills.
ACHEI O ERRO! Está exatamente no seu MedicationList.jsx. 😂

Você escreveu:
if (!medications.lenght) {


Mas o correto é:
if (!medications.length) {


Você escreveu lenght em vez de length. Como essa propriedade não existe, o JavaScript retorna undefined, e a condição acaba sendo verdadeira mesmo quando existem medicamentos cadastrados.


## 3. Análise crítica

A utilização da Inteligência Artificial contribuiu para agilizar o desenvolvimento do projeto, principalmente na compreensão de conceitos, na organização dos arquivos e na resolução de problemas técnicos.

A ferramenta também facilitou o entendimento da comunicação entre o front-end e uma API externa.

Entretanto, foi necessário analisar as respostas, compreender os códigos sugeridos e realizar adaptações para atender às necessidades específicas do iPills.

A Inteligência Artificial apresentou algumas limitações, como sugestões que precisavam ser adaptadas à estrutura existente do projeto e orientações que dependiam de testes no ambiente real.

Concluímos que a IA foi uma ferramenta de apoio importante, mas não substituiu a participação da equipe, a compreensão dos conceitos e a validação do funcionamento da aplicação.