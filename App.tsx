import React, { useState, useEffect } from 'react';

// --- COMPONENTS ---

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

const ImageCarousel = () => {
  const images = [
    "https://i.ibb.co/spJ1J4Qy/44443.jpg",
    "https://i.ibb.co/0yKcyLR9/67676.jpg",
    "https://i.ibb.co/ksNQdfRp/545454.jpg",
    "https://i.ibb.co/CppFKJfH/555555.jpg",
    "https://i.ibb.co/4wK0WS5s/2222444.jpg",
    "https://i.ibb.co/YFXtZ5dm/233.jpg",
    "https://i.ibb.co/fY7RxpW7/1221.jpg",
    "https://i.ibb.co/fYcwMRnw/3333.jpg",
    "https://i.ibb.co/LdLpKhPt/4444.jpg",
    "https://i.ibb.co/rRssqyTs/wqwqw.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-sm mx-auto mb-6 group">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] shadow-2xl border-4 border-white bg-gray-200">
        <img 
          src={images[currentIndex]} 
          alt={`Fornecedor ${currentIndex + 1}`} 
          className="w-full h-full object-cover transition-all duration-500 ease-in-out"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white text-gray-800 rounded-full flex items-center justify-center shadow-lg transition-transform active:scale-90 z-20 border border-gray-100"
        aria-label="Anterior"
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white text-gray-800 rounded-full flex items-center justify-center shadow-lg transition-transform active:scale-90 z-20 border border-gray-100"
        aria-label="Próximo"
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest z-20 flex items-center gap-2 border border-white/20">
        <span className="text-[#EAB308]">{currentIndex + 1}</span> / {images.length}
      </div>

      <div className="flex justify-center gap-1.5 mt-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === i ? 'bg-[#EAB308] w-6' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

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
        className="relative z-10 w-full max-md:max-w-xs object-contain transition-all duration-700 hover:scale-[1.05]"
        style={{
          filter: 'drop-shadow(0 25px 35px rgba(0,0,0,0.15))',
          imageRendering: 'auto'
        }}
      />
    </div>
    <p className="text-base md:text-lg font-bold mb-4">
      Aqui você encontra fornecedores de peças a partir de <span className="text-[#EAB308] font-black underline">R$ 7,50</span> pra você começa <span className="text-[#EAB308] font-black underline">hoje mesmo!</span>
    </p>
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
      
      <p className="text-[11px] md:text-xs text-gray-500 font-bold mb-8 uppercase tracking-wide leading-relaxed px-4">
        Conheça agora alguns modelos dos Fornecedores mais desejados, que você encontra no VIVA DE ROUPAS
      </p>
      
      <div className="flex flex-col items-center">
        <ImageCarousel />

        <p className="text-sm md:text-base font-extrabold text-gray-800 mb-10 italic px-6">
          Essas variedades de Roupas para todo gosto Feminino..
        </p>

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
              className="flex items-center gap-5 bg-white p-5 rounded-2xl shadow-sm border border-gray-200 transform transition-all duration-300 hover:shadow-md hover:translate-y-[-2px]"
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
                    <img src={dep.extraImg} className="w-full rounded-lg border border-gray-100 shadow-sm" alt="Resultado Depoimento" />
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

const BonusSection = () => (
  <div className="bg-black text-white py-12">
    <Section className="text-center">
      <h2 className="text-4xl font-black mb-2 italic tracking-tighter">BÔNUS EXCLUSIVO!</h2>
      <p className="mb-8 font-bold text-lg">Comprando agora você terá acesso a:</p>
      <div className="text-left space-y-5 text-base md:text-lg mb-8">
        <p>🎁 <b>BÔNUS 01</b> - Melhores fornecedores de Cosméticos.</p>
        <p>🎁 <b>BÔNUS 02</b> - Fornecedores para Loja de Preço Único.</p>
        <p>🎁 <b>BÔNUS 03</b> - Melhores fornecedores de SEMI-JOIAS.</p>
        <p>🎁 <b>BÔNUS 04</b> - Pack de Figurinhas para Story da sua Loja.</p>
        <div className="pt-6 border-t border-gray-800 space-y-3">
          <p className="text-lg md:text-xl text-[#EAB308]">🚀 <b>SUPER BÔNUS 05</b> - Aulas Exclusivas para Planejar sua Loja tais como:</p>
          <div className="pl-4 space-y-2 text-sm md:text-base opacity-90">
            <p>💰 <b>Investimento inicial:</b> saiba quanto precisa e como não se endividar.</p>
            <p>🎯 <b>Nicho e público-alvo:</b> escolha clientes que realmente compram.</p>
            <p>📦 <b>Primeiros pedidos:</b> compre com segurança e evite prejuízos.</p>
            <p>🚀 <b>Mentalidade empreendedora:</b> mais confiança para agir.</p>
            <p>🛒 <b>Como perder o medo e a vergonha de vender:</b> técnicas para destravar suas vendas.</p>
          </div>
        </div>
      </div>
      <a 
        href="https://pay.cakto.com.br/c9rruds_618312"
        className="cta-pulse-orange bg-[#FF4D00] hover:bg-[#FF3D00] text-white font-black py-5 px-8 rounded-full w-full uppercase flex items-center justify-center gap-3 shadow-[0_4px_0_rgb(180,60,0)] active:translate-y-1 active:shadow-none transition-all text-lg tracking-wider border-none cursor-pointer no-underline">
        <i className="fa-solid fa-gift"></i> BÔNUS EXCLUSIVOS! POR TEMPO LIMITADO!
      </a>
    </Section>
  </div>
);

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
      <Hero />
      <Features />
      <BonusSection />

      {/* Founder Bio */}
      <div className="bg-white py-16 md:py-24 border-y border-gray-100 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#FCF5E8] rounded-full blur-[100px] opacity-40"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
          {/* Text Side - Now at the Top */}
          <div className="text-center md:text-left space-y-6 w-full max-w-2xl">
            <div className="space-y-2 text-center">
              <span className="text-[#EAB308] font-black uppercase text-xs tracking-[0.3em]">Quem faz acontecer</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 italic tracking-tighter uppercase leading-none">
                Oi, eu sou a Gabrieli 👋
              </h2>
            </div>
            
            <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed font-medium text-center md:text-left">
              <p>Comecei a empreender em 2021, com apenas 17 anos, quando abri a minha loja online, a <span className="text-gray-900 font-bold">ÒH! MARIA.</span></p>
              <p>Na época, tudo era na base da tentativa e erro. Passei noites garimpando fornecedores, tomei susto, perdi dinheiro... Mas também aprendi. E cresci.</p>
              <p>Com o tempo, comecei a receber mensagens de outras mulheres querendo começar — mas travadas no mesmo ponto que eu:</p>
              <div className="bg-gray-50 border-l-4 border-[#EAB308] p-4 italic text-gray-800 font-bold text-center">“Onde eu encontro fornecedor confiável?”</div>
              <p>💡 <span className="text-gray-900 font-bold">Foi aí que tive a ideia do Viva de roupas.</span></p>
              <p>Um lugar seguro, com fornecedores testados, informações organizadas, e tudo pronto pra facilitar a vida de quem quer começar com o pé direito.</p>
              <p>Hoje, mais de <span className="text-[#EAB308] font-black">10 mil empreendedoras</span> usam o Guia pra revender moda feminina com confiança.</p>
            </div>
          </div>

          {/* Image Side - Now Below Text and Smaller */}
          <div className="flex justify-center mt-12 mb-8">
            <div className="relative w-full max-w-[320px]">
              <div className="absolute inset-0 bg-[#EAB308]/10 rounded-[32px] rotate-3 -z-10"></div>
              <img 
                src="https://i.ibb.co/BVPgtQcs/Chat-GPT-Image-1-de-jan-de-2026-21-19-56.png" 
                className="w-full h-auto object-cover rounded-[32px] shadow-2xl border-4 border-white transition-transform duration-700 hover:scale-[1.02]" 
                alt="Gabrieli - Fundadora" 
              />
            </div>
          </div>

          {/* CTA Section */}
          <div className="w-full max-w-2xl text-center space-y-8">
            <p className="font-bold text-gray-900 text-lg leading-tight">Agora, quero te ajudar a dar esse primeiro passo também.</p>
            
            <div className="flex flex-col items-center gap-4">
              <div className="w-full max-w-[340px]">
                <a 
                  href="https://pay.cakto.com.br/c9rruds_618312"
                  className="cta-pulse bg-[#22C55E] hover:bg-[#16A34A] text-white font-black py-5 px-8 rounded-2xl shadow-[0_6px_0_rgb(22,101,52)] active:shadow-none active:translate-y-1 transition-all w-full inline-flex items-center justify-center gap-3 no-underline uppercase text-lg tracking-tight"
                >
                  QUERO COMEÇAR AGORA <i className="fa-solid fa-rocket"></i>
                </a>
                <p className="text-[10px] text-gray-400 font-bold text-center uppercase tracking-widest mt-4 opacity-70">Acesso 100% seguro e imediato</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F2F2F2] py-16 text-center border-y border-gray-200">
        <div className="flex flex-col gap-12 px-4 max-w-4xl mx-auto">
          {/* Plano Básico */}
          <div className="max-w-sm mx-auto w-full relative group">
            <div className="relative bg-white rounded-[40px] p-1 shadow-lg transform transition-all duration-500 hover:-translate-y-3">
              <div className="bg-white rounded-[38px] border-[6px] border-gray-200 py-8 px-6">
                <div className="flex flex-col items-center mb-8">
                  <div className="border-[4px] border-gray-200 px-6 py-2.5 rounded-2xl text-xl font-black text-gray-800 uppercase tracking-tight">Plano Básico</div>
                </div>
                <div className="text-center mb-6 bg-gray-50 rounded-3xl py-4 px-6 border border-gray-200">
                  <p className="text-[11px] line-through text-gray-400 font-black">De: R$ 47,00</p>
                  <div className="flex items-center justify-center">
                    <span className="text-gray-900 font-black text-lg self-start mt-1">R$</span>
                    <p className="text-6xl font-black text-gray-900 italic tracking-tighter">14,90</p>
                  </div>
                </div>

                {/* BENEFÍCIOS PLANO BÁSICO - LETRAS LEGÍVEIS */}
                <div className="mt-4 w-full bg-gray-50 rounded-2xl p-5 text-left space-y-3 mb-6 border border-gray-200 shadow-sm">
                  <p className="text-sm text-gray-800 font-bold leading-tight flex items-start gap-2">
                    <span className="text-base flex-shrink-0">📑</span> 
                    <span className="opacity-95">Acesso somente a lista</span>
                  </p>
                  <p className="text-sm text-gray-800 font-bold leading-tight flex items-start gap-2">
                    <span className="text-base flex-shrink-0">✅</span> 
                    <span className="opacity-95">Garantia de 7 dias</span>
                  </p>
                </div>

                <button onClick={handleBasicClick} className="cta-pulse bg-[#22C55E] hover:bg-[#16A34A] text-white font-black py-5 px-6 rounded-[24px] shadow-[0_8px_0_rgb(22,101,52)] active:translate-y-2 transition-all w-full text-lg uppercase">TENHA ACESSO AGORA</button>
              </div>
            </div>
          </div>

          {/* Plano Completo */}
          <div className="max-w-sm mx-auto w-full relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-[#EAB308] to-transparent rounded-[40px] blur-xl opacity-40 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-white rounded-[40px] p-1 shadow-2xl transform transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(234,179,8,0.3)]">
              <div className="bg-white rounded-[38px] border-[6px] border-[#EAB308] group-hover:border-[#FACC15] py-8 px-6 shadow-[inset_0_0_20px_rgba(234,179,8,0.1)] transition-all duration-500">
                
                {/* ETIQUETA MAIS VENDIDO */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-[0_4px_10px_rgba(220,38,38,0.4)] z-20 whitespace-nowrap border-2 border-white animate-bounce-slow">
                  🔥 MAIS VENDIDOS!
                </div>

                <div className="flex flex-col items-center mb-8">
                  {/* BORDA DOURADA REFORÇADA NO TÍTULO */}
                  <div className="border-[4px] border-[#EAB308] px-6 py-2.5 rounded-2xl text-xl font-black text-[#22C55E] uppercase tracking-tighter bg-[#FCF5E8]/50">Plano Completo!</div>
                </div>
                <div className="text-center mb-6 bg-gray-50 rounded-3xl py-6 px-6 border-[3px] border-[#EAB308] shadow-[0_0_20px_rgba(234,179,8,0.2)]">
                  <p className="text-[11px] line-through text-gray-400 font-black uppercase">De: R$ 97,00</p>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-gray-900 font-black text-lg self-start mt-1">R$</span>
                    <p className="text-6xl font-black text-gray-900 italic tracking-tighter">37,00</p>
                  </div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1 opacity-80">Pagamento Único • Sem Mensalidade</p>
                </div>

                {/* DETALHAMENTO DOS BÔNUS COM LETRAS LEGÍVEIS */}
                <div className="mt-4 w-full bg-gray-50 rounded-2xl p-5 text-left space-y-3 mb-6 border-2 border-[#EAB308]/20">
                  <p className="text-sm text-gray-800 font-bold leading-tight flex items-start gap-2">
                    <span className="text-base flex-shrink-0">🎁</span> 
                    <span><b className="font-extrabold">BÔNUS 01</b> - Melhores fornecedores de Cosméticos.</span>
                  </p>
                  <p className="text-sm text-gray-800 font-bold leading-tight flex items-start gap-2">
                    <span className="text-base flex-shrink-0">🎁</span> 
                    <span><b className="font-extrabold">BÔNUS 02</b> - Fornecedores para Loja de Preço Único.</span>
                  </p>
                  <p className="text-sm text-gray-800 font-bold leading-tight flex items-start gap-2">
                    <span className="text-base flex-shrink-0">🎁</span> 
                    <span><b className="font-extrabold">BÔNUS 03</b> - Melhores fornecedores de SEMI-JOIAS.</span>
                  </p>
                  <p className="text-sm text-gray-800 font-bold leading-tight flex items-start gap-2">
                    <span className="text-base flex-shrink-0">🎁</span> 
                    <span><b className="font-extrabold">BÔNUS 04</b> - Pack de Figurinhas para Story da sua Loja.</span>
                  </p>
                  <p className="text-sm text-gray-900 font-black leading-tight flex items-start gap-2 pt-3 border-t border-gray-200 mt-2">
                    <span className="text-base flex-shrink-0">🚀</span> 
                    <span><b className="font-black text-[#EAB308]">SUPER BÔNUS 05</b> - Aulas Exclusivas para Planejar sua Loja</span>
                  </p>
                </div>

                <a href="https://pay.cakto.com.br/c9rruds_618312" className="cta-pulse bg-[#22C55E] hover:bg-[#16A34A] text-white font-black py-5 px-6 rounded-[24px] shadow-[0_8px_0_rgb(22,101,52)] active:translate-y-2 transition-all w-full text-lg uppercase no-underline flex items-center justify-center gap-2 group">
                  QUERO O PLANO COMPLETO <i className="fa-solid fa-crown text-[#EAB308]"></i>
                </a>
                <p className="text-[10px] text-gray-400 font-bold text-center uppercase tracking-widest mt-3 opacity-60">Acesso imediato ao portal das alunas</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-20 border-t border-gray-100">
        <Section className="max-w-2xl px-4 text-left">
          <h2 className="text-3xl font-black italic text-gray-900 mb-10 uppercase">DÚVIDAS FREQUENTES?</h2>
          <div className="space-y-10">
            {[
              { q: "Essa lista serve para quem nunca trabalhou com revenda?", a: "Sim. A lista é feita pra iniciantes que querem começar do zero." },
              { q: "Os fornecedores são confiáveis?", a: "Sim. São fornecedores testados, com baixo investimento inicial." }
            ].map((faq, i) => (
              <div key={i} className="border-b border-gray-50 pb-8 last:border-0">
                <h3 className="text-base font-black text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center opacity-40">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em]">Viva de Roupas © 2026</p>
          </div>
        </Section>
      </div>

      {showUpsell && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-md rounded-[40px] overflow-hidden shadow-2xl relative border-[4px] border-[#EAB308]">
            <div className="bg-[#EAB308] py-4 text-center">
              <h4 className="text-white font-black text-xl italic uppercase">ESPERE! OFERTA EXCLUSIVA! ✋</h4>
            </div>
            <div className="p-8 text-center">
              <h3 className="text-2xl font-black text-gray-900 mb-6 uppercase italic">Garantir o PLANO PLUS por apenas R$ 24,90?</h3>
              
              <div className="text-left bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-6 space-y-3">
                <p className="text-sm text-gray-800 font-bold flex items-center gap-2">
                  <span className="text-lg">💎</span> PACOTE COMPLETO + BÔNUS
                </p>
                <p className="text-sm text-gray-800 font-bold flex items-center gap-2">
                  <span className="text-lg">📧</span> Acesso imediato no seu email
                </p>
                <p className="text-sm text-gray-800 font-bold flex items-center gap-2">
                  <span className="text-lg">🛡️</span> Garantia Vitalícia
                </p>
                <p className="text-sm text-gray-800 font-bold flex items-center gap-2">
                  <span className="text-lg">💬</span> Suporte para dúvidas
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-2xl px-6 py-3 mb-8 text-red-600 font-black">
                Expira em: <span className="text-lg tabular-nums">{formatUpsellTime(upsellTime)}</span>
              </div>
              <a href="https://pay.cakto.com.br/fwvadyt" className="cta-pulse bg-[#22C55E] hover:bg-[#16A34A] text-white font-black py-5 px-6 rounded-2xl w-full text-lg uppercase no-underline flex items-center justify-center gap-3">SIM, QUERO O PLUS!</a>
              <button onClick={() => setShowUpsell(false)} className="mt-4 text-gray-400 font-bold text-[10px] uppercase underline cursor-pointer border-none bg-transparent">Não, prefiro o Básico</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;