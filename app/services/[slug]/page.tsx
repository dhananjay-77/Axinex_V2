import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import ServiceDetailPage from '@/components/ServiceDetailPage'
import { getServiceBySlug, serviceCatalog } from '@/lib/services'
import { notFound } from 'next/navigation'

type ServicePageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return serviceCatalog.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return {
      title: 'Service not found | AXINEX',
    }
  }

  return {
    title: `${service.title} | AXINEX`,
    description: service.summary,
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  return (
    <>
      <Navigation />
      <ServiceDetailPage service={service} />
      <Footer />
    </>
  )
}
