import React, { useState, useEffect } from 'react';

// --- COMPONENTES AUXILIARES ---

const Section = ({ children, className = "", id }: { children?: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`max-w-6xl mx-auto px-6 py-16 md:py-24 ${className}`}>
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
        loading="eager"
        fetchPriority="high"
        decoding="async"
        width="80"
        height="80"
      />
    </div>
    <div className="mt-4 flex flex-col items-center">
      <h2 className="text-[#EAB308] font-black text-2xl uppercase tracking-[0.2em] legacy-none drop-shadow-sm">
        Viva <span className="font-light opacity-80">de</span> Roupas
      </h2>
      <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-[#EAB308] to-transparent mt-2 opacity-80"></div>
    </div>
  </div>
);

const ImageCarousel = () => {
  const images = [
    "https://i.ibb.co/fdMHN3dq/233.jpg",
    "https://i.ibb.co/PZJwBrpT/1221.jpg",
    "https://i.ibb.co/pjqm9sgd/3333.jpg",
    "https://i.ibb.co/pYw80rk/4444.jpg",
    "https://i.ibb.co/vCX4Y1PF/22222.jpg",
    "https://i.ibb.co/h1mSxqVS/34434.jpg",
    "https://i.ibb.co/PsMFv4JY/44443.jpg",
    "https://i.ibb.co/4wnkMgfP/67676.jpg",
    "https://i.ibb.co/zTBzY9GC/545454.jpg",
    "https://i.ibb.co/whxGFPJ2/555555.jpg",
    "https://i.ibb.co/1G8LLnG2/2222444.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full max-w-sm mx-auto mb-6 group">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] shadow-2xl border-4 border-white bg-gray-200">
        <img 
          src={images[currentIndex]} 
          alt={`Fornecedor ${currentIndex + 1}`} 
          className="w-full h-full object-cover transition-all duration-500 ease-in-out"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-t-t from-black/40 to-transparent"></div>
      </div>

      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white text-gray-800 rounded-full flex items-center justify-center shadow-lg transition-transform active:scale-90 z-20">
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white text-gray-800 rounded-full flex items-center justify-center shadow-lg transition-transform active:scale-90 z-20">
        <i className="fa-solid fa-chevron-right"></i>
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest z-20 flex items-center gap-2 border border-white/20">
        <span className="text-[#EAB308]">{currentIndex + 1}</span> / {images.length}
      </div>
    </div>
  );
};

