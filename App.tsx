import React, { useState } from 'react';

// --- COMPONENTES AUXILIARES ---

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
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent"></div>
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

// --- SEÇÕES PRINCIPAIS ---

const Hero = () => (
  <Section className="text-center">
    <div className="flex justify-center mb-10">
      <Logo />
    </div>
    <h1 className="text-lg md:text-xl font-bold leading-tight mb-6">
      Tenha acesso aos <span className="text-[#EAB308]">fabricantes de moda feminina</span> confiáveis para dar início ao seu próprio negócio com peças de qualidade e preço baixo.
    </h1>
    <div className="relative mb-12 flex justify-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#EAB308]/20 blur-[100px] rounded-full -z-10"></div>
      <img 
        src="https://i.ibb.co/3mQXvSh4/Chat-GPT-Image-1-de-jan-de-2026-19-04-01-removebg-preview.png" 
        alt="Viva de Roupas Destaque" 
        className="relative z-10 w-full max-md:max-w-xs object-contain transition-all duration-700 hover:scale-[1.05]"
      />
    </div>
    <p className="text-base md:text-lg font-bold mb-4">
      Aqui você encontra fornecedores de peças a partir de <span className="text-[#EAB308] font-black underline">R$ 7,50</span> pra você começa <span className="text-[#EAB308] font-black underline">hoje mesmo!</span>
    </p>
    <a 
       href="https://pay.cakto.com.br/c9rruds_618312"
       className="cta-pulse bg-[#22C55E] hover:bg-[#16A34A] text-white font-extrabold py-5 px-8 rounded-lg shadow-[0_4px_0_rgb(22,101,52)] active:shadow-none active:translate-y-1 transition-all w-full text-xl uppercase flex items-center justify-center gap-2 no-underline">
      TENHA ACESSO HOJE! <i className="fa-solid fa-lock"></i>
    </a>
    <p className="mt-4 text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center justify-center gap-2">
      <i className="fa-solid fa-shield-halved text-green-600"></i> Acesso 100% seguro e imediato
    </p>
  </Section>
);

