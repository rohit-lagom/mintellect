'use client';

import Image from 'next/image';
import Link from 'next/link';

import jaggery from '@/assets/images/products/jaggery.jpg';
import appleCider from '@/assets/images/products/apple-cider.jpg';
import tea from '@/assets/images/products/tea.jpg';
import murabba from '@/assets/images/products/murabba.jpg';

const products = [
  {
    image: jaggery,
    name: 'Startup Innovations',
    description: 'Raise capital through tokenized IP without diluting ownership.',
    href: '#',
  },
  {
    image: appleCider,
    name: 'University Research',
    description: 'Showcase and license research globally — even before the patent is granted.',
    href: '#',
  },
  {
    image: tea,
    name: 'Industrial R&D',
    description: 'Access groundbreaking tech faster and reduce friction in acquisition.',
    href: '#',
  },
  {
    image: murabba,
    name: 'Investor Opportunities',
    description: 'Back high-potential, verified innovations with on-chain transparency.',
    href: '#',
  },
];
export default function OrganicProducts() {
  return (
    <section className="bg-[#242424] py-16 px-4 md:px-8 lg:px-16">
      <h2 className="text-white text-center text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12">
Patent Tokens. Global Impact.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {products.map((product, idx) => (
          <Link key={idx} href={product.href} className="group block">
            <div className="rounded-2xl overflow-hidden shadow-lg h-84 w-full bg-white/10 backdrop-blur-md border border-white/10 transition-all duration-300 hover:border-green-500 hover:scale-105 aspect-square">
              <div className="relative w-full h-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4">
                  <h3 className="text-white text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-300 text-sm">{product.description}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="#"
          className="inline-block px-6 py-2 border border-white/30 text-white rounded-full text-sm hover:border-white transition"
        >
          More Organic Products
        </Link>
      </div>
    </section>
  );
}
