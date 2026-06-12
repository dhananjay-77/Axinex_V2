import LegalPageTemplate from '@/components/LegalPageTemplate'

export const metadata = {
  title: 'Security Framework | AXINEX',
  description: 'Axinex Technologies security principles, access controls, and delivery safeguards.',
}

export default function SecurityFrameworkPage() {
  return (
    <LegalPageTemplate
      eyebrow="Legal & Compliance"
      title="Security Framework"
      description="Our approach to building secure, reliable, and resilient systems for modern organizations."
      lastUpdated="June 4, 2026"
      intro="At Axinex Technologies, security is an essential component of every solution we design, develop, and deploy. Our objective is to create reliable, scalable, and secure digital systems that help organizations operate with confidence and resilience."
      sections={[
        {
          title: 'Our Security Principles',
          content: [
            'Security By Design: Security considerations are incorporated throughout the planning, design, development, deployment, and maintenance lifecycle.',
            'Privacy By Design: We prioritize responsible handling and protection of information throughout our solutions and processes.',
            'Risk Awareness: Potential risks are evaluated and addressed through structured planning and development practices.',
            'Continuous Improvement: Security practices are continuously reviewed and refined to adapt to evolving technologies and business requirements.',
          ],
        },
        {
          title: 'Access Control',
          content: [
            'Role-Based Access Control',
            'Permission Management',
            'Authentication Mechanisms',
            'Administrative Controls',
          ],
        },
        {
          title: 'Data Protection',
          content: [
            'Secure Data Storage',
            'Controlled Access',
            'Secure Data Transmission',
            'Information Management Practices',
          ],
        },
        {
          title: 'Secure Development Process',
          content:
            'Requirements Analysis → Architecture Planning → Secure Development → Testing & Validation → Deployment → Monitoring & Support. Security considerations are incorporated throughout each stage.',
        },
        {
          title: 'Infrastructure Security',
          content: [
            'Secure Hosting Environments',
            'SSL/TLS Encryption',
            'Monitoring Systems',
            'Backup Strategies',
            'Availability Management',
          ],
        },
        {
          title: 'Business Continuity',
          content:
            'We strive to support reliability and operational continuity through planning, monitoring, and maintenance practices designed to reduce disruptions.',
        },
        {
          title: 'Our Commitment',
          content:
            'Axinex Technologies is committed to delivering technology solutions that prioritize security, privacy, reliability, and long-term business value. Security remains a shared responsibility and an ongoing process that supports trust between our organization and our clients.',
        },
      ]}
    />
  )
}