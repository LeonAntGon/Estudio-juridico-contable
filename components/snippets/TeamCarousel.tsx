"use client"
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import claudia from '@/public/images/lawyer-woman.jpg';
import lucas from '@/public/images/accountant-man.jpg';


const teamMembers = [
  { name: 'Dra. Vieyra Claudia de los Ángeles', image: claudia, position: 'Abogada' },
  { name: 'Farías Vieyra Farías E.', image: lucas , position : 'Contador Publico Nacional'}, // Usar la imagen de Lucas
];

export default function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length);
  };

  return (
    <div className=" z-5 w-full max-w-md min-m-[5px] mx-auto ]">
      <div className="max-h-[460px] w-full ">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={teamMembers[currentIndex].image}
              alt={teamMembers[currentIndex].name}
              
              className="rounded-sm h-[400px] object-cover"
            />
          </motion.div>
        </AnimatePresence>
        {/*Carrousel con botones */}
    <div className='flex justify-between mt-[-200px] mb-[200px]'>
      <div>

        <button onClick={prevSlide} className=" pl-4 block absolute  transform -translate-y-1/2 bg-opacity-50 hover:bg-opacity-75 rounded-full  transition-all">
        <svg width="24px" height="24px" stroke-width="1.4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M16 12H8M8 12L11.5 15.5M8 12L11.5 8.5" stroke="#F3F4F6" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#F3F4F6" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        
      </button>
      </div>

      <div>
      <button onClick={nextSlide} className="  transform -translate-y-1/2 bg-opacity-50 hover:bg-opacity-75 rounded-full pr-4 transition-all">
      <svg width="24px" height="24px" stroke-width="1.4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M8 12H16M16 12L12.5 8.5M16 12L12.5 15.5" stroke="#F3F4F6" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#F3F4F6" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </button>
      </div>
  </div>
        
        
      </div>
      <motion.p
        key={currentIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-sm text-center mt-3 font-bold text-light"
      >
        {teamMembers[currentIndex].name}
      </motion.p>
      <motion.p
        key={`${currentIndex}-position`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='text-xs text-center my-1 font-semibold font-serif text-neutral'
      >
        {teamMembers[currentIndex].position}
      </motion.p>
        
        
      
    </div>
  );
}