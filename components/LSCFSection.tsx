'use client';
import Image from 'next/image';

export default function LSCFSection() {

    const photos = [
    {
      src: '/LSCF/upstairs.jpg',
      alt: 'Liverpool Street CrossFit upstairs gym',
    },
    {
      src: '/LSCF/downstairs_everything.jpg',
      alt: 'Liverpool Street CrossFit downstairs gym',
    },
    {
      src: '/LSCF/ropes_portrait.jpg',
      alt: 'Liverpool Street CrossFit ropes area',
    },
  ];

  return (
    <section className="photo-banner relative w-full h-[600px] md:h-[700px] overflow-hidden">

      <div className="absolute inset-0 grid grid-cols-3">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative overflow-hidden"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.15)_45%,transparent_75%)]"></div>

      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center photo-banner-content">
          <div className="max-w-5xl">
            
            <h2 className="photo-banner-title text-6xl md:text-8xl lg:text-9xl font-black tracking-tight text-white uppercase">
              Liverpool Street CrossFit
            </h2>

            <div className="mx-auto mt-8 h-px w-24 bg-white/70 photo-banner-line"></div>

            <p className="photo-banner-subtitle mt-8 text-lg md:text-2xl text-gray-200 font-light tracking-wide">
              Strength • Skill • Weightlifting • Functional Body Building • Engine • Calisthenics
            </p>

          </div>
      </div>

    </section>
  );
}
