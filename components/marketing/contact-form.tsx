"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setIsSuccess(true)
      reset()
    } catch (error) {
      console.error("Submission error:", error)
      // You might want to add a toast here for error
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-green-800 dark:text-green-400 mb-2">Message Sent!</h3>
        <p className="text-green-700 dark:text-green-300 mb-6">
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
        <Button onClick={() => setIsSuccess(false)} variant="outline">
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
            Name
          </label>
          <input
            id="name"
            {...register("name")}
            className="w-full px-4 py-3 rounded-none border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            placeholder="John Doe"
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="w-full px-4 py-3 rounded-none border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            placeholder="john@example.com"
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="company" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
          Company (Optional)
        </label>
        <input
          id="company"
          {...register("company")}
          className="w-full px-4 py-3 rounded-none border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          placeholder="Acme Inc."
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
          Message
        </label>
        <textarea
          id="message"
          {...register("message")}
          rows={5}
          className="w-full px-4 py-3 rounded-none border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
          placeholder="Tell us about your project..."
        />
        {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}
      </div>

      <Button type="submit" size="lg" className="w-full rounded-none" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  )
}
