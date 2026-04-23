import { services } from '../../mocks/services';
import { projects } from '../../mocks/projects';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/feature/SEO';

const whatsappMessage = encodeURIComponent('Merhaba, areaelektrik.com web siteniz üzerinden yazıyorum.');
const whatsappLink = `https://wa.me/905336429211?text=${whatsappMessage}`;

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#faf8f4' }}>
      <SEO
        title="İzmir Elektrik Taahhüt ve Proje Hizmetleri | Area Elektrik"
        description="Area Elektrik, İzmir Gaziemir merkezli 15 yıllık tecrübesiyle elektrik taahhüt, KNX otomasyon ve zayıf akım sistemlerinde profesyonel çözümler sunmaktadır."
        keywords="izmir elektrik taahhüt, area elektrik, elektrik taahhüt firması"
        canonical="/"
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 md:pt-20" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1920&h=1080&fit=crop&auto=format&fm=webp"
            alt="Profesyonel elektrik taahhüt çalışması - Area Elektrik"
            className="w-full h-full object-cover object-center opacity-25"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-4 md:mb-6 border" style={{ backgroundColor: 'rgba(212,184,150,0.15)', borderColor: 'rgba(212,184,150,0.4)' }}>
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#d4b896' }} aria-hidden="true"></div>
              <span className="text-xs md:text-sm font-medium" style={{ color: '#d4b896' }}>Türkiye Geneli Elektrik Çözüm Ortağı</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Elektrik Taahhüt <span className="italic" style={{ color: '#d4b896' }}>Hizmetleri</span>
            </h1>

            <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
              15 yıllık tecrübemizle elektrik taahhüt, akıllı ev sistemleri, zayıf akım ve proje hizmetlerinde
              Türkiye genelinde profesyonel çözümler sunuyoruz.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 md:px-8 py-2.5 md:py-4 rounded-full font-bold text-sm md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 whitespace-nowrap"
                style={{ backgroundColor: '#d4b896', color: '#1a1a1a' }}
              >
                <i className="ri-whatsapp-line text-lg md:text-xl" aria-hidden="true"></i>
                WhatsApp ile İletişime Geçin
              </a>
              <Link
                to="/projeler"
                className="border-2 text-white px-5 md:px-8 py-2.5 md:py-4 rounded-full font-bold text-sm md:text-lg transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
                style={{ borderColor: '#d4b896', backgroundColor: 'transparent' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#d4b896'; (e.currentTarget as HTMLElement).style.color = '#1a1a1a'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'white'; }}
              >
                Projelerimizi İnceleyin
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 md:py-14" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: '750+', label: 'Tamamlanan Proje' },
              { value: '88', label: 'Kişilik Uzman Ekip' },
              { value: '12', label: 'Devam Eden Proje' },
              { value: '15+', label: 'Yıllık Tecrübe' },
            ].map((stat, i) => (
              <div key={i} className="text-center border-r last:border-r-0" style={{ borderColor: 'rgba(212,184,150,0.2)' }}>
                <div className="text-3xl md:text-5xl font-bold mb-1" style={{ color: '#d4b896' }}>{stat.value}</div>
                <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="py-12 md:py-20" style={{ backgroundColor: '#faf8f4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <span className="text-xs md:text-sm uppercase tracking-wider" style={{ color: '#c8a96e' }}>Hizmetlerimiz</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 md:mt-4 mb-4 md:mb-6" style={{ color: '#1a1a1a' }}>
              Profesyonel Elektrik ve Zayıf Akım Çözümlerimiz
            </h2>
            <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">Türkiye genelinde tüm elektrik ve güvenlik sistemleri ihtiyaçlarınız için yanınızdayız.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/hizmetler/${service.slug}`}
                className="group rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border"
                style={{ backgroundColor: '#ffffff', borderColor: '#e8e0d4' }}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 md:p-5">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-2 md:mb-3 transition-colors" style={{ backgroundColor: 'rgba(212,184,150,0.2)' }}>
                    <i className={`${service.icon} text-lg md:text-xl`} style={{ color: '#1a1a1a' }} aria-hidden="true"></i>
                  </div>
                  <h3 className="text-sm md:text-base font-bold mb-1 md:mb-2 transition-colors line-clamp-2" style={{ color: '#1a1a1a' }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-2 md:mb-3 line-clamp-2 hidden sm:block">
                    {service.description}
                  </p>
                  <span className="font-semibold text-xs flex items-center gap-1 group-hover:gap-2 transition-all" style={{ color: '#c8a96e' }}>
                    Detay <i className="ri-arrow-right-line" aria-hidden="true"></i>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-20" style={{ backgroundColor: '#f0ebe3' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="rounded-3xl p-6 md:p-12 text-white" style={{ backgroundColor: '#1a1a1a' }}>
              <span className="text-xs md:text-sm uppercase tracking-wider text-gray-400">Neden Bizi Seçmelisiniz</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 md:mt-4 mb-6 md:mb-8 leading-tight">
                Neden Area Elektrik?
              </h2>
              <ul className="space-y-3 md:space-y-4">
                {[
                  'Profesyonel ve deneyimli 88 kişilik teknik ekip',
                  'Türkiye genelinde hızlı ve zamanında servis',
                  'Kaliteli ve sertifikalı malzeme kullanımı',
                  '7/24 teknik destek ve acil müdahale',
                  '750+ başarıyla tamamlanan proje referansı',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#d4b896' }} aria-hidden="true"></div>
                    <span className="text-sm md:text-lg text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl p-6 md:p-12" style={{ backgroundColor: '#ffffff', border: '1px solid #e8e0d4' }}>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center" style={{ color: '#1a1a1a' }}>
                15 Yıllık Sektörel Tecrübe ve Uzman Kadro
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-3 md:mb-4">
                Area Elektrik olarak, Türkiye genelinde elektrik taahhüt, akıllı ev sistemleri, zayıf akım sistemleri,
                proje hazırlama ve danışmanlık konularında uzman kadromuzla her ölçekte projeye çözüm üretiyoruz.
              </p>
              <h3 className="text-base md:text-lg font-bold mb-2 md:mb-3 text-center" style={{ color: '#1a1a1a' }}>
                Exproof ve Endüstriyel Standartlara Uygunluk
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
                TSE standartlarına uygun, güvenli ve uzun ömürlü elektrik sistemleri kuruyoruz. Exproof, ATEX ve OG
                projelerde de aynı titizlikle hizmet veren firmamız, müşteri memnuniyetini ön planda tutar.
              </p>
              <div className="text-center">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 md:px-8 py-2.5 md:py-4 rounded-full font-bold transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center gap-2 whitespace-nowrap text-sm md:text-base"
                  style={{ backgroundColor: '#d4b896', color: '#1a1a1a' }}
                >
                  <i className="ri-whatsapp-line" aria-hidden="true"></i>
                  WhatsApp ile İletişime Geçin
                  <i className="ri-arrow-right-line" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-12 md:py-20" style={{ backgroundColor: '#faf8f4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 md:mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#d4b896' }} aria-hidden="true"></div>
                <span className="text-gray-500 text-xs md:text-sm uppercase tracking-wider">Projelerimiz</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold" style={{ color: '#1a1a1a' }}>
                Tamamlanan Önemli Projelerimiz
              </h2>
            </div>
            <Link
              to="/projeler"
              className="font-semibold flex items-center gap-2 hover:gap-3 transition-all text-sm md:text-base"
              style={{ color: '#c8a96e' }}
            >
              Tüm Projelerimizi İnceleyin
              <i className="ri-arrow-right-line" aria-hidden="true"></i>
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {projects.slice(0, 6).map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-xl overflow-hidden border text-left hover:shadow-lg transition-all duration-300"
                style={{ backgroundColor: '#ffffff', borderColor: '#e8e0d4' }}
                aria-label={`${project.title} projesini görüntüle`}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 md:p-4">
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full mb-2 inline-block" style={{ backgroundColor: 'rgba(212,184,150,0.2)', color: '#1a1a1a' }}>
                    {project.category}
                  </span>
                  <h3 className="text-sm md:text-base font-bold line-clamp-2" style={{ color: '#1a1a1a' }}>{project.title}</h3>
                  <p className="text-gray-500 text-xs mt-1">{project.location} · {project.year}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20" style={{ backgroundColor: '#faf8f4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative min-h-[250px] md:min-h-[400px] lg:min-h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=800&fit=crop&auto=format&fm=webp"
                alt="Area Elektrik profesyonel teknik ekibi saha çalışması"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute top-4 md:top-6 left-4 md:left-6">
                <span className="text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold" style={{ backgroundColor: '#1a1a1a' }}>
                  Profesyonel Hizmet
                </span>
              </div>
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6">
                <p className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight">
                  Ücretsiz<br />Keşif ve<br />Teklif
                </p>
              </div>
            </div>

            <div className="p-6 md:p-8 lg:p-12 flex flex-col justify-center text-center" style={{ backgroundColor: '#1a1a1a' }}>
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
                Ücretsiz Keşif ve Teklif İçin Bizimle İletişime Geçin
              </p>
              <p className="text-gray-400 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                Türkiye genelinde projeleriniz için ücretsiz keşif ve detaylı teklif almak için hemen bizimle iletişime geçin.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 md:px-8 py-2.5 md:py-4 rounded-full font-bold transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm md:text-base"
                  style={{ backgroundColor: '#d4b896', color: '#1a1a1a' }}
                >
                  <i className="ri-whatsapp-line text-lg md:text-xl" aria-hidden="true"></i>
                  WhatsApp ile Yazın
                </a>
                <a
                  href="tel:+905336429211"
                  className="text-[#1a1a1a] px-5 md:px-8 py-2.5 md:py-4 rounded-full font-bold transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm md:text-base"
                  style={{ backgroundColor: '#d4b896' }}
                >
                  <i className="ri-phone-line text-lg md:text-xl" aria-hidden="true"></i>
                  Hemen Ara
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="iletisim" className="py-12 md:py-20" style={{ backgroundColor: '#f0ebe3' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4" style={{ color: '#1a1a1a' }}>Ücretsiz Keşif ve Teklif İçin Bizimle İletişime Geçin</h2>
            <p className="text-gray-500 text-sm md:text-lg">Sorularınız için bize ulaşın</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="rounded-2xl p-5 md:p-8 shadow-sm border" style={{ backgroundColor: '#ffffff', borderColor: '#e8e0d4' }}>
              <h3 className="text-lg md:text-2xl font-bold mb-4 md:mb-6" style={{ color: '#1a1a1a' }}>İletişim Bilgileri</h3>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(212,184,150,0.2)' }}>
                    <i className="ri-map-pin-line text-base md:text-xl" style={{ color: '#1a1a1a' }} aria-hidden="true"></i>
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-sm md:text-base" style={{ color: '#1a1a1a' }}>Adres</p>
                    <address className="text-gray-500 text-xs md:text-sm not-italic">Irmak Mah. Hasan Güven Cad. Özge D Blok No:69/3C Gaziemir / İzmir</address>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(212,184,150,0.2)' }}>
                    <i className="ri-phone-line text-base md:text-xl" style={{ color: '#1a1a1a' }} aria-hidden="true"></i>
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-sm md:text-base" style={{ color: '#1a1a1a' }}>Telefon</p>
                    <a href="tel:+905336429211" className="text-gray-500 hover:text-[#1a1a1a] transition-colors text-xs md:text-sm">
                      0533 642 92 11
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(212,184,150,0.2)' }}>
                    <i className="ri-whatsapp-line text-base md:text-xl" style={{ color: '#1a1a1a' }} aria-hidden="true"></i>
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-sm md:text-base" style={{ color: '#1a1a1a' }}>WhatsApp</p>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#1a1a1a] transition-colors text-xs md:text-sm">
                      WhatsApp ile İletişime Geçin
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(212,184,150,0.2)' }}>
                    <i className="ri-mail-line text-base md:text-xl" style={{ color: '#1a1a1a' }} aria-hidden="true"></i>
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-sm md:text-base" style={{ color: '#1a1a1a' }}>E-posta</p>
                    <a href="mailto:info@areaelektrik.com" className="text-gray-500 hover:text-[#1a1a1a] transition-colors text-xs md:text-sm">
                      info@areaelektrik.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(212,184,150,0.2)' }}>
                    <i className="ri-time-line text-base md:text-xl" style={{ color: '#1a1a1a' }} aria-hidden="true"></i>
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-sm md:text-base" style={{ color: '#1a1a1a' }}>Çalışma Saatleri</p>
                    <p className="text-gray-500 text-xs md:text-sm">Pazartesi - Cuma: 08:00 - 18:00</p>
                    <p className="text-gray-500 text-xs md:text-sm">Cumartesi: 09:00 - 14:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Article */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#faf8f4' }} aria-label="Bilgi rehberi">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 border" style={{ backgroundColor: 'rgba(212,184,150,0.15)', borderColor: 'rgba(212,184,150,0.4)' }}>
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#d4b896' }} aria-hidden="true"></div>
              <span className="text-sm font-semibold" style={{ color: '#1a1a1a' }}>Area Elektrik Rehberi</span>
            </div>
            <p className="text-gray-500 leading-relaxed text-sm md:text-base max-w-3xl">
              Bir binanın ya da tesisin elektrik altyapısı, içindeki her şeyin güvenli ve verimli çalışmasının temelini oluşturur. Bu temeli doğru atmak; doğru firmayı, doğru teknik kadroyu ve doğru süreci seçmekten geçer. <strong>İzmir elektrik taahhüt</strong> sektöründe hizmet veren firmalar arasında arayışınızı başlatıyorsanız, bu rehber tam size göre hazırlandı.
            </p>
          </div>

          {/* Article Groups */}
          <div className="space-y-10">
            {/* ── Group 1 ── */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-6 pb-3 border-b" style={{ color: '#1a1a1a', borderColor: '#e8e0d4' }}>
                İzmir Elektrik Taahhüt ve Mühendislik Çözümleri
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: `Kapsamlı Hizmet Portföyümüz`,
                    body: `15 yılı aşkın saha deneyimiyle <strong>İzmir elektrik taahhüt</strong> sektöründe konuttan endüstriyel tesise, hastaneden organize sanayi bölgesine kadar her ölçekte proje üstleniyoruz. Güçlü akım tesisatı, OG/AG sistemleri, KNX otomasyon, exproof altyapı ve zayıf akım sistemleri tek çatı altında sunuluyor. 88 kişilik uzman kadromuz ve 750'yi aşkın referans projemizle İzmir'in en köklü <strong>elektrik mühendisliği</strong> firmalarından biriyiz.`,
                    icon: 'ri-flashlight-line',
                  },
                  {
                    title: `Neden Area Elektrik?`,
                    body: `İzmir'in yerel dinamiklerini yakından tanıyan bir firma olarak TEDAŞ bağlantı süreçlerinden belediye proje onaylarına, OSB elektrik altyapısından MSB projelerine kadar her bürokratik ve teknik aşamayı tecrübeyle yönetiyoruz. TSE sertifikalı malzeme kullanımı, TS EN standartlarına tam uyum ve şeffaf teklif süreci, müşterilerimizin bize defalarca geri dönmesinin temel nedenidir. <strong>İzmir elektrik proje</strong> ihtiyaçlarınızda yanınızdayız.`,
                    icon: 'ri-shield-star-line',
                  },
                  {
                    title: `Proje Sürecimiz Nasıl İşler?`,
                    body: `Sizi ilk kez aradığınızda uzman mühendisimiz ücretsiz ön keşif için en kısa sürede sahaya gider; yapının fiziksel koşullarını, yük ihtiyacını ve mevzuat gerekliliklerini değerlendirir. Akabinde kalem kalem hazırlanmış, sürpriz maliyet içermeyen bir teklif sunulur. Onay sonrası proje çizimleri, malzeme temini, kademeli saha uygulaması ve nihai devreye alma testleri, tek bir proje yöneticisinin sorumluluğunda yürütülür.`,
                    icon: 'ri-road-map-line',
                  },
                ].map((item, i) => (
                  <div key={i} className="rounded-2xl border p-5 md:p-6" style={{ backgroundColor: '#ffffff', borderColor: '#e8e0d4' }}>
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(212,184,150,0.15)' }}>
                        <i className={`${item.icon} text-sm`} style={{ color: '#c8a96e' }} aria-hidden="true"></i>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm md:text-base font-bold mb-2 border-l-4 pl-3" style={{ color: '#1a1a1a', borderColor: '#d4b896' }}>{item.title}</h3>
                        <p className="text-gray-500 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: item.body }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* ── Group 2 ── */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-6 pb-3 border-b" style={{ color: '#1a1a1a', borderColor: '#e8e0d4' }}>
                İzmir'de Elektrik Projesi Yaptırmak İçin areaelektrik.com Güvenilir Mi?
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: `15 Yıllık Saha Deneyimi ve Kanıtlanmış Referanslar`,
                    body: `Güven, sözden değil sahayla ölçülür. Area Elektrik olarak 2010'dan bu yana <strong>İzmir elektrik firmaları</strong> arasında fark yaratan 750'nin üzerinde projeyi başarıyla tamamladık. Bu projeler arasında Millî Savunma Bakanlığı'na bağlı tesisler, İzmir Organize Sanayi Bölgeleri ve büyük ölçekli ticari yapılar yer almaktadır. Her proje zamanında, bütçe dahilinde ve teknik şartnameye uygun teslim edilmiştir.`,
                    icon: 'ri-award-line',
                  },
                  {
                    title: `Belge, Sertifikasyon ve Teknik Altyapı`,
                    body: `Firmamız; Elektrik Mühendisleri Odası kayıtlı mühendisler, Yapı Denetim onaylı sertifikalar ve TEDAŞ yetki belgeleriyle faaliyet göstermektedir. KNX sertifikalı mühendis kadromuz, exproof sistem uzmanlığımız ve akredite ölçüm ekipmanlarımız teknik yetkinliğimizin somut göstergesidir. Mahkeme ve sigorta süreçlerinde geçerli as-built çizimler ve test raporları her projede standart teslim kapsamına dahildir.`,
                    icon: 'ri-file-certificate-line',
                  },
                  {
                    title: `Müşteri Memnuniyeti ve Uzun Vadeli Destek`,
                    body: `İzmir'in yerel firması olarak müşterilerimizle "iş bitti, vedalaştık" ilişkisi kurmuyoruz. Projeyi teslim ettiğimizde asıl ilişki başlar: periyodik bakım anlaşmaları, arıza anında hızlı müdahale ve sistem genişletme ihtiyaçlarında teknik danışmanlık sunuyoruz. Referans listemizdeki firmaların büyük çoğunluğu 5 yılı aşkın süredir bizimle çalışmaya devam etmektedir. Bizi arayın; farkı kendiniz görün.`,
                    icon: 'ri-customer-service-2-line',
                  },
                ].map((item, i) => (
                  <div key={i} className="rounded-2xl border p-5 md:p-6" style={{ backgroundColor: '#ffffff', borderColor: '#e8e0d4' }}>
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(212,184,150,0.15)' }}>
                        <i className={`${item.icon} text-sm`} style={{ color: '#c8a96e' }} aria-hidden="true"></i>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm md:text-base font-bold mb-2 border-l-4 pl-3" style={{ color: '#1a1a1a', borderColor: '#d4b896' }}>{item.title}</h3>
                        <p className="text-gray-500 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: item.body }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* ── Group 3 ── */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-6 pb-3 border-b" style={{ color: '#1a1a1a', borderColor: '#e8e0d4' }}>
                İzmir Trafo Bakımı ve OG İşletme Sorumluluğu (2026)
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: `Yasal Zorunluluklar ve EPDK Uyumu`,
                    body: `Orta gerilim tesislerinin işletilmesi; EPDK lisanslama koşulları, TS EN 61936-1 standardı ve TEDAŞ bağlantı yönetmelikleri çerçevesinde ciddi yasal sorumluluklar doğurur. <strong>İzmir trafo bakımı</strong> yükümlülüklerini yerine getirmeyen işletmeler; EPDK idari yaptırımı, sigorta kapsamı kaybı ve iş güvenliği soruşturması riskiyle karşı karşıya kalır. Area Elektrik, bu yükümlülüklerin tamamını periyodik bakım sözleşmeleriyle usulüne uygun yönetir.`,
                    icon: 'ri-government-line',
                  },
                  {
                    title: `Trafo Merkezi Tasarımı ve Periyodik Bakım`,
                    body: `OG trafo merkezi tasarımında kısa devre hesabı, TS EN 61439-1/2 uyumlu pano seçimi, seçici koruma koordinasyonu ve TS EN 50522 kapsamlı topraklama boyutlandırması bütünleşik bir süreç olarak ele alınır. Periyodik bakım ziyaretlerinde trafo yağ analizi, termal kamera taraması, koruma rölesi testleri ve topraklama empedansı ölçümleri standart kapsama dahildir. Tüm sonuçlar karşılaştırmalı trend raporu olarak sunulur.`,
                    icon: 'ri-flashlight-fill',
                  },
                  {
                    title: `Area Elektrik'in OG Yaklaşımı`,
                    body: `İzmir ve Ege Bölgesi'ndeki sanayi tesislerinde OG altyapı deneyimimiz, bir bakım firmasının çok ötesine geçmektedir. Yük akış analizinden koruma rölesi koordinasyonuna, SCADA uyumlu RMU seçiminden devreye alma testlerine kadar her aşama belgelenmiş proje dosyasıyla teslim edilir. Mevcut OG sisteminizin yasal uygunluğunu ve teknik sağlığını ücretsiz değerlendirmek için bizimle iletişime geçin.`,
                    icon: 'ri-shield-star-line',
                  },
                ].map((item, i) => (
                  <div key={i} className="rounded-2xl border p-5 md:p-6" style={{ backgroundColor: '#ffffff', borderColor: '#e8e0d4' }}>
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(212,184,150,0.15)' }}>
                        <i className={`${item.icon} text-sm`} style={{ color: '#c8a96e' }} aria-hidden="true"></i>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm md:text-base font-bold mb-2 border-l-4 pl-3" style={{ color: '#1a1a1a', borderColor: '#d4b896' }}>{item.title}</h3>
                        <p className="text-gray-500 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: item.body }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* ── Group 4 ── */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-6 pb-3 border-b" style={{ color: '#1a1a1a', borderColor: '#e8e0d4' }}>
                İzmir Akıllı Ev ve KNX Otomasyon Sistemleri
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: `KNX Protokolü: Açık Standart, Uzun Vadeli Yatırım`,
                    body: `ISO/IEC 14543-3 ile tanımlanmış KNX protokolü; 500'den fazla üreticinin 75.000'i aşkın sertifikalı cihazını aynı veri yolu üzerinde buluşturur. Kapalı marka sistemlerinin aksine KNX, teknolojiyi değiştirsen de altyapını koruyan açık bir standarttır. <strong>İzmir akıllı ev</strong> projelerinde villa, rezidans ve otel uygulamalarında BEP-TR enerji performansı hedeflerini karşılarken %30'a varan ısıtma-soğutma tasarrufu sağlanmaktadır.`,
                    icon: 'ri-home-gear-line',
                  },
                  {
                    title: `ETS Programlama ve Profesyonel Komisyonlama`,
                    body: `KNX sistemin gerçek kalitesi, ETS yazılımındaki programlama disiplinine bağlıdır. Area Elektrik'te KNX sertifikalı mühendisler; grup adres yapısını, sahne senaryolarını ve HVAC entegrasyonunu sistematik test protokolleriyle devreye alır. Her data point belgelenir, ETS yedek dosyası müşteriye teslim edilir. Yanlış komisyonlama; aydınlatma, güvenlik ve enerji yönetimi senaryolarının beklenmedik çalışmasına yol açar — bunu bilen bir kadro önünüzde.`,
                    icon: 'ri-settings-4-line',
                  },
                  {
                    title: `Kurulum Sonrası Destek ve Genişletilebilirlik`,
                    body: `KNX'in en büyük avantajlarından biri modüler yapısıdır: binanın ilerleyen yıllarda geçireceği fonksiyon değişikliklerine fiziksel yeniden kablolama olmaksızın uyum sağlar. Area Elektrik, devreye alma sonrasında senaryo güncellemeleri, yeni cihaz entegrasyonu ve uzaktan izleme hizmetlerini uzun vadeli teknik destek paketi kapsamında sunmaktadır. İzmir ve Ege Bölgesi genelinde aktif servis ağımızla yanınızdayız.`,
                    icon: 'ri-customer-service-2-line',
                  },
                ].map((item, i) => (
                  <div key={i} className="rounded-2xl border p-5 md:p-6" style={{ backgroundColor: '#ffffff', borderColor: '#e8e0d4' }}>
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(212,184,150,0.15)' }}>
                        <i className={`${item.icon} text-sm`} style={{ color: '#c8a96e' }} aria-hidden="true"></i>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm md:text-base font-bold mb-2 border-l-4 pl-3" style={{ color: '#1a1a1a', borderColor: '#d4b896' }}>{item.title}</h3>
                        <p className="text-gray-500 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: item.body }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* ── Group 5 ── */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-6 pb-3 border-b" style={{ color: '#1a1a1a', borderColor: '#e8e0d4' }}>
                İzmir Exproof Sistem Tasarımı ve Uygulama Firmaları
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: `Saha Sınıflandırması ve Risk Analizi`,
                    body: `Patlayıcı ortam riski taşıyan tesislerde IEC 60079-10-1 (gazlar) ve IEC 60079-10-2 (yanıcı tozlar) standartlarına göre tehlikeli alan sınıflandırması yapılmadan elektrik tasarımına başlamak, hem yasal hem teknik açıdan kabul edilemez. İzmir'deki kimya, boya, gıda ve petrokimya tesislerinde Zone 0/1/2 sınırlarının yanlış belirlenmesi; ATEX denetimlerinde ağır yaptırımlara zemin hazırlar. Sınıflandırma çizimleri sigorta ve iş güvenliği denetimlerinde birincil belgedir.`,
                    icon: 'ri-alert-line',
                  },
                  {
                    title: `ATEX Direktifi Uyumu ve Ekipman Seçimi`,
                    body: `ATEX 2014/34/EU direktifi ve TS EN 60079 serisi; patlama korumalı ekipmanların kategori, işaretleme ve teknik gerekliliklerini tanımlar. Koruma konsepti seçimi (Ex d, Ex e, Ex ia, Ex n) saha sınıfına göre titizlikle yapılmalı; IECEx veya ATEX belgeli ekipman kullanımı zorunludur. Kablo geçiş rekorları ve bağlantı kutuları dahil tüm sistem bütünsel uygunluk kapsamında değerlendirilir. Area Elektrik teknik şartnameyi hazırlar, tedarik sürecini yönetir.`,
                    icon: 'ri-tools-line',
                  },
                  {
                    title: `Periyodik Denetim Hazırlığı ve Dokümantasyon`,
                    body: `TS EN 60079-17 gereği exproof tesisatların belirli aralıklarla detaylı kontrolü zorunludur. Area Elektrik, ilk kurulumdan periyodik denetim yönetimine kadar tüm süreci üstlenmektedir. İş güvenliği müfettişliği denetimine hazırlıklı olmak için tesisinizdeki exproof altyapıyı önceden değerlendiriyor, eksiklikleri tamamlıyor ve yasal formatta denetim raporlarını düzenliyoruz. <strong>İzmir elektrik mühendisliği</strong> alanında uzman desteğe hemen ulaşın.`,
                    icon: 'ri-shield-check-line',
                  },
                ].map((item, i) => (
                  <div key={i} className="rounded-2xl border p-5 md:p-6" style={{ backgroundColor: '#ffffff', borderColor: '#e8e0d4' }}>
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(212,184,150,0.15)' }}>
                        <i className={`${item.icon} text-sm`} style={{ color: '#c8a96e' }} aria-hidden="true"></i>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm md:text-base font-bold mb-2 border-l-4 pl-3" style={{ color: '#1a1a1a', borderColor: '#d4b896' }}>{item.title}</h3>
                        <p className="text-gray-500 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: item.body }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* ── Group 6 ── */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-6 pb-3 border-b" style={{ color: '#1a1a1a', borderColor: '#e8e0d4' }}>
                İzmir Elektrik Taahhüt Fiyatları (2026 Güncel)
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: `Fiyatı Belirleyen Temel Faktörler`,
                    body: `<strong>İzmir elektrik taahhüt fiyatları</strong>; projenin ölçeği, kablaj uzunluğu ve güzergâhı, pano karmaşıklığı, malzeme sınıfı, OG/AG ayrımı ve ek sistem gereksinimleri gibi onlarca değişkene bağlıdır. 2026 itibarıyla bakır fiyatları ve işçilik maliyetlerindeki dalgalanmalar fiyat aralıklarını direkt etkiliyor. Bu nedenle internet üzerindeki genel fiyat listelerine değil, projenize özel saha keşfine ve şeffaf teklif sürecine güvenmeniz gerekir.`,
                    icon: 'ri-price-tag-3-line',
                  },
                  {
                    title: `Şeffaf Teklif Sürecimiz`,
                    body: `Area Elektrik olarak her teklifi kalem kalem hazırlıyor; malzeme, işçilik, nakliye ve proje yönetimi kalemlerini ayrı ayrı raporluyoruz. Sözleşme imzalandıktan sonra ortaya çıkan revizyon ihtiyaçları, başından belirlenen değişiklik yönetim protokolüyle şeffaf biçimde ele alınır. Müşterilerimizden en sık duyduğumuz yorum: "Baştan söylenenle sonuçta ödenen aynıydı." Bu güveni kurmak bizim için her projenin temel hedefidir.`,
                    icon: 'ri-file-list-3-line',
                  },
                  {
                    title: `Ücretsiz Keşif ve Maliyet Değerlendirmesi`,
                    body: `Projenizin ne kadara geleceğini tahmin etmek için önce sahayı görmemiz gerekiyor. Uzman mühendisimiz ücretsiz keşif randevusunda yapıyı değerlendirir, mevcut altyapıyı inceler ve kullanım amacına göre en uygun teknik çözümü belirler. Keşif sonrasında sunulan detaylı teklif size karar vermek için gereken tüm bilgiyi sağlar — herhangi bir yükümlülük doğurmadan. WhatsApp veya telefon ile birkaç dakikada süreci başlatabilirsiniz.`,
                    icon: 'ri-search-line',
                  },
                ].map((item, i) => (
                  <div key={i} className="rounded-2xl border p-5 md:p-6" style={{ backgroundColor: '#ffffff', borderColor: '#e8e0d4' }}>
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(212,184,150,0.15)' }}>
                        <i className={`${item.icon} text-sm`} style={{ color: '#c8a96e' }} aria-hidden="true"></i>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm md:text-base font-bold mb-2 border-l-4 pl-3" style={{ color: '#1a1a1a', borderColor: '#d4b896' }}>{item.title}</h3>
                        <p className="text-gray-500 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: item.body }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* ── Group 7 ── */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-6 pb-3 border-b" style={{ color: '#1a1a1a', borderColor: '#e8e0d4' }}>
                İzmir Zayıf Akım ve Güvenlik Sistemlerinde Hangi Alanlarda Hizmet Veriyoruz?
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: `IP Kamera, Yangın Alarm ve Erişim Kontrol Sistemleri`,
                    body: `<strong>İzmir zayıf akım sistemleri</strong> alanında IP kamera, yangın alarm, kartlı geçiş, interkom ve IP santral sistemlerinin tasarım, kurulum ve bakımını üstleniyoruz. Yangın alarm sistemleri TS EN 54 serisi ve Binaların Yangından Korunması Hakkında Yönetmelik'e uygun tasarlanır; adreslenebilir loop yapısı sayesinde alarm kaynağı saniyeler içinde tespit edilir. Kamera sistemleri 4K çözünürlük, yapay zekâ analitiği ve PoE+ altyapısıyla mühendislik disiplininde kurulur.`,
                    icon: 'ri-camera-line',
                  },
                  {
                    title: `Bütünleşik Güvenlik ve Busbar Altyapısı`,
                    body: `Büyük projelerde kamera, yangın alarm ve erişim sistemlerinin tek platformda yönetilmesi; operasyonel maliyet ve müdahale süresi açısından önemli avantajlar sağlar. Area Elektrik bu bütünleşik güvenlik altyapısını BACnet/Modbus veya IP tabanlı protokollerle bina otomasyon sistemlerine entegre eder. Busbar dukt sistemlerinde ise IEC 61439-6 uyumlu tasarım; yüksek akım kapasitesi, modüler esneklik ve düşük toplam sahip olma maliyetiyle geleneksel kablo çözümlerine belirgin üstünlük sağlar.`,
                    icon: 'ri-shield-line',
                  },
                  {
                    title: `Uzaktan Sayaç Okuma, Jeneratör ve UPS Sistemleri`,
                    body: `AMR/AMI tabanlı uzaktan sayaç okuma sistemleri; tüketim analizi, hat kayıp-kaçak tespiti ve ISO 50001 enerji veri toplama yükümlülüklerini karşılar. Jeneratör ve UPS projelerinde güç analizi, ATS entegrasyonu ve IEC 62040-3 kapsamlı load bank testleri standart devreye alma protokolümüze dahildir. İzmir genelinde veri merkezi, hastane ve üretim tesisleri bu sistemleri Area Elektrik güvencesiyle işletmektedir.`,
                    icon: 'ri-battery-charge-line',
                  },
                ].map((item, i) => (
                  <div key={i} className="rounded-2xl border p-5 md:p-6" style={{ backgroundColor: '#ffffff', borderColor: '#e8e0d4' }}>
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(212,184,150,0.15)' }}>
                        <i className={`${item.icon} text-sm`} style={{ color: '#c8a96e' }} aria-hidden="true"></i>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm md:text-base font-bold mb-2 border-l-4 pl-3" style={{ color: '#1a1a1a', borderColor: '#d4b896' }}>{item.title}</h3>
                        <p className="text-gray-500 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: item.body }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* ── Group 8 ── */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-6 pb-3 border-b" style={{ color: '#1a1a1a', borderColor: '#e8e0d4' }}>
                İzmir Elektrik Arıza ve Periyodik Bakım Firmaları
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: `Yasal Periyodik Bakım Yükümlülükleri`,
                    body: `6331 sayılı İSG Kanunu, TS HD 60364-6 ve Elektrik Kuvvetli Akım Tesisleri Yönetmeliği; işverenler için yıllık periyodik elektrik kontrol yükümlülüğü oluşturur. <strong>İzmir elektrik firmaları</strong> arasında bu yükümlülüğü yasal formatta belgeleyen nitelikli firma sayısı sınırlıdır. Area Elektrik, periyodik kontrol hizmetlerini akredite ekipmanlar ve imzalı teknik raporlarla yürütmekte; OSGB ve İş Güvenliği Müfettişliği denetimlerine karşı işletmenizi tam güvence altına almaktadır.`,
                    icon: 'ri-file-warning-line',
                  },
                  {
                    title: `Topraklama, Termografi ve Ölçüm Hizmetleri`,
                    body: `Periyodik bakımın teknik özü; TS EN 61557 uyumlu cihazlarla gerçekleştirilen yalıtım direnci (megger), topraklama empedansı, döngü impedansı ve RCD fonksiyon testlerinden oluşur. Termal kamera taraması; konnektör gevşekliği, aşırı yüklü kesitler ve arızalı sigorta yataklarını yük altında ve devre dışı bırakmadan saptar. Bu yöntem arızayı beklemeyi değil, arızayı önceden görmeyi mümkün kılar. Akredite kalibrasyona sahip cihazlarla alınan sonuçlar hukuken geçerlidir.`,
                    icon: 'ri-search-eye-line',
                  },
                  {
                    title: `Acil Müdahale ve Teknik Raporlama`,
                    body: `İzmir'in yerel firması olarak arıza anında bekleme süresini minimize ediyoruz; kritik bulgular için aynı gün müdahale protokolümüz devrededir. Her periyodik bakım; ölçüm sonuçları, standart eşik değerleriyle karşılaştırma, risk öncelik matrisi ve aksiyon önerilerini kapsayan kapsamlı teknik raporla belgelenir. Arşivlenen raporlar, ilerleyen dönemlerde karşılaştırmalı trend analizi yaparak olası arızaları önceden tahmin etmeye olanak tanır.`,
                    icon: 'ri-alarm-warning-line',
                  },
                ].map((item, i) => (
                  <div key={i} className="rounded-2xl border p-5 md:p-6" style={{ backgroundColor: '#ffffff', borderColor: '#e8e0d4' }}>
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(212,184,150,0.15)' }}>
                        <i className={`${item.icon} text-sm`} style={{ color: '#c8a96e' }} aria-hidden="true"></i>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm md:text-base font-bold mb-2 border-l-4 pl-3" style={{ color: '#1a1a1a', borderColor: '#d4b896' }}>{item.title}</h3>
                        <p className="text-gray-500 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: item.body }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* ── Group 9 ── */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-6 pb-3 border-b" style={{ color: '#1a1a1a', borderColor: '#e8e0d4' }}>
                Profesyonel Elektrik Proje Onay Süreci Ne Kadar Sürer?
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: `Proje Hazırlık ve Onay Aşamaları`,
                    body: `Elektrik projesi onay süreci; yük hesabı ve tek hat şeması hazırlığı, ilgili kurum onayları (belediye, TEDAŞ, yapı denetim), uygulama projesi ve as-built teslimi olmak üzere birbirini izleyen aşamalardan oluşur. Süre, yapı tipine ve büyüklüğüne göre konutlarda 2-4 hafta, endüstriyel projelerde 6-12 hafta arasında değişir. Her aşamada doğru evrak düzeni ve kurumsal iletişim, süreç gecikmelerini büyük ölçüde önler.`,
                    icon: 'ri-time-line',
                  },
                  {
                    title: `İzmir'de Belediye, TEDAŞ ve EPDK Süreçleri`,
                    body: `İzmir özelinde TEDAŞ bağlantı başvuruları, İzmir Büyükşehir Belediyesi yapı ruhsatı onay akışları ve OSB elektrik altyapısı protokolleri konusundaki bilgi birikimimiz, bürokratik süreçleri hızlandırmamızı sağlar. <strong>İzmir elektrik proje</strong> başvurularında hangi belgelerin hangi kuruma, hangi formatta sunulacağını bilen bir kadro; hem zaman hem maliyet tasarrufu demektir. Kurum ilişkilerimiz onay süreçlerini sistematik biçimde takip etmemize imkân tanır.`,
                    icon: 'ri-building-2-line',
                  },
                  {
                    title: `Area Elektrik'in Süreç Hızlandırıcı Rolü`,
                    body: `Çoğu firmada proje onay süreci insan hatası, eksik evrak veya kurumlar arası iletişim kopukluğundan dolayı gereğinden uzun sürer. Area Elektrik olarak her projeye atanan proje yöneticisi, kurum takiplerini, revizyon taleplerini ve ara onayları proaktif biçimde yönetir. Müşterimiz süreçle değil, sonuçla ilgilenir — bu yaklaşım 15 yıldır değişmedi. Projenizi danışmaya getirin; zaman çizelgesini birlikte oluşturalım.`,
                    icon: 'ri-rocket-line',
                  },
                ].map((item, i) => (
                  <div key={i} className="rounded-2xl border p-5 md:p-6" style={{ backgroundColor: '#ffffff', borderColor: '#e8e0d4' }}>
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(212,184,150,0.15)' }}>
                        <i className={`${item.icon} text-sm`} style={{ color: '#c8a96e' }} aria-hidden="true"></i>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm md:text-base font-bold mb-2 border-l-4 pl-3" style={{ color: '#1a1a1a', borderColor: '#d4b896' }}>{item.title}</h3>
                        <p className="text-gray-500 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: item.body }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* ── Group 10 ── */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-6 pb-3 border-b" style={{ color: '#1a1a1a', borderColor: '#e8e0d4' }}>
                Doğru Elektrik Taahhüt Hizmeti ve Montajı Nasıl Olmalı?
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: `Kaliteli Montajın Teknik Kriterleri`,
                    body: `Görünürde aynı gibi duran iki elektrik tesisatı arasındaki fark; kablo kesit hesabının doğruluğunda, gerilim düşümü sınırlarına uyumda, sigorta ve koruma elemanlarının koordinasyonunda ve topraklama sisteminin TS EN 50522'ye göre boyutlandırılmasında gizlidir. Bu hesapların eksik yapılması; ilk yıllarda değil, 5-10 yıl sonra arıza, yangın veya ekipman hasarı olarak kendini gösterir. Doğru <strong>elektrik taahhüt hizmeti</strong> bugünü değil, 20 yılı garanti altına alır.`,
                    icon: 'ri-medal-line',
                  },
                  {
                    title: `Malzeme Seçimi ve Standart Uyumu`,
                    body: `Sertifikalı malzeme kullanımı hem teknik güvenliği hem de hukuki güvenceyi sağlar. Area Elektrik projelerinde TSE belgeli kablo ve iletkenler, CE işaretli pano ekipmanları ve IEC standartlarına uygun koruma cihazları tercih edilir. Ucuz ve belgésiz malzeme kullanan firmalar kısa vadede cazip görünse de sigorta tazminat süreçlerinde ve iş kazası soruşturmalarında işletmeyi korumasız bırakır. Malzeme listesini şeffaf biçimde teklif dosyasında sunuyoruz.`,
                    icon: 'ri-checkbox-circle-line',
                  },
                  {
                    title: `Uzun Vadeli Güvenlik ve Bakım Güvencesi`,
                    body: `Montaj bitmesi işin bittiği değil, başladığı andır. Area Elektrik olarak kurulum sonrası periyodik bakım anlaşmaları, genişletme danışmanlığı ve arıza anında hızlı müdahale imkânı sunuyoruz. İzmir'in yerli firması olarak müşterilerimizle onlarca yıllık ilişkiler kuruyoruz; referans listemiz bunu kanıtlıyor. <strong>İzmir elektrik taahhüt</strong> hizmetinde kalıcı çözüm için doğru adrestesiniz. Ücretsiz keşif için hemen iletişime geçin.`,
                    icon: 'ri-tools-line',
                  },
                ].map((item, i) => (
                  <div key={i} className="rounded-2xl border p-5 md:p-6" style={{ backgroundColor: '#ffffff', borderColor: '#e8e0d4' }}>
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(212,184,150,0.15)' }}>
                        <i className={`${item.icon} text-sm`} style={{ color: '#c8a96e' }} aria-hidden="true"></i>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm md:text-base font-bold mb-2 border-l-4 pl-3" style={{ color: '#1a1a1a', borderColor: '#d4b896' }}>{item.title}</h3>
                        <p className="text-gray-500 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: item.body }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>



          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Proje detayı: ${selectedProject.title}`}
        >
          <div
            className="relative max-w-lg w-full rounded-2xl overflow-hidden shadow-2xl"
            style={{ backgroundColor: '#faf8f4' }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center bg-black/30 text-white hover:bg-black/50 transition-colors"
              aria-label="Modalı kapat"
            >
              <i className="ri-close-line text-lg" aria-hidden="true"></i>
            </button>
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={selectedProject.images[0]}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <span className="text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3" style={{ backgroundColor: 'rgba(212,184,150,0.2)', color: '#1a1a1a' }}>
                {selectedProject.category}
              </span>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#1a1a1a' }}>{selectedProject.title}</h3>
              <p className="text-gray-500 text-sm mb-3">{selectedProject.description}</p>
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1"><i className="ri-map-pin-line" aria-hidden="true"></i>{selectedProject.location}</span>
                <span className="flex items-center gap-1"><i className="ri-calendar-line" aria-hidden="true"></i>{selectedProject.year}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