const StickyBar = () => {
  const [timeLeft, setTimeLeft] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem('viva_timer');
      return saved ? parseInt(saved, 10) : 15 * 60;
    }
    return 15 * 60;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const next = prev > 0 ? prev - 1 : 15 * 60;
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('viva_timer', next.toString());
        }
        return next;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="sticky top-0 z-[100] bg-red-600 text-white py-2 px-4 text-center font-black text-xs md:hidden shadow-lg border-b border-white/20">
      ⚠️ OFERTA EXPIRA EM: <span className="font-mono text-sm">{formatTime(timeLeft)}</span>
    </div>
  );
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const format = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex justify-center gap-3 mt-4 mb-8">
      {[
        { label: 'HORAS', value: timeLeft.hours },
        { label: 'MINUTOS', value: timeLeft.minutes },
        { label: 'SEGUNDOS', value: timeLeft.seconds }
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="bg-red-600 text-white text-2xl font-black w-14 h-14 flex items-center justify-center rounded-xl shadow-lg border border-white/10">
            {format(item.value)}
          </div>
          <span className="text-[9px] font-black mt-1.5 text-red-600 tracking-widest">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

const TestimonialCarousel = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const images = [
    "https://i.ibb.co/NgFSXgNL/Captura-de-tela-2025-10-12-140837.png",
    "https://i.ibb.co/KcL0qKGM/Captura-de-tela-2025-10-12-140903.png",
    "https://i.ibb.co/1tNbYV3L/Captura-de-tela-2025-10-12-140952.png",
    "https://i.ibb.co/wZjk5kkM/depoimento.png"
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full py-8 group">
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-6 px-4"
      >
        {images.map((src, index) => (
          <div key={index} className="flex-shrink-0 w-[240px] md:w-[320px] snap-center">
            <div className="bg-[#1A1A1A] rounded-[24px] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.4)] border border-white/10 transform transition-all duration-500 hover:scale-[1.02] hover:border-[#EAB308]/30">
              <img 
                src={src} 
                alt={`Depoimento ${index + 1}`} 
                className="w-full h-auto object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={() => scroll('left')}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-[#EAB308] hover:text-black"
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <button 
        onClick={() => scroll('right')}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-[#EAB308] hover:text-black"
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>

      <div className="flex justify-center gap-3 mt-4">
        {images.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-[#EAB308]/20 border border-[#EAB308]/10"></div>
        ))}
      </div>
    </div>
  );
};

// --- SEÇÕES PRINCIPAIS ---

const Hero = () => (
  <Section className="text-center md:text-left pt-6 md:pt-20">
    <div className="flex justify-center md:justify-start mb-12">
      <Logo />
    </div>
    
    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
      <div className="flex-1">
        <h1 className="text-[28px] md:text-[48px] font-black leading-[1.2] mb-6 uppercase text-white tracking-tight font-montserrat">
          COMECE SUA PRÓPRIA LOJA HOJE MESMO COM O ESTOQUE MAIS LUCRATIVO DO MERCADO E LUCRE MAIS DE <span className="text-[#FF8C00]">300%</span>.
        </h1>
        <p className="text-[17px] md:text-[20px] font-medium text-gray-300 leading-[1.6] mb-8">
          Tenha acesso direto aos maiores fornecedores do Brasil com peças a partir de <span className="text-[#FF8C00] font-bold">R$ 7,50</span>. Tudo verificado para 2026.
        </p>
        
        <div className="flex flex-col items-center md:items-start">
          <a 
             href="https://pay.cakto.com.br/c9rruds_618312"
             className="bg-[#25D366] hover:bg-[#20bd5b] text-white font-black py-5 px-8 md:py-6 md:px-10 rounded-2xl shadow-[0_10px_30px_rgba(37,211,102,0.3)] transition-all w-full md:w-auto inline-flex items-center justify-center gap-3 no-underline mb-6 text-lg md:text-xl uppercase tracking-tighter">
            QUERO ACESSAR OS FORNECEDORES AGORA <i className="fa-solid fa-arrow-right"></i>
          </a>
          
          <div className="text-center md:text-left">
            <p className="text-[12px] md:text-[13px] font-bold text-gray-500 flex items-center justify-center md:justify-start gap-2">
              <i className="fa-solid fa-shield-halved text-[#25D366]"></i> Acesso imediato enviado para o seu e-mail após a confirmação.
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="relative mb-4">
          <div className="absolute inset-0 bg-[#25D366]/10 blur-3xl rounded-full -z-10"></div>
          <img 
            src="https://i.ibb.co/dwqy29Dw/Gemini-Generated-Image-wqyhrywqyhrywqyh.png" 
            alt="Gabrieli Fundadora"
            className="w-full max-w-[320px] md:max-w-[450px] rounded-[32px] shadow-2xl border-4 border-white"
            loading="lazy"
            decoding="async"
          />
        </div>
        <p className="text-white text-sm md:text-base font-medium italic opacity-90 text-center max-w-[300px] md:max-w-[400px]">
          E foi assim que comecei minha loja de casa mesmo...
        </p>
      </div>
    </div>
  </Section>
);

const Features = () => (
  <div className="bg-[#111111] py-16 border-y border-white/5">
    <Section className="max-w-2xl px-4 text-center">
      <h2 className="text-xl md:text-3xl font-black text-white uppercase italic mb-2 tracking-tighter leading-tight">
        O Que Vai Encontrar No <br />
        <span className="text-[#EAB308]">VIVA DE ROUPAS?</span>
      </h2>
      <p className="text-gray-400 text-[10px] md:text-xs font-bold mb-1 uppercase tracking-widest">
        ALGUNS DOS MODELOS DAS ROUPAS DOS FORNECEDORES
      </p>
      <p className="text-white text-[10px] md:text-xs font-medium mb-8 opacity-90">
        Essas variedades de Roupas para todo gosto Feminino.
      </p>
      
      <ImageCarousel />
      
      <div className="w-full space-y-4 text-left mt-12">
        {[
          "Fornecedores de roupas por até R$ 7,50",
          "Moda Luxo, Fitness, Moda modesta, Pijamas, Lingerie, Infantil e plus size",
          "Fornecedores sem limite de compra mínima",
          "Como começar do ZERO!",
          "Estratégia de como Vender",
          "Como investir pouco no início",
          "Acesso imediato por e-mail."
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4 bg-[#1A1A1A] p-4 rounded-2xl shadow-sm border border-white/5">
            <div className="flex-shrink-0 w-8 h-8 bg-[#EAB308]/20 rounded-full flex items-center justify-center">
              <i className="fa-solid fa-check text-[#EAB308]"></i>
            </div>
            <span className="font-bold text-gray-200">{item}</span>
          </div>
        ))}
      </div>

      <div className="mt-16 mb-4">
        <h3 className="text-2xl md:text-3xl font-black italic tracking-tight leading-tight mb-4 text-white">
          Olha esses <span className="text-[#EAB308] uppercase">DEPOIMENTOS!</span>
        </h3>
        <p className="text-gray-400 text-sm font-bold italic">
          Veja os resultados reais de quem já está faturando:
        </p>
      </div>

      <TestimonialCarousel />

      <div className="mt-12 text-center px-4">
        <p className="text-xl md:text-2xl font-black italic tracking-tight leading-tight">
          A Próxima pode ser você... Eai? bora <span className="text-[#EAB308] uppercase">VIVER DE ROUPAS MULHER !!</span>
        </p>
      </div>
    </Section>
  </div>
);

const BonusSection = () => (
  <div className="bg-black text-white py-12">
    <Section className="text-center">
      <div className="flex items-center justify-center gap-2 md:gap-4 mb-8">
        <img 
          src="https://i.ibb.co/XmgrdSR/vecteezy-ai-generated-red-gift-box-with-golden-bow-on-transparent-37796385.png" 
          alt="Gift Box" 
          className="w-24 h-24 md:w-40 md:h-40 object-contain animate-bounce"
          referrerPolicy="no-referrer"
        />
        <h2 className="text-3xl md:text-6xl font-black italic tracking-tighter uppercase text-left leading-[0.9]">
          BÔNUS <br />
          <span className="text-white">EXCLUSIVO!</span>
        </h2>
      </div>
      <p className="mb-8 font-bold text-lg">Comprando agora você terá acesso a:</p>
      <div className="text-left space-y-6 text-base md:text-lg mb-10">
        <p>🎁 <b>BÔNUS 01</b> - Melhores fornecedores de Cosméticos.</p>
        <p>🎁 <b>BÔNUS 02</b> - Fornecedores para Loja de Preço Único.</p>
        <p>🎁 <b>BÔNUS 03</b> - Melhores fornecedores de SEMI-JOIAS.</p>
        <p>🎁 <b>BÔNUS 04</b> - Pack de Figurinhas para Story da sua Loja.</p>
        
        <div className="pt-6 border-t border-white/20">
          <p className="text-[#EAB308] font-black text-xl md:text-2xl mb-4 leading-tight">🚀 SUPER BÔNUS 05 - Aulas Exclusivas para Planejar sua Loja tais como:</p>
          <ul className="space-y-4 pl-4 border-l-2 border-[#EAB308]/50">
            <li className="flex flex-col">
              <span className="font-bold">💰 Investimento inicial:</span>
              <span className="text-sm opacity-80">saiba quanto precisa e como não se endividar.</span>
            </li>
            <li className="flex flex-col">
              <span className="font-bold">🎯 Nicho e público-alvo:</span>
              <span className="text-sm opacity-80">escolha clientes que realmente compram.</span>
            </li>
            <li className="flex flex-col">
              <span className="font-bold">📦 Primeiros pedidos:</span>
              <span className="text-sm opacity-80">compre com segurança e evite prejuízos.</span>
            </li>
            <li className="flex flex-col">
              <span className="font-bold">🚀 Mentalidade empreendedora:</span>
              <span className="text-sm opacity-80">mais confiança para agir.</span>
            </li>
            <li className="flex flex-col">
              <span className="font-bold">🛒 Como perder o medo e a vergonha de vender:</span>
              <span className="text-sm opacity-80">técnicas para destravar suas vendas.</span>
            </li>
          </ul>
        </div>
      </div>
      <a 
        href="https://pay.cakto.com.br/c9rruds_618312"
        className="cta-pulse-orange bg-[#FF4D00] hover:bg-[#FF3D00] text-white font-black py-5 px-8 rounded-full w-full uppercase flex items-center justify-center gap-3 no-underline shadow-lg">
        <i className="fa-solid fa-gift"></i> SIM! QUERO COMEÇAR AGORA
      </a>
      <p className="mt-4 text-[12px] font-bold text-white flex items-center justify-center gap-2 opacity-90">
        <i className="fa-solid fa-envelope text-[#EAB308]"></i> Acesso imediato enviado para o seu e-mail após a confirmação.
      </p>
    </Section>
  </div>
);

const FounderBio = () => (
  <div className="bg-[#0A0A0A] py-20 border-y border-white/5">
    <Section className="flex flex-col items-center text-center">
      <h2 className="text-3xl font-black italic mb-2 uppercase text-white">Sobre a Fundadora 👋</h2>
      
      <div className="relative mb-10 mt-8">
        <div className="absolute inset-0 bg-[#EAB308]/10 blur-2xl rounded-full -z-10"></div>
        <img 
          src="https://i.ibb.co/v20JM82/Gemini-Generated-Image-7wiy257wiy257wiy.png" 
          className="w-full max-w-[280px] md:max-w-[320px] rounded-2xl border-4 border-white shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
          alt="Gabrieli Fundadora"
          loading="lazy"
          decoding="async"
        />
      </div>
      
      <div className="text-gray-300 space-y-6 text-sm md:text-base leading-relaxed text-center max-w-2xl mx-auto font-inter">
        <p className="text-white font-medium">
          Oii, eu sou a Gabrieli Saraiva. Comecei minha loja em casa, com apenas <span className="text-[#FF8C00] font-bold">R$ 150,00</span> e muito medo. Mas a minha fé e perseverança foram maiores, e me trouxeram até aqui.
        </p>
        <p>
          E quer saber? Você também pode! Chega de adiar o seu sonho. Deixe o medo de lado e <span className="text-[#FF8C00] font-bold uppercase">COMECE HOJE MESMO</span> a construir o seu futuro!
        </p>
        
        <div className="pt-6">
          <p className="italic border-l-4 border-[#FF8C00] pl-4 py-2 bg-white/5 rounded-r-xl text-left">
            "Eu cansei de ver lojistas perdendo margem para atravessadores. Por isso, validei pessoalmente os contatos mais lucrativos de 2026 para que você não precise errar onde eu errei."
          </p>
        </div>
      </div>

      <a 
        href="https://pay.cakto.com.br/c9rruds_618312"
        className="mt-12 cta-pulse-orange bg-[#FF4D00] hover:bg-[#E64500] text-white font-black py-5 px-10 rounded-full uppercase text-sm tracking-widest no-underline shadow-xl transition-all flex items-center gap-3">
        SIM! QUERO COMEÇAR AGORA <i className="fa-solid fa-arrow-right"></i>
      </a>
      <p className="mt-4 text-[12px] font-bold text-gray-500 flex items-center justify-center gap-2">
        <i className="fa-solid fa-envelope text-[#EAB308]"></i> Acesso imediato enviado para o seu e-mail após a confirmação.
      </p>
    </Section>
  </div>
);

const FAQItem = ({ q, a }: { q: string, a: string, key?: React.Key }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#1A1A1A] rounded-2xl border border-white/5 shadow-sm overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
      >
        <h3 className="font-bold text-gray-100 pr-4">{q}</h3>
        <i className={`fa-solid fa-chevron-down text-[#EAB308] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
      </button>
      <div className={`px-6 transition-all duration-300 ease-in-out ${isOpen ? 'pb-6 max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
        <p className="text-sm text-gray-400 leading-relaxed">{a}</p>
      </div>
    </div>
  );
};

const FAQ = () => (
  <Section className="py-20">
    <h2 className="text-3xl font-black italic text-white mb-10 uppercase text-center">DÚVIDAS FREQUENTES</h2>
    <div className="space-y-4">
      {[
        { q: "Essa lista serve para quem nunca trabalhou com revenda?", a: "Sim. A lista é feita pra iniciantes que querem começar do zero." },
        { q: "Os fornecedores são confiáveis?", a: "Sim. Todos os fornecedores são testados e possuem anos de mercado." },
        { q: "Como recebo o acesso?", a: "Imediatamente após a confirmação do pagamento, os dados chegam no seu e-mail." },
        { q: "Quais as formas de pagamento?", a: "Aceitamos Cartão de Crédito (com parcelamento), Pix e Boleto Bancário." },
        { q: "Por quanto tempo terei acesso?", a: "O acesso é vitalício! Você paga uma única vez e pode consultar sempre que precisar." }
      ].map((faq, i) => (
        <FAQItem key={i} q={faq.q} a={faq.a} />
      ))}
    </div>
  </Section>
);

export default function App() {
  const [basicDiscountUnlocked, setBasicDiscountUnlocked] = useState(false);

  useEffect(() => {
    // Meta Pixel Setup Logic within useEffect to ensure Client-Side only execution
    if (typeof window !== 'undefined') {
      const w = window as any;
      if (!w.fbq) {
        w.fbq = function() {
          w.fbq.callMethod ? w.fbq.callMethod.apply(w.fbq, arguments) : w.fbq.queue.push(arguments);
        };
        if (!w._fbq) w._fbq = w.fbq;
        w.fbq.push = w.fbq;
        w.fbq.loaded = true;
        w.fbq.version = '2.0';
        w.fbq.queue = [];
        const t = document.createElement('script');
        t.defer = true;
        t.src = 'https://connect.facebook.net/en_US/fbevents.js';
        const s = document.getElementsByTagName('script')[0];
        if (s && s.parentNode) {
          s.parentNode.insertBefore(t, s);
        }
      }

      // STRICT INITIALIZATION as requested
      w.fbq('set', 'autoConfig', true, '985004507149963'); 
      w.fbq('init', '985004507149963');
      w.fbq('track', 'PageView');

      // --- ADVANCED TRACKING SCRIPT INTEGRATION ---
      const getFacebookCookie = (name: string) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop()?.split(';').shift();
      };

      const prepararLinksDeCompra = () => {
        const fbp = getFacebookCookie('_fbp');
        const fbc = getFacebookCookie('_fbc');
        const botoes = document.querySelectorAll('a[href*="cakto.com.br"]');
        botoes.forEach(botao => {
          const anchor = botao as HTMLAnchorElement;
          try {
            let url = new URL(anchor.href);
            if (fbp) url.searchParams.set('fbp', fbp);
            if (fbc) url.searchParams.set('fbc', fbc);
            anchor.href = url.toString();
          } catch (e) {
            console.error("Erro ao processar URL do botão:", e);
          }
        });
      };

      // Intercept clicks to ensure parameters are added even if cookies are set late
      const handleCaktoClick = (e: MouseEvent) => {
        const target = (e.target as HTMLElement).closest('a');
        if (target && target.href && target.href.includes('cakto.com.br')) {
          const fbp = getFacebookCookie('_fbp');
          const fbc = getFacebookCookie('_fbc');
          try {
            let url = new URL(target.href);
            if (fbp) url.searchParams.set('fbp', fbp);
            if (fbc) url.searchParams.set('fbc', fbc);
            target.href = url.toString();
          } catch (err) {
            console.error("Erro ao anexar parâmetros de rastreamento no clique:", err);
          }
        }
      };

      document.addEventListener('click', handleCaktoClick);
      setTimeout(prepararLinksDeCompra, 500);

      return () => {
        document.removeEventListener('click', handleCaktoClick);
      };
    }
  }, [basicDiscountUnlocked]);

  const handleBasicClick = (e: React.MouseEvent) => {
    if (!basicDiscountUnlocked) {
      e.preventDefault();
      setBasicDiscountUnlocked(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] pb-20 overflow-x-hidden text-white font-inter">
      <StickyBar />
      <Hero />
      <Features />
      <BonusSection />
      <FounderBio />

      {/* Pricing Section */}
      <div className="bg-red-600 text-white py-4 px-6 text-center font-black uppercase italic tracking-tighter text-sm md:text-base">
        ATENÇÃO: Desconto de 50% válido apenas para as próximas 24 horas!
      </div>
      
      <div className="bg-[#111111] py-16 text-center border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 mb-10">
          <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-2 text-white">ESCOLHA SEU PACOTE</h2>
          <p className="text-gray-400 font-bold text-sm mb-6">Aproveite a oferta antes que o tempo acabe:</p>
          <CountdownTimer />
        </div>
        
        <div className="flex flex-col gap-12 px-4 max-w-4xl mx-auto">
          {/* PACOTE BÁSICO / AGORA COM SUPER BONUS DINÂMICO */}
          <div className={`max-w-sm mx-auto w-full bg-[#1A1A1A] rounded-[40px] p-8 shadow-lg border transition-all duration-700 transform ${basicDiscountUnlocked ? 'border-[#EAB308] scale-105 shadow-2xl' : 'border-white/5 hover:-translate-y-2'}`}>
            {basicDiscountUnlocked && (
              <div className="bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 animate-bounce inline-block">🎁 SUPER BÔNUS LIBERADO!</div>
            )}
            
            <h3 className={`font-black text-xl mb-4 tracking-tighter ${basicDiscountUnlocked ? 'text-red-600' : 'text-white'}`}>
              {basicDiscountUnlocked ? 'PACOTE PLUS!' : 'PACOTE BÁSICO'}
            </h3>
            
            <div className="mb-6">
              <p className="text-xs line-through text-gray-500">
                De: R$ {basicDiscountUnlocked ? '37,00' : '47,00'}
              </p>
              <div className="flex items-center justify-center gap-1">
                <span className="font-bold text-lg self-start mt-2 text-gray-400">R$</span>
                <p className={`text-5xl font-black transition-all duration-500 ${basicDiscountUnlocked ? 'text-[#EAB308]' : 'text-white'}`}>
                  {basicDiscountUnlocked ? '24,90' : '14,90'}
                </p>
              </div>
            </div>

            <ul className="text-left space-y-4 mb-8 text-sm font-bold text-gray-400">
              <li className="flex items-center gap-2">
                <i className={`fa-solid fa-check ${basicDiscountUnlocked ? 'text-[#EAB308]' : 'text-green-500'}`}></i> 
                {basicDiscountUnlocked ? 'Acesso a TODO CONTEÚDO + BÔNUS🎁' : 'Acesso à lista completa'}
              </li>
              <li className="flex items-center gap-2">
                <i className={`fa-solid fa-check ${basicDiscountUnlocked ? 'text-[#EAB308]' : 'text-green-500'}`}></i> 
                Garantia de 7 dias
              </li>
              {basicDiscountUnlocked && (
                <li className="flex items-center gap-2 text-red-600 font-black italic animate-pulse uppercase text-xs">
                  <i className="fa-solid fa-bolt"></i> Oferta Única e Exclusiva!
                </li>
              )}
            </ul>

            <a 
              href={basicDiscountUnlocked ? "https://pay.cakto.com.br/fwvadyt" : "https://pay.cakto.com.br/c9rruds_618312"} 
              onClick={handleBasicClick}
              className={`block w-full text-white font-black py-5 rounded-2xl transition-all uppercase tracking-tight no-underline ${basicDiscountUnlocked ? 'bg-[#FF4D00] cta-pulse-orange shadow-xl' : 'bg-[#FF4D00] shadow-xl active:translate-y-1 active:shadow-none'}`}>
              SIM! QUERO COMEÇAR AGORA
            </a>
            
            <p className="mt-4 text-[10px] font-bold text-gray-500 flex items-center justify-center gap-2">
              <i className="fa-solid fa-envelope text-[#EAB308]"></i> Acesso imediato enviado para o seu e-mail após a confirmação.
            </p>
          </div>

          {/* PACOTE COMPLETO */}
          <div className="max-w-sm mx-auto w-full bg-[#1A1A1A] rounded-[40px] p-8 shadow-2xl border-[4px] border-[#EAB308] relative transform transition-all hover:-translate-y-2">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">🔥 MAIS VENDIDO</div>
            <h3 className="font-black text-xl mb-4 text-[#EAB308] tracking-tighter">PACOTE COMPLETO</h3>
            <div className="mb-6">
              <p className="text-xs line-through text-gray-500">De: R$ 97,00</p>
              <div className="flex items-center justify-center gap-1">
                <span className="font-bold text-lg self-start mt-2 text-gray-400">R$</span>
                <p className="text-5xl font-black text-white">37,00</p>
              </div>
            </div>
            <ul className="text-left space-y-4 mb-8 text-sm font-bold text-gray-400">
              <li className="flex items-start gap-2"><span>🎁</span> <span><b>BÔNUS 01</b> - Melhores fornecedores de Cosméticos.</span></li>
              <li className="flex items-start gap-2"><span>🎁</span> <span><b>BÔNUS 02</b> - Fornecedores para Loja de Preço Único.</span></li>
              <li className="flex items-start gap-2"><span>🎁</span> <span><b>BÔNUS 03</b> - Melhores fornecedores de SEMI-JOIAS.</span></li>
              <li className="flex items-start gap-2"><span>🎁</span> <span><b>BÔNUS 04</b> - Pack de Figurinhas para Story da sua Loja.</span></li>
              <li className="flex items-start gap-2"><span>🚀</span> <span><b>SUPER BÔNUS 05</b> - Aulas Exclusivas para Planejar sua Loja</span></li>
            </ul>
            <a href="https://pay.cakto.com.br/c9rruds_618312" className="cta-pulse-green block w-full bg-[#22C55E] text-white font-black py-5 rounded-2xl shadow-xl active:translate-y-1 active:shadow-none transition-all uppercase tracking-tight no-underline">SIM! QUERO COMEÇAR AGORA</a>
            <p className="mt-4 text-[10px] font-bold text-gray-500 flex items-center justify-center gap-2">
              <i className="fa-solid fa-envelope text-[#EAB308]"></i> Acesso imediato enviado para o seu e-mail após a confirmação.
            </p>
          </div>
        </div>

        <div className="mt-8 px-4">
          <p className="text-red-600 font-black text-xl uppercase italic animate-pulse">
            🔥 Restam apenas 7 vagas com este desconto único
          </p>
        </div>

        {/* Guarantee Section Below Pricing Cards */}
        <div className="mt-16 max-w-xl mx-auto px-6 text-left bg-white/5 p-8 rounded-[40px] border border-white/10 shadow-sm">
          <h4 className="font-black text-white mb-6 flex items-center gap-3 text-lg leading-tight">
            <span className="text-xl">🔒</span> Política de Devolução – Garantia de 7 Dias
          </h4>
          <div className="text-sm text-gray-400 space-y-4 font-semibold leading-relaxed">
            <p>Nós confiamos no que entregamos.</p>
            <p>Por isso, você tem 7 dias de garantia incondicional, conforme o Código de Defesa do Consumidor.</p>
            <p>
              <span className="text-lg">👉</span> Se dentro desse prazo você achar que o material não é para você, basta solicitar o reembolso e devolvemos 100% do valor pago.
            </p>
            <p className="text-white font-bold italic">Sem perguntas. Sem enrolação.</p>
            <p>O acesso é digital e imediato, e o reembolso é feito pelo mesmo meio de pagamento utilizado.</p>
          </div>
        </div>
      </div>

      <FAQ />

      {/* Footer */}
      <footer className="bg-[#0A0A0A] border-t border-white/5 py-12 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <Logo className="opacity-30 scale-75 mb-6" />
          <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">© 2026 Viva de Roupas. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
