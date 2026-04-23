import { useEffect, useCallback } from 'react';

interface GalleryModalProps {
  images: string[];
  currentIndex: number;
  title: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onJump?: (index: number) => void;
}

export default function GalleryModal({ images, currentIndex, title, onClose, onPrev, onNext, onJump }: GalleryModalProps) {
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') onPrev();
    if (e.key === 'ArrowRight') onNext();
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  const total = images.length;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: 'rgba(0,0,0,0.92)' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} – Galeri`}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full text-white transition-colors"
        style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.22)')}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)')}
        aria-label="Kapat"
      >
        <i className="ri-close-line text-xl" aria-hidden="true"></i>
      </button>

      {/* Counter */}
      {total > 1 && (
        <div
          className="absolute top-4 left-1/2 -translate-x-1/2 z-10 px-4 py-1.5 rounded-full text-sm font-medium text-white"
          style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
        >
          {currentIndex + 1} / {total}
        </div>
      )}

      {/* Image */}
      <div
        className="relative max-w-5xl w-full mx-4 md:mx-16 flex items-center justify-center"
        onClick={e => e.stopPropagation()}
      >
        <img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${title} – ${currentIndex + 1}`}
          className="max-h-[80vh] w-full object-contain rounded-xl shadow-2xl"
          style={{ userSelect: 'none' }}
        />

        {/* Prev */}
        {total > 1 && (
          <button
            onClick={e => { e.stopPropagation(); onPrev(); }}
            className="absolute left-0 md:-left-14 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full text-white transition-all"
            style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.22)')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)')}
            aria-label="Önceki görsel"
          >
            <i className="ri-arrow-left-s-line text-2xl" aria-hidden="true"></i>
          </button>
        )}

        {/* Next */}
        {total > 1 && (
          <button
            onClick={e => { e.stopPropagation(); onNext(); }}
            className="absolute right-0 md:-right-14 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full text-white transition-all"
            style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.22)')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)')}
            aria-label="Sonraki görsel"
          >
            <i className="ri-arrow-right-s-line text-2xl" aria-hidden="true"></i>
          </button>
        )}
      </div>

      {/* Thumbnails */}
      {total > 1 && (
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2"
          onClick={e => e.stopPropagation()}
        >
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => onJump ? onJump(i) : (i < currentIndex ? onPrev() : onNext())}
              className="rounded overflow-hidden transition-all"
              style={{
                width: 48,
                height: 32,
                border: i === currentIndex ? '2px solid #d4b896' : '2px solid transparent',
                opacity: i === currentIndex ? 1 : 0.5,
              }}
              aria-label={`Görsel ${i + 1}`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
