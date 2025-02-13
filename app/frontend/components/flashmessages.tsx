import React, { useEffect } from 'react'
import { usePage } from '@inertiajs/react'
import { Alert, AlertDescription } from "@/components/ui/alert"
import { XCircle, CheckCircle, AlertCircle } from "lucide-react"

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

const FlashMessages: React.FC = () => {
  const { flash, has_flash } = usePage().props as PageProps

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

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2 min-w-[320px]">
      {Object.entries(flash).map(([type, message]) => (
        message && (
          <Alert key={type} className={`flex items-center ${getAlertClass(type)}`}>
            {getIcon(type)}
            <AlertDescription className="ml-2">
              {message}
            </AlertDescription>
          </Alert>
        )
      ))}
    </div>
  )
}

export default FlashMessages
