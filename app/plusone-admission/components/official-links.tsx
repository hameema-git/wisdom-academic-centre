import Link from "next/link"
import { ExternalLink } from "lucide-react"

export function OfficialLinks() {
  return (
    <section className="py-20 bg-white">

      <div className="container mx-auto px-4 max-w-5xl">

        <div className="bg-gradient-to-r from-blue-700 to-cyan-600 rounded-3xl p-10 text-white text-center">

          <h2 className="text-4xl font-bold mb-6">
            Official Links
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-5">

            <Link
              href="https://hscap.kerala.gov.in/"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-full"
            >
              HSCAP Portal

              <ExternalLink className="w-4 h-4" />
            </Link>

            <Link
              href="/prospectus.pdf"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 border border-white/30 px-6 py-3 rounded-full"
            >
              Download Prospectus
            </Link>

          </div>

        </div>

      </div>

    </section>
  )
}