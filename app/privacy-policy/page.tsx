import LegalPageTemplate from '@/components/LegalPageTemplate'

export const metadata = {
  title: 'Privacy Policy | AXINEX',
  description: 'Privacy practices for Axinex Technologies website visitors, clients, and partners.',
}

export default function PrivacyPolicyPage() {
  return (
    <LegalPageTemplate
      eyebrow="Legal & Compliance"
      title="Privacy Policy"
      description="How Axinex Technologies collects, uses, stores, and protects information when you interact with our website, products, and services."
      lastUpdated="June 4, 2026"
      intro="At Axinex Technologies, we value the privacy of our website visitors, clients, and business partners. This Privacy Policy explains how information is collected, used, stored, and protected when interacting with our website, products, and services. By using this website, you agree to the practices described in this Privacy Policy."
      sections={[
        {
          title: 'Information We Collect',
          content: [
            'Full Name',
            'Email Address',
            'Phone Number',
            'Organization Name',
            'Project Requirements',
            'Contact Preferences',
            'Information voluntarily submitted through forms',
            'Basic technical information such as browser type, device information, and website usage statistics',
          ],
        },
        {
          title: 'How We Use Information',
          content: [
            'Respond to inquiries and support requests',
            'Communicate regarding services and projects',
            'Improve website functionality and user experience',
            'Provide requested information',
            'Maintain website security and operational reliability',
          ],
        },
        {
          title: 'Data Protection',
          content:
            'Axinex Technologies takes reasonable technical and organizational measures to protect information from unauthorized access, disclosure, alteration, or misuse. While no online platform can guarantee absolute security, we continuously strive to maintain appropriate safeguards.',
        },
        {
          title: 'Third-Party Services',
          content:
            'Our website may utilize trusted third-party services for hosting, analytics, communication, and operational purposes. These providers are expected to maintain appropriate security and privacy standards.',
        },
        {
          title: 'User Rights',
          content: [
            'Access to personal information',
            'Correction of inaccurate information',
            'Deletion of information where applicable',
            'Withdrawal of previously provided consent',
          ],
        },
        {
          title: 'Important Statement',
          content:
            'Axinex Technologies does not sell, rent, or trade personal information collected through this website.',
        },
        {
          title: 'Policy Changes',
          content:
            'This Privacy Policy may be updated periodically. Changes become effective upon publication on this page.',
        },
      ]}
    />
  )
}