const Features = () => (
  <div className="bg-gray-100 py-16 border-y border-gray-200">
    <Section className="max-w-2xl px-4 text-center">
      <h2 className="text-3xl font-extrabold mb-2 uppercase italic tracking-tighter leading-none">
        O Que Vai Encontrar No <span className="text-[#EAB308]">VIVA DE ROUPAS</span>?
      </h2>
      <p className="text-gray-600 text-sm font-semibold mb-8 max-w-sm mx-auto leading-tight">
        Conheça agora alguns modelos dos Fornecedores mais desejados, que você encontra no VIVA DE ROUPAS
      </p>
      
      <ImageCarousel />
      
      <p className="text-black text-sm font-bold mt-2 mb-8 italic">
        Essas variedades de Roupas para todo gosto Feminino..
      </p>

      <div className="w-full space-y-4 text-left mt-8">
        {[
          "Fornecedores de roupas por até R$ 7,50",
          "Moda Luxo, Fitness, Preço Único, Pijamas, Lingerie, Infantil...",
          "Fornecedores sem limite de compra mínima",
          "Como começar do ZERO!",
          "Estratégia de como Vender",
          "Como investir pouco no início",
          "Acesso imediato por e-mail."
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-200">
            <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <i className="fa-solid fa-check text-green-600"></i>
            </div>
            <span className="font-bold text-gray-700">{item}</span>
          </div>
        ))}
      </div>

      <div className="mt-16 mb-8">
        <h3 className="text-xl md:text-2xl font-black uppercase italic tracking-tight leading-tight">
          Quem usa o <span className="text-[#EAB308]">VIVA DE ROUPAS</span> tem esses resultados:
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {[
          "https://i.ibb.co/C5D4F0W2/Captura-de-tela-2025-10-12-140837.png",
          "https://i.ibb.co/3yPQQYVQ/Captura-de-tela-2025-10-12-140903.png",
          "https://i.ibb.co/NgpC2nvR/Captura-de-tela-2025-10-12-140952.png",
          "https://i.ibb.co/PvCghXKN/depoimento.png"
        ].map((src, index) => (
          <div key={index} className="overflow-hidden rounded-xl shadow-sm border border-black/10">
            <img src={src} alt={`Resultado ${index + 1}`} className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>

      <div className="mt-12 text-center px-4">
        <p className="text-xl md:text-2xl font-black italic tracking-tight leading-tight">
          A Próxima pode ser você... Eai? bora <span className="text-[#EAB308] uppercase">VIVER DE ROUPAS !!</span>
        </p>
      </div>
    </Section>
  </div>
);

const BonusSection = () => (
  <div className="bg-black text-white py-12">
    <Section className="text-center">
      <h2 className="text-4xl font-black mb-2 italic tracking-tighter uppercase">BÔNUS EXCLUSIVO!</h2>
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
        <i className="fa-solid fa-gift"></i> QUERO ACESSO AGORA!
      </a>
    </Section>
  </div>
);

const FounderBio = () => (
  <div className="bg-white py-20 border-y border-gray-100">
    <Section className="flex flex-col items-center text-center">
      <h2 className="text-3xl font-black italic mb-8 uppercase">Oi, eu sou a Gabrieli 👋</h2>
      
      <img 
        src="https://i.ibb.co/mrRp3Tqv/Chat-GPT-Image-1-de-jan-de-2026-21-19-56.png" 
        className="w-full max-w-[320px] rounded-2xl mb-10 border-4 border-[#EAB308]/20 shadow-xl"
        alt="Gabrieli Fundadora"
      />
      
      <div className="text-gray-700 space-y-6 text-base md:text-lg leading-relaxed text-left max-w-md mx-auto">
        <p>
          Comecei a empreender em 2021, com apenas 17 anos, quando abri a minha loja online, a <span className="font-bold italic">ÒH! MARIA</span>.
        </p>
        <p>
          Na época, tudo era na base da tentativa e erro. Passei noites garimpando fornecedores, tomei susto, perdi dinheiro... Mas também aprendi. e cresci.
        </p>
        <p>
          Com o tempo, comecei a receber mensagens de outras mulheres querendo começar — mas travadas no mesmo ponto que eu:
        </p>
        <blockquote className="bg-gray-100 p-4 border-l-4 border-[#EAB308] rounded-r-xl italic font-semibold">
          “Onde eu encontro fornecedor confiável?”
        </blockquote>
        <p>
          💡 Foi aí que tive a ideia do <span className="text-[#EAB308] font-bold">Viva de roupas</span>.
        </p>
        <p>
          Um lugar seguro, com fornecedores testados, informações organizadas, e tudo pronto pra facilitar a vida de quem quer começar com o pé direito.
        </p>
        <p className="font-bold">
          Hoje, mais de 10 mil empreendedoras usam o Guia pra revender moda feminina com confiança.
        </p>
      </div>

      <a 
        href="https://pay.cakto.com.br/c9rruds_618312"
        className="mt-12 cta-pulse bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold py-5 px-10 rounded-full uppercase text-sm tracking-widest no-underline shadow-xl transition-all flex items-center gap-3">
        QUERO ACESSO HOJE! <i className="fa-solid fa-arrow-right"></i>
      </a>
      <p className="mt-4 text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center justify-center gap-2">
        <i className="fa-solid fa-shield-halved text-green-600"></i> Acesso 100% seguro e imediato
      </p>
    </Section>
  </div>
);

const FAQ = () => (
  <Section className="py-20">
    <h2 className="text-3xl font-black italic text-gray-900 mb-10 uppercase text-center">DÚVIDAS FREQUENTES</h2>
    <div className="space-y-6">
      {[
        { q: "Essa lista serve para quem nunca trabalhou com revenda?", a: "Sim. A lista é feita pra iniciantes que querem começar do zero." },
        { q: "Os fornecedores são confiáveis?", a: "Sim. Todos os fornecedores são testados e possuem anos de mercado." },
        { q: "Como recebo o acesso?", a: "Imediatamente após a confirmação do pagamento, os dados chegam no seu e-mail." }
      ].map((faq, i) => (
        <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
          <p className="text-sm text-gray-500">{faq.a}</p>
        </div>
      ))}
    </div>
  </Section>
);

export default function App() {
  const [basicDiscountUnlocked, setBasicDiscountUnlocked] = useState(false);

  const handleBasicClick = (e: React.MouseEvent) => {
    if (!basicDiscountUnlocked) {
      e.preventDefault();
      setBasicDiscountUnlocked(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 overflow-x-hidden text-gray-900 font-montserrat">
      <Hero />
      <Features />
      <BonusSection />
      <FounderBio />

      {/* Pricing Section */}
      <div className="bg-[#F2F2F2] py-16 text-center border-y border-gray-200">
        <div className="flex flex-col gap-12 px-4 max-w-4xl mx-auto">
          {/* PACOTE BÁSICO / AGORA COM SUPER BONUS DINÂMICO */}
          <div className={`max-w-sm mx-auto w-full bg-white rounded-[40px] p-8 shadow-lg border transition-all duration-700 transform ${basicDiscountUnlocked ? 'border-[#EAB308] scale-105 shadow-2xl' : 'border-black/10 hover:-translate-y-2'}`}>
            {basicDiscountUnlocked && (
              <div className="bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 animate-bounce inline-block">🎁 SUPER BÔNUS LIBERADO!</div>
            )}
            
            <h3 className={`font-black text-xl mb-4 tracking-tighter ${basicDiscountUnlocked ? 'text-red-600' : ''}`}>
              {basicDiscountUnlocked ? 'PACOTE PLUS!' : 'PACOTE BÁSICO'}
            </h3>
            
            <div className="mb-6">
              <p className="text-xs line-through text-gray-400">
                De: R$ {basicDiscountUnlocked ? '37,00' : '47,00'}
              </p>
              <div className="flex items-center justify-center gap-1">
                <span className="font-bold text-lg self-start mt-2">R$</span>
                <p className={`text-5xl font-black transition-all duration-500 ${basicDiscountUnlocked ? 'text-[#EAB308]' : ''}`}>
                  {basicDiscountUnlocked ? '24,90' : '14,90'}
                </p>
              </div>
            </div>

            <ul className="text-left space-y-4 mb-8 text-sm font-bold text-gray-600">
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
              className={`block w-full text-white font-black py-5 rounded-2xl transition-all uppercase tracking-tight no-underline ${basicDiscountUnlocked ? 'bg-[#22C55E] cta-pulse shadow-[0_4px_0_rgb(22,101,52)]' : 'bg-[#22C55E] shadow-[0_4px_0_rgb(22,101,52)] active:translate-y-1 active:shadow-none'}`}>
              TENHA ACESSSO AGORA!
            </a>
            
            <p className="mt-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center justify-center gap-2">
              <i className="fa-solid fa-shield-halved text-green-600"></i> Acesso 100% seguro e imediato
            </p>
          </div>

          {/* PACOTE COMPLETO */}
          <div className="max-w-sm mx-auto w-full bg-white rounded-[40px] p-8 shadow-2xl border-[4px] border-[#EAB308] relative transform transition-all hover:-translate-y-2">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">🔥 MAIS VENDIDO</div>
            <h3 className="font-black text-xl mb-4 text-[#EAB308] tracking-tighter">PACOTE COMPLETO</h3>
            <div className="mb-6">
              <p className="text-xs line-through text-gray-400">De: R$ 97,00</p>
              <div className="flex items-center justify-center gap-1">
                <span className="font-bold text-lg self-start mt-2">R$</span>
                <p className="text-5xl font-black">37,00</p>
              </div>
            </div>
            <ul className="text-left space-y-4 mb-8 text-sm font-bold text-gray-600">
              <li className="flex items-start gap-2"><span>🎁</span> <span><b>BÔNUS 01</b> - Melhores fornecedores de Cosméticos.</span></li>
              <li className="flex items-start gap-2"><span>🎁</span> <span><b>BÔNUS 02</b> - Fornecedores para Loja de Preço Único.</span></li>
              <li className="flex items-start gap-2"><span>🎁</span> <span><b>BÔNUS 03</b> - Melhores fornecedores de SEMI-JOIAS.</span></li>
              <li className="flex items-start gap-2"><span>🎁</span> <span><b>BÔNUS 04</b> - Pack de Figurinhas para Story da sua Loja.</span></li>
              <li className="flex items-start gap-2"><span>🚀</span> <span><b>SUPER BÔNUS 05</b> - Aulas Exclusivas para Planejar sua Loja</span></li>
            </ul>
            <a href="https://pay.cakto.com.br/c9rruds_618312" className="cta-pulse block w-full bg-[#22C55E] text-white font-black py-5 rounded-2xl shadow-[0_4px_0_rgb(22,101,52)] active:translate-y-1 active:shadow-none transition-all uppercase tracking-tight no-underline">QUERO PACOTE COMPLETO AGORA!</a>
            <p className="mt-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center justify-center gap-2">
              <i className="fa-solid fa-shield-halved text-green-600"></i> Acesso 100% seguro e imediato
            </p>
          </div>
        </div>
      </div>

      <FAQ />

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <Logo className="opacity-30 scale-75 mb-6" />
          <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">© 2026 Viva de Roupas. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}