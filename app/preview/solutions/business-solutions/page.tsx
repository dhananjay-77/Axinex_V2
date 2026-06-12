import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import SolutionDetailPage from '@/components/SolutionDetailPage'
import { getSolutionBySlug } from '@/lib/solutions'

export const metadata = {
  title: 'Business Solutions | AXINEX',
  description: 'Business solutions page for Axinex Technologies.',
}

export default function BusinessSolutionsPage() {
  const solution = getSolutionBySlug('business-solutions')

  return (
    <>
      <Navigation />
      {solution ? <SolutionDetailPage solution={solution} /> : null}
      <Footer />
    </>
  )
}
