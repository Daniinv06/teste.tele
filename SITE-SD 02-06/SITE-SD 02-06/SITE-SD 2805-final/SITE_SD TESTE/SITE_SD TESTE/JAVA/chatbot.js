
function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (message === "") return;

  addMessage("user", message);
  input.value = "";

  // Simulação de resposta do bot
  setTimeout(() => {
    const response = getBotResponse(message);
    addMessage("bot", response);
  }, 500);
}

function addMessage(sender, text) {
  const chatBox = document.getElementById("chat-box");
  const messageDiv = document.createElement("div");
  messageDiv.className = sender;
  messageDiv.textContent = text;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
  const msg = input.toLowerCase();

  if (msg.includes("oi") || msg.includes("olá")) return "Olá! Como posso ajudar você hoje?";
  if (msg.includes("tudo bem")) return "Tudo ótimo! E com você?";
  if (msg.includes("qual é o seu nome") || msg.includes("seu nome")) return "Eu sou um chatbot simples feito em JavaScript!";
  if (msg.includes("o que você faz") || msg.includes("para que serve")) return "Eu respondo perguntas básicas e posso ser personalizado para várias tarefas!";
  if (msg.includes("adeus") || msg.includes("tchau")) return "Até logo! Foi bom conversar com você.";
  if (msg.includes("obrigado") || msg.includes("valeu")) return "De nada! 😊";
  if (msg.includes("hora") || msg.includes("horas")) return `Agora são ${new Date().toLocaleTimeString()}.`;
  if (msg.includes("data") || msg.includes("dia de hoje")) return `Hoje é ${new Date().toLocaleDateString()}.`;
  if (msg.includes("piada")) return "Por que o JavaScript foi ao médico? Porque estava com um 'bug'! 🐞";
  if (msg.includes("html")) return "HTML é a linguagem de marcação usada para estruturar páginas web.";
  if (msg.includes("css")) return "CSS é usado para estilizar elementos HTML, como cores, fontes e layouts.";
  if (msg.includes("javascript")) return "JavaScript é uma linguagem de programação usada para tornar páginas web interativas.";
  if (msg.includes("como você foi feito")) return "Fui feito com HTML, CSS e JavaScript!";
  if (msg.includes("ajuda") || msg.includes("como usar")) return "Digite uma pergunta ou diga 'oi' para começar!";
  if (msg.includes("saúde digital")) return "Saúde Digital é uma área que combina tecnologia e cuidados de saúde para melhorar a eficiência e a qualidade dos serviços de saúde.";
  if (msg.includes("tecnologia na saúde")) return "A tecnologia na saúde inclui o uso de dispositivos médicos, telemedicina, aplicativos de saúde e inteligência artificial para melhorar o atendimento ao paciente.";
  if (msg.includes("exemplos de tecnologia na saúde")) return "Alguns exemplos incluem wearables para monitoramento de saúde, aplicativos de telemedicina, sistemas de prontuário eletrônico e inteligência artificial para diagnósticos.";
  if (msg.includes("benefícios da saúde digital")) return "Os benefícios da saúde digital incluem melhor acesso aos cuidados de saúde, monitoramento remoto de pacientes, redução de custos e melhoria na gestão de dados clínicos.";
  if (msg.includes("como a tecnologia pode ajudar na saúde")) return "A tecnologia pode ajudar na saúde através de dispositivos de monitoramento, telemedicina, inteligência artificial para diagnósticos e aplicativos de saúde que promovem hábitos saudáveis.";
  if (msg.includes("o que é saúde digital")) return "Saúde Digital é a integração de tecnologia e cuidados de saúde, visando melhorar a eficiência, acessibilidade e qualidade dos serviços de saúde.";
  if (msg.includes("saúde digital e telessaúde")) return "Sim, a telessaúde é uma parte importante da saúde digital, permitindo consultas médicas à distância e monitoramento remoto de pacientes.";
  if (msg.includes("saídas profissionais em saúde digital")) return "Um licenciado em saúde digital pode trabalhar em hospitais, clínicas, empresas de tecnologia médica, startups, instituições públicas e organismos internacionais, em áreas como gestão de sistemas de informação, análise de dados clínicos e desenvolvimento de soluções digitais.";
  if (msg.includes("experiências fora das aulas em saúde digital")) return "Fora das aulas, estudantes de saúde digital podem fazer estágios, participar de projetos de investigação, hackathons, voluntariado em organizações de saúde e desenvolver projetos próprios relacionados à tecnologia e saúde.";
  if (msg.includes("papel dos licenciados em saúde digital na sociedade")) return "Os licenciados em Saúde Digital podem intervir na sociedade desenvolvendo soluções tecnológicas para melhorar o acesso e a eficiência dos cuidados de saúde, liderando projetos de telessaúde, promovendo campanhas de saúde digital e contribuindo para a inovação no setor de saúde.";

  if (msg.includes("em que aspetos a tecnologia pode auxiliar a saúde das pessoas")) return "A tecnologia tem um papel cada vez mais importante na área da saúde, contribuindo para melhorar a qualidade de vida das pessoas e a eficiência dos sistemas de saúde. Pode auxiliar através do desenvolvimento de dispositivos de monitoramento remoto, como os wearables, que permitem acompanhar sinais vitais e outras informações importantes em tempo real. Também apoia o diagnóstico precoce por meio da inteligência artificial, que pode analisar exames médicos com elevada precisão. Além disso, facilita o acesso a cuidados médicos, através de consultas online, plataformas de telessaúde e aplicações móveis. Outro aspeto fundamental é a gestão segura e eficiente dos dados clínicos, tornando o processo mais rápido, organizado e confiável. A tecnologia também desempenha um papel na prevenção de doenças, promovendo hábitos saudáveis com o uso de apps e campanhas digitais.";
  if (msg.includes("o que é saúde digital")) return "A saúde digital é uma área interdisciplinar que combina conhecimentos em saúde, tecnologia e informação, com o objetivo de melhorar os cuidados de saúde e tornar os serviços mais acessíveis, personalizados e eficientes. Esta área inclui várias soluções tecnológicas aplicadas à saúde, como sistemas de informação hospitalar, registos eletrónicos de saúde, inteligência artificial, análise de grandes volumes de dados (big data), aplicações móveis, plataformas de telessaúde, entre outras. A saúde digital procura transformar a forma como os cuidados são prestados, promovendo uma medicina mais preventiva, preditiva e centrada no paciente.";
  if (msg.includes("saúde digital tem a ver com telessaúde")) return "Sim, a telessaúde é uma das componentes da saúde digital. Telessaúde refere-se à prestação de serviços de saúde à distância, utilizando tecnologias de informação e comunicação. Isso inclui consultas médicas por videochamada, telemonitorização de pacientes em casa, envio de exames ou relatórios pela internet, entre outras soluções. A telessaúde permite ultrapassar barreiras geográficas, reduzindo o tempo de espera e facilitando o acesso aos cuidados de saúde, especialmente em zonas remotas ou com poucos recursos. Portanto, a telessaúde está diretamente integrada no universo da saúde digital.";
  if (msg.includes("que saídas tem um licenciado em saúde digital")) return "Um licenciado em saúde digital tem várias saídas profissionais em áreas que combinam saúde, tecnologia e inovação. Pode trabalhar em hospitais, clínicas, centros de saúde, empresas de tecnologia médica, seguradoras de saúde, startups, instituições públicas ou organismos internacionais. As funções podem incluir: gestão de sistemas de informação em saúde, análise de dados clínicos, desenvolvimento de aplicações ou plataformas digitais para a saúde, apoio técnico à implementação de tecnologias em unidades de saúde, coordenação de projetos de telessaúde e transformação digital, e também na área da investigação científica e desenvolvimento de novas soluções tecnológicas.";
  if (msg.includes("que tipo de experiencia se pode ter fora aulas em sd")) return "Fora do ambiente académico, os estudantes de saúde digital podem obter experiências enriquecedoras que complementam a sua formação. Estas experiências incluem a realização de estágios em hospitais, centros de saúde, empresas de tecnologia ou startups ligadas à saúde. Também podem participar em projetos de investigação, hackathons, concursos de inovação tecnológica e eventos científicos. Outra possibilidade é envolver-se em voluntariado em projetos comunitários ou em organizações que usem tecnologias para melhorar os cuidados de saúde. Além disso, é possível desenvolver projetos próprios, como aplicações móveis ou plataformas online, ou frequentar cursos extracurriculares em áreas como programação, inteligência artificial, ciência de dados ou design de experiência do utilizador (UX).";
  if (msg.includes("em que aspetos os licenciados de sd podem intervir na sociedade no futuro")) return "Os licenciados em Saúde Digital têm um papel fundamental no futuro da sociedade. Eles podem contribuir para tornar os sistemas de saúde mais eficientes, acessíveis e centrados nas necessidades dos pacientes. Poderão liderar projetos que promovam o acesso a cuidados médicos em regiões isoladas, desenvolver soluções para monitoramento remoto de doenças crónicas, ajudar a prevenir doenças com base na análise de dados e promover campanhas de saúde digital para a população. Também terão a capacidade de apoiar a transição digital dos hospitais e serviços de saúde, tornando-os mais integrados e sustentáveis. Além disso, poderão desenvolver inovações que respondam a desafios globais, como pandemias, envelhecimento da população e escassez de profissionais de saúde, contribuindo para uma sociedade mais saudável e conectada.";


  return "Desculpe, não entendi. Pode reformular sua pergunta?";
}

// ...existing code...

function quickQuestion(question) {
  addMessage("user", question);
  setTimeout(() => {
    const response = getBotResponse(question);
    addMessage("bot", response);
  }, 500);
}

// ...existing code...
