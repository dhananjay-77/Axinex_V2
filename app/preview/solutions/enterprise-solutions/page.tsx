import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import SolutionDetailPage from '@/components/SolutionDetailPage'
import { getSolutionBySlug } from '@/lib/solutions'

export const metadata = {
  title: 'Enterprise Solutions | AXINEX',
  description: 'Enterprise solutions page for Axinex Technologies.',
}

export default function EnterpriseSolutionsPage() {
  const solution = getSolutionBySlug('enterprise-solutions')

  return (
    <>
      <Navigation />
      {solution ? <SolutionDetailPage solution={solution} /> : null}
      <Footer />
    </>
  )
}
