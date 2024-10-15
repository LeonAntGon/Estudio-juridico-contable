"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PhoneIcon, MailIcon, MapPinIcon, SendIcon } from "lucide-react"
import { motion } from "framer-motion"
import CoolSocials from '@/components/snippets/CoolSocials'

export default function Contacto() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    console.log("Mensaje enviado!")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/20 to-background py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-12 text-black">Contáctenos</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
                  <PhoneIcon className="text-primary h-6 w-6" />
                  <div>
                    <p className="font-semibold">Abogada</p>
                    <p className="text-muted-foreground">+54 381 123 4567</p>
                  </div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
                  <PhoneIcon className="text-primary h-6 w-6" />
                  <div>
                    <p className="font-semibold">Contador</p>
                    <p className="text-muted-foreground">+54 381 987 6543</p>
                  </div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
                  <MailIcon className="text-primary h-6 w-6" />
                  <p className="text-muted-foreground">info@estudiojuridicocontable.com</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
                  <MapPinIcon className="text-primary h-6 w-6" />
                  <p className="text-muted-foreground">San Martín 123, San Miguel de Tucumán, Tucumán, Argentina</p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Envíenos un Mensaje</CardTitle>
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
                    {isSubmitting ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        Enviando...
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center justify-center space-x-2"
                      >
                        <span>Enviar Mensaje</span>
                        <SendIcon className="h-4 w-4" />
                      </motion.div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Siguenos en redes sociales</CardTitle>
            </CardHeader>
            
            
                <div className="flex h-[200px] justify-center">
                  <CoolSocials/>
                </div>
              
            </Card>
          </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Card>
            <CardHeader className="flex-row">
              <CardTitle className="text-2xl">Ubicación</CardTitle>
              <svg className="ml-2" width="24px" height="24px" stroke-width="1.4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M9 19L3.78974 20.7368C3.40122 20.8663 3 20.5771 3 20.1675L3 5.43246C3 5.1742 3.16526 4.94491 3.41026 4.86325L9 3M9 19L15 21M9 19L9 3M15 21L20.5897 19.1368C20.8347 19.0551 21 18.8258 21 18.5675L21 3.83246C21 3.42292 20.5988 3.13374 20.2103 3.26325L15 5M15 21L15 5M15 5L9 3" stroke="#000000" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </CardHeader>
            <CardContent>
              <div className="aspect-video w-full rounded-lg ">
                <div className='flex my-2'>
                <svg width="20px" height="20px" stroke-width="1.4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M20 10C20 14.4183 12 22 12 22C12 22 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z" stroke="#000000" stroke-width="1.4"></path><path d="M12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10C11 10.5523 11.4477 11 12 11Z" fill="#000000" stroke="#000000" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <p className='font-semibold'>Av. Salta 78,2º A - S. M. de Tucumán</p>
                </div>
              
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.538775768904!2d-65.21186805991198!3d-26.828791268369212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d005a79bcfd%3A0xe66584a73c8fa173!2sVIEYRA%20%26%20FARIAS%20VIEYRA%20Estudio%20Jur%C3%ADdico%20Contable!5e0!3m2!1sen!2sar!4v1726376030819!5m2!1sen!2sar&hl=es" 
                  width="100%" 
                  
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de la Oficina"
                  className='min-h-[300px]'
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}
