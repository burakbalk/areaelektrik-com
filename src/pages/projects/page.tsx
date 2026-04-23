import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../mocks/projects';
import type { Project } from '../../mocks/projects';
import GalleryModal from '../../components/feature/GalleryModal';
import SEO from '../../components/feature/SEO';

const SEO_TITLE = 'Tamamlanan Projelerimiz – 750+ Proje | Area Elektrik';
const SEO_DESC = 'Area Elektrik\'in konut, endüstriyel, askeri ve ticari alanlarda Türkiye genelinde tamamladığı 750\'den fazla elektrik projesini galeri formatında inceleyin.';
const SEO_KW = 'elektrik projeleri izmir, area elektrik projeler, elektrik taahhüt referansları';

const whatsappMessage = encodeURIComponent('Merhaba, areaelektrik.com web siteniz üzerinden yazıyorum.');
const whatsappLink = `https://wa.me/905336429211?text=${whatsappMessage}`;

const categories = ['Tümü', ...Array.from(new Set(projects.map(p => p.category)))];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('Tümü');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);

  const filtered = activeCategory === 'Tümü' ? projects : projects.filter(p => p.category === activeCategory);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setGalleryIndex(0);
  };

  const openGallery = (index: number) => {
    setGalleryIndex(index);
    setGalleryOpen(true);
  };

  const closeDetail = () => {
    setSelectedProject(null);
    setGalleryOpen(false);
  };

  const prev = useCallback(() => {
    if (!selectedProject) return;
    setGalleryIndex(i => (i - 1 + selectedProject.images.length) % selectedProject.images.length);
  }, [selectedProject]);

  const next = useCallback(() => {
    if (!selectedProject) return;
    setGalleryIndex(i => (i + 1) % selectedProject.images.length);
  }, [selectedProject]);

  return (
    <div className="min-h-screen pt-20" style={{ backgroundColor: '#faf8f4' }}>
      <SEO
        title={SEO_TITLE}
        description={SEO_DESC}
        keywords={SEO_KW}
        canonical="/projeler"
      />
      {/* Hero */}
      <section className="relative py-12 md:py-20" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">Projelerimiz</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Türkiye genelinde başarıyla tamamladığımız 750+ projeden seçkin örnekler
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 md:py-8 border-b" style={{ backgroundColor: '#ffffff', borderColor: '#e8e0d4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
                style={{
                  backgroundColor: activeCategory === cat ? '#1a1a1a' : 'rgba(212,184,150,0.15)',
                  color: activeCategory === cat ? '#ffffff' : '#1a1a1a',
                  border: activeCategory === cat ? '2px solid #1a1a1a' : '2px solid transparent',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-20" style={{ backgroundColor: '#faf8f4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {filtered.map(project => (
              <button
                key={project.id}
                onClick={() => openProject(project)}
                className="group rounded-2xl border overflow-hidden text-left hover:shadow-xl transition-all duration-300"
                style={{ backgroundColor: '#ffffff', borderColor: '#e8e0d4' }}
                aria-label={`${project.title} projesini görüntüle`}
              >
                {/* Cover Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Multi-image badge */}
                  {project.images.length > 1 && (
                    <div
                      className="absolute bottom-2 right-2 flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold"
                      style={{ backgroundColor: 'rgba(26,26,26,0.75)', color: '#ffffff', backdropFilter: 'blur(4px)' }}
                    >
                      <i className="ri-image-2-line text-xs" aria-hidden="true"></i>
                      {project.images.length}
                    </div>
                  )}
                </div>
                {/* Card Body */}
                <div className="p-4 md:p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full shrink-0"
                      style={{ backgroundColor: 'rgba(212,184,150,0.2)', color: '#1a1a1a' }}
                    >
                      {project.category}
                    </span>
                    <span className="text-xs text-gray-400 shrink-0">{project.year}</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold mb-1.5 line-clamp-2 group-hover:text-[#c8a96e] transition-colors" style={{ color: '#1a1a1a' }}>
                    {project.title}
                  </h3>
                  <p className="flex items-center gap-1 text-xs text-gray-400">
                    <i className="ri-map-pin-2-line shrink-0" aria-hidden="true"></i>
                    {project.location}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && !galleryOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.75)' }}
          onClick={closeDetail}
          role="dialog"
          aria-modal="true"
          aria-label={`Proje: ${selectedProject.title}`}
        >
          <div
            className="relative max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
            style={{ backgroundColor: '#faf8f4' }}
            onClick={e => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeDetail}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center text-white transition-colors"
              style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
              aria-label="Kapat"
            >
              <i className="ri-close-line text-lg" aria-hidden="true"></i>
            </button>

            {/* Image Gallery Strip */}
            <div className="relative">
              <button
                onClick={() => openGallery(0)}
                className="block w-full"
                aria-label="Galeriyi aç"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={selectedProject.images[0]}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </button>

              {/* Thumbnail row for multi-image */}
              {selectedProject.images.length > 1 && (
                <div className="flex gap-2 p-3" style={{ backgroundColor: '#f0ebe3' }}>
                  {selectedProject.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => openGallery(i)}
                      className="rounded-lg overflow-hidden shrink-0 transition-all"
                      style={{
                        width: 72,
                        height: 48,
                        border: '2px solid transparent',
                        outline: i === 0 ? '2px solid #d4b896' : 'none',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.outline = '2px solid #d4b896')}
                      onMouseLeave={e => (e.currentTarget.style.outline = i === 0 ? '2px solid #d4b896' : 'none')}
                      aria-label={`Görsel ${i + 1}`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                  <button
                    onClick={() => openGallery(0)}
                    className="flex items-center gap-1 px-3 rounded-lg text-xs font-semibold transition-colors shrink-0 ml-auto"
                    style={{ color: '#1a1a1a', backgroundColor: 'rgba(212,184,150,0.3)' }}
                  >
                    <i className="ri-fullscreen-line" aria-hidden="true"></i>
                    Galeri
                  </button>
                </div>
              )}
            </div>

            {/* Detail Body */}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ backgroundColor: 'rgba(212,184,150,0.2)', color: '#1a1a1a' }}
                >
                  {selectedProject.category}
                </span>
                <span className="text-xs text-gray-400">{selectedProject.year}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ color: '#1a1a1a' }}>
                {selectedProject.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5">
                {selectedProject.description}
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                <i className="ri-map-pin-2-line" aria-hidden="true"></i>
                {selectedProject.location}
              </div>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 shadow-md hover:shadow-lg"
                style={{ backgroundColor: '#1a1a1a', color: '#ffffff' }}
              >
                <i className="ri-whatsapp-line" aria-hidden="true"></i>
                Benzer Proje İçin İletişim
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Gallery Lightbox */}
      {selectedProject && galleryOpen && (
        <GalleryModal
          images={selectedProject.images}
          currentIndex={galleryIndex}
          title={selectedProject.title}
          onClose={() => setGalleryOpen(false)}
          onPrev={prev}
          onNext={next}
          onJump={setGalleryIndex}
        />
      )}

      {/* CTA */}
      <section className="py-12 md:py-20" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Projeniz İçin Bizimle İletişime Geçin
          </h2>
          <p className="text-base md:text-xl text-gray-400 mb-6 md:mb-8">
            Türkiye genelinde uzman ekibimiz projeniz için en uygun çözümü sunmak için hazır
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 md:px-8 py-2.5 md:py-4 rounded-full font-bold text-sm md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
              style={{ backgroundColor: '#d4b896', color: '#1a1a1a' }}
            >
              <i className="ri-whatsapp-line text-lg md:text-xl" aria-hidden="true"></i>
              WhatsApp ile Yazın
            </a>
            <Link
              to="/iletisim"
              className="inline-flex items-center justify-center gap-2 border-2 text-white px-5 md:px-8 py-2.5 md:py-4 rounded-full font-bold text-sm md:text-lg transition-all duration-300 whitespace-nowrap"
              style={{ borderColor: '#d4b896' }}
            >
              İletişime Geçin
              <i className="ri-arrow-right-line" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
