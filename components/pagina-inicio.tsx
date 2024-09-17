"'use client'"

import { useState } from "'react'"
import { motion } from "'framer-motion'"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GavelIcon, CalculatorIcon, UserIcon, PhoneIcon, MailIcon, MapPinIcon, ShieldIcon } from "lucide-react"
import { FaTiktok, FaFacebookF, FaInstagram } from "'react-icons/fa'"

export function PaginaInicioComponent() {
  const [activeTab, setActiveTab] = useState("'juridicos'")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    console.log("Form submitted")
  }

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 to-background">
      {/* Existing header and other sections... */}

      <section id="contacto" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <img src="/logo.png" alt="Logo del Estudio Jurídico Contable" className="mx-auto h-24 mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4 dark:text-gray-50">Contáctenos</h2>
            <p className="text-xl text-gray-600">Estamos aquí para ayudarle con sus necesidades legales y contables</p>
          </motion.div>

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
                    <PhoneIcon className="text-gray-900 h-5 w-5 dark:text-gray-50" />
                    <span>+54 381 123 4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MailIcon className="text-gray-900 h-5 w-5 dark:text-gray-50" />
                    <span>info@estudiojuridicocontable.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPinIcon className="text-gray-900 h-5 w-5 dark:text-gray-50" />
                    <span>San Martín 123, San Miguel de Tucumán, Tucumán, Argentina</span>
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
                        className="bg-gray-900 text-gray-50 p-2 rounded-full dark:bg-gray-50 dark:text-gray-900"
                      >
                        <FaTiktok size={20} />
                      </motion.a>
                      <motion.a
                        href="https://www.facebook.com/estudiojuridicocontable"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-gray-900 text-gray-50 p-2 rounded-full dark:bg-gray-50 dark:text-gray-900"
                      >
                        <FaFacebookF size={20} />
                      </motion.a>
                      <motion.a
                        href="https://www.instagram.com/estudiojuridicocontable"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-gray-900 text-gray-50 p-2 rounded-full dark:bg-gray-50 dark:text-gray-900"
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
                      {isSubmitting ? "'Enviando...'" : "'Enviar Mensaje'"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Existing footer... */}
    </div>
  )
}