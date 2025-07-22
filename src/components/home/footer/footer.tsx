'use client';

import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/images/Logo.png';
import { Twitter, Linkedin, BookOpen } from 'lucide-react';

const tokenCategories = [
  'Biotech',
  'Engineering',
  'Software',
  'Clean Energy',
  'AI & ML',
  'Pharma',
];

const inventorLinks = ['Tokenize Your Patent', 'List in Marketplace'];
const investorLinks = ['Discover IP Tokens', 'Stake on Inventions'];
const companyLinks = ['About Us', 'Careers', 'Contact'];

const socialLinks = [
  { name: 'Twitter', icon: Twitter },
  { name: 'LinkedIn', icon: Linkedin },
  { name: 'Medium', icon: BookOpen },
];

const linkClass = 'hover:opacity-80 hover:underline transition';

export function Footer() {
  return (
    <footer className="bg-[#242424] text-gray-300 px-4 sm:px-6 md:px-8 py-16 sm:pt-24 lg:pt-32">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 pb-10">
            <Image src={Logo} alt="Mintellect Logo" height={272} className="rounded-md" />
           
          </div>
        </div>

        {/* Grid Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-sm md:text-base lg:text-lg">
          {/* Token Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base md:text-lg lg:text-xl">
              Tokenized IP
            </h3>
            <ul className="space-y-2">
              {tokenCategories.map((link) => (
                <li key={link}>
                  <Link href="#" className={linkClass}>{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Inventors & Investors */}
          <div>
            <div className="mb-6">
              <h3 className="text-white font-semibold mb-4 text-base md:text-lg lg:text-xl">
                For Inventors
              </h3>
              <ul className="space-y-2">
                {inventorLinks.map((link) => (
                  <li key={link}>
                    <Link href="#" className={linkClass}>{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4 text-base md:text-lg lg:text-xl">
                For Investors
              </h3>
              <ul className="space-y-2">
                {investorLinks.map((link) => (
                  <li key={link}>
                    <Link href="#" className={linkClass}>{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base md:text-lg lg:text-xl">
              Company
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link}>
                  <Link href="#" className={linkClass}>{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base md:text-lg lg:text-xl">
              Follow Us
            </h3>
            <ul className="space-y-3">
              {socialLinks.map(({ name, icon: Icon }) => (
                <li key={name} className="flex items-center gap-2">
                  <Icon className="w-4 h-4" />
                  <Link href="#" className={linkClass}>{name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto items-center justify-between border-t border-white/10 rounded-2xl mt-12 py-4 px-6 text-sm md:text-base lg:text-lg text-gray-400">
        <span>© {new Date().getFullYear()} Mintellect</span>
        <div className="flex gap-6 mt-4 md:mt-0">
          {['Privacy Policy', 'Terms of Service'].map((link) => (
            <Link key={link} href="#" className={linkClass}>{link}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
