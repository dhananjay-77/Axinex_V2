import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import SolutionDetailPage from '@/components/SolutionDetailPage'
import { getSolutionBySlug } from '@/lib/solutions'

export const metadata = {
  title: 'AMS Support | AXINEX',
  description: 'AMS support page for Axinex Technologies.',
}

export default function AmsSupportPage() {
  const solution = getSolutionBySlug('ams-support')

  return (
    <>
      <Navigation />
      {solution ? <SolutionDetailPage solution={solution} /> : null}
      <Footer />
    </>
  )
}
