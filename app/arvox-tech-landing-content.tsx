"use client" // This component uses client-side features like useState and framer-motion

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowRight,
  Code2,
  Smartphone,
  Globe,
  CheckCircle,
  Star,
  Menu,
  X,
  ShieldCheck,
  BarChart2,
  Users,
  MessageCircle,
  ShoppingCart,
  BarChart,
  Package,
} from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import SoftwareDetailModal from "@/components/software-detail-modal" // Import the new modal component

// Define the type for a software item
interface SoftwareItem {
  id: string
  title: string
  description: string
  features: string[]
  images: string[]
}

// Data for your software products
const softwareData: SoftwareItem[] = [
  {
    id: "crm",
    title: "Software de Gestión de Clientes (CRM)",
    description: "Optimiza la relación con tus clientes, gestiona leads y automatiza el seguimiento de ventas.",
    features: [
      "Gestión de contactos y empresas",
      "Seguimiento de oportunidades de venta",
      "Automatización de marketing",
      "Informes y análisis de ventas",
      "Integración con herramientas de comunicación",
      "Personalización de flujos de trabajo",
    ],
    images: [
      "/placeholder.svg?height=600&width=800&text=CRM+Dashboard",
      "/placeholder.svg?height=400&width=600&text=CRM+Contacts",
      "/placeholder.svg?height=400&width=600&text=CRM+Reports",
      "/placeholder.svg?height=400&width=600&text=CRM+Automation",
    ],
  },
  {
    id: "pos",
    title: "Software de Punto de Venta (POS)",
    description: "Agiliza tus transacciones, gestiona inventarios y mejora la experiencia de compra en tu tienda.",
    features: [
      "Procesamiento rápido de pagos",
      "Control de inventario en tiempo real",
      "Gestión de empleados y turnos",
      "Reportes de ventas detallados",
      "Soporte para múltiples métodos de pago",
      "Interfaz intuitiva y fácil de usar",
    ],
    images: [
      "/placeholder.svg?height=600&width=800&text=POS+Interface",
      "/placeholder.svg?height=400&width=600&text=POS+Checkout",
      "/placeholder.svg?height=400&width=600&text=POS+Inventory",
      "/placeholder.svg?height=400&width=600&text=POS+Reports",
    ],
  },
  {
    id: "inventory",
    title: "Software de Gestión de Inventario",
    description:
      "Controla tus existencias, optimiza el almacenamiento y evita pérdidas por desabastecimiento o exceso.",
    features: [
      "Seguimiento de productos en almacén",
      "Alertas de stock mínimo",
      "Gestión de pedidos y proveedores",
      "Integración con sistemas de venta",
      "Análisis de rotación de inventario",
      "Soporte para múltiples almacenes",
    ],
    images: [
      "/placeholder.svg?height=600&width=800&text=Inventory+Management",
      "/placeholder.svg?height=400&width=600&text=Stock+Alerts",
      "/placeholder.svg?height=400&width=600&text=Supplier+Management",
      "/placeholder.svg?height=400&width=600&text=Inventory+Reports",
    ],
  },
]

