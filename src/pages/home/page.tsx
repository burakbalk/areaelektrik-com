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
            {/* ── Group 6 ── */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-6 pb-3 border-b" style={{ color: '#1a1a1a', borderColor: '#e8e0d4' }}>
                İzmir Sanayi Tesisleri İçin Trafo ve OG İşletme Sorumluluğu
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'OG Tesislerinde Yasal Zorunluluklar',
                    body: `Orta gerilim tesislerinin işletilmesi; EPDK lisanslama koşulları, TEDAŞ bağlantı ve sistem kullanım yönetmelikleri ile TS EN 61936-1 standardının birlikte uygulanmasını zorunlu kılar. Türkiye'de 1 kV üzerindeki trafo ve şalt tesislerini işleten her işletme, TEDAŞ bölge müdürlüğünden alınmış bağlantı anlaşmasına ve yetkili elektrik mühendisi gözetiminde hazırlanmış işletme talimatnamelerine sahip olmak zorundadır. Bu yükümlülüklerin karşılanmaması; EPDK idari yaptırımlarının yanı sıra bağlantı kesintisi ve iş güvenliği soruşturmasına zemin hazırlar.`,
                    icon: 'ri-government-line',
                  },
                  {
                    title: 'Trafo Merkezi Tasarımı ve Mühendislik Süreci',
                    body: `OG trafo merkezi tasarımı; TS EN 61439-1 ve TS EN 61439-2 uyumlu pano seçimi, kısa devre ve yük akımı hesapları, seçici koruma rölesi koordinasyonu ve TS EN 50522 kapsamlı topraklama sistemi boyutlandırmasından oluşan bütünleşik bir mühendislik sürecidir. Trafo gücünün yanlış hesaplanması ya da koruma koordinasyonunun eksik yapılması; kaskad arızalara, uzun süreli üretim duraksamalarına ve ağır ekipman hasarlarına yol açar. Her tasarım adımı, ölçüm ve doğrulama prosedürleriyle belgelenerek teslim edilmelidir.`,
                    icon: 'ri-flashlight-fill',
                  },
                  {
                    title: 'Area Elektrik Mühendislik Yaklaşımı',
                    body: `Area Elektrik; İzmir ve Ege Bölgesi genelinde OG trafo merkezi anahtar teslim kurulum, devreye alma, periyodik bakım ve mevzuata uygun işletme sorumluluğu hizmetlerini tek çatı altında sunmaktadır. Trafo yağ analizi, koruma röle testleri, termal kamera taraması ve topraklama empedansı ölçümü her bakım ziyaretinin standart bileşenleridir. OG altyapınızın mevcut durumunu ve yasal uygunluğunu değerlendirmek için ücretsiz teknik keşif talebinde bulunun.`,
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
                        <p className="text-gray-500 leading-relaxed text-sm">{item.body}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Group 7 ── */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-6 pb-3 border-b" style={{ color: '#1a1a1a', borderColor: '#e8e0d4' }}>
                Konut ve Ticari Projelerde Elektrik Taahhüt ve Proje Yönetimi
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Proje Yönetim Aşamaları',
                    body: `Elektrik taahhüdü, yapı ruhsatından iskan iznine uzanan süreçte birbirini izleyen aşamaları kapsar: keşif ve yük analizi, elektrik projesinin hazırlanması, malzeme temini ve kalite kontrolü, kademeli saha montajı, bağımsız ölçüm ve kontroller, devreye alma ve müşteri kabul testleri. İzmir'de yürütülen büyük konut sitesi, karma kullanım ve ticari yapı projelerinde her aşamanın zamanında ve doğru teslim edilmesi; yapı denetimi onay süreçlerini hızlandırır ve sonraki aşamalar için kritik önem taşır.`,
                    icon: 'ri-building-line',
                  },
                  {
                    title: 'TS HD 60364 Uyumu',
                    body: `Türkiye'de elektrik iç tesislerinin tasarım ve kurulumunda IEC 60364 ve TS HD 60364 serisi esas standart olarak uygulanır. Bu standart serisi; devre tasarımı, kablo seçimi, koruma koordinasyonu, topraklama ve doğrulama testlerini sistematik biçimde tanımlar. Standartlara uygun hazırlanan hesap raporları, proje çizimleri ve as-built belgeler; yapı denetim müellifliğinde, sigorta değerlendirmelerinde ve olası hukuki süreçlerde belge gücü taşır.`,
                    icon: 'ri-file-list-3-line',
                  },
                  {
                    title: 'Anahtar Teslim Uygulama Çözümleri',
                    body: `Area Elektrik, ön fizibilite keşifinden nihai devreye almaya kadar tüm elektrik taahhüt sürecini tek elden yönetmekte; müteahhit ve proje yöneticilerinin koordinasyon yükünü minimize etmektedir. TSE belgeli sertifikalı malzeme kullanımı, zamanında teslimat taahhüdü ve eksiksiz teknik dokümantasyon standart hizmet kapsamımızdadır. Projeniz için ücretsiz keşif ve detaylı teklif almak üzere bugün iletişime geçin.`,
                    icon: 'ri-checkbox-circle-line',
                  },
                ].map((item, i) => (
                  <div key={i} className="rounded-2xl border p-5 md:p-6" style={{ backgroundColor: '#ffffff', borderColor: '#e8e0d4' }}>
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(212,184,150,0.15)' }}>
                        <i className={`${item.icon} text-sm`} style={{ color: '#c8a96e' }} aria-hidden="true"></i>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm md:text-base font-bold mb-2 border-l-4 pl-3" style={{ color: '#1a1a1a', borderColor: '#d4b896' }}>{item.title}</h3>
                        <p className="text-gray-500 leading-relaxed text-sm">{item.body}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Group 8 ── */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-6 pb-3 border-b" style={{ color: '#1a1a1a', borderColor: '#e8e0d4' }}>
                Tehlikeli Alanlarda Güvenlik: Exproof Sistemler Projelendirme
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Saha Sınıflandırması ve Risk Analizi',
                    body: `Patlayıcı atmosfer oluşturabilecek tesislerde elektrik altyapısının ilk adımı; IEC 60079-10-1 (gazlar) ve IEC 60079-10-2 (yanıcı tozlar) standartları doğrultusunda gerçekleştirilen tehlikeli alan sınıflandırmasıdır. İzmir'deki kimya, boya, gıda ve petrokimya tesislerinde Bölge 0, 1, 2 ile Bölge 20, 21, 22 sınırlarının yanlış belirlenmesi; yetersiz koruma önlemlerine ve ATEX denetimlerinde ciddi yaptırımlara yol açar. Sınıflandırma çizimleri, sigorta şirketleri ve iş güvenliği denetimlerinde aranan birincil belgelerdir.`,
                    icon: 'ri-alert-line',
                  },
                  {
                    title: 'ATEX Direktifi ve Ekipman Seçimi',
                    body: `ATEX 2014/34/EU direktifi ve TS EN 60079 serisi; patlama korumalı ekipmanların kategori, sertifikasyon işaretlemesi ve teknik gerekliliklerini tanımlar. Koruma konsepti seçimi (Ex d, Ex e, Ex ia, Ex n) saha sınıfına göre titizlikle yapılmalı; ekipmanların IECEx veya ATEX belgesine sahip olması zorunludur. Kablo geçiş bağlantı kutularının ve kablo rekorlarının da aynı sertifikasyon kapsamında seçilmesi, sistemin bütünsel uygunluğunu garanti altına alır.`,
                    icon: 'ri-tools-line',
                  },
                  {
                    title: 'Periyodik Denetim Hazırlığı',
                    body: `TS EN 60079-17 standardı; devredeki exproof ekipmanların belirli aralıklarla detaylı görsel ve işlevsel kontrole tabi tutulmasını zorunlu kılar. Area Elektrik, ilk kurulumdan periyodik denetim yönetimine kadar tüm süreci üstlenmekte; denetim raporlarını yasal formatta düzenlemektedir. İş güvenliği müfettişliği denetimlerine hazırlıklı olmak için tesisinizdeki exproof altyapıyı ücretsiz değerlendirmemize başvurun.`,
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
                        <p className="text-gray-500 leading-relaxed text-sm">{item.body}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Group 9 ── */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-6 pb-3 border-b" style={{ color: '#1a1a1a', borderColor: '#e8e0d4' }}>
                Modern Yapılarda Konfor: KNX Akıllı Ev ve Bina Otomasyonu
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'KNX Protokol Avantajları',
                    body: `KNX, ISO/IEC 14543-3 ile tanımlanmış ve 50'den fazla ülkede standart kabul görmüş tek açık bina otomasyon protokolüdür. Kapalı marka sistemlerinin aksine KNX; 500'den fazla üreticinin 75.000'i aşkın sertifikalı cihazını aynı veri yolu üzerinde çalıştırabilir. Ege Bölgesi'nde gerçekleştirilen rezidans, otel ve ofis projelerinde KNX; kullanıcıya teknoloji bağımsızlığı ve uzun vadeli yatırım güvencesi sağlarken BEP-TR (Binalarda Enerji Performansı Yönetmeliği) kapsamında enerji verimliliği hedeflerinin gerçekleştirilmesinde doğrudan belirleyici rol oynar.`,
                    icon: 'ri-home-gear-line',
                  },
                  {
                    title: 'ETS Programlama ve Komisyonlama',
                    body: `KNX sistemin sahada hayata geçirilmesi; ETS (Engineering Tool Software) yazılımında cihaz adreslemenin, grup nesnelerinin ve kullanıcı senaryolarının eksiksiz tanımlanmasını gerektirir. Programlama hataları; aydınlatma, ısıtma ve güvenlik senaryolarının beklenmedik biçimde çalışmasına yol açar. Bu nedenle komisyonlama adım adım doğrulama protokolüyle yürütülmeli, her grup nesnesinin işlevsel testi belgelenmeli; Area Elektrik bu süreci KNX sertifikalı mühendisler eliyle yönetmektedir.`,
                    icon: 'ri-settings-4-line',
                  },
                  {
                    title: 'Teknik Destek ve Genişletilebilirlik',
                    body: `KNX altyapısı; binanın gelecekte geçireceği fonksiyon değişikliklerine ve teknoloji güncellemelerine fiziksel yeniden kablolama gerektirmeksizin uyum sağlar. Area Elektrik, kurulum sonrası senaryo güncellemeleri, yeni cihaz entegrasyonu ve uzaktan sistem izleme hizmetlerini uzun vadeli teknik destek paketi kapsamında sunmaktadır. Binanızın KNX otomasyon potansiyelini keşfetmek ve ücretsiz danışmanlık almak için Area Elektrik ile iletişime geçin.`,
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
                        <p className="text-gray-500 leading-relaxed text-sm">{item.body}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Group 10 ── */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-6 pb-3 border-b" style={{ color: '#1a1a1a', borderColor: '#e8e0d4' }}>
                İş Yerleri İçin Güvenlik: IP Kamera ve Yangın Alarm Sistemleri
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'IP Kamera Sistemi Mühendisliği',
                    body: `IP güvenlik kamera sistemi tasarımı; kamera tipi ve lens seçimi, görüş açısı ve ışık senaryosu analizi, NVR depolama kapasitesi hesabı ve ağ bant genişliği yönetimini kapsayan bütünleşik bir mühendislik sürecidir. İzmir'deki fabrika, ticaret merkezi ve lojistik tesis projelerinde 4K çözünürlüklü IP kameralar; yapay zekâ destekli video analizi (hareket algılama, kalabalık analizi, plaka okuma) ve uzaktan izleme yetenekleriyle güvenlik operasyonlarını dönüştürür. PoE+ altyapısı ile kablo güzergâhı optimizasyonu kurulum maliyetini ve bakım karmaşıklığını önemli ölçüde azaltır.`,
                    icon: 'ri-camera-line',
                  },
                  {
                    title: 'TS EN 54 Uyumu',
                    body: `Yangın alarm sistemleri, TS EN 54 serisi (Yangın Algılama ve Alarm Sistemleri) ve Binaların Yangından Korunması Hakkında Yönetmelik kapsamında zorunlu güvenlik altyapısı olarak sınıflandırılmıştır. Adreslenebilir yangın alarm sistemi; her sensörün kimliğini ve alarm bilgisini merkezi panelde anlık olarak raporlar, bu özellik yangının kaynağını saniyeler içinde tespit etmeyi sağlar. Konvansiyonel sistemlere kıyasla adreslenebilir sistemlerin bakım maliyeti ve yanlış alarm oranı belirgin biçimde düşüktür.`,
                    icon: 'ri-alarm-warning-line',
                  },
                  {
                    title: 'Bütünleşik Güvenlik Altyapısı',
                    body: `Kamera ve yangın alarm sistemlerinin tek proje kapsamında tasarlanması; ortak kablo güzergâhı optimizasyonu, merkezi izleme odası konsolidasyonu ve sistemler arası entegrasyon açısından önemli maliyet ile operasyonel avantajlar sağlar. Area Elektrik, as-built çizimler ve TS EN 54 uygunluk belgeleriyle anahtar teslim güvenlik altyapısı kurmaktadır. Güvenlik sistemlerinizin mevcut durumunu değerlendirmek ve ücretsiz keşif almak için bizimle iletişime geçin.`,
                    icon: 'ri-shield-line',
                  },
                ].map((item, i) => (
                  <div key={i} className="rounded-2xl border p-5 md:p-6" style={{ backgroundColor: '#ffffff', borderColor: '#e8e0d4' }}>
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(212,184,150,0.15)' }}>
                        <i className={`${item.icon} text-sm`} style={{ color: '#c8a96e' }} aria-hidden="true"></i>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm md:text-base font-bold mb-2 border-l-4 pl-3" style={{ color: '#1a1a1a', borderColor: '#d4b896' }}>{item.title}</h3>
                        <p className="text-gray-500 leading-relaxed text-sm">{item.body}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Group 11 ── */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-6 pb-3 border-b" style={{ color: '#1a1a1a', borderColor: '#e8e0d4' }}>
                Endüstriyel Verimlilikte Busbar Sistemleri Tasarımı
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Busbar ve Kablolama Karşılaştırması',
                    body: `Yüksek akım gerektiren endüstriyel tesislerde ve veri merkezlerinde güç dağıtımı için busbar dukt sistemleri; iletken kesit optimizasyonu, IP65'e kadar koruma sınıfı, modüler tap-off esnekliği ve düşük toplam sahip olma maliyeti (TCO) ile geleneksel kablo trunking çözümlerine belirgin üstünlük sağlar. IEC 61439-6 standardına uygun busbar duktlar; kısa devre dayanımı (tipik 50 kA – 1 sn) ve sınırlı sıcaklık yükselmesi kriterleri açısından endüstriyel uygulamaların güvenlik gerekliliklerini eksiksiz karşılar.`,
                    icon: 'ri-layout-grid-line',
                  },
                  {
                    title: 'Güç Hesabı ve Rota Planlama',
                    body: `Busbar sistem tasarımının temel mühendislik adımları; tam yük ve harmonik akım analizi, sıcaklık yükselme simülasyonu, kısa devre akımı doğrulaması ve tap-off noktalarının yük merkezi analizine göre konumlandırılmasıdır. Yanlış boyutlandırılmış veya yetersiz kısa devre kapasiteli bir busbar sistemi; arıza anında tam koruma sağlayamaz ve ağır ekipman hasarlarına neden olabilir. Her tasarım adımı mühendislik hesap raporu ile belgelenmeli ve fabrika testleriyle (FAT) doğrulanmalıdır.`,
                    icon: 'ri-bar-chart-line',
                  },
                  {
                    title: 'İşletme Avantajları',
                    body: `Area Elektrik, busbar sistemi tasarımı, tedarik, montaj ve devreye almasını anahtar teslim olarak yönetmektedir. Devreye alma sonrası periyodik termal kamera taraması ve bağlantı tork kontrolleri; ısınma ve gevşeme kaynaklı potansiyel arızaları proaktif biçimde önler. Mevcut kablo altyapınızı busbar ile modernize etmek ve üretim güvenliğinizi artırmak için ücretsiz teknik keşif talep edin.`,
                    icon: 'ri-temp-hot-line',
                  },
                ].map((item, i) => (
                  <div key={i} className="rounded-2xl border p-5 md:p-6" style={{ backgroundColor: '#ffffff', borderColor: '#e8e0d4' }}>
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(212,184,150,0.15)' }}>
                        <i className={`${item.icon} text-sm`} style={{ color: '#c8a96e' }} aria-hidden="true"></i>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm md:text-base font-bold mb-2 border-l-4 pl-3" style={{ color: '#1a1a1a', borderColor: '#d4b896' }}>{item.title}</h3>
                        <p className="text-gray-500 leading-relaxed text-sm">{item.body}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Group 13 ── */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-6 pb-3 border-b" style={{ color: '#1a1a1a', borderColor: '#e8e0d4' }}>
                Kesintisiz Enerji İçin Profesyonel Jeneratör ve UPS Sistemleri Kurulumu
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Güç Analizi ve Boyutlandırma',
                    body: `Yedek güç sistemi boyutlandırması; kritik ve kritik olmayan yüklerin sınıflandırılması, anlık ve sürekli güç hesabı, motor yol verme akım darbesi simülasyonu ve yakıt tüketim-depolama analizi gibi birbirine bağlı mühendislik hesaplarından oluşur. İzmir'de hizmet verdiğimiz hastaneler, veri merkezleri ve süreç endüstrilerinde bu hesapların eksik kalması; jeneratörün kritik anlarda kapasitesinin dışına çıkmasına, UPS akü ömrünün erken dolmasına ve tam da önlenmesi gereken anlarda kesintiye yol açar.`,
                    icon: 'ri-battery-charge-line',
                  },
                  {
                    title: 'ATS Entegrasyonu ve Senkronizasyon',
                    body: `Otomatik transfer şalterleri (ATS), şebeke gerilimi beklenen parametreler dışına çıktığında yedek kaynağa geçişi saniyeler içinde ve insan müdahalesi gerektirmeksizin gerçekleştirir. IEC 60947-6-1 standardına uygun ATS panosu; ön transfer bekleme süresi, geri transfer koşulları ve paralel çalışma kilitleme mekanizmasını doğru biçimde yapılandırılmış olmalıdır. Çift jeneratörlü sistemlerde senkronizasyon modülü hatalı devreye alındığında faz kayması kaynaklı kısa devre ve ağır ekipman hasarı riski mevcuttur.`,
                    icon: 'ri-repeat-line',
                  },
                  {
                    title: 'Devreye Alma Protokolleri',
                    body: `Area Elektrik, jeneratör kurulumu, ATS panosu tasarım-imalatı ve UPS entegrasyonunu kapsayan anahtar teslim projeler yürütmektedir. IEC 62040-3 kapsamında gerçekleştirilen load bank testi ve FAT/SAT protokolleri; sistemin nominal kapasitede güvenli çalışıp çalışmadığını nihai onay öncesinde doğrular. Egzoz emisyon uyumu, akustik yalıtım ve çevresel izinler proje teslim paketine dahildir. Kritik enerji altyapınız için ücretsiz keşif talep edin.`,
                    icon: 'ri-test-tube-line',
                  },
                ].map((item, i) => (
                  <div key={i} className="rounded-2xl border p-5 md:p-6" style={{ backgroundColor: '#ffffff', borderColor: '#e8e0d4' }}>
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(212,184,150,0.15)' }}>
                        <i className={`${item.icon} text-sm`} style={{ color: '#c8a96e' }} aria-hidden="true"></i>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm md:text-base font-bold mb-2 border-l-4 pl-3" style={{ color: '#1a1a1a', borderColor: '#d4b896' }}>{item.title}</h3>
                        <p className="text-gray-500 leading-relaxed text-sm">{item.body}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Group 14 ── */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-6 pb-3 border-b" style={{ color: '#1a1a1a', borderColor: '#e8e0d4' }}>
                İzmir'de Elektrik Tesisatlarında Periyodik Test, Ölçüm ve Bakım
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Yasal Denetim Kapsamı ve İş Sağlığı',
                    body: `TS HD 60364-6 (Doğrulama), Elektrik Kuvvetli Akım Tesisleri Yönetmeliği ve 6331 sayılı İSG Kanunu; işverenler için yıllık periyodik elektrik bakım ve ölçüm yükümlülüğü oluşturmaktadır. İzmir'deki sanayi ve ticaret tesislerinde bu yükümlülüğün yerine getirilmemesi; OSGB ve İş Güvenliği Müfettişliği denetimlerinde idari para cezası, sigorta kapsamı kaybı ve iş kazasında hukuki sorumluluk riskini beraberinde getirir. Periyodik kontrol; hem yasal zorunluluk hem de reaktif bakım maliyetini düşüren proaktif bir yönetim aracıdır.`,
                    icon: 'ri-file-warning-line',
                  },
                  {
                    title: 'Topraklama ve Termografi Ölçümleri',
                    body: `Elektrik periyodik bakımının teknik özü; TS EN 61557 uyumlu cihazlarla gerçekleştirilen yalıtım direnci testi (megger), topraklama empedansı ve döngü impedansı ölçümü, artık akım koruma (RCD) fonksiyon testi ve termal kamera taramasından oluşur. Termal görüntüleme; konnektör gevşekliği, aşırı yüklü kesitler ve arızalı sigorta yataklarını yük altında ve devre dışı bırakmadan tespit etmenin en güvenilir yöntemidir. Akredite kalibrasyona sahip cihazlarla yapılan ölçümler mahkeme ve sigorta süreçlerinde delil niteliği taşır.`,
                    icon: 'ri-search-eye-line',
                  },
                  {
                    title: 'Teknik Raporlama',
                    body: `Area Elektrik, her periyodik bakımı; ölçüm sonuçları, standart eşik değerleriyle karşılaştırma, risk öncelik matrisi ve önerilen aksiyonları kapsayan kapsamlı teknik raporla belgelemektedir. Kritik bulgular için aynı gün acil müdahale protokolü devreye girer. Arşivlenen raporlar müteakip dönemlerde karşılaştırmalı trend analizi imkânı tanıyarak olası arızaları önceden tahmin etmeyi sağlar. Tesisatınızın güvenlik ve yasal uygunluk değerlendirmesi için ücretsiz ön denetim talep edin.`,
                    icon: 'ri-clipboard-line',
                  },
                ].map((item, i) => (
                  <div key={i} className="rounded-2xl border p-5 md:p-6" style={{ backgroundColor: '#ffffff', borderColor: '#e8e0d4' }}>
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(212,184,150,0.15)' }}>
                        <i className={`${item.icon} text-sm`} style={{ color: '#c8a96e' }} aria-hidden="true"></i>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm md:text-base font-bold mb-2 border-l-4 pl-3" style={{ color: '#1a1a1a', borderColor: '#d4b896' }}>{item.title}</h3>
                        <p className="text-gray-500 leading-relaxed text-sm">{item.body}</p>
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
