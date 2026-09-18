import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";

export default function FaqPage() {
  const faqs = [
    { id: "1", title: "O que é o Outland Survival?", content: "Servidor FiveM de sobrevivência pós-apocalíptica focado em extração, escassez de recursos e perigo constante." },
    { id: "2", title: "Preciso de GTA V original?", content: "Sim, é obrigatório ter o GTA V instalado no computador para que o FiveM opere normalmente." },
    { id: "3", title: "Como conecto no servidor?", content: "Clique no botão JOGAR AGORA no topo do site com o FiveM aberto ou use o comando connect no F8." },
  ];
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <SectionHeading badge="SUPORTE" title="DÚVIDAS FREQUENTES" description="Perguntas comuns de novos sobreviventes." />
      <Accordion items={faqs} />
    </div>
  );
}