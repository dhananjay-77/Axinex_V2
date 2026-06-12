import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import SolutionDetailPage from '@/components/SolutionDetailPage'
import { getSolutionBySlug } from '@/lib/solutions'

export const metadata = {
  title: 'CRM Solutions | AXINEX',
  description: 'CRM solutions page for Axinex Technologies.',
}

export default function CrmSolutionsPage() {
  const solution = getSolutionBySlug('crm-solutions')

  return (
    <>
      <Navigation />
      {solution ? <SolutionDetailPage solution={solution} /> : null}
      <Footer />
    </>
  )
}
