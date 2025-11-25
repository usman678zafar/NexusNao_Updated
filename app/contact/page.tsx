import { ContactForm } from "@/components/marketing/contact-form"
import { Mail, MapPin, Phone } from "lucide-react"

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Nexusnao to discuss your next project.",
}

export default function ContactPage() {
  return (
    <>
      <div className="pt-20 pb-10 bg-neutral-950 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Let's Build Something Great
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto px-4">
          Fill out the form below to schedule a discovery call.
        </p>
      </div>

      <section className="py-24 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-12">
                Whether you have a question about our services, pricing, or just want to say hello, we're ready to answer all your questions.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">Email</h3>
                    <p className="text-neutral-600 dark:text-neutral-400">hello@nexusnao.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">Phone</h3>
                    <p className="text-neutral-600 dark:text-neutral-400">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">Office</h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      123 Innovation Drive<br />
                      Tech City, TC 90210
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 dark:bg-neutral-900/50 p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
