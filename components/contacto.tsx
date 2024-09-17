"use client"

import { useState } from "'react'"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PhoneIcon, MailIcon, MapPinIcon, SendIcon } from "lucide-react"
import { motion } from "framer-motion"
import { FaTiktok, FaFacebookF, FaInstagram } from "'react-icons/fa'"

export function ContactoComponent() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    console.log("Form submitted")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/20 to-background py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-50">Contáctenos</h1>
        
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
                  <PhoneIcon className="text-gray-900 h-6 w-6 dark:text-gray-50" />
                  <div>
                    <p className="font-semibold">Abogada</p>
                    <p className="text-gray-500 dark:text-gray-400">+54 381 123 4567</p>
                  </div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
                  <PhoneIcon className="text-gray-900 h-6 w-6 dark:text-gray-50" />
                  <div>
                    <p className="font-semibold">Contador</p>
                    <p className="text-gray-500 dark:text-gray-400">+54 381 987 6543</p>
                  </div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
                  <MailIcon className="text-gray-900 h-6 w-6 dark:text-gray-50" />
                  <p className="text-gray-500 dark:text-gray-400">info@estudiojuridicocontable.com</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
                  <MapPinIcon className="text-gray-900 h-6 w-6 dark:text-gray-50" />
                  <p className="text-gray-500 dark:text-gray-400">San Martín 123, San Miguel de Tucumán, Tucumán, Argentina</p>
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
              <CardTitle className="text-2xl">Redes Sociales y Contacto Directo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Síguenos en redes sociales</h3>
                  <div className="flex space-x-4">
                    <motion.a
                      href="https://www.tiktok.com/@estudiojuridicocontable"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-gray-900 text-gray-50 p-3 rounded-full dark:bg-gray-50 dark:text-gray-900"
                    >
                      <FaTiktok size={24} />
                    </motion.a>
                    <motion.a
                      href="https://www.facebook.com/estudiojuridicocontable"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-gray-900 text-gray-50 p-3 rounded-full dark:bg-gray-50 dark:text-gray-900"
                    >
                      <FaFacebookF size={24} />
                    </motion.a>
                    <motion.a
                      href="https://www.instagram.com/estudiojuridicocontable"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-gray-900 text-gray-50 p-3 rounded-full dark:bg-gray-50 dark:text-gray-900"
                    >
                      <FaInstagram size={24} />
                    </motion.a>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Contacto directo</h3>
                  <div className="space-y-2">
                    <p><strong>Abogada:</strong> +54 381 123 4567</p>
                    <p><strong>Contador:</strong> +54 381 987 6543</p>
                    <p><strong>Email:</strong> info@estudiojuridicocontable.com</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Nuestra Ubicación</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video w-full rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.538775768904!2d-65.21186805991198!3d-26.828791268369212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d005a79bcfd%3A0xe66584a73c8fa173!2sVIEYRA%20%26%20FARIAS%20VIEYRA%20Estudio%20Jur%C3%ADdico%20Contable!5e0!3m2!1sen!2sar!4v1726376030819!5m2!1sen!2sar" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de la Oficina"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}