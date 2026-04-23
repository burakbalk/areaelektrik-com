import { useParams, Link } from 'react-router-dom';
import { blogs } from '../../mocks/blogs';
import SEO from '../../components/feature/SEO';

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center" style={{ backgroundColor: '#faf8f4' }}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#1a1a1a' }}>Yazı Bulunamadı</h1>
          <p className="text-gray-500 mb-6">Aradığınız blog yazısı mevcut değil.</p>
          <Link to="/blog" className="hover:underline font-semibold" style={{ color: '#c8a96e' }}>
            ← Blog'a Dön
          </Link>
        </div>
      </div>
    );
  }

  const otherBlogs = blogs.filter((b) => b.id !== blog.id).slice(0, 3);

  const seoDesc = blog.excerpt.length > 160
    ? blog.excerpt.slice(0, 157) + '...'
    : blog.excerpt.length < 150
      ? `${blog.excerpt} Area Elektrik teknik blog.`
      : blog.excerpt;

  return (
    <div className="min-h-screen pt-20" style={{ backgroundColor: '#faf8f4' }}>
      <SEO
        title={`${blog.title} | Area Elektrik Blog`}
        description={seoDesc}
        keywords={`${blog.category?.toLowerCase() ?? 'elektrik'}, elektrik teknik blog, area elektrik`}
        canonical={`/blog/${blog.slug}`}
        ogImage={blog.image}
      />
      {/* Hero Section */}
      <section className="relative py-12 md:py-20" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition-colors"
          >
            <i className="ri-arrow-left-line" aria-hidden="true"></i>
            Blog'a Dön
          </Link>
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: '#d4b896', color: '#1a1a1a' }}>
              {blog.category}
            </span>
            <span className="text-gray-300 text-sm">{blog.date}</span>
            <span className="text-gray-300 text-sm">{blog.readTime} okuma</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {blog.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-lg mb-8 md:mb-12">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 md:h-96 object-cover"
              loading="eager"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            {blog.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-6 text-base md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Share */}
          <div className="mt-8 md:mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="text-gray-600 font-medium">Bu yazıyı paylaşın:</span>
              <div className="flex gap-3">
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(blog.title + ' - https://areaelektrik.com/blog/' + blog.slug)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                  aria-label="WhatsApp ile paylaş"
                >
                  <i className="ri-whatsapp-line text-lg" aria-hidden="true"></i>
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=https://areaelektrik.com/blog/${blog.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                  aria-label="Facebook ile paylaş"
                >
                  <i className="ri-facebook-fill text-lg" aria-hidden="true"></i>
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=https://areaelektrik.com/blog/${blog.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                  aria-label="X (Twitter) ile paylaş"
                >
                  <i className="ri-twitter-x-line text-lg" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 md:py-16" style={{ backgroundColor: '#f0ebe3' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8" style={{ color: '#1a1a1a' }}>Diğer Yazılar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {otherBlogs.map((item) => (
              <Link
                key={item.id}
                to={`/blog/${item.slug}`}
                className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border"
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
                <div className="p-4 md:p-6">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3" style={{ backgroundColor: 'rgba(212,184,150,0.2)', color: '#1a1a1a' }}>
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold mt-1 mb-2 line-clamp-2 group-hover:text-[#c8a96e] transition-colors" style={{ color: '#1a1a1a' }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2">{item.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
