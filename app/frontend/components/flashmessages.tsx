import React, { useEffect } from 'react'
import { usePage } from '@inertiajs/react'
import { Alert, AlertDescription } from "@/components/ui/alert"
import { XCircle, CheckCircle, AlertCircle, X } from "lucide-react"
import { useState } from 'react'

interface Flash {
  notice?: string
  alert?: string
  error?: string
  success?: string
}

interface PageProps {
  flash: Flash
  has_flash: boolean
}

interface FlashMessage {
  type: string
  message: string
  visible: boolean
}

const FlashMessages = () => {
  const { flash, has_flash } = usePage().props as unknown as PageProps
  const [visibleMessages, setVisibleMessages] = useState<{[key: string]: boolean}>({})

  useEffect(() => {
    if (has_flash) {
      const initialVisibility = Object.keys(flash).reduce((acc, key) => {
        if (flash[key as keyof Flash]) {
          acc[key] = true
        }
        return acc
      }, {} as {[key: string]: boolean})
      setVisibleMessages(initialVisibility)
    }
  }, [flash, has_flash])

  if (!has_flash) return null

  const getIcon = (type: string) => {
    switch (type) {
      case 'error':
      case 'alert':
        return <XCircle className="h-4 w-4" />
      case 'success':
        return <CheckCircle className="h-4 w-4" />
      default:
        return <AlertCircle className="h-4 w-4" />
    }
  }

  const getAlertClass = (type: string) => {
    switch (type) {
      case 'error':
      case 'alert':
        return 'border-red-500 text-red-500'
      case 'success':
        return 'border-green-500 text-green-500'
      default:
        return 'border-blue-500 text-blue-500'
    }
  }

  const handleDismiss = (type: string) => {
    setVisibleMessages(prev => ({
      ...prev,
      [type]: false
    }))
  }

  return (
    <div className="fixed inset-0 flex items-start justify-center z-50 pointer-events-none pt-20">
      <div className="space-y-2 min-w-[320px] animate-in slide-in-from-top duration-300">
        {Object.entries(flash).map(([type, message]) => (
          message && visibleMessages[type] && (
            <Alert key={type} className={`flex items-center pointer-events-auto relative ${getAlertClass(type)}`}>
              {getIcon(type)}
              <AlertDescription className="ml-2">
                {message}
              </AlertDescription>
              <X 
                className="h-4 w-4 cursor-pointer absolute top-2 right-2"
                onClick={() => handleDismiss(type)}
              />
            </Alert>
          )
        ))}
      </div>
    </div>
  )
}

export default FlashMessages
