import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import SolutionDetailPage from '@/components/SolutionDetailPage'
import { getSolutionBySlug } from '@/lib/solutions'

export const metadata = {
  title: 'Data & Reporting Solutions | AXINEX',
  description: 'Data and reporting solutions page for Axinex Technologies.',
}

export default function DataReportingSolutionsPage() {
  const solution = getSolutionBySlug('data-reporting-solutions')

  return (
    <>
      <Navigation />
      {solution ? <SolutionDetailPage solution={solution} /> : null}
      <Footer />
    </>
  )
}
