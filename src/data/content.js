export const businessInfo = {
  name: "Guincho e Munck HARLEY PAIVA",
  city: "Manaus",
  state: "AM",
  fullLocation: "Manaus - AM e interior do Amazonas",
  phoneDisplay: "(92) 99116-0000",
  phoneRaw: "5592991160000",
  phoneCallUrl: "tel:+5592991160000",
  whatsappUrl: "https://wa.me/5592991160000?text=Ol%C3%A1!%20Preciso%20de%20guincho%20ou%20caminh%C3%A3o%20munck%20em%20Manaus%20ou%20interior.%20Poderia%20me%20ajudar%20com%20um%20or%C3%A7amento%3F",
  availability: "24 Horas por dia, 7 dias por semana",
  addressNotes: "Base com pronta resposta em Manaus - AM (Atendimento na capital e interior do Amazonas)",
  // Dados para preenchimento posterior pelo cliente
  pendingInfo: {
    cnpj: "A preencher pelo cliente (Ex: 00.000.000/0001-00)",
    enderecoBase: "Manaus - AM (Endereço físico detalhado a confirmar pelo proprietário)",
    email: "contato@guinchoharleypaiva.com.br (A confirmar)",
  }
};

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Área de Atendimento", href: "#atendimento" },
  { label: "Sobre", href: "#sobre" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Dúvidas", href: "#duvidas" },
  { label: "Contato", href: "#contato" },
];

export const mainServicesHighlights = [
  {
    title: "Guincho Plataforma",
    description: "Serviço de remoção e transporte de veículos com rapidez e segurança.",
    icon: "Truck"
  },
  {
    title: "Aluguel de Caminhão Munck",
    description: "Serviço para movimentação, içamento e transporte de cargas pesadas.",
    icon: "ShieldCheck"
  },
  {
    title: "Transporte e Remoção",
    description: "Transporte e remoção ágil e segura de Carros, Máquinas e Equipamentos.",
    icon: "Award"
  }
];

export const vehiclesServed = [
  {
    id: "guincho-plataforma",
    name: "Guincho Plataforma",
    subtitle: "Remoção e transporte de veículos",
    description: "Serviço de remoção e transporte de veículos com rapidez e segurança. Plataforma basculante hidráulica ideal para socorro sem danos.",
    image: "/images/vehicle-carros-novo.png",
    whatsappMsg: "Olá! Preciso de serviço de Guincho Plataforma em Manaus/AM."
  },
  {
    id: "caminhao-munck",
    name: "Caminhão Munck",
    subtitle: "Içamento e cargas pesadas",
    description: "Serviço para movimentação, içamento e transporte de cargas pesadas. Caminhão munck moderno com operador capacitado.",
    image: "/images/vehicle-caminhoes-novo.png",
    whatsappMsg: "Olá! Preciso de Aluguel de Caminhão Munck em Manaus ou interior do Amazonas."
  },
  {
    id: "carros",
    name: "Carros",
    subtitle: "Transporte e remoção",
    description: "Transporte e remoção de carros de passeio, sedans, esportivos, rebaixados e SUVs com rampa nivelada e segurança total.",
    image: "/images/vehicle-caminhonetes-novo.png",
    whatsappMsg: "Olá! Preciso de transporte e remoção para carro em Manaus ou interior."
  },
  {
    id: "maquinas",
    name: "Máquinas",
    subtitle: "Transporte e remoção",
    description: "Transporte e remoção de máquinas pesadas, industriais, agrícolas, tratores e geradores com capacidade para cargas robustas.",
    image: "/images/vehicle-utilitarios-novo.png",
    whatsappMsg: "Olá! Preciso de transporte e remoção para máquinas em Manaus/AM."
  },
  {
    id: "equipamentos",
    name: "Equipamentos",
    subtitle: "Transporte e remoção",
    description: "Transporte e remoção de equipamentos de pequeno, médio e grande porte, com amarração especializada e içamento seguro.",
    image: "/images/vehicle-vans-novo.png",
    whatsappMsg: "Olá! Preciso de transporte e remoção para equipamentos em Manaus ou interior."
  },
  {
    id: "cargas-pesadas",
    name: "Cargas Pesadas",
    subtitle: "Movimentação especializada",
    description: "Movimentação, içamento e transporte de cargas pesadas diversas em Manaus e em todas as cidades do interior do Amazonas.",
    image: "/images/vehicle-motos-novo.png",
    whatsappMsg: "Olá! Preciso de movimentação de cargas pesadas com caminhão munck."
  },
];

export const regionalCities = [
  { name: "Manaus", time: "10 a 25 min", status: "Base Principal (Pronta Resposta)", isHub: true },
  { name: "Iranduba", time: "25 a 40 min", status: "Atendimento Rápido", isHub: false },
  { name: "Manacapuru", time: "45 a 60 min", status: "Atendimento Rodoviário", isHub: false },
  { name: "Presidente Figueiredo", time: "1h a 1h30", status: "Atendimento Rodoviário", isHub: false },
  { name: "Rio Preto da Eva", time: "50 min a 1h15", status: "Atendimento Rodoviário", isHub: false },
  { name: "Itacoatiara", time: "Sob consulta", status: "Viagens Programadas", isHub: false },
  { name: "Careiro da Várzea", time: "Sob consulta", status: "Atendimento Regional", isHub: false },
  { name: "Interior do Amazonas", time: "Sob agendamento", status: "Cobertura Estadual", isHub: false },
];

export const highwaysCovered = [
  { name: "AM-070 (Rodovia Manoel Urbano)", desc: "Ligação Manaus a Iranduba e Manacapuru" },
  { name: "BR-174 (Manaus – Boa Vista)", desc: "Acesso a Presidente Figueiredo e região norte" },
  { name: "AM-010 (Manaus – Itacoatiara)", desc: "Acesso a Rio Preto da Eva e Itacoatiara" },
  { name: "Av. Torquato Tapajós / Av. das Torres", desc: "Principais vias e corredores expressos de Manaus" },
  { name: "Distrito Industrial / Porto de Manaus", desc: "Movimentação ágil de máquinas e equipamentos" },
];

export const serviceDifferentials = [
  {
    title: "Atendimento 24 Horas Real",
    desc: "Dia, noite, finais de semana ou feriados. Nossa equipe está sempre pronta para o seu socorro imediato em Manaus e interior.",
    icon: "Clock",
  },
  {
    title: "Guincho e Munck Modernos",
    desc: "Frota revisada para remoção de veículos com segurança e içamento de cargas sem qualquer dano.",
    icon: "ShieldCheck",
  },
  {
    title: "Preço Justo e Transparente",
    desc: "Orçamento claro antes da partida da equipe. Sem surpresas ou taxas abusivas no destino.",
    icon: "BadgePercent",
  },
  {
    title: "Pagamento Facilitado",
    desc: "Aceitamos PIX, cartões de crédito e débito direto no local do atendimento para sua comodidade.",
    icon: "CreditCard",
  },
  {
    title: "Operadores Especializados",
    desc: "Profissionais qualificados em içamento munck, amarração técnica e resgate de veículos, máquinas e equipamentos.",
    icon: "Award",
  },
  {
    title: "Manaus e Interior do AM",
    desc: "Pronta resposta na capital e deslocamento especializado para municípios e rodovias de todo o Amazonas.",
    icon: "MapPin",
  },
];

export const faqs = [
  {
    question: "Como faço para solicitar guincho ou caminhão munck agora?",
    answer: "Basta clicar no botão de 'Ligar Agora' no número (92) 99116-0000 ou enviar uma mensagem no WhatsApp. Informe qual serviço você precisa (guincho plataforma, munck ou transporte de máquinas/equipamentos) e sua localização para passarmos o orçamento e tempo estimado na hora."
  },
  {
    question: "Quanto tempo demora para a equipe chegar em Manaus?",
    answer: "Em Manaus, o tempo médio costuma ser de 15 a 30 minutos dependendo do trânsito e bairro. Para rodovias e cidades do interior (Iranduba, Manacapuru, Presidente Figueiredo, Rio Preto da Eva), a equipe é despachada imediatamente pela rota mais rápida."
  },
  {
    question: "Vocês fazem içamento e transporte de cargas pesadas?",
    answer: "Sim! Trabalhamos com Aluguel de Caminhão Munck para movimentação, içamento e transporte de cargas pesadas, máquinas industriais, contêineres e geradores com total segurança e amarração técnica."
  },
  {
    question: "Quais são as formas de pagamento aceitas?",
    answer: "Aceitamos PIX e cartões de débito e crédito (com maquininha levada pela equipe até o local do atendimento)."
  },
  {
    question: "O serviço funciona de madrugada, domingo e feriado?",
    answer: "Sim, o Guincho e Munck HARLEY PAIVA opera 24 horas por dia, 365 dias por ano. Você pode nos contatar a qualquer momento."
  },
  {
    question: "Vocês atendem no interior do Amazonas e rodovias?",
    answer: "Sim! Atendemos Manaus - AM e todo o interior do Amazonas, incluindo AM-070, BR-174, AM-010 e transportes intermunicipais programados. Consulte disponibilidade e valores pelo WhatsApp."
  }
];
