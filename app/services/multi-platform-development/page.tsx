import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import ServiceDetailPage from '@/components/ServiceDetailPage'
import { getServiceBySlug } from '@/lib/services'

export const metadata = {
  title: 'Multi-platform Development | AXINEX',
  description: 'Unified web, mobile, and desktop experiences engineered from one dependable product strategy.',
}

export default function MultiPlatformDevelopmentPage() {
  const service = getServiceBySlug('multi-platform-development')

  return (
    <>
      <Navigation />
      {service ? <ServiceDetailPage service={service} /> : null}
      <Footer />
    </>
  )
}
