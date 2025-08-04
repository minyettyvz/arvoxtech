"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Image from "next/image"

interface SoftwareDetailModalProps {
  isOpen: boolean
  onClose: () => void
  software: {
    id: string
    title: string
    description: string
    features: string[]
    images: string[]
  } | null
}

export default function SoftwareDetailModal({ isOpen, onClose, software }: SoftwareDetailModalProps) {
  const [mainImage, setMainImage] = useState<string | null>(null)

  // Set the first image as main when the modal opens or software changes
  useState(() => {
    if (software && software.images && software.images.length > 0) {
      setMainImage(software.images[0])
    } else {
      setMainImage(null)
    }
  }, [software])

  if (!software) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-black text-white border-gray-800 p-6 sm:p-8 rounded-lg shadow-lg">
        <DialogHeader className="relative pb-4 border-b border-gray-700">
          <DialogTitle className="text-3xl font-bold text-yellow-400">{software.title}</DialogTitle>
          <DialogDescription className="text-gray-300 text-lg mt-2">{software.description}</DialogDescription>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
            aria-label="Cerrar"
          >
            <X className="h-6 w-6" />
          </Button>
        </DialogHeader>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 mt-6">
          {/* Image Gallery */}
          <div className="flex flex-col gap-4">
            {mainImage && (
              <div className="relative w-full h-56 sm:h-72 md:h-96 rounded-lg overflow-hidden border border-gray-700">
                <Image
                  src={mainImage || "/placeholder.svg"}
                  alt={`Imagen principal de ${software.title}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
            )}
            <div className="grid grid-cols-3 gap-2">
              {software.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setMainImage(image)}
                  className={`relative w-full h-16 sm:h-20 rounded-md overflow-hidden border-2 ${
                    mainImage === image ? "border-yellow-400" : "border-gray-700"
                  } hover:border-yellow-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Miniatura ${index + 1} de ${software.title}`}
                    layout="fill"
                    objectFit="cover"
                    className="opacity-80 hover:opacity-100 transition-opacity duration-200"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-4">
            <h4 className="text-2xl font-semibold text-white">Funcionalidades Clave:</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-lg">
              {software.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500 text-lg px-6 py-3 h-auto font-semibold mt-4">
              Solicitar Demostración
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
