import { Link } from 'react-router-dom';
import { services } from '../../mocks/services';
import SEO from '../../components/feature/SEO';

const whatsappMessage = encodeURIComponent('Merhaba, areaelektrik.com web siteniz üzerinden yazıyorum.');
const whatsappLink = `https://wa.me/905336429211?text=${whatsappMessage}`;

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20" style={{ backgroundColor: '#faf8f4' }}>
      <SEO
        title="Elektrik Hizmetlerimiz – 17 Farklı Çözüm | Area Elektrik"
        description="Elektrik taahhüt, KNX otomasyon, yangın alarm, IP kamera, busbar, güneş enerjisi dahil 17 farklı hizmette İzmir ve Türkiye genelinde profesyonel elektrik çözümleri."
        keywords="elektrik hizmetleri izmir, zayıf akım sistemleri, KNX otomasyon sistemi"
        canonical="/hizmetler"
      />
      {/* Hero Section */}
      <section className="relative py-12 md:py-20" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="absolute inset-0 overflow-hidden opacity-15">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&h=600&fit=crop&auto=format&fm=webp"
            alt="Hizmetler arka plan"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">Hizmetlerimiz</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Türkiye genelinde elektrik taahhüt, zayıf akım sistemleri ve proje hizmetlerinde profesyonel çözümler sunuyoruz
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-20" style={{ backgroundColor: '#faf8f4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <h2 className="text-sm md:text-base font-bold mb-1 md:mb-2 transition-colors line-clamp-2" style={{ color: '#1a1a1a' }}>
                    {service.title}
                  </h2>
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

      {/* CTA Section */}
      <section className="py-12 md:py-20" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Projeniz İçin Hemen Teklif Alın
          </h2>
          <p className="text-base md:text-xl text-gray-400 mb-6 md:mb-8">
            Türkiye genelinde uzman ekibimiz size en uygun çözümü sunmak için hazır
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-5 md:px-8 py-2.5 md:py-4 rounded-full font-bold text-sm md:text-lg hover:bg-[#20bd5a] transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              <i className="ri-whatsapp-line text-lg md:text-xl" aria-hidden="true"></i>
              WhatsApp ile Yazın
            </a>
            <Link
              to="/iletisim"
              className="inline-flex items-center justify-center gap-2 text-[#1a1a1a] px-5 md:px-8 py-2.5 md:py-4 rounded-full font-bold text-sm md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
              style={{ backgroundColor: '#d4b896' }}
            >
              Ücretsiz Teklif Al
              <i className="ri-arrow-right-line" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
