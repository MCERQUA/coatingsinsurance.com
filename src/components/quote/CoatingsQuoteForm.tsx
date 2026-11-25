'use client'
import { QuoteForm, type LegacyQuestion } from '@/components/quote/QuoteForm'

const COATING_TRADES = [
  'Roof coating contractor',
  'Protective / industrial coating contractor',
  'Epoxy / floor coating contractor',
  'Painting / coatings contractor',
  'Other',
]

// Pre-port field names with no canonical twin: still posted under their own names (optional).
const LEGACY: LegacyQuestion[] = [
  {
    name: 'operationType',
    label: 'Type of operation',
    type: 'select',
    options: [
      'Individual / Sole Proprietor',
      'Small Business (2-10 employees)',
      'Mid-size Business (11-50)',
      'Large Business (50+)',
    ],
  },
]

// Pre-port names that mirror a canonical answer the shared form already asks: derived, never asked twice.
const deriveLegacy = (d: Record<string, string>): Record<string, string> => ({
  company: d.businessName ?? '',
  message: d.notes ?? '',
  annualRevenue: d.lastGrossSales ?? '',
  crewSize: d.lastEmployeeCount ?? '',
  coverageNeeded: d.coverageTypes ?? '',
})

export default function CoatingsQuoteForm() {
  return (
    <QuoteForm
      formName="quote"
      tradeName="Coatings"
      endpoint="/"
      format="urlencoded"
      options={{ yn: true, feinRequired: false }}
      tradeTypeOptions={COATING_TRADES}
      defaults={{ coverageTypes: 'General Liability' }}
      legacyQuestions={LEGACY}
      deriveLegacy={deriveLegacy}
      classes={{
        input: 'w-full px-4 py-2.5 border border-border rounded-lg font-body text-sm text-bark focus:outline-none focus:border-forest-green bg-white',
        label: 'block font-body text-sm font-bold text-bark mb-1.5',
        legend: 'block font-body text-sm font-bold text-bark mb-1.5',
        heading: 'font-heading text-lg text-bark font-bold border-b border-border pb-2',
        button: 'w-full bg-ember-orange text-white py-3.5 rounded-lg font-body font-bold hover:bg-ember-orange-dark transition-colors disabled:opacity-60',
      }}
    />
  )
}
