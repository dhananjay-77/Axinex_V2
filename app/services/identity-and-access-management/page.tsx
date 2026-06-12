import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import ServiceDetailPage from '@/components/ServiceDetailPage'
import { getServiceBySlug } from '@/lib/services'

export const metadata = {
  title: 'Identity & Access Management | AXINEX',
  description: 'Role-based access, authentication, and governance flows that keep users productive and systems protected.',
}

export default function IdentityAndAccessManagementPage() {
  const service = getServiceBySlug('identity-and-access-management')

  return (
    <>
      <Navigation />
      {service ? <ServiceDetailPage service={service} /> : null}
      <Footer />
    </>
  )
}
