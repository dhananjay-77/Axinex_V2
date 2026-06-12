import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import ServiceDetailPage from '@/components/ServiceDetailPage'
import { getServiceBySlug } from '@/lib/services'

export const metadata = {
  title: 'Data & Analytics | AXINEX',
  description: 'Dashboards, data models, and reporting systems that convert operational data into confident decisions.',
}

export default function DataAndAnalyticsPage() {
  const service = getServiceBySlug('data-and-analytics')

  return (
    <>
      <Navigation />
      {service ? <ServiceDetailPage service={service} /> : null}
      <Footer />
    </>
  )
}
