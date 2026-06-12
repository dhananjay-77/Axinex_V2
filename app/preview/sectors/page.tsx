import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import PreviewEnterprisePage, { PreviewItem } from '@/components/PreviewEnterprisePage'

export const metadata = {
  title: 'Sectors | AXINEX',
  description: 'Standalone preview proposal for Axinex Technologies industry sectors.',
}

const sectorItems: PreviewItem[] = [
  {
    title: 'Government & Public Sector',
    icon: 'account_balance',
    description: 'Secure digital systems for citizen services, records, departmental workflows, and transparent public operations.',
    capabilities: ['Citizen Services', 'E-Governance', 'Digital Records', 'Case Management'],
    accent: 'blue',
    overview: 'Public sector teams need platforms that are accessible, auditable, and dependable across high-volume citizen interactions.',
    challengeTitle: 'Common Challenges',
    challenges: ['Manual files and service delays', 'Fragmented department records', 'Limited visibility for citizens and officials'],
    solutionTitle: 'Solutions We Provide',
    solutions: ['Citizen portals and request tracking', 'Department workflow systems', 'Digital records and reporting dashboards'],
    outcomesTitle: 'Expected Outcomes',
    outcomes: ['Transparent service delivery', 'Faster internal coordination', 'Reliable records governance'],
    useCasesTitle: 'Why Axinex',
    useCases: ['Public-service aware architecture', 'Secure role-based access', 'Scalable systems for multi-department use'],
  },
  {
    title: 'Education',
    icon: 'school',
    description: 'Digital platforms for institutions that manage admissions, academics, communication, and administration.',
    capabilities: ['Admissions', 'Student Portals', 'LMS', 'Administration'],
    accent: 'red',
    overview: 'Education organizations need connected digital experiences for students, faculty, administrators, and parents.',
    challengeTitle: 'Common Challenges',
    challenges: ['Manual admissions and fee workflows', 'Disconnected student information', 'Low visibility into academic operations'],
    solutionTitle: 'Solutions We Provide',
    solutions: ['Student and faculty portals', 'Admission and fee management', 'Academic dashboards and communication tools'],
    outcomesTitle: 'Expected Outcomes',
    outcomes: ['Simpler administration', 'Improved student experience', 'Better institutional reporting'],
    useCasesTitle: 'Why Axinex',
    useCases: ['Workflow-first institutional systems', 'Mobile-ready access', 'Custom modules for local processes'],
  },
  {
    title: 'Healthcare',
    icon: 'local_hospital',
    description: 'Patient-centric systems for appointments, records, operations, and healthcare service coordination.',
    capabilities: ['Appointments', 'Patient Records', 'Operations', 'Reporting'],
    accent: 'blue',
    overview: 'Healthcare platforms must balance speed, privacy, patient convenience, and operational control.',
    challengeTitle: 'Common Challenges',
    challenges: ['Appointment congestion', 'Paper-heavy patient records', 'Limited operational analytics'],
    solutionTitle: 'Solutions We Provide',
    solutions: ['Appointment and queue systems', 'Patient record workflows', 'Clinic and hospital dashboards'],
    outcomesTitle: 'Expected Outcomes',
    outcomes: ['Better patient flow', 'Cleaner data capture', 'Improved management visibility'],
    useCasesTitle: 'Why Axinex',
    useCases: ['Privacy-conscious engineering', 'Process mapping for clinical teams', 'Integration-ready architectures'],
  },
  {
    title: 'Manufacturing',
    icon: 'factory',
    description: 'Operational systems for inventory, production tracking, workforce coordination, and plant-level intelligence.',
    capabilities: ['Inventory', 'Production', 'Quality', 'Workforce'],
    accent: 'red',
    overview: 'Manufacturers need accurate operational data and workflow discipline across materials, production, quality, and dispatch.',
    challengeTitle: 'Common Challenges',
    challenges: ['Inventory mismatch', 'Production visibility gaps', 'Manual quality and dispatch reporting'],
    solutionTitle: 'Solutions We Provide',
    solutions: ['Inventory and production systems', 'Quality workflows and checklists', 'Plant dashboards and MIS reports'],
    outcomesTitle: 'Expected Outcomes',
    outcomes: ['Reduced operational leakage', 'Better production planning', 'Faster management reporting'],
    useCasesTitle: 'Why Axinex',
    useCases: ['Practical factory-floor workflows', 'Role-based plant dashboards', 'Scalable ERP-adjacent modules'],
  },
  {
    title: 'Finance',
    icon: 'payments',
    description: 'Digital systems for secure operations, customer workflows, approvals, dashboards, and compliance reporting.',
    capabilities: ['Approvals', 'Dashboards', 'Compliance', 'Customer Workflows'],
    accent: 'blue',
    overview: 'Finance teams require secure systems that enforce approvals, protect data, and give leaders accurate reporting.',
    challengeTitle: 'Common Challenges',
    challenges: ['Approval bottlenecks', 'Manual document workflows', 'High compliance reporting effort'],
    solutionTitle: 'Solutions We Provide',
    solutions: ['Secure workflow platforms', 'Document and approval automation', 'Financial MIS and audit dashboards'],
    outcomesTitle: 'Expected Outcomes',
    outcomes: ['Controlled processes', 'Improved turnaround time', 'Stronger audit readiness'],
    useCasesTitle: 'Why Axinex',
    useCases: ['Security-first delivery', 'Configurable approvals', 'Clear reporting and audit trails'],
  },
  {
    title: 'Retail & E-Commerce',
    icon: 'storefront',
    description: 'Customer-facing and back-office platforms for sales, catalog, orders, service, and business intelligence.',
    capabilities: ['Commerce', 'Catalogs', 'Orders', 'Customer Service'],
    accent: 'red',
    overview: 'Retail and e-commerce businesses need smooth buying journeys backed by reliable operations and customer support.',
    challengeTitle: 'Common Challenges',
    challenges: ['Inconsistent customer experiences', 'Manual order coordination', 'Limited sales and inventory insights'],
    solutionTitle: 'Solutions We Provide',
    solutions: ['E-commerce and portal development', 'Order and inventory workflows', 'Customer service dashboards'],
    outcomesTitle: 'Expected Outcomes',
    outcomes: ['Higher customer engagement', 'Cleaner operations', 'Better sales visibility'],
    useCasesTitle: 'Why Axinex',
    useCases: ['Responsive commerce experiences', 'Operations-aware builds', 'Analytics-ready platform design'],
  },
  {
    title: 'Logistics & Transportation',
    icon: 'local_shipping',
    description: 'Tracking, dispatch, fleet, warehouse, and reporting systems for movement-heavy organizations.',
    capabilities: ['Dispatch', 'Tracking', 'Fleet', 'Warehouse'],
    accent: 'blue',
    overview: 'Logistics teams need live operational clarity across people, assets, schedules, routes, and exceptions.',
    challengeTitle: 'Common Challenges',
    challenges: ['Low shipment visibility', 'Manual dispatch coordination', 'Delayed exception reporting'],
    solutionTitle: 'Solutions We Provide',
    solutions: ['Dispatch and tracking systems', 'Fleet and warehouse modules', 'Exception alerts and performance dashboards'],
    outcomesTitle: 'Expected Outcomes',
    outcomes: ['Better route coordination', 'Faster issue response', 'Improved asset utilization'],
    useCasesTitle: 'Why Axinex',
    useCases: ['Real-time workflow thinking', 'Mobile-enabled field access', 'Data-led operations reporting'],
  },
  {
    title: 'Corporate Enterprises',
    icon: 'business_center',
    description: 'Enterprise platforms that support internal operations, employee workflows, customers, and leadership reporting.',
    capabilities: ['Portals', 'HRMS', 'CRM', 'Analytics'],
    accent: 'red',
    overview: 'Corporate teams need scalable systems that reduce operational friction while giving management a clearer operating picture.',
    challengeTitle: 'Common Challenges',
    challenges: ['Disconnected internal tools', 'Slow management reporting', 'Low employee self-service adoption'],
    solutionTitle: 'Solutions We Provide',
    solutions: ['Employee and customer portals', 'CRM and HRMS platforms', 'Leadership dashboards and automation'],
    outcomesTitle: 'Expected Outcomes',
    outcomes: ['Better team productivity', 'Improved service quality', 'Faster executive decision-making'],
    useCasesTitle: 'Why Axinex',
    useCases: ['Enterprise-grade UX and architecture', 'Modular growth paths', 'Reliable integration planning'],
  },
]

export default function SectorsPreviewPage() {
  return (
    <>
      <Navigation />
      <PreviewEnterprisePage
        eyebrow="Sectors"
        title="Industry-Focused"
        italicTitle="Technology Solutions"
        description="Axinex Technologies develops customized digital solutions designed to address the unique operational challenges of different industries."
        primaryButton="Explore Sectors"
        itemsLabel="Industries"
        itemsTitle="Technology strategies tailored to real operating environments."
        itemsDescription="Each sector card expands into a focused view of industry pressures, relevant Axinex solutions, expected outcomes, and the reasons our approach fits the domain."
        metricOne="8"
        metricOneLabel="Industry Sectors"
        metricTwo="B2B"
        metricTwoLabel="Enterprise Focus"
        items={sectorItems}
      />
      <Footer />
    </>
  )
}
