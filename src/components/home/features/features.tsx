'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import smart from '@/assets/images/features/smart.png';
import patent from '@/assets/images/features/patent.png';
import fraction from '@/assets/images/features/fraction.png';
import search from '@/assets/images/features/instant-search.png';

const features = [
  {
    title: 'Verified Patent NFTs',
    description:
      'Mint pre-grant patent applications on-chain as NFTs with full inventor metadata and verification status.',
    href: '#',
    bg: 'from-blue-500 to-indigo-600',
    image: patent,
  },
  {
    title: 'Fractional Usage Tokens',
    description:
      'Enable programmable, fractional usage rights through ERC-20 tokens — embedded in smart contracts.',
    href: '#',
    bg: 'from-purple-500 to-pink-600',
    image: fraction,
  },
  {
    title: 'Public Discovery Portal',
    description:
      'Explore tokenized patents by inventor, institution, category, or keywords — in real time.',
    href: '#',
    bg: 'from-green-500 to-emerald-600',
    image: search,
  },
  {
    title: 'AI + Smart Licensing',
    description:
      'Instantly match innovations with partners, licensees, or commercialization pathways using AI.',
    href: '#',
    bg: 'from-yellow-500 to-orange-500',
    image: smart, 
  },
];

const Features = () => {
  return (
    <section className="relative bg-[#242424] px-4 sm:px-6 md:px-8 py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-3xl md:text-5xl font-extrabold mb-12 text-center">
What Makes Our IP NFTs Different
        </h2>

        {/* Mobile View (Swiper) */}
        <div className="md:hidden">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={'auto'}
            spaceBetween={24}
            pagination={{
              clickable: true,
              el: '.custom-pagination',
            }}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            className="overflow-visible px-4"
          >
            {features.map((feature, index) => (
              <SwiperSlide
                key={index}
                className="!w-[280px] overflow-visible py-10"
              >
                <Link
                  href={feature.href}
                  className={`flex flex-col justify-between bg-gradient-to-br ${feature.bg} rounded-3xl shadow-lg p-6 transition-transform hover:scale-105 h-[480px]`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-white">
                        {feature.title}
                      </h3>
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-sm text-white/80">
                      {feature.description}
                    </p>
                  </div>
                  <div className="p-4">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      className="rounded-xl object-cover p-4 w-full h-full"
                    />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex items-center justify-between mt-8 px-4">
            <div className="custom-pagination flex gap-2" />
            <div className="flex gap-4">
              <button className="custom-prev cursor-pointer text-white/70 hover:text-white transition text-xl">
                ←
              </button>
              <button className="custom-next cursor-pointer text-white/70 hover:text-white transition text-xl">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Desktop View (Grid) */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Link
              key={index}
              href={feature.href}
              className={`flex flex-col justify-between bg-gradient-to-br ${feature.bg} rounded-3xl shadow-lg p-6 md:p-8 transition-transform hover:scale-105 h-[500px]`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg md:text-xl font-bold text-white">
                    {feature.title}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <p className="text-sm md:text-base text-white/80">
                  {feature.description}
                </p>
              </div>
              <div className="p-4">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  className="rounded-xl object-cover p-4 w-full h-full"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
