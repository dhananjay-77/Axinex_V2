import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import SolutionDetailPage from '@/components/SolutionDetailPage'
import { getSolutionBySlug } from '@/lib/solutions'

export const metadata = {
  title: 'Government Solutions | AXINEX',
  description: 'Government solutions page for Axinex Technologies.',
}

export default function GovernmentSolutionsPage() {
  const solution = getSolutionBySlug('government-solutions')

  return (
    <>
      <Navigation />
      {solution ? <SolutionDetailPage solution={solution} /> : null}
      <Footer />
    </>
  )
}
