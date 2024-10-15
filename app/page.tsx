"use client"
import { useState, useRef } from 'react'
import Wsp from '@/components/Wsp';
import statue from '@/public/assets/statue.jpg';
import TeamCarousel from '@/components/snippets/TeamCarousel';
import { motion, useInView } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GavelIcon, CalculatorIcon  } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { PhoneIcon, MailIcon, MapPinIcon } from "lucide-react"
import { FaTiktok, FaFacebookF, FaInstagram } from 'react-icons/fa'
import Image from 'next/image'
import Logo from '@/public/assets/logo-transparent.png'
import Link from 'next/link';


const buttonStyles = {
  cursor: 'pointer',
  fontWeight: 700,
  fontFamily: 'Helvetica, sans-serif',
  transition: 'background .2s, transform .2s',
  padding: '10px 20px',
  borderRadius: '100px',
  background: 'white',
  border: '1px solid transparent',
  display: 'flex',
  alignItems: 'center',
  fontSize: '15px',
};

const svgStyles = {
  width: '34px',
  marginLeft: '10px',
  transition: 'transform .3s ease-in-out',
};

const buttonHoverStyles = {
  background: 'white',
};

const svgHoverStyles = {
  transform: 'translateX(5px)',
};

const buttonActiveStyles = {
  transform: 'scale(0.95)',
};


export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);




  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    console.log("Form submitted")
  }
  const [activeTab, setActiveTab] = useState('juridicos')

  const serviciosRef = useRef(null)
  const equipoRef = useRef(null)
  const nosotrosRef = useRef(null)

  const isServiciosInView = useInView(serviciosRef, { once: true })
  const isEquipoInView = useInView(equipoRef, { once: true })
  const isNosotrosInView = useInView(nosotrosRef, { once: true })

  const serviciosJuridicos = [
    "Derecho Previsional",
    "Derecho Laboral",
    "Divorcios",
    "Daños y Perjuicios",
    "Prescripción Adquisitiva de Inmuebles",
    "Contratos",
    "Amparos",
    "Alimentos"
  ]

  const serviciosContables = [
    "Derecho Previsional",
    "Derecho Laboral",
    "Divorcios",
    "Daños y Perjuicios",
    "Contratos",
    "Derechos del Consumidor",
    "Amparos",
    "Prescripción Adquisitiva de Inmuebles",
    "Alimentos",
    "Filiación",
    "Sucesiones"
  ]

  const textAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }
  

  
  return (    <>
    <main> {/* Removed 'relative' as it's not necessary for box shadow */}
      <div className="md:flex  md:flex-row-reverse">
        <div className="w-full md:w-3/5 shadow-md"> {/* Added shadow-md here */}

        <section className="block h-[340px] bg-cover bg-center shadow-lg w-full" style={{ backgroundImage: `url(${statue.src})` }}>
           <div className='pt-[100px] max-w-[350px] font-bold text-xl text-light pl-[20px]'>
          <h1 className='mb-[50px]'>Estamos a su disposición para asistirle con sus asuntos legales y contables.</h1>
          <Link href="/contacto">
          <button
      style={{
        ...buttonStyles,
        ...(isHovered ? buttonHoverStyles : {}),
        ...(isActive ? buttonActiveStyles : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
    >
      <span className='text-black'>Contáctenos</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 74 74"
        height="34"
        width="34"
        style={{
          ...svgStyles,
          ...(isHovered ? svgHoverStyles : {}),
        }}
      >
        <circle
          strokeWidth="3"
          stroke="black"
          r="35.5"
          cy="37"
          cx="37"
        ></circle>
        <path
          fill="black"
          d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
        ></path>
      </svg>
    </button>
    </Link>
  
    </div>
    
    </section>{/*div 1*/}





        {/* Second section */}
        <section id="servicios" className="py-8 shadow-sm" ref={serviciosRef}>
          <motion.h2 
            variants={textAnimation}
            initial="hidden"
            animate={isServiciosInView ? "visible" : "hidden"}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-8 text-center"
          >
            Nuestros Servicios
          </motion.h2>
          <Tabs defaultValue={activeTab} className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="juridicos">Servicios Jurídicos</TabsTrigger>
              <TabsTrigger value="contables">Servicios Contables</TabsTrigger>
            </TabsList>
            <TabsContent value="juridicos">
              <Card>
                <CardHeader>
                  <CardTitle className='text-lg'>Servicios Jurídicos</CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.ul 
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: { transition: { staggerChildren: 0.1 } },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                  >
                    {serviciosJuridicos.map((servicio, index) => (
                      <motion.li 
                        key={index}
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        className="flex items-center space-x-2"
                      >
                        <GavelIcon className="h-5 w-5 text-primary" />
                        <p className='text-sm'>{servicio}</p>
                      </motion.li>
                    ))}
                  </motion.ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="contables">
              <Card>
                <CardHeader>
                  <CardTitle className='text-lg'>Servicios Contables</CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.ul 
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: { transition: { staggerChildren: 0.1 } },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                  >
                    {serviciosContables.map((servicio, index) => (
                      <motion.li 
                        key={index}
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        className="flex items-center space-x-2"
                      >
                        <CalculatorIcon className="h-5 w-5 text-primary" />
                        <p className='text-sm'>{servicio}</p>
                      </motion.li>
                    ))}
                  </motion.ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
        </div>
        
        
        <div className="w-full md:w-2/5 block  md:self-start"> {/*div 2*/}
          <div className="shadow-xl bg-black py-5 border-b border-gray-300" ref={equipoRef}>
            <motion.h2 
              variants={textAnimation}
              initial="hidden"
              animate={isEquipoInView ? "visible" : "hidden"}
              transition={{ duration: 0.5 }}
              className="text-lg font-bold text-center text-light py-3"
            >
              Nuestro equipo
            </motion.h2>
            <TeamCarousel />
          </div>

          {/*Do go alone seccion */}
          <section id="nosotros" className="h-[220px] lg:h-[200px] md:h-[280px] bg-black" ref={nosotrosRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isNosotrosInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="bg-black rounded-lg px-8 py-6 text-center"
          >
            <motion.h2 
              variants={textAnimation}
              initial="hidden"
              animate={isNosotrosInView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base font-bold mb-4 text-primary"
            >
              NO ENFRENTE LOS TIEMPOS DIFÍCILES SOLO
            </motion.h2>
            <motion.p 
              variants={textAnimation}
              initial="hidden"
              animate={isNosotrosInView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-sm italic text-primary my-auto py-auto lg:pt-2"
            >
              &ldquo;Somos aliados estratégicos de nuestros clientes en tiempos de toma de decisiones, para realizar gestiones administrativas y/o entablar acciones judiciales, así como para acompañar en épocas de cambios importantes.&rdquo;
            </motion.p>
            
          </motion.div>
        </section>
        </div>
      </div>
      
      <Wsp/>
    </main>
    <footer>
    <div className="container mx-auto px-4 pt-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Image src={Logo.src} alt='Vieyra & FarÍas Vieyra Estudio Jurídico Contable' height={120} width={170}/>
          <h2 className="text-3xl font-bold text-dark mb-4">Contáctenos</h2>
          <p className="text-xl text-gray-600">Estamos aquí para ayudarle con sus necesidades legales y contables</p>
        </motion.div>
      </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="text-primary h-5 w-5" />
                  <span>+54 381 589 9912 </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MailIcon className="text-primary h-5 w-5" />
                  <span>cvestudiojuridicotuc@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPinIcon className="text-primary h-5 w-5" />
                  <span>Av. Salta 78,2º A - S. M. de Tucumán</span>
                </div>
                <div className="pt-4">
                  <h3 className="font-semibold mb-2">Síguenos en redes sociales</h3>
                  <div className="flex space-x-4">
                    <motion.a
                      href="https://www.tiktok.com/@estudiojuridicocontable"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-primary text-primary-foreground p-2 rounded-full"
                    >
                      <FaTiktok size={20} />
                    </motion.a>
                    <motion.a
                      href="https://www.facebook.com/estudiojuridicocontable"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-primary text-primary-foreground p-2 rounded-full"
                    >
                      <FaFacebookF size={20} />
                    </motion.a>
                    <motion.a
                      href="https://www.instagram.com/estudiojuridicocontable"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-primary text-primary-foreground p-2 rounded-full"
                    >
                      <FaInstagram size={20} />
                    </motion.a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Envíenos un Mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input placeholder="Su Nombre" required />
                  <Input type="email" placeholder="Su Correo Electrónico" required />
                  <Input placeholder="Asunto" required />
                  <Textarea placeholder="Su Mensaje" required className="min-h-[100px]" />
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
    </footer>
    </>
  );
}