export interface StoreItem {
  id: string;
  name: string;
  category: "todos" | "vips" | "veiculos" | "extras";
  price: number;
  image?: string;
  featured?: boolean;
  description: string;
  isCoins?: boolean; // Para pacotes com moedas no jogo
}

export const storeCategories = [
  { id: "todos", label: "Todos os Itens" },
  { id: "vips", label: "Pacotes VIP" },
  { id: "veiculos", label: "Veículos" },
  { id: "extras", label: "Armazenamento & Extras" },
];

export const storeConfig = {
  isOpen: false, // 🔒 MUDE PARA 'true' QUANDO O SERVIDOR ABRIR!
  currencySymbol: "R$",
  discordTicketUrl: "https://discord.gg/6F5WzMf2p7",
  pixKey: "pix@outlandsurvival.com.br", // Substitua pela sua chave Pix real se desejar
};

export const storeCatalog: StoreItem[] = [
  {
    id: "1",
    name: "Pacote de Armamentos Tier 1",
    description: "Reúne tudo o que um verdadeiro sobrevivente precisa para dominar o caos inicial.",
    price: 250000,
    isCoins: true,
    image: "/images/shop/armas_1.png",
    category: "extras",
    featured: false,
  },
  {
    id: "2",
    name: "Pacote de Armamentos Tier 2",
    description: "Reúne tudo o que um verdadeiro sobrevivente precisa para dominar o caos em combates médios.",
    price: 250000,
    isCoins: true,
    image: "/images/shop/armas_2.png",
    category: "extras",
    featured: false,
  },
  {
    id: "3",
    name: "Pacote de Armamentos Tier 3",
    description: "Reúne armamento pesado e de alto calibre para sobreviventes de elite.",
    price: 250000,
    isCoins: true,
    image: "/images/shop/armas_3.png",
    category: "extras",
    featured: false,
  },
  {
    id: "4",
    name: "Armazenamento Extra +500",
    description: "Uma caixa de armazenamento reforçada com capacidade para +500 kg, ideal para guardar recursos, equipamentos e suprimentos extras no seu esconderijo.",
    price: 50,
    image: "/images/shop/bau_500.png",
    category: "extras",
    featured: false,
  },
  {
    id: "5",
    name: "Armazenamento Extra +1.000",
    description: "Uma caixa de armazenamento reforçada com capacidade para +1.000 kg, ideal para guardar recursos, armas e suprimentos raros.",
    price: 70,
    image: "/images/shop/bau_1000.png",
    category: "extras",
    featured: false,
  },
  {
    id: "6",
    name: "Armazenamento Extra +5.000",
    description: "A maior caixa de armazenamento blindada com capacidade massiva para +5.000 kg.",
    price: 120,
    image: "/images/shop/bau_5000.png",
    category: "extras",
    featured: false,
  },
  {
    id: "7",
    name: "Mudança de Aparência",
    description: "Permite alterar completamente sua aparência, podendo redefinir rosto, cabelo, corpo e estilo sempre que desejar.",
    price: 80,
    image: "/images/shop/resetar_aparencia.png",
    category: "extras",
    featured: false,
  },
  {
    id: "8",
    name: "Alterar Nome",
    description: "Permite alterar o nome de registro do seu personagem, redefinindo sua identidade dentro do servidor.",
    price: 50,
    image: "/images/shop/alterar_nome.png",
    category: "extras",
    featured: false,
  },
  {
    id: "9",
    name: "Placa Personalizada",
    description: "Permite criar uma placa personalizada para seu veículo, escolhendo números, letras e combinações exclusivas.",
    price: 50,
    image: "/images/shop/placa.png",
    category: "extras",
    featured: false,
  },
  {
    id: "10",
    name: "Pacote Nômade",
    description: `<b>Vantagens de Sobrevivência</b><br/>• Acesso à loja de roupas sem necessidade de item<br/>• Acesso ao tatuador sem necessidade de item<br/>• Acesso ao barbeiro sem necessidade de item<br/>• +3 vagas adicionais na garagem<br/><br/><b>Equipamentos Recebidos</b><br/>1x Vara de Pesca | 50x Iscas | 2x Pistolas Triturador | 200x Munições | 2x Foice Demoníaca | 3x Mochila Pequena | 5x Comidas Especiais | 5x Bebidas Especiais | 5x Energético | 10x Cigarros | 1x Isqueiro | 2x Pneus | 2x Kit de Reparos Básico | 1x Moto Cliffhanger<br/><br/><b>Suprimentos Médicos</b><br/>Ataduras x8 | Kit Médico x1 | Antídoto Alimentar x1 | Tratamento de Fraturas x1 | Multivitamínicos x1 | Seakalm x1<br/><br/><b>Duração e Garantia</b><br/>Benefícios válidos por 30 dias. Proteção de Wipe garantida.`,
    price: 100,
    image: "/images/shop/nomade.png",
    category: "vips",
    featured: true,
  },
  {
    id: "11",
    name: "Pacote Forasteiro",
    description: `<b>Vantagens de Sobrevivência</b><br/>• Acesso à loja de roupas, tatuador e barbeiro livres<br/>• +5 vagas adicionais na garagem<br/><br/><b>Equipamentos Recebidos</b><br/>1x Vara de Pesca Avançada | 50x Iscas | 2x Revolver Pulmão de Ferro | 250x Munições de Pistola | 1x SMG | 150x Munições de SMG | 1x Foice Demoníaca | 1x Katana | 1x Bastão Infernal | 2x Mochila Média | 5x Comidas e Bebidas Especiais | 5x Energético | 20x Cigarros | 4x Pneus | 3x Kit de Reparos Avançados | 1x Elevador Hidráulico | 1x Veículo Rat Bike<br/><br/><b>Suprimentos Médicos</b><br/>Ataduras x12 | Kit Médico x2 | Antídoto x2 | Anti Cólera x1 | Anti Rad x1 | Adrenalina x1 | Remédios Diversos<br/><br/><b>Duração</b><br/>30 dias com Proteção de Wipe.`,
    price: 220,
    image: "/images/shop/forasteiro.png",
    category: "vips",
    featured: false,
  },
  {
    id: "12",
    name: "Pacote Mercenário",
    description: `<b>Vantagens de Sobrevivência</b><br/>• Acesso livre a lojas de estilo<br/>• +5 vagas adicionais na garagem<br/><br/><b>Equipamentos Recebidos</b><br/>2x Vara de Pesca Avançada | 80x Iscas | 4x Pistolas Triturador | 350x Munições Pistola | 2x SMG | 250x Munições SMG | 2x Rifle AK-47 | 250x Munições Rifle | 1x Foice Demoníaca | 1x Katana de Fogo | 1x Katana de Gelo | 2x Mochila Grande | 1x Veículo Sanctus | 1x Veículo Rebel | 3x Rádio<br/><br/><b>Suprimentos Médicos</b><br/>Ataduras x15 | Kit Médico x3 | Antídotos x3 | Anti Cólera x2 | Anti Rad x2 | Adrenalina x2<br/><br/><b>Duração</b><br/>30 dias com Proteção de Wipe.`,
    price: 340,
    image: "/images/shop/mercenario.png",
    category: "vips",
    featured: false,
  },
  {
    id: "13",
    name: "Pacote Renegado",
    description: `<b>Vantagens de Sobrevivência</b><br/>• Estilo livre sem itens (Roupas, barbeiro, tatuador)<br/>• +8 vagas adicionais na garagem<br/><br/><b>Equipamentos Recebidos</b><br/>3x Vara Pesca Avançada | 100x Iscas | 2x Pistolas Remendo (450x munição) | 2x SMG Retalhador (350x munição) | 2x Rifle Bettina (350x munição) | Foice Demoníaca, Machado de Placas, Espada e Machado Mortal | 3x Mochila Grande | 1x Moto Serra | 1x Britadeira | 6x Rádio | 1x Veículo zr380 | 1x Veículo Baller6 | 1x Caminhão Wastelander<br/><br/><b>Suprimentos Médicos</b><br/>Ataduras x20 | Kit Médico x5 | Anti Rad x5 | Adrenalina x5<br/><br/><b>Duração</b><br/>30 dias com Proteção de Wipe.`,
    price: 470,
    image: "/images/shop/renegado.png",
    category: "vips",
    featured: false,
  },
  {
    id: "14",
    name: "Pacote Hunter",
    description: `<b>Vantagens de Sobrevivência de Elite</b><br/>• Acesso ao Ghillie Suit exclusivo via /suit Hunter<br/>• Acesso ao Capacete com Visão Noturna via /nvision<br/><br/><b>Armamentos e Equipamentos</b><br/>3x Espingarda Winchester | 2x Escopeta Caçadora | 1x Crossbow | 2x Faca Improvisada | 1x Picareta | 1x Machado Pequeno | 50x Munições de Crossbow | 100x Munições de Musket | 80x Munições de Escopeta | 2x Mochila Média | 3x Fogueira | 2x Rádio | Veículo Blista Caçador<br/><br/><b>Suprimentos Médicos</b><br/>Ataduras x10 | Kit Médico x2 | Antídoto x1 | Anti Cólera x1 | Adrenalina x1<br/><br/><b>Duração e Garantia</b><br/>30 dias a partir da ativação com Proteção de Wipe inclusa.`,
    price: 600,
    image: "/images/shop/hunter.png",
    category: "vips",
    featured: true,
  },
];