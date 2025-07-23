'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import startup from '@/assets/images/products/startup.jpg';
import university from '@/assets/images/products/university.jpg';
import research from '@/assets/images/products/research.jpg';
import investor from '@/assets/images/products/investor.jpg';

import DottedBG from '@/assets/images/DottedBG.png';

const Supporters = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const supporterLogos = [
    { src: startup, alt: 'Organic Certifier A', url: '#' },
    { src: university, alt: 'Organic Certifier B', url: '#' },
    { src: research, alt: 'Organic Certifier C', url: '#' },
    { src: investor, alt: 'Organic Certifier D', url: '#' },
  ];

  const scrollingLogos = [...supporterLogos, ...supporterLogos];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollSpeed = 0.5;

    const animate = () => {
      if (!isHovered) {
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += scrollSpeed;
        }
      }
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isHovered]);

  return (
    <section
      className="relative bg-[#242424] text-white overflow-hidden min-h-[50vh] flex items-center px-4 sm:px-6 md:px-8 py-16 sm:py-24 lg:py-32 bg-contain"
      style={{
        backgroundImage: `url(${DottedBG.src})`,
        backgroundRepeat: 'repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'contain',
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10 overflow-hidden">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Backed by the Best in IP & Innovation
          </h2>
          <p className="text-lg md:text-xl text-gray-400">
            Led by India&#39;s top patent offices, incubators, and academic institutions.
          </p>
        </div>

        <div
          ref={containerRef}
          className="w-full flex gap-8 overflow-hidden whitespace-nowrap"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {scrollingLogos.map(({ src, alt, url }, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={alt}
              className="flex-shrink-0"
            >
              <Image
                src={src}
                alt={alt}
                width={120}
                height={60}
                className="object-contain flex-shrink-0 hover:scale-105 transition-transform duration-300 cursor-pointer rounded-lg"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Supporters;