export default function ArvoxTechLandingContent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false)
  const [selectedSoftware, setSelectedSoftware] = useState<SoftwareItem | null>(null)

  const openDetailModal = (software: SoftwareItem) => {
    setSelectedSoftware(software)
    setIsDetailModalOpen(true)
  }

  const closeDetailModal = () => {
    setIsDetailModalOpen(false)
    setSelectedSoftware(null)
  }

  // Variants for a more "satisfactory" entry animation for the Hero section
  const heroTextVariants = {
    initial: { opacity: 0, y: 80, scale: 0.95 }, // More pronounced slide and slight scale
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8, // Longer duration
        ease: [0.2, 0.65, 0.3, 0.9], // Custom ease for a smoother, slightly elastic feel
      },
    },
  }

  const heroImageVariants = {
    initial: { opacity: 0, scale: 0.6, rotate: -5 }, // Smaller scale, slight rotation
    animate: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.2, // Even longer duration for the image
        ease: [0.2, 0.65, 0.3, 0.9], // Same custom ease
        delay: 0.3, // Delay image reveal slightly after text starts
      },
    },
  }

  const heroStaggerContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Slightly increased stagger for more distinct reveals
        delayChildren: 0.2, // Delay the start of children animations
      },
    },
  }

  // Existing fadeInVariants for other sections (less dramatic than hero)
  const fadeInVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  }

  const staggerContainerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-6 md:px-12 lg:px-16 relative z-50">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-3"
        >
          <div className="w-10 h-10 relative">
            <div className="absolute inset-0 bg-white rounded-lg transform rotate-45"></div>
            <div className="absolute inset-1 bg-black rounded-lg transform rotate-45"></div>
            <div className="absolute inset-2 bg-white rounded-lg transform rotate-45"></div>
          </div>
          <span className="text-2xl font-bold uppercase">ARVOX TECH</span>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden lg:flex items-center space-x-8"
        >
          <Link href="#servicios" className="text-gray-300 hover:text-white transition-colors text-lg">
            Servicios
          </Link>
          <Link href="#nuestro-software" className="text-gray-300 hover:text-white transition-colors text-lg">
            Software
          </Link>
          <Link href="#soluciones" className="text-gray-300 hover:text-white transition-colors text-lg">
            Soluciones
          </Link>
          <Link href="#nosotros" className="text-gray-300 hover:text-white transition-colors text-lg">
            Nosotros
          </Link>
          <Link href="#contacto" className="text-gray-300 hover:text-white transition-colors text-lg">
            Contacto
          </Link>
          <Button
            variant="outline"
            className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent px-6 py-2 text-lg font-medium"
          >
            Comenzar Ahora
          </Button>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <X className="w-8 h-8 text-yellow-400" />
            ) : (
              <Menu className="w-8 h-8 text-yellow-400" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-8 lg:hidden"
        >
          <Link
            href="#servicios"
            className="text-gray-300 hover:text-white transition-colors text-3xl font-bold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Servicios
          </Link>
          <Link
            href="#nuestro-software"
            className="text-gray-300 hover:text-white transition-colors text-3xl font-bold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Software
          </Link>
          <Link
            href="#soluciones"
            className="text-gray-300 hover:text-white transition-colors text-3xl font-bold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Soluciones
          </Link>
          <Link
            href="#nosotros"
            className="text-gray-300 hover:text-white transition-colors text-3xl font-bold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Nosotros
          </Link>
          <Link
            href="#contacto"
            className="text-gray-300 hover:text-white transition-colors text-3xl font-bold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contacto
          </Link>
          <Button
            size="lg"
            className="bg-yellow-400 text-black hover:bg-yellow-500 text-2xl px-8 py-4 h-auto font-semibold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Comenzar Ahora
          </Button>
        </motion.div>
      )}

      {/* Hero Section */}
      <motion.section
        initial="initial"
        animate="animate"
        variants={heroStaggerContainer} // Using the new stagger container for hero
        className="relative px-6 py-12 md:px-12 lg:px-16 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 lg:pr-8">
              <div className="space-y-6">
                <motion.h1
                  variants={heroTextVariants} // Using new text variants
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                >
                  Conectando la Brecha <span className="text-yellow-400">Entre</span> Tecnología y Innovación Perfecta
                </motion.h1>

                <motion.p
                  variants={heroTextVariants} // Using new text variants
                  className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl"
                >
                  La tecnología no tiene que sentirse como un idioma diferente. Construimos ARVOX TECH para asegurar que
                  la innovación funcione para ti, tu negocio y tu gente.
                </motion.p>
              </div>

              <motion.div variants={heroTextVariants} className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 text-black hover:bg-yellow-500 text-xl px-8 py-4 h-auto font-semibold"
                >
                  Comenzar a Innovar Ahora
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-white hover:bg-gray-800 text-xl px-8 py-4 h-auto font-semibold"
                >
                  ¡Cómo Funciona!
                </Button>
              </motion.div>
            </div>

            {/* Right Content - Hero Visual */}
            <motion.div
              variants={heroImageVariants} // Using new image variants
              className="relative flex justify-center lg:justify-end"
            >
              {/* Decorative Background Shapes */}
              <div className="absolute inset-0">
                {/* Large curved shape */}
                <div className="absolute -top-20 -right-20 w-96 h-96">
                  <div className="w-full h-full bg-gradient-to-br from-green-400 via-teal-400 to-blue-400 rounded-full opacity-80 transform rotate-12"></div>
                </div>

                {/* Medium curved shape */}
                <div className="absolute top-40 -left-10 w-64 h-64">
                  <div className="w-full h-full bg-gradient-to-br from-yellow-400 via-green-400 to-teal-400 rounded-full opacity-70 transform -rotate-12"></div>
                </div>

                {/* Small accent shape */}
                <div className="absolute bottom-10 right-20 w-32 h-32">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-60"></div>
                </div>
              </div>

              {/* Main circular image container */}
              <div className="relative z-10 w-80 h-80 md:w-96 md:h-96">
                <div className="w-full h-full bg-white rounded-full p-2 shadow-2xl">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src="/placeholder.svg?height=400&width=400&text=Equipo+ARVOX+TECH+colaborando"
                      alt="Equipo de ARVOX TECH colaborando en proyectos innovadores"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Companies Trust Us Section */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInVariants}
            className="mt-20 lg:mt-32 text-center"
          >
            <p className="text-gray-400 text-xl mb-10 font-semibold">Las empresas confían en nosotros</p>
            <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 opacity-80">
              <motion.div variants={fadeInVariants}>
                <Image
                  src="/placeholder.svg?height=60&width=150"
                  alt="Tech Company Logo 1"
                  width={150}
                  height={60}
                  className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
              <motion.div variants={fadeInVariants}>
                <Image
                  src="/placeholder.svg?height=60&width=150"
                  alt="Software Company Logo 2"
                  width={150}
                  height={60}
                  className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
              <motion.div variants={fadeInVariants}>
                <Image
                  src="/placeholder.svg?height=60&width=150"
                  alt="Startup Logo 3"
                  width={150}
                  height={60}
                  className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
              <motion.div variants={fadeInVariants}>
                <Image
                  src="/placeholder.svg?height=60&width=150"
                  alt="Enterprise Solutions Logo 4"
                  width={150}
                  height={60}
                  className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
              <motion.div variants={fadeInVariants}>
                <Image
                  src="/placeholder.svg?height=60&width=150"
                  alt="Global Tech Brand Logo 5"
                  width={150}
                  height={60}
                  className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
              <motion.div variants={fadeInVariants}>
                <Image
                  src="/placeholder.svg?height=60&width=150"
                  alt="Innovation Company Logo 6"
                  width={150}
                  height={60}
                  className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="servicios"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainerVariants}
        className="px-6 py-20 md:px-12 lg:px-16 bg-gray-900/50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeInVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestros <span className="text-yellow-400">Servicios</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              En ARVOX TECH, no solo creamos software, también **vendemos servicios** que transforman ideas complejas en
              soluciones digitales elegantes que impulsan tu negocio hacia el futuro.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              variants={fadeInVariants}
              className="bg-black border border-gray-800 p-8 rounded-2xl hover:border-yellow-400 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code2 className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Desarrollo Web</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Aplicaciones web modernas, rápidas y escalables usando las últimas tecnologías y mejores prácticas.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInVariants}
              className="bg-black border border-gray-800 p-8 rounded-2xl hover:border-green-400 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-green-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Smartphone className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Apps Móviles</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Aplicaciones nativas e híbridas para iOS y Android que ofrecen experiencias excepcionales.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInVariants}
              className="bg-black border border-gray-800 p-8 rounded-2xl hover:border-blue-400 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-blue-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Soluciones Cloud</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Infraestructura en la nube segura, escalable y optimizada para el crecimiento de tu empresa.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInVariants}
              className="bg-black border border-gray-800 p-8 rounded-2xl hover:border-purple-400 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-purple-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Ciberseguridad</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Protege tus activos digitales con soluciones avanzadas de seguridad, auditorías y gestión de riesgos.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInVariants}
              className="bg-black border border-gray-800 p-8 rounded-2xl hover:border-red-400 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-red-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart2 className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Análisis de Datos</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Transforma tus datos en información valiosa para la toma de decisiones estratégicas y el crecimiento.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInVariants}
              className="bg-black border border-gray-800 p-8 rounded-2xl hover:border-orange-400 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-orange-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Consultoría TI</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Asesoramiento experto para optimizar tu infraestructura, procesos y estrategia tecnológica.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Software Section */}
      <motion.section
        id="nuestro-software"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainerVariants}
        className="px-6 py-20 md:px-12 lg:px-16 bg-black"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeInVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestro <span className="text-yellow-400">Software de Venta</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Descubre nuestras soluciones de software de venta diseñadas para optimizar tus procesos y potenciar tus
              resultados.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softwareData.map((software) => (
              <motion.div
                key={software.id}
                variants={fadeInVariants}
                className="bg-gray-900 border border-gray-800 p-8 rounded-2xl hover:border-yellow-400 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {software.id === "crm" && <ShoppingCart className="w-8 h-8 text-black" />}
                  {software.id === "pos" && <BarChart className="w-8 h-8 text-black" />}
                  {software.id === "inventory" && <Package className="w-8 h-8 text-black" />}
                </div>
                <h3 className="text-2xl font-bold mb-4">{software.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-4">{software.description}</p>
                <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6">
                  {software.features.slice(0, 4).map(
                    (
                      feature,
                      i, // Show first 4 features in card
                    ) => (
                      <li key={i}>{feature}</li>
                    ),
                  )}
                  {software.features.length > 4 && <li>...y más</li>}
                </ul>
                <Button
                  variant="outline"
                  className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent px-6 py-2 text-lg font-medium"
                  onClick={() => openDetailModal(software)}
                >
                  Ver Detalles
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Solutions Section (Placeholder) */}
      <motion.section
        id="soluciones"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainerVariants}
        className="px-6 py-20 md:px-12 lg:px-16 bg-gray-900/50"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 variants={fadeInVariants} className="text-4xl md:text-5xl font-bold mb-6">
            Nuestras <span className="text-yellow-400">Soluciones</span>
          </motion.h2>
          <motion.p variants={fadeInVariants} className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre cómo nuestras soluciones personalizadas pueden resolver los desafíos específicos de tu negocio.
          </motion.p>
          {/* You can add content for your solutions here later */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div variants={fadeInVariants} className="bg-black border border-gray-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Solución Empresarial A</h3>
              <p className="text-gray-400">Descripción breve de la solución A y sus beneficios clave.</p>
            </motion.div>
            <motion.div variants={fadeInVariants} className="bg-black border border-gray-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Solución Empresarial B</h3>
              <p className="text-gray-400">Descripción breve de la solución B y sus beneficios clave.</p>
            </motion.div>
            <motion.div variants={fadeInVariants} className="bg-black border border-gray-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Solución Empresarial C</h3>
              <p className="text-gray-400">Descripción breve de la solución C y sus beneficios clave.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="nosotros"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainerVariants}
        className="px-6 py-20 md:px-12 lg:px-16"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h2 variants={fadeInVariants} className="text-4xl md:text-5xl font-bold mb-8">
                ¿Por qué elegir <span className="text-yellow-400">ARVOX TECH</span>?
              </motion.h2>
              <div className="space-y-6">
                <motion.div variants={fadeInVariants} className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Experiencia Comprobada</h3>
                    <p className="text-gray-400">
                      Más de 5 años desarrollando soluciones tecnológicas exitosas para empresas de todos los tamaños.
                    </p>
                  </div>
                </motion.div>
                <motion.div variants={fadeInVariants} className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Tecnología Avanzada</h3>
                    <p className="text-gray-400">
                      Utilizamos las herramientas y frameworks más modernos para garantizar soluciones futuras.
                    </p>
                  </div>
                </motion.div>
                <motion.div variants={fadeInVariants} className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Soporte 24/7</h3>
                    <p className="text-gray-400">
                      Nuestro equipo está disponible cuando lo necesites para mantener tu negocio funcionando.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-yellow-400/20 to-green-400/20 rounded-3xl p-8">
                <img
                  src="/placeholder.svg?height=400&width=500&text=Equipo+de+desarrollo+ARVOX+TECH"
                  alt="Equipo de desarrollo de ARVOX TECH"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainerVariants}
        className="px-6 py-20 md:px-12 lg:px-16 bg-gray-900/50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeInVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Lo que dicen nuestros <span className="text-yellow-400">clientes</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div variants={fadeInVariants} className="bg-black border border-gray-800 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 text-lg">
                "ARVOX TECH transformó completamente nuestra presencia digital. Su equipo es profesional y los
                resultados superaron nuestras expectativas."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-600 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold">María González</p>
                  <p className="text-gray-400">CEO, TechStart</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInVariants} className="bg-black border border-gray-800 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 text-lg">
                "La aplicación móvil que desarrollaron para nosotros ha aumentado nuestras ventas en un 300%. Increíble
                trabajo."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-600 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold">Carlos Ruiz</p>
                  <p className="text-gray-400">Fundador, EcomPlus</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInVariants} className="bg-black border border-gray-800 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 text-lg">
                "Su enfoque en la experiencia del usuario es excepcional. Nuestros clientes aman la nueva plataforma."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-600 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold">Ana Martínez</p>
                  <p className="text-gray-400">Directora, InnovateCorp</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section
        id="contacto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainerVariants}
        className="px-6 py-20 md:px-12 lg:px-16 bg-black"
      >
        <div className="max-w-3xl mx-auto">
          <motion.div variants={fadeInVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ponte en <span className="text-yellow-400">Contacto</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              ¿Tienes un proyecto en mente o una pregunta? Nos encantaría saber de ti.
            </p>
          </motion.div>

          <motion.form variants={fadeInVariants} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                type="text"
                placeholder="Tu Nombre"
                className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 p-4 text-lg"
              />
              <Input
                type="email"
                placeholder="Tu Correo Electrónico"
                className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 p-4 text-lg"
              />
            </div>
            <Input
              type="text"
              placeholder="Asunto"
              className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 p-4 text-lg"
            />
            <Textarea
              placeholder="Tu Mensaje"
              rows={6}
              className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 p-4 text-lg"
            />
            <Button
              type="submit"
              size="lg"
              className="w-full bg-yellow-400 text-black hover:bg-yellow-500 text-xl px-8 py-4 h-auto font-semibold"
            >
              Enviar Mensaje
            </Button>
          </motion.form>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
        variants={staggerContainerVariants}
        className="px-6 py-20 md:px-12 lg:px-16"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 variants={fadeInVariants} className="text-4xl md:text-5xl font-bold mb-8">
            ¿Listo para <span className="text-yellow-400">transformar</span> tu negocio?
          </motion.h2>
          <motion.p variants={fadeInVariants} className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Únete a las empresas que ya están innovando con ARVOX TECH. Comienza tu proyecto hoy mismo.
          </motion.p>
          <motion.div variants={fadeInVariants} className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-yellow-400 text-black hover:bg-yellow-500 text-xl px-12 py-4 h-auto font-semibold"
            >
              Comenzar Proyecto
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-600 text-white hover:bg-gray-800 text-xl px-12 py-4 h-auto bg-transparent"
            >
              Agendar Consulta
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="px-6 py-12 md:px-12 lg:px-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 relative">
                  <div className="absolute inset-0 bg-white rounded-lg transform rotate-45"></div>
                  <div className="absolute inset-1 bg-black rounded-lg transform rotate-45"></div>
                  <div className="absolute inset-2 bg-white rounded-lg transform rotate-45"></div>
                </div>
                <span className="text-2xl font-bold uppercase">ARVOX TECH</span>
              </div>
              <p className="text-gray-400 text-lg max-w-md">
                Conectando ideas con tecnología avanzada para crear el futuro digital de tu empresa.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#servicios" className="hover:text-white transition-colors">
                    Desarrollo Web
                  </Link>
                </li>
                <li>
                  <Link href="#servicios" className="hover:text-white transition-colors">
                    Apps Móviles
                  </Link>
                </li>
                <li>
                  <Link href="#servicios" className="hover:text-white transition-colors">
                    Soluciones Cloud
                  </Link>
                </li>
                <li>
                  <Link href="#servicios" className="hover:text-white transition-colors">
                    Ciberseguridad
                  </Link>
                </li>
                <li>
                  <Link href="#servicios" className="hover:text-white transition-colors">
                    Análisis de Datos
                  </Link>
                </li>
                <li>
                  <Link href="#servicios" className="hover:text-white transition-colors">
                    Consultoría TI
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-gray-400">
                <li>info@arvoxtech.com</li>
                <li>+1 (555) 123-4567</li>
                <li>Ciudad de México, México</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ARVOX TECH. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Bubble */}
      <a
        href="https://wa.me/5215512345678?text=Hola%2C%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
        aria-label="Chatear por WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>

      {/* Software Detail Modal */}
      <SoftwareDetailModal isOpen={isDetailModalOpen} onClose={closeDetailModal} software={selectedSoftware} />
    </div>
  )
}
