import LegalPageTemplate from '@/components/LegalPageTemplate'

export const metadata = {
  title: 'Terms & Conditions | AXINEX',
  description: 'Terms governing use of the Axinex Technologies website and related services.',
}

export default function TermsAndConditionsPage() {
  return (
    <LegalPageTemplate
      eyebrow="Legal & Compliance"
      title="Terms & Conditions"
      description="The terms that govern the use of the Axinex Technologies website and related services."
      lastUpdated="June 4, 2026"
      intro="These Terms & Conditions govern the use of the Axinex Technologies website and related services. By accessing this website, users agree to comply with these Terms & Conditions."
      sections={[
        {
          title: 'Website Usage',
          content:
            'Users agree to use this website responsibly and only for lawful purposes. Activities that may compromise website security, interfere with operations, or misuse website resources are prohibited.',
        },
        {
          title: 'Intellectual Property',
          content:
            'All content on this website, including text, graphics, branding, logos, designs, and materials, is the property of Axinex Technologies unless otherwise stated. Unauthorized reproduction, modification, distribution, or commercial use is prohibited without written permission.',
        },
        {
          title: 'Service Information',
          content:
            'Information presented on this website is provided for general informational purposes and may be updated, modified, or removed without prior notice.',
        },
        {
          title: 'Limitation of Liability',
          content:
            'Axinex Technologies shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website or reliance upon its content.',
        },
        {
          title: 'Third-Party Links',
          content:
            'The website may contain links to third-party websites. Axinex Technologies is not responsible for the content, privacy practices, or policies of external websites.',
        },
        {
          title: 'Governing Law',
          content:
            'These Terms & Conditions shall be governed and interpreted in accordance with applicable laws and regulations.',
        },
        {
          title: 'Modifications',
          content:
            'Axinex Technologies reserves the right to update these Terms & Conditions at any time. Continued use of the website constitutes acceptance of any changes.',
        },
      ]}
    />
  )
}