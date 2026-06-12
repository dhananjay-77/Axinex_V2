import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import ServiceDetailPage from '@/components/ServiceDetailPage'
import { getServiceBySlug } from '@/lib/services'

export const metadata = {
  title: 'Cloud Infrastructure | AXINEX',
  description: 'Secure, scalable cloud foundations for applications, integrations, data, and long-term platform growth.',
}

export default function CloudInfrastructurePage() {
  const service = getServiceBySlug('cloud-infrastructure')

  return (
    <>
      <Navigation />
      {service ? <ServiceDetailPage service={service} /> : null}
      <Footer />
    </>
  )
}
