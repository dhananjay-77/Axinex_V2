import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import ServiceDetailPage from '@/components/ServiceDetailPage'
import { getServiceBySlug } from '@/lib/services'

export const metadata = {
  title: 'AI & Automation | AXINEX',
  description: 'Intelligent workflows that reduce repetitive effort, improve response time, and bring decision support into operations.',
}

export default function AiAndAutomationPage() {
  const service = getServiceBySlug('ai-and-automation')

  return (
    <>
      <Navigation />
      {service ? <ServiceDetailPage service={service} /> : null}
      <Footer />
    </>
  )
}
