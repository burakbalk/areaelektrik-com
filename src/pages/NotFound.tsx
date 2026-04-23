import { Link, useLocation } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4" style={{ backgroundColor: '#faf8f4' }}>
      <div className="text-9xl md:text-[12rem] font-black select-none pointer-events-none" style={{ color: 'rgba(212,184,150,0.2)' }}>
        404
      </div>
      <div className="-mt-8 md:-mt-12">
        <h1 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: '#1a1a1a' }}>Sayfa Bulunamadı</h1>
        <p className="text-gray-500 mb-2 font-mono text-sm">{location.pathname}</p>
        <p className="text-gray-500 mb-8">Aradığınız sayfa mevcut değil veya taşınmış olabilir.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white transition-all duration-300 shadow-md hover:shadow-lg"
          style={{ backgroundColor: '#1a1a1a' }}
        >
          <i className="ri-home-line" aria-hidden="true"></i>
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}
