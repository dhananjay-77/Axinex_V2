import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import ServiceDetailPage from '@/components/ServiceDetailPage'
import { getServiceBySlug } from '@/lib/services'

export const metadata = {
  title: 'Cybersecurity | AXINEX',
  description: 'Security practices and controls that protect applications, data, users, and business continuity.',
}

export default function CybersecurityPage() {
  const service = getServiceBySlug('cybersecurity')

  return (
    <>
      <Navigation />
      {service ? <ServiceDetailPage service={service} /> : null}
      <Footer />
    </>
  )
}
