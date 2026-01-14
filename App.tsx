
import React, { useState, useEffect } from 'react';

// --- COMPONENTS ---

const TimerHeader = () => {
  const [timeLeft, setTimeLeft] = useState(670); // ~11 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-[#FF0000] text-white py-2.5 px-4 sticky top-0 z-50 flex justify-center items-center gap-3 font-extrabold shadow-[0_4px_15px_rgba(255,0,0,0.3)] border-b border-white/20">
      <div className="bg-white text-[#FF0000] px-2 py-0.5 rounded text-lg min-w-[65px] text-center tabular-nums">
        {formatTime(timeLeft)}
      </div>
      <div className="flex items-center gap-1.5 animate-pulse">
        <i className="fa-solid fa-clock-rotate-left text-sm"></i>
        <span className="text-xs uppercase tracking-[0.1em] drop-shadow-sm">Oferta por tempo limitado</span>
      </div>
    </div>
  );
};

const Section = ({ children, className = "", id }: { children?: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`max-w-xl mx-auto px-6 py-8 ${className}`}>
    {children}
  </section>
);

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-col items-center relative ${className}`}>
    <div className="absolute inset-0 bg-[#EAB308]/30 blur-3xl rounded-full -z-10 animate-pulse"></div>
    <div className="relative bg-white p-3 rounded-full shadow-2xl border border-[#EAB308]/20 flex items-center justify-center transform transition-transform hover:scale-110 duration-300 overflow-hidden">
      <img 
        src="https://i.ibb.co/Rp2VzvBJ/Chat-GPT-Image-9-de-jan-de-2026-00-35-43.png" 
        alt="Viva de Roupas Logo" 
        className="w-20 h-20 object-contain"
      />
    </div>
    <div className="mt-4 flex flex-col items-center">
      <h2 className="text-[#EAB308] font-black text-2xl uppercase tracking-[0.2em] leading-none drop-shadow-sm">
        Viva <span className="font-light opacity-80">de</span> Roupas
      </h2>
      <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-[#EAB308] to-transparent mt-2 opacity-80"></div>
    </div>
  </div>
);

const Hero = () => (
  <Section className="text-center">
    <div className="flex justify-center mb-10">
      <Logo />
    </div>
    <h1 className="text-lg md:text-xl font-bold leading-tight mb-6">
      Tenha acesso aos <span className="text-[#EAB308]">fabricantes de moda feminina</span> confiáveis para dar início ao seu próprio negócio com peças de qualidade e preço baixo.
    </h1>
    <div className="relative mb-12 group flex justify-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#EAB308]/20 blur-[100px] rounded-full -z-10"></div>
      <img 
        src="https://i.ibb.co/3mQXvSh4/Chat-GPT-Image-1-de-jan-de-2026-19-04-01-removebg-preview.png" 
        alt="Viva de Roupas Destaque" 
        className="relative z-10 w-full max-w-md object-contain transition-all duration-700 hover:scale-[1.05]"
        style={{
          filter: 'drop-shadow(0 25px 35px rgba(0,0,0,0.15))',
          imageRendering: 'auto'
        }}
        onError={(e) => {
          const img = e.target as HTMLImageElement;
          img.src = "https://i.ibb.co/yY1h9qj/viva.png";
        }}
      />
    </div>
    <p className="text-sm font-medium mb-6">
      Receba agora a <span className="font-bold underline decoration-[#EAB308]">lista atualizada de fornecedores testados</span> para você <span className="font-bold">iniciar sua loja de moda feminina sem medo de cair em golpes. ✅</span>
    </p>
    <a 
       href="https://pay.cakto.com.br/c9rruds_618312"
       className="cta-pulse bg-[#22C55E] hover:bg-[#16A34A] text-white font-extrabold py-5 px-8 rounded-lg shadow-[0_4px_0_rgb(22,101,52)] active:shadow-none active:translate-y-1 transition-all w-full text-xl uppercase flex items-center justify-center gap-2 border-none cursor-pointer no-underline">
      TENHA ACESSO HOJE! <i className="fa-solid fa-lock"></i>
    </a>
  </Section>
);

const Features = () => (
  <div className="bg-gray-100 py-16 border-y border-gray-200">
    <Section className="max-w-2xl px-4 text-center">
      <h2 className="text-3xl font-extrabold mb-4 uppercase italic tracking-tighter leading-none">
        O Que Vai Encontrar No <span className="text-[#EAB308]">VIVA DE ROUPAS</span>?
      </h2>
      
      <div className="flex flex-col items-center">
        {/* Imagem do aparelho celular centralizada e menor */}
        <div className="flex justify-center mb-8">
          <img 
            src="https://i.ibb.co/hRkdXsY9/Chat-GPT-Image-1-de-jan-de-2026-19-41-45-removebg-preview.png" 
            alt="Destaque Viva de Roupas" 
            className="w-full max-w-[260px] h-auto object-contain animate-bounce-slow"
          />
        </div>

        {/* Listagem de benefícios centralizada com destaque nos checks */}
        <div className="w-full space-y-4 text-left">
          {[
            "Fornecedores de roupas por até R$ 7,50",
            "Moda Luxo, Fitness, Preço Único, Pijamas, Lingerie, Infantil...",
            "Fornecedores sem limite de compra mínima",
            "Como começar do ZERO!",
            "Estratégia de como Vender",
            "Como investir pouco no início",
            "Acesso imediato por e-mail."
          ].map((item, i) => (
            <div 
              key={i} 
              className="flex items-center gap-5 bg-white p-5 rounded-2xl shadow-sm border border-gray-50 transform transition-all duration-300 hover:shadow-md hover:translate-y-[-2px]"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center border-2 border-green-200">
                <i className="fa-solid fa-check text-green-600 text-lg font-black"></i>
              </div>
              <span className="font-bold text-sm md:text-base text-gray-700">{item}</span>
            </div>
          ))}
        </div>

        <div className="pt-8 mb-12">
          <p className="italic text-gray-400 text-xs uppercase tracking-widest font-bold">
            e muito mais...
          </p>
        </div>

        {/* --- SEÇÃO DE DEPOIMENTOS --- */}
        <div className="w-full pt-10 border-t border-gray-200">
          <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-8 uppercase leading-tight">
            Quem usa o <span className="text-[#EAB308]">VIVA DE ROUPAS</span> tem esses resultados:
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {[
              { 
                nome: "Aline Costa", 
                foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop", 
                msg: "Os fornecedores são surreais! Já fiz meu primeiro pedido e a qualidade é impecável por um preço muito baixo. Recomendo demais!",
                stars: 5,
                extraImg: "https://i.ibb.co/Qjmn6kqh/depoimento.png",
                highlight: true
              },
              { 
                nome: "Maria souza", 
                foto: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&h=150&auto=format&fit=crop", 
                msg: "Finalmente consegui abrir minha loja sem medo. O passo a passo de como investir pouco me ajudou muito no começo.",
                stars: 5,
                extraImg: "https://i.ibb.co/60Cdypq6/Captura-de-tela-2025-10-12-140837.png",
                highlight: true
              },
              { 
                nome: "Luana", 
                foto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&h=150&auto=format&fit=crop", 
                msg: "Estou chocada com a variedade. Encontrei tudo que precisava para o meu nicho de moda fitness. Gratidão!",
                stars: 5,
                extraImg: "https://i.ibb.co/GvrpDCGD/Captura-de-tela-2025-10-12-140952.png",
                highlight: true
              }
            ].map((dep, idx) => (
              <div 
                key={idx} 
                className={`bg-white p-4 rounded-2xl shadow-sm border ${dep.highlight ? 'border-black ring-1 ring-black/5' : 'border-gray-100'} flex flex-col gap-3 transition-all duration-300 hover:shadow-md`}
              >
                <div className="flex items-center gap-3">
                  <img src={dep.foto} alt={dep.nome} className="w-12 h-12 rounded-full border-2 border-[#EAB308]/20 object-cover" />
                  <div>
                    <p className="font-black text-sm text-gray-800">{dep.nome}</p>
                    <div className="flex text-[10px] text-yellow-400">
                      {[...Array(dep.stars)].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
                    </div>
                  </div>
                </div>
                {dep.extraImg && (
                  <div className="w-full mt-1">
                    <img 
                      src={dep.extraImg} 
                      className="w-full rounded-lg border border-gray-100 shadow-sm" 
                      alt="Resultado Depoimento" 
                    />
                  </div>
                )}
                <p className="text-xs text-gray-600 italic leading-relaxed">"{dep.msg}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  </div>
);

const WhoIsItFor = () => (
  <Section className="text-center">
    <h2 className="text-2xl font-extrabold mb-8 uppercase">O <span className="text-[#EAB308]">VIVA DE ROUPAS</span> é a escolha certa para quem:</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        { 
          n: 1, 
          t: "Para quem não aceita mais viver no aperto", 
          d: "Se trabalhar muito e ganhar pouco ya não faz mais sentido pra você, o Viva de Roupas é o caminho.",
          img: "https://i.ibb.co/vvqNcx6h/Captura-de-tela-2025-10-12-140903.png"
        },
        { 
          n: 2, 
          t: "Para quem quer assumir o papel de empresária", 
          d: "É para quem decidiu parar de apenas vender e começar a comandar o próprio negócio.",
          img: "https://i.ibb.co/S77VFTyQ/Chat-GPT-Image-11-de-jan-de-2026-00-04-54.png"
        },
        { 
          n: 3, 
          t: "Para quem cansou do conformismo e quer crescer", 
          d: "Se você sabe que nasceu para mais e não quer mais adiar seus sonhos, este é o passo.",
          img: "https://i.ibb.co/LdVmfFZ6/istockphoto-1394027072-612x612.jpg"
        }
      ].map(item => (
        <div key={item.n} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-md flex flex-col items-center transition-all duration-300 hover:border-gray-300 hover:shadow-lg">
          <div className="bg-[#567BA4] text-white w-10 h-10 rounded-full flex items-center justify-center mb-4 font-black shadow-inner">
            {item.n}
          </div>
          {item.img && (
            <div className="w-full mb-4 overflow-hidden rounded-xl border border-gray-100 shadow-inner aspect-[4/3]">
              <img 
                src={item.img} 
                alt={item.t} 
                className="w-full h-full object-cover transform transition-transform hover:scale-110 duration-500"
              />
            </div>
          )}
          <h3 className="font-black text-sm mb-3 text-gray-800 leading-tight">{item.t}</h3>
          <p className="text-xs text-gray-500 leading-relaxed font-medium">{item.d}</p>
        </div>
      ))}
    </div>
  </Section>
);

const BonusSection = () => (
  <div className="bg-black text-white py-12">
    <Section className="text-center">
      <h2 className="text-4xl font-black mb-2 italic tracking-tighter">BÔNUS EXCLUSIVO!</h2>
      <p className="mb-8 font-bold">Comprando agora você terá acesso a :</p>
      <div className="text-left space-y-4 text-sm mb-8">
        <p>🎁 <b>BÔNUS 01</b> - Melhores fornecedores de Cosméticos.</p>
        <p>🎁 <b>BÔNUS 02</b> - Fornecedores para Loja de Preço Único.</p>
        <p>🎁 <b>BÔNUS 03</b> - Melhores fornecedores de SEMI-JOIAS.</p>
        <p>🎁 <b>BÔNUS 04</b> - Pack de Figurinhas para Story da sua Loja.</p>
        <div className="pt-4 border-t border-gray-800 space-y-2">
          <p>🚀 <b>SUPER BÔNUS 05</b> - Aulas Exclusivas para Planejar sua Loja tais como:</p>
          <p>💰 <b>Investimento inicial:</b> saiba quanto precisa e como não se endividar.</p>
          <p>🎯 <b>Nicho e público-alvo:</b> escolha clientes que realmente compram.</p>
          <p>📦 <b>Primeiros pedidos:</b> compre with segurança e evite prejuízos.</p>
          <p>🚀 <b>Mentalidade empreendedora:</b> mais confiança para agir.</p>
          <p>🛒 <b>Como perder o medo e a vergonha de vender:</b> técnicas para destravar suas vendas.</p>
        </div>
      </div>
      <a 
        href="https://app.cakto.com.br/checkout-builder/618312"
        className="cta-pulse-orange bg-[#FF4D00] hover:bg-[#FF3D00] text-white font-black py-5 px-8 rounded-full w-full uppercase flex items-center justify-center gap-3 shadow-[0_4px_0_rgb(180,60,0)] active:translate-y-1 active:shadow-none transition-all text-lg tracking-wider border-none cursor-pointer no-underline">
        <i className="fa-solid fa-gift"></i> BÔNUS EXCLUSIVOS ! POR TEMPO LIMITADO!
      </a>
    </Section>
  </div>
);

// --- MAIN APP ---

function App() {
  const [showUpsell, setShowUpsell] = useState(false);
  const [upsellTime, setUpsellTime] = useState(90);

  useEffect(() => {
    let interval: number;
    if (showUpsell && upsellTime > 0) {
      interval = window.setInterval(() => {
        setUpsellTime((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [showUpsell, upsellTime]);

  const handleBasicClick = () => {
    setShowUpsell(true);
    setUpsellTime(90);
  };

  const formatUpsellTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 overflow-x-hidden text-gray-900 font-montserrat">
      <TimerHeader />
      
      <Hero />
      <Features />
      <WhoIsItFor />
      <BonusSection />

      {/* Founder Bio */}
      <div className="bg-white py-24 border-y border-gray-100 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#FCF5E8] rounded-full blur-[100px] opacity-40"></div>
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-[#EAB308]/5 rounded-full blur-[100px] opacity-40"></div>

        <Section className="max-w-4xl relative z-10 px-4">
          <div className="flex flex-col gap-12 text-center lg:text-left">
            <div className="w-full space-y-10">
              <div className="space-y-4">
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <div className="h-1 w-12 bg-[#EAB308]"></div>
                  <span className="text-[#EAB308] text-sm font-black uppercase tracking-[0.4em]">A Realidade</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black italic text-gray-900 leading-[0.9] tracking-tighter">Oi, eu sou a Gabrieli 👋</h2>
              </div>
              
              <div className="space-y-8 text-gray-600 leading-relaxed text-lg md:text-xl">
                <p className="relative pl-0 lg:pl-4 lg:border-l-2 lg:border-gray-100">
                  Comecei a empreender in 2021, with apenas <span className="font-black text-gray-900 bg-[#FCF5E8] px-1">17 anos</span>, when I opened my online store, OH! MARIA.
                </p>
                <p>
                  At that time, everything was trial and error. I spent months scavenging for suppliers, got scared, lost money... but today I'm here to shorten your path.
                </p>
                <div className="bg-gray-50 p-8 rounded-[32px] border border-gray-100 relative mx-auto lg:mx-0 max-w-2xl">
                  <i className="fa-solid fa-quote-left absolute -top-4 left-6 text-4xl text-[#EAB308]/20"></i>
                  <p className="text-gray-800 font-bold italic leading-snug">
                    "Onde eu encontro fornecedor confiável?" Essa foi a pergunta que me motivou a criar algo maior.
                  </p>
                </div>
                <p>
                  O <span className="font-black text-[#EAB308] border-b-2 border-[#EAB308]/20">Viva de Roupas</span> não é só uma lista, é a sua segurança para começar com o pé direito no mercado da moda.
                </p>
              </div>

              <div className="w-full flex justify-center py-6">
                <div className="relative w-full max-w-[500px]">
                  <div className="relative flex justify-center items-center">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#EAB308]/10 to-transparent rounded-[40px] -z-10 transform translate-y-4 scale-95 blur-xl"></div>
                    <img 
                      src="https://i.ibb.co/CspCdPN8/Chat-GPT-Image-1-de-jan-de-2026-21-19-56-removebg-preview.png" 
                      className="w-full h-auto object-contain z-20 transition-all duration-700 hover:scale-[1.03]" 
                      alt="Gabrieli Empreendedora"
                      style={{
                        filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.15))',
                        imageRendering: 'auto'
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-4 right-4 bg-white px-4 py-2 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-2 z-30">
                    <i className="fa-solid fa-gem text-[#EAB308] text-xs"></i>
                    <p className="text-[10px] font-black text-gray-900 uppercase tracking-widest leading-none">@gabisaraivanepo</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 max-w-md mx-auto lg:mx-0">
                <a 
                  href="https://pay.cakto.com.br/c9rruds_618312"
                  className="cta-pulse bg-[#22C55E] hover:bg-[#16A34A] text-white font-black py-4 px-8 rounded-xl shadow-[0_4px_0_rgb(22,101,52)] active:shadow-none active:translate-y-1 transition-all w-full text-lg uppercase flex items-center justify-center gap-3 border-none cursor-pointer no-underline"
                >
                  QUERO COMEÇAR AGORA <i className="fa-solid fa-rocket"></i>
                </a>
              </div>
            </div>
          </div>
        </Section>
      </div>

      <div className="bg-[#FCF5E8] py-16 text-center border-y border-gray-200">
        <div className="flex flex-col gap-12 px-4 max-w-4xl mx-auto">
          
          {/* OFERTA 01 - R$ 37,00 (Plano Completo) - DESIGN 3D PREMIUM */}
          <div className="max-w-sm mx-auto w-full relative group perspective-1000">
            <div className="absolute -inset-1 bg-gradient-to-r from-white via-green-400 to-white rounded-[40px] blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-gradient-to-br from-[#22C55E] via-[#1fb456] to-[#15803d] rounded-[40px] p-1 shadow-[0_25px_50px_-12px_rgba(22,163,74,0.5)] transform transition-all duration-500 hover:-translate-y-3 hover:rotate-1">
              <div className="bg-[#22C55E] rounded-[38px] border-[6px] border-white shadow-inner py-8 px-6 overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#FF0000] text-white text-[10px] font-black px-4 py-1.5 rounded-bl-3xl shadow-lg z-20 uppercase tracking-widest border-l-2 border-b-2 border-white animate-bounce">
                  OFERTA PREMIUM
                </div>
                <div className="flex flex-col items-center mb-8">
                  <div className="relative inline-block mb-3">
                    <div className="absolute inset-0 bg-white blur-xl opacity-20 rounded-full"></div>
                    <div className="relative border-[4px] border-white px-6 py-2.5 rounded-2xl text-xl font-black text-[#22C55E] uppercase tracking-tighter shadow-[0_8px_0_rgba(0,0,0,0.1)] bg-white transform -rotate-1">
                      Plano Completo !
                    </div>
                  </div>
                  <span className="text-white font-black text-[10px] uppercase tracking-[0.2em] drop-shadow-md">
                    <i className="fa-solid fa-star text-[#EAB308] mr-1"></i> A ESCOLHA DAS EMPRESÁRIAS
                  </span>
                </div>
                <Logo className="scale-[0.7] -my-4 drop-shadow-2xl" />
                <p className="text-[11px] font-extrabold text-white mb-6 uppercase tracking-tight leading-snug px-4">
                  PACOTE COMPLETO + BÔNUS 🎁 !
                </p>
                <div className="flex flex-col items-center gap-4">
                  <div className="text-center mb-4 bg-black/10 rounded-3xl py-4 px-6 border border-white/10 shadow-inner w-full">
                    <p className="text-[11px] line-through text-white/60 font-black italic mb-0 uppercase">De: R$ 97,00</p>
                    <div className="flex items-center justify-center gap-1">
                      <span className="text-white/80 font-black text-lg self-start mt-1">R$</span>
                      <p className="text-6xl font-black text-white drop-shadow-[0_4px_0_rgba(0,0,0,0.2)] leading-tight tracking-tighter italic">37,00</p>
                    </div>
                    <p className="text-[9px] text-white font-bold uppercase tracking-widest mt-1 opacity-80">Pagamento Único • Sem Mensalidade</p>
                  </div>
                  
                  <p className="text-white font-black text-[11px] uppercase mt-2 tracking-widest drop-shadow-sm">PACOTE COMPLETO + BÔNUS 🎁</p>
                  
                  {/* LISTA DE BÔNUS DETALHADA - PLANO COMPLETO */}
                  <div className="mt-4 w-full bg-white/5 rounded-2xl p-4 border border-white/10 text-left space-y-2">
                    <p className="text-[9px] text-white/90 font-medium leading-tight">🎁 <b>BÔNUS 01</b> - Melhores fornecedores de Cosméticos.</p>
                    <p className="text-[9px] text-white/90 font-medium leading-tight">🎁 <b>BÔNUS 02</b> - Fornecedores para Loja de Preço Único.</p>
                    <p className="text-[9px] text-white/90 font-medium leading-tight">🎁 <b>BÔNUS 03</b> - Melhores fornecedores de SEMI-JOIAS.</p>
                    <p className="text-[9px] text-white/90 font-medium leading-tight">🎁 <b>BÔNUS 04</b> - Pack de Figurinhas para Story da sua Loja.</p>
                    <p className="text-[9px] text-white font-black leading-tight pt-1">🚀 <b>SUPER BÔNUS 05</b> - Aulas Exclusivas para Planejar sua Loja</p>
                  </div>

                  <a 
                    href="https://pay.cakto.com.br/c9rruds_618312"
                    className="cta-pulse bg-white hover:bg-gray-100 text-[#15803d] font-black py-5 px-6 rounded-[24px] shadow-[0_8px_0_rgb(200,200,200),0_15px_25px_-5px_rgba(0,0,0,0.3)] active:shadow-none active:translate-y-2 transition-all w-full text-lg uppercase flex flex-col items-center justify-center gap-0 border-none cursor-pointer group/btn mt-4 no-underline"
                  >
                    <span className="leading-tight flex items-center gap-2">QUERO O ACESSO VIP <i className="fa-solid fa-crown text-[#EAB308] animate-pulse"></i></span>
                    <span className="text-[10px] opacity-80 font-bold lowercase tracking-normal">Acesso imediato ao portal das alunas</span>
                  </a>

                  <div className="w-full pt-6 border-t border-white/20 mt-4">
                      <div className="flex flex-col items-center gap-3">
                        <div className="flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/10">
                          <i className="fa-solid fa-shield-halved text-white text-xs"></i>
                          <span className="text-white font-black uppercase text-[9px] tracking-[0.2em]">Compra 100% Segura</span>
                        </div>
                        <div className="flex items-center gap-4 opacity-90 text-white">
                          <i className="fa-brands fa-cc-visa text-xl"></i>
                          <i className="fa-brands fa-cc-mastercard text-xl"></i>
                          <i className="fa-solid fa-pix text-xl"></i>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* OFERTA 02 - R$ 14,90 (Plano Básico) */}
          <div className="max-w-sm mx-auto w-full relative group perspective-1000">
            <div className="absolute -inset-1 bg-gradient-to-r from-white via-green-400 to-white rounded-[40px] blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-gradient-to-br from-[#22C55E] via-[#1fb456] to-[#15803d] rounded-[40px] p-1 shadow-[0_25px_50px_-12px_rgba(22,163,74,0.5)] transform transition-all duration-500 hover:-translate-y-3 hover:-rotate-1">
              <div className="bg-[#22C55E] rounded-[38px] border-[6px] border-white shadow-inner py-8 px-6 overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#EAB308] text-white text-[10px] font-black px-4 py-1.5 rounded-bl-3xl shadow-lg z-20 uppercase tracking-widest border-l-2 border-b-2 border-white">
                  ECONOMIA
                </div>
                <div className="flex flex-col items-center mb-8">
                  <div className="relative inline-block mb-3">
                    <div className="absolute inset-0 bg-white blur-xl opacity-20 rounded-full"></div>
                    <div className="relative border-[4px] border-white px-6 py-2.5 rounded-2xl text-xl font-black text-[#22C55E] uppercase tracking-tighter shadow-[0_8px_0_rgba(0,0,0,0.1)] bg-white transform rotate-1">
                      Plano Básico
                    </div>
                  </div>
                  <span className="text-white font-black text-[10px] uppercase tracking-[0.2em] drop-shadow-md">
                    LISTA DE FORNECEDORES TESTADA
                  </span>
                </div>
                <Logo className="scale-[0.7] -my-4 drop-shadow-2xl opacity-90" />
                
                <div className="flex flex-col items-center gap-4">
                  <div className="text-center mb-4 bg-black/10 rounded-3xl py-4 px-6 border border-white/10 shadow-inner w-full">
                    <p className="text-[11px] line-through text-white/60 font-black italic mb-0 uppercase">De: R$ 47,00</p>
                    <div className="flex items-center justify-center gap-1">
                      <span className="text-white/80 font-black text-lg self-start mt-1">R$</span>
                      <p className="text-6xl font-black text-white drop-shadow-[0_4px_0_rgba(0,0,0,0.2)] leading-tight tracking-tighter italic">14,90</p>
                    </div>
                    <p className="text-[9px] text-white font-bold uppercase tracking-widest mt-1 opacity-80">Acesso á lista</p>
                  </div>

                  {/* LISTA DE ITENS - PLANO BÁSICO */}
                  <div className="mt-2 mb-4 w-full bg-white/5 rounded-2xl p-4 border border-white/10 text-left space-y-2">
                    <p className="text-[10px] text-white/90 font-bold leading-tight flex items-center gap-2">
                      <span>📑</span> Acesso Somente á lista de Fornecedores
                    </p>
                    <p className="text-[10px] text-white/90 font-bold leading-tight flex items-center gap-2">
                      <span>📑</span> Garantia de 7 dias
                    </p>
                  </div>

                  <button 
                    onClick={handleBasicClick}
                    className="cta-pulse bg-white hover:bg-gray-100 text-[#15803d] font-black py-5 px-6 rounded-[24px] shadow-[0_8px_0_rgb(200,200,200),0_15px_25px_-5px_rgba(0,0,0,0.3)] active:shadow-none active:translate-y-2 transition-all w-full text-lg uppercase flex flex-col items-center justify-center gap-0 border-none cursor-pointer"
                  >
                    <span className="leading-tight flex items-center gap-2">TENHA ACESSO AGORA <i className="fa-solid fa-list-check text-[#EAB308]"></i></span>
                    <span className="text-[10px] opacity-80 font-bold lowercase tracking-normal">Clique para receber via E-mail</span>
                  </button>

                  <div className="w-full pt-6 border-t border-white/20 mt-4 opacity-70">
                      <div className="flex flex-col items-center gap-3">
                        <div className="flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/10">
                          <i className="fa-solid fa-shield-halved text-white text-xs"></i>
                          <span className="text-white font-black uppercase text-[9px] tracking-[0.2em]">Compra Segura</span>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- SEÇÃO DE DÚVIDAS FREQUENTES --- */}
      <div className="bg-white py-20 border-t border-gray-100">
        <Section className="max-w-2xl px-4 text-left">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-[2px] w-8 bg-[#EAB308]"></div>
            <h2 className="text-3xl font-black italic text-gray-900 leading-none tracking-tighter uppercase">
              DÚVIDAS FREQUENTES ?
            </h2>
          </div>

          <div className="space-y-10">
            {[
              {
                q: "Essa lista serve para quem nunca trabalhou com revenda de roupas?",
                a: "Sim. A lista é feita pra iniciantes que querem começar do zero, mesmo sem experiência no mercado."
              },
              {
                q: "Os fornecedores são confiáveis e vendem em pequena quantidade?",
                a: "Sim. São fornecedores testados, com opções de compra em atacado e baixo investimento inicial."
              },
              {
                q: "Preciso sair do CLT agora para começar a revender?",
                a: "Não. Você pode começar em paralelo e só sair do CLT quando a revenda estiver dando lucro."
              },
              {
                q: "Vou conseguir vender mesmo sem loja física?",
                a: "Sim. As vendas podem ser feitas 100% online, usando redes sociais e WhatsApp."
              }
            ].map((faq, i) => (
              <div key={i} className="group border-b border-gray-50 pb-8 last:border-0 transition-all">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#FCF5E8] transition-colors">
                    <span className="text-[#EAB308] font-black text-xs">{i+1}</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-base font-black text-gray-900 leading-tight">
                      {faq.q}
                    </h3>
                    <p className="text-sm text-gray-400 font-normal leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center opacity-40">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] italic">Viva de Roupas © 2026 • Todos os direitos reservados</p>
          </div>
        </Section>
      </div>

      {/* --- UPSELL POPUP --- */}
      {showUpsell && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-md rounded-[40px] overflow-hidden shadow-2xl relative border-[4px] border-[#EAB308] my-8">
            <div className="bg-[#EAB308] py-4 text-center">
              <h4 className="text-white font-black text-xl italic uppercase tracking-tighter animate-pulse">
                ESPERE! OFERTA EXCLUSIVA! ✋
              </h4>
            </div>
            <div className="p-8 text-center flex flex-col items-center">
              <div className="mb-6">
                <h3 className="text-2xl font-black text-gray-900 leading-tight mb-2 uppercase italic tracking-tighter">
                  Quer garantir o <span className="text-[#EAB308]">PLANO PLUS</span> por apenas R$ 24,90?
                </h3>
                <p className="text-sm text-gray-500 font-medium">
                  Diferencie seu negócio com o conteúdo completo + bônus exclusivos.
                </p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-2xl px-6 py-3 mb-8 flex items-center gap-3">
                <i className="fa-solid fa-hourglass-half text-red-600 animate-spin-slow"></i>
                <p className="text-red-600 font-black text-sm uppercase tracking-widest">
                  Expira em: <span className="text-lg tabular-nums">{formatUpsellTime(upsellTime)}</span>
                </p>
              </div>
              <div className="w-full bg-gray-50 rounded-3xl p-6 mb-8 border border-gray-100 flex flex-col items-center">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-1">PLANO PLUS COMPLETO</span>
                <p className="text-sm line-through text-gray-400 font-bold mb-0">De: R$ 147,00</p>
                <div className="relative">
                  <p className="text-5xl font-black text-[#FF0000] drop-shadow-sm leading-none">R$ 24,90</p>
                  <div className="absolute -right-12 top-0 bg-green-500 text-white text-[10px] px-2 py-1 rounded-full font-black animate-bounce">MELHOR VALOR</div>
                </div>
                <p className="text-[10px] text-gray-400 font-bold mt-2 italic uppercase">Acesso imediato ao conteúdo VIP</p>
              </div>
              <div className="w-full space-y-3">
                <a 
                  href="https://pay.cakto.com.br/fwvadyt"
                  className="cta-pulse bg-[#22C55E] hover:bg-[#16A34A] text-white font-black py-5 px-6 rounded-2xl w-full text-lg uppercase shadow-[0_4px_0_rgb(22,101,52)] transition-all cursor-pointer border-none flex items-center justify-center gap-3 no-underline"
                >
                  <i className="fa-solid fa-rocket"></i> SIM, QUERO O PLUS!
                </a>
                <button 
                  onClick={() => window.location.href = "https://pay.cakto.com.br/fwvadyt"} 
                  className="bg-transparent text-gray-400 hover:text-gray-600 font-bold py-2 px-6 w-full text-[10px] uppercase tracking-widest transition-colors cursor-pointer border-none underline decoration-gray-200"
                >
                  Não, prefiro continuar com o Plano Básico
                </button>
              </div>
            </div>
            <div className="bg-gray-50/50 py-3 flex items-center justify-center gap-4 opacity-40">
              <i className="fa-brands fa-cc-visa text-xl"></i>
              <i className="fa-brands fa-cc-mastercard text-xl"></i>
              <i className="fa-solid fa-pix text-xl"></i>
              <i className="fa-solid fa-shield-halved text-xl"></i>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
