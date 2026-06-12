import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import PreviewEnterprisePage, { PreviewItem } from '@/components/PreviewEnterprisePage'
import { solutionCatalog } from '@/lib/solutions'

export const metadata = {
  title: 'Solutions | AXINEX',
  description: 'Axinex Technologies solution portfolio.',
}

const solutionItems: PreviewItem[] = solutionCatalog.map((solution) => ({
  title: solution.title,
  icon: solution.icon,
  description: solution.summary,
  capabilities: solution.quickPoints,
  accent: solution.tone,
  href: `/preview/solutions/${solution.slug}`,
  overview: solution.overview,
  challengeTitle: 'Challenges We Solve',
  challenges: solution.challenges.map((item) => item.title),
  solutionTitle: 'Key Features',
  solutions: solution.features.map((item) => item.title),
  outcomesTitle: 'Benefits',
  outcomes: solution.benefits.map((item) => item.title),
  useCasesTitle: 'Process',
  useCases: solution.process.map((item) => item.title),
}))

export default function SolutionsPreviewPage() {
  return (
    <>
      <Navigation />
      <PreviewEnterprisePage
        eyebrow="Solutions"
        title="Technology Solutions That Drive"
        italicTitle="Business Transformation"
        description="Axinex Technologies delivers innovative, scalable, and customized technology solutions that help organizations streamline operations, improve efficiency, strengthen customer engagement, and accelerate digital transformation."
        primaryButton="View Our Capabilities"
        secondaryButton="Schedule Consultation"
        itemsLabel="Solution Categories"
        itemsTitle="Enterprise capability, engineered around measurable outcomes."
        itemsDescription="Each solution area is designed as a complete business system: strategic enough for leadership, practical enough for everyday users, and flexible enough for long-term growth."
        metricOne="6"
        metricOneLabel="Solution Tracks"
        metricTwo="360"
        metricTwoLabel="Business Coverage"
        items={solutionItems}
      />
      <Footer />
    </>
  )
}
