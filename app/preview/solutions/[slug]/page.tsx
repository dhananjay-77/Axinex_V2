import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import SolutionDetailPage from '@/components/SolutionDetailPage'
import { getSolutionBySlug, solutionCatalog } from '@/lib/solutions'
import { notFound } from 'next/navigation'

type SolutionPageProps = {
  params: { slug: string }
}

export function generateStaticParams() {
  return solutionCatalog.map((solution) => ({ slug: solution.slug }))
}

export function generateMetadata({ params }: SolutionPageProps) {
  const solution = getSolutionBySlug(params.slug)

  if (!solution) {
    return {
      title: 'Solution not found | AXINEX',
    }
  }

  return {
    title: `${solution.title} | AXINEX`,
    description: solution.summary,
  }
}

export default function SolutionPage({ params }: SolutionPageProps) {
  const solution = getSolutionBySlug(params.slug)

  if (!solution) {
    notFound()
  }

  return (
    <>
      <Navigation />
      <SolutionDetailPage solution={solution} />
      <Footer />
    </>
  )
}
