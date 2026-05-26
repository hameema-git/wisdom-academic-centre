import { Hero } from "./components/hero"
import { ImportantDates } from "./components/important-dates"
import { Eligibility } from "./components/eligibility"
import { AdmissionProcess } from "./components/admission-process"
import { RequiredDocuments } from "./components/required-documents"
import { AllotmentProcess } from "./components/allotment-process"
import { BonusPoints } from "./components/bonus-points"
import { OfficialLinks } from "./components/official-links"
import { HelpSection } from "./components/help-section"
import { FAQSection } from "./components/faq-section"
import { WGPA } from "./components/wgpa"
import { TemporaryAdmission } from "./components/temporary-admission"

export default function PlusOneAdmissionPage() {
  return (
    <main className="min-h-screen bg-background">

      <Hero />

      <ImportantDates />

      <Eligibility />

      <WGPA />

      <AdmissionProcess />

      <TemporaryAdmission />

      <RequiredDocuments />

      <AllotmentProcess />

      <BonusPoints />

      <FAQSection />

      <OfficialLinks />

      <HelpSection />

    </main>
  )
}