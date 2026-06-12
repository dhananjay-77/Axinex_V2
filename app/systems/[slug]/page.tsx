import { notFound } from 'next/navigation'
import SubsystemPage from '@/components/SubsystemPage'
import { getSubsystemBySlug, subsystemPages } from '@/lib/subsystems'

type SystemPageProps = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return subsystemPages.map((page) => ({ slug: page.slug }))
}

export function generateMetadata({ params }: SystemPageProps) {
  const page = getSubsystemBySlug(params.slug)

  if (!page) {
    return {
      title: 'System | AXINEX',
    }
  }

  return {
    title: `${page.title} | AXINEX`,
    description: page.subtitle,
  }
}

export default function SystemPage({ params }: SystemPageProps) {
  const page = getSubsystemBySlug(params.slug)

  if (!page) {
    notFound()
  }

  return <SubsystemPage page={page} />
}
