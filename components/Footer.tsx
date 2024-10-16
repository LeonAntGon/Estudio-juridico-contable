'use client'
import Logo from '@/public/assets/logo-transparent.png';
import Image from 'next/image';
//import { motion } from 'framer-motion'
//import { FaTiktok, FaFacebookF, FaInstagram } from 'react-icons/fa'
import CoolSocials from './snippets/CoolSocials';

export default function Footer() {

  return (
    <footer className="">
  <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
    <div className="flex items-center flex-col md:flex-row lg:justify-between lg:justify-around mb-8">
      <div className="text-teal-600">
      <Image src={Logo.src} alt='Vieyra & FarÍas Vieyra Estudio Jurídico Contable' height={100} width={150}/>
      
      </div>

      <CoolSocials/>
    </div>

    

    <p className="text-xs text-center text-gray-500">&copy; 2024. Vieyra & Farías Vieyra. Todos los derechos reservados.</p>
  </div>
</footer>
  )
}