"use client"
import { useState, useRef } from 'react'
import Wsp from '@/components/Wsp';
import statue from '@/public/assets/statue.jpg';
import TeamCarousel from '@/components/snippets/TeamCarousel';
import { motion, useInView } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GavelIcon, CalculatorIcon  } from "lucide-react"

export default function Home() {
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

  return (
    <main> {/* Removed 'relative' as it's not necessary for box shadow */}
      <div className="md:flex  md:flex-row-reverse">
        <div className="w-full md:w-3/5 shadow-md"> {/* Added shadow-md here */}

        <section className="block h-[340px] bg-cover bg-center shadow-lg w-full" style={{ backgroundImage: `url(${statue.src})` }}></section>{/*div 1*/}

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
          <Tabs defaultValue="juridicos" className="w-full" onValueChange={setActiveTab}>
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
          <section id="nosotros" className="lg:h-[200px] h-[280px] bg-black" ref={nosotrosRef}>
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
  );
}
