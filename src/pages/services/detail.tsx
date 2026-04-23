import { useParams, Link } from 'react-router-dom';
import { services } from '../../mocks/services';
import SEO from '../../components/feature/SEO';

const whatsappMessage = encodeURIComponent('Merhaba, areaelektrik.com web siteniz üzerinden yazıyorum.');
const whatsappLink = `https://wa.me/905336429211?text=${whatsappMessage}`;

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center" style={{ backgroundColor: '#faf8f4' }}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#1a1a1a' }}>Hizmet Bulunamadı</h1>
          <p className="text-gray-500 mb-6">Aradığınız hizmet sayfası mevcut değil.</p>
          <Link to="/hizmetler" className="hover:underline font-semibold" style={{ color: '#c8a96e' }}>
            ← Tüm Hizmetlere Dön
          </Link>
        </div>
      </div>
    );
  }

  const otherServices = services.filter((s) => s.id !== service.id).slice(0, 3);

  const seoTitle = `${service.title} | Area Elektrik`;
  const seoDesc = service.description.length > 160
    ? service.description.slice(0, 157) + '...'
    : service.description.length < 150
      ? `${service.description} Area Elektrik, İzmir merkezli profesyonel elektrik firması.`
      : service.description;

  return (
    <div className="min-h-screen pt-20" style={{ backgroundColor: '#faf8f4' }}>
      <SEO
        title={seoTitle}
        description={seoDesc}
        keywords={`${service.title.toLowerCase()}, izmir elektrik hizmetleri, area elektrik`}
        canonical={`/hizmetler/${service.slug}`}
        ogImage={service.image}
      />
      {/* Hero Section */}
      <section className="relative py-12 md:py-20" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/hizmetler" className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition-colors">
            <i className="ri-arrow-left-line" aria-hidden="true"></i> Tüm Hizmetler
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center" style={{ backgroundColor: 'rgba(212,184,150,0.2)' }}>
              <i className={`${service.icon} text-2xl md:text-3xl`} style={{ color: '#d4b896' }} aria-hidden="true"></i>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">{service.title}</h1>
          <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-3xl">{service.description}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20" style={{ backgroundColor: '#faf8f4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 md:h-80 object-cover"
                  loading="lazy"
                />
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#1a1a1a' }}>Hizmet Detayları</h2>

              <div className="prose prose-lg max-w-none">
                {service.details.split('. ').reduce((acc: string[][], sentence, index) => {
                  const paragraphIndex = Math.floor(index / 3);
                  if (!acc[paragraphIndex]) acc[paragraphIndex] = [];
                  acc[paragraphIndex].push(sentence);
                  return acc;
                }, []).map((sentences, index) => (
                  <p key={index} className="text-gray-600 leading-relaxed mb-6 text-base md:text-lg">
                    {sentences.join('. ')}{sentences[sentences.length - 1]?.endsWith('.') ? '' : '.'}
                  </p>
                ))}
              </div>

              <div className="mt-8 md:mt-12 rounded-2xl p-6 md:p-8 border" style={{ backgroundColor: '#f0ebe3', borderColor: '#e8e0d4' }}>
                <h3 className="text-xl md:text-2xl font-bold mb-6" style={{ color: '#1a1a1a' }}>Neden Bu Hizmeti Seçmelisiniz?</h3>
                <ul className="space-y-4">
                  {service.advantages.map((advantage, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#d4b896' }}>
                        <i className="ri-check-line text-sm" style={{ color: '#1a1a1a' }} aria-hidden="true"></i>
                      </div>
                      <span className="text-gray-600 text-base md:text-lg">{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl p-6 md:p-8 text-white" style={{ backgroundColor: '#1a1a1a' }}>
                  <h3 className="text-xl md:text-2xl font-bold mb-4">Teklif Alın</h3>
                  <p className="text-gray-400 mb-6 text-sm md:text-base">
                    Bu hizmet için ücretsiz keşif ve fiyat teklifi almak ister misiniz?
                  </p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap mb-3"
                    style={{ backgroundColor: '#d4b896', color: '#1a1a1a' }}
                  >
                    <i className="ri-whatsapp-line text-xl" aria-hidden="true"></i>
                    WhatsApp ile Yazın
                  </a>
                  <a
                    href="tel:+905336429211"
                    className="w-full text-[#1a1a1a] px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
                    style={{ backgroundColor: '#d4b896' }}
                  >
                    <i className="ri-phone-line text-xl" aria-hidden="true"></i>
                    Hemen Arayın
                  </a>
                </div>

                <div className="rounded-2xl p-6 border" style={{ backgroundColor: '#ffffff', borderColor: '#e8e0d4' }}>
                  <h4 className="font-bold mb-4" style={{ color: '#1a1a1a' }}>İletişim</h4>
                  <div className="space-y-3">
                    <a href="tel:+905336429211" className="flex items-center gap-3 text-gray-500 hover:text-[#1a1a1a] transition-colors">
                      <i className="ri-phone-line" style={{ color: '#d4b896' }} aria-hidden="true"></i>
                      <span className="text-sm">0533 642 92 11</span>
                    </a>
                    <a href="mailto:info@areaelektrik.com" className="flex items-center gap-3 text-gray-500 hover:text-[#1a1a1a] transition-colors">
                      <i className="ri-mail-line" style={{ color: '#d4b896' }} aria-hidden="true"></i>
                      <span className="text-sm">info@areaelektrik.com</span>
                    </a>
                    <div className="flex items-start gap-3 text-gray-500">
                      <i className="ri-map-pin-line mt-1" style={{ color: '#d4b896' }} aria-hidden="true"></i>
                      <span className="text-sm">Irmak Mah. Hasan Güven Cad. Özge D Blok No:69/3C Gaziemir / İzmir</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-12 md:py-16" style={{ backgroundColor: '#f0ebe3' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8" style={{ color: '#1a1a1a' }}>Diğer Hizmetlerimiz</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {otherServices.map((item) => (
              <Link
                key={item.id}
                to={`/hizmetler/${item.slug}`}
                className="group rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border"
                style={{ backgroundColor: '#ffffff', borderColor: '#e8e0d4' }}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 md:p-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-2 transition-colors" style={{ backgroundColor: 'rgba(212,184,150,0.2)' }}>
                    <i className={`${item.icon} text-lg`} style={{ color: '#1a1a1a' }} aria-hidden="true"></i>
                  </div>
                  <h3 className="text-sm md:text-base font-bold mb-1 line-clamp-2" style={{ color: '#1a1a1a' }}>{item.title}</h3>
                  <p className="text-gray-500 text-xs line-clamp-2 hidden sm:block">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
