Entrega 2:

Identificação do grupo:

Leandro Cosme – 2024111654

Miguel Medeiros - 2024109933

Tomás Pacheco – 2024111792

Nesta segunda fase do projeto, o foco incidiu sobre a melhoria da experiência do utilizador (UX) através da interatividade, animações e validação de dados. Para garantir boas práticas de desenvolvimento e manutenção, o código JavaScript foi modularizado e separado em vários ficheiros distintos. As principais implementações foram:

1. Animações de Interface (GSAP e Scroll):
Entrada Inicial (GSAP): Utilizou-se a biblioteca GSAP (GreenSock Animation Platform) para criar uma timeline cinematográfica na Hero Section, animando sequencialmente a imagem, o título, o texto e o botão de "Saber Mais" assim que a página carrega.
Fade-in no Scroll: Desenvolveu-se um script personalizado que calcula a posição dos elementos em relação à janela do navegador (getBoundingClientRect). À medida que o utilizador faz scroll para baixo, as secções da página (cartões de investigação, parceiros, formulário) surgem de forma suave, guiando a leitura.

2. Visualização de Dados Interativa (D3.js):
Foi implementada uma secção de "Estatísticas" recorrendo à biblioteca D3.js para gerar um gráfico de barras dinâmico que ilustra a força científica do Centro (número de investigadores por área).
O gráfico possui interatividade avançada: é desenhado com uma animação de crescimento apenas quando o utilizador faz scroll até à secção correspondente, e inclui eventos de hover (passar o rato) que destacam a barra selecionada e revelam o valor numérico exato através de um tooltip.

3. Validação de Dados (Formulário de Newsletter):
O formulário de subscrição foi dotado de validação client-side (do lado do cliente). O script previne o envio acidental (preventDefault) e verifica se os campos obrigatórios estão preenchidos, validando também o formato do e-mail (presença de "@" e ".").
O utilizador recebe feedback visual imediato através de mensagens de erro específicas por campo, ou de uma mensagem de sucesso temporária (recorrendo a setTimeout) caso a subscrição seja válida, limpando o formulário de seguida.

4. Interações de Navegação e UI:
Botão "Saber Mais": Implementação de um sistema de toggle na secção inicial que revela ou oculta um texto descritivo adicional, adaptando o texto do próprio botão dinamicamente ("Saber Mais" / "Ler Menos"). O CSS foi adaptado (min-height) para suportar esta expansão sem distorcer o layout.
Botão "Voltar ao Topo": Criação de um botão flutuante que surge de forma inteligente apenas após o utilizador descer uma quantidade substancial na página (>300px), permitindo um regresso suave (behavior: "smooth") ao início do site com um único clique.



Entrega 1:
Identificação do grupo:
António Reis – 2022113330

Leandro Cosme – 2024111654

Tomás Pacheco – 2024111792

Identidade Visual:
A identidade visual é institucional e sóbria. A paleta principal utiliza o azul e o branco propositadamente por serem as cores dos Açores, reforçando a forte identidade regional do centro. A tipografia escolhida é uma sans-serif arredondada, que confere um aspeto moderno, acessível e académico.

Evolução (Wireframe, Mockup e Implementação):
O wireframe definiu uma estrutura básica de blocos horizontais. No mockup, aplicou-se a identidade visual e dividiu-se a secção inicial (texto à esquerda, placeholder de imagem à direita), mantendo as "Áreas de Investigação" como um bloco de texto único e um menu dropdown. Na implementação final, o menu passou a links diretos horizontais. A alteração principal ocorreu nas "Áreas de Investigação", que evoluíram de um texto corrido para três colunas detalhadas com fundo azul, melhorando a organização visual, e adicionou-se a fotografia real da UAc.

Acessibilidade e Responsividade:
Assegurou-se um rácio de alto contraste (texto branco sobre fundo azul escuro) para utilizadores com dificuldades visuais. Para a responsividade, as três colunas de investigação ("Doenças Cardiovasculares", "Neurociências...", "Genética...") foram planeadas com CSS Flexbox/Grid para colapsarem numa única coluna vertical em ecrãs de dispositivos móveis, adaptando-se também as margens e tamanho de fonte.



Documento de Benchmarking
Centros Analisados na Rede de Centros Académicos Clínicos em Portugal:

CAC-CL (Centro Académico Clínico Católica Luz) - https://cac-cl.pt/pt/

CCAL (Centro Clínico Académico de Lisboa) - https://ccal.pt/

Análise dos Centros:

CAC-CL (Centro Académico Clínico Católica Luz)

Estrutura Inicial e Estilo Visual: Apresenta um design moderno, com um estilo híbrido entre o académico e o empresarial. A página inicial organiza-se de forma muito visual e clara em três pilares principais: Prática Clínica, Ensino, e Investigação & Inovação.

Elementos de Confiança e Investigação: A credibilidade é imediatamente estabelecida por ser o primeiro centro clínico académico não-governamental em Portugal. Dá grande destaque à 	investigação da Católica Medical School e a investigadores com projetos de relevo (ex: financiamento do European Research Council).

Parceiros e Oportunidades: Destaca parceiros de grande peso: Universidade Católica Portuguesa, Hospital da Luz e União das Misericórdias Portuguesas. As "Oportunidades" estão muito focadas 	na formação avançada, como Ensino Executivo, Mestrados e Pós-Graduações.

CCAL (Centro Clínico Académico de Lisboa)

Estrutura Inicial e Estilo Visual: Possui uma estrutura mais institucional e pragmática. O estilo visual foca-se bastante na transparência de dados, exibindo métricas e números logo na página inicial.

Elementos de Confiança e Investigação: Transmite confiança ao mostrar resultados diretos e práticos do seu apoio, como o número de concursos realizados e os montantes (ex: 50.000€) 	atribuídos a publicações. A investigação destaca recursos práticos, como o acesso ao Biobanco.

Parceiros e Oportunidades: Evidencia um consórcio vasto que integra várias ULS, o IPO de Lisboa, a NOVA Medical School e a ENSP. Em contraste com o CAC-CL, as "Oportunidades" focam-se quase exclusivamente no financiamento direto a investigadores e na atribuição de bolsas.


Influência no Design da Landing Page do CACA:
A análise destes dois centros trouxe perspetivas muito úteis. Do CAC-CL, observámos que uma estrutura bem segmentada e com design moderno ajuda a desconstruir o peso institucional, pelo que adotámos essa clareza visual no CACA (usando as caixas coloridas para as Áreas de Investigação). Do CCAL, retirámos a excelente prática de mostrar apoio real à investigação. Por isso, na secção "Oportunidades" do nosso projeto, decidimos evitar textos puramente teóricos e incluímos chamadas diretas para "bolsas de investigação" e "estágios clínicos", à semelhança da abordagem pragmática do CCAL, mas sem adotar o aspeto demasiado governamental ou burocrático, mantendo a página convidativa.
