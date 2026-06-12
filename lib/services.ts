export type ServiceTone = 'blue' | 'red'

export type ServiceDetail = {
  title: string
  description: string
  icon?: string
}

export type ServiceProcessStep = {
  step: string
  title: string
  description: string
}

export type ServiceItem = {
  slug: string
  menuLabel: string
  title: string
  summary: string
  overview: string
  image: string
  imageAlt: string
  icon: string
  tone: ServiceTone
  heroStatOne: string
  heroStatOneLabel: string
  heroStatTwo: string
  heroStatTwoLabel: string
  quickPoints: string[]
  challenges: ServiceDetail[]
  capabilities: ServiceDetail[]
  benefits: ServiceDetail[]
  process: ServiceProcessStep[]
  ctaTitle: string
  ctaDescription: string
}

export const serviceCatalog: ServiceItem[] = [
  {
    slug: 'multi-platform-development',
    menuLabel: 'Multi-platform Development',
    title: 'Multi-platform Development',
    summary: 'Unified web, mobile, and desktop experiences engineered from one dependable product strategy.',
    overview:
      'Axinex builds multi-platform systems for teams that need consistent workflows across browsers, mobile devices, and operational environments. We focus on shared architecture, reusable design patterns, and secure integrations so each platform feels native without becoming a separate product to maintain.',
    image: '/images/web app development.png',
    imageAlt: 'Multi-platform software interfaces across devices',
    icon: 'devices',
    tone: 'blue',
    heroStatOne: 'One',
    heroStatOneLabel: 'Connected product layer',
    heroStatTwo: '3x',
    heroStatTwoLabel: 'Platform coverage',
    quickPoints: ['Web and mobile apps', 'Shared component systems', 'API-led architecture'],
    challenges: [
      { title: 'Disconnected app experiences', description: 'We align user journeys, data states, and interface patterns across every platform.' },
      { title: 'Duplicate delivery effort', description: 'We reuse architecture and product logic where it makes sense, reducing repeated engineering work.' },
      { title: 'Inconsistent release quality', description: 'We create testing and deployment paths that keep platform updates controlled and predictable.' },
    ],
    capabilities: [
      { title: 'Responsive web platforms', description: 'Business applications that stay fast, accessible, and dependable across device sizes.', icon: 'public' },
      { title: 'Mobile-ready workflows', description: 'Field and customer experiences shaped for touch, camera, location, and offline realities.', icon: 'smartphone' },
      { title: 'Shared design systems', description: 'Reusable interface components that keep screens consistent as products expand.', icon: 'dashboard' },
      { title: 'Backend integration', description: 'API layers that connect products to existing business systems without brittle handoffs.', icon: 'hub' },
    ],
    benefits: [
      { title: 'Consistent user adoption', description: 'Users move between platforms without relearning core workflows.', icon: 'check_circle' },
      { title: 'Lower maintenance load', description: 'Shared logic and standards reduce long-term product support complexity.', icon: 'speed' },
      { title: 'Faster product expansion', description: 'New channels can be added without restarting the product foundation.', icon: 'trending_up' },
      { title: 'Reliable operations', description: 'Release and integration practices keep business-critical workflows stable.', icon: 'verified_user' },
    ],
    process: [
      { step: '01', title: 'Product and platform mapping', description: 'We define users, channels, journeys, and the right platform responsibilities.' },
      { step: '02', title: 'Architecture planning', description: 'We shape the API, component, and data model needed for reliable expansion.' },
      { step: '03', title: 'Interface and workflow build', description: 'We develop screens and core workflows with reusable implementation patterns.' },
      { step: '04', title: 'Cross-platform validation', description: 'We test responsiveness, permissions, performance, and release behavior.' },
      { step: '05', title: 'Launch and improve', description: 'We support rollout, feedback, and controlled iteration after release.' },
    ],
    ctaTitle: 'Build one product experience across every channel your users need',
    ctaDescription: 'Plan a multi-platform application that stays consistent, maintainable, and ready for future expansion.',
  },
  {
    slug: 'ai-and-automation',
    menuLabel: 'AI & Automation',
    title: 'AI & Automation',
    summary: 'Intelligent workflows that reduce repetitive effort, improve response time, and bring decision support into operations.',
    overview:
      'Axinex applies AI and automation where it creates practical operating value: document handling, workflow routing, decision support, reporting assistance, and repetitive task reduction. We keep automation explainable, measurable, and aligned to the way your teams actually work.',
    image: '/images/AI & Automation.png',
    imageAlt: 'Artificial intelligence and automation systems',
    icon: 'psychology',
    tone: 'red',
    heroStatOne: 'Smart',
    heroStatOneLabel: 'Workflow assistance',
    heroStatTwo: 'Less',
    heroStatTwoLabel: 'Manual repetition',
    quickPoints: ['Workflow automation', 'Decision support', 'AI-assisted operations'],
    challenges: [
      { title: 'Manual tasks consume expert time', description: 'We identify repetitive work that can be automated without losing operational control.' },
      { title: 'Teams lack actionable signals', description: 'We surface recommendations, alerts, and summaries inside the tools people already use.' },
      { title: 'Automation feels risky or unclear', description: 'We design review points, traceability, and fallback behavior into the automation model.' },
    ],
    capabilities: [
      { title: 'Process automation', description: 'Automated routing, approvals, notifications, and task updates for recurring workflows.', icon: 'bolt' },
      { title: 'Document intelligence', description: 'Extract, classify, and summarize structured information from operational documents.', icon: 'assignment' },
      { title: 'AI-assisted dashboards', description: 'Turn metrics and operational events into clear prompts for management attention.', icon: 'analytics' },
      { title: 'Human review controls', description: 'Keep approvals, exceptions, and audit trails visible when automation takes action.', icon: 'verified_user' },
    ],
    benefits: [
      { title: 'Higher team throughput', description: 'Routine work moves faster while people focus on decisions and exceptions.', icon: 'speed' },
      { title: 'Better response consistency', description: 'Automated rules help teams follow the same operating standard each time.', icon: 'check_circle' },
      { title: 'Clearer operational insight', description: 'AI-assisted summaries help leadership see patterns earlier.', icon: 'visibility' },
      { title: 'Controlled experimentation', description: 'Automation can start small and expand only after value is proven.', icon: 'shield' },
    ],
    process: [
      { step: '01', title: 'Automation discovery', description: 'We map repetitive tasks, decision points, and potential risk areas.' },
      { step: '02', title: 'Use case prioritization', description: 'We select workflows where automation can create measurable value quickly.' },
      { step: '03', title: 'Model and workflow design', description: 'We define data inputs, rules, review steps, and success metrics.' },
      { step: '04', title: 'Build and validate', description: 'We implement automation and test outputs against real operational examples.' },
      { step: '05', title: 'Monitor and refine', description: 'We track accuracy, adoption, exceptions, and improvement opportunities.' },
    ],
    ctaTitle: 'Bring practical AI and automation into your daily operations',
    ctaDescription: 'Start with workflows where intelligent assistance can reduce effort and improve consistency without adding risk.',
  },
  {
    slug: 'data-and-analytics',
    menuLabel: 'Data & Analytics',
    title: 'Data & Analytics',
    summary: 'Dashboards, data models, and reporting systems that convert operational data into confident decisions.',
    overview:
      'Axinex builds analytics foundations that leaders and teams can trust. We consolidate source data, define reliable KPI logic, and create reporting views that are practical for daily operations, management reviews, and long-term planning.',
    image: '/images/tech.webp',
    imageAlt: 'Analytics dashboard and technology data environment',
    icon: 'analytics',
    tone: 'blue',
    heroStatOne: 'Live',
    heroStatOneLabel: 'Performance visibility',
    heroStatTwo: 'Trusted',
    heroStatTwoLabel: 'KPI definitions',
    quickPoints: ['Dashboards', 'Data models', 'Automated reporting'],
    challenges: [
      { title: 'Reports are slow and manual', description: 'We replace recurring spreadsheet work with governed reporting pipelines and dashboards.' },
      { title: 'Metrics vary across teams', description: 'We align definitions so leadership and operations review the same numbers.' },
      { title: 'Source data is scattered', description: 'We connect the systems and feeds needed for a reliable analytics layer.' },
    ],
    capabilities: [
      { title: 'Management dashboards', description: 'Focused KPI views for leadership, operations, finance, and service teams.', icon: 'dashboard' },
      { title: 'Central data models', description: 'Structured data layers that make metrics consistent across reports.', icon: 'database' },
      { title: 'Automated reporting', description: 'Scheduled outputs and alerts that reduce repetitive MIS preparation.', icon: 'assignment' },
      { title: 'Insight workflows', description: 'Reporting experiences that help teams move from metric review to action.', icon: 'trending_up' },
    ],
    benefits: [
      { title: 'Faster decisions', description: 'Teams can respond to performance changes without waiting on manual report cycles.', icon: 'speed' },
      { title: 'Better data trust', description: 'Consistent definitions reduce debate around which numbers are correct.', icon: 'verified_user' },
      { title: 'Less reporting overhead', description: 'Recurring reports are generated from the data layer instead of rebuilt by hand.', icon: 'check_circle' },
      { title: 'Clearer planning', description: 'Leadership gets a dependable view of trends, gaps, and opportunities.', icon: 'visibility' },
    ],
    process: [
      { step: '01', title: 'KPI discovery', description: 'We define the questions, metrics, and stakeholders the analytics layer must serve.' },
      { step: '02', title: 'Source mapping', description: 'We identify data systems, formats, ownership, and refresh requirements.' },
      { step: '03', title: 'Data model build', description: 'We structure the reporting layer and align metric definitions.' },
      { step: '04', title: 'Dashboard delivery', description: 'We design and build views that are easy to scan and act on.' },
      { step: '05', title: 'Governance and iteration', description: 'We refine metrics, access, and reporting scope as business needs evolve.' },
    ],
    ctaTitle: 'Turn your operational data into a dependable decision layer',
    ctaDescription: 'Create dashboards and reporting systems that reduce manual work and improve leadership visibility.',
  },
  {
    slug: 'cloud-infrastructure',
    menuLabel: 'Cloud Infrastructure',
    title: 'Cloud Infrastructure',
    summary: 'Secure, scalable cloud foundations for applications, integrations, data, and long-term platform growth.',
    overview:
      'Axinex designs cloud infrastructure that supports performance, resilience, security, and controlled operations. From deployment pipelines to monitoring and cost-aware architecture, we create foundations that keep products stable as demand grows.',
    image: '/images/cloud infrastructure.png',
    imageAlt: 'Cloud infrastructure and secure platform environment',
    icon: 'cloud',
    tone: 'blue',
    heroStatOne: '99.9%',
    heroStatOneLabel: 'Availability mindset',
    heroStatTwo: 'Scalable',
    heroStatTwoLabel: 'Platform foundations',
    quickPoints: ['Cloud architecture', 'DevOps pipelines', 'Monitoring and resilience'],
    challenges: [
      { title: 'Infrastructure cannot scale smoothly', description: 'We design cloud environments that handle growth without fragile manual intervention.' },
      { title: 'Deployments feel risky', description: 'We create repeatable pipelines, environment controls, and rollback-ready release paths.' },
      { title: 'Operational visibility is limited', description: 'We add monitoring, alerts, and logs so teams can detect issues early.' },
    ],
    capabilities: [
      { title: 'Cloud architecture', description: 'Resilient hosting, networking, storage, and environment design for modern platforms.', icon: 'cloud' },
      { title: 'CI/CD pipelines', description: 'Automated build, test, and deployment workflows for safer releases.', icon: 'rocket' },
      { title: 'Monitoring and logs', description: 'Operational observability that helps teams detect and resolve issues quickly.', icon: 'visibility' },
      { title: 'Security controls', description: 'Access, secrets, backup, and environment practices designed for dependable operations.', icon: 'lock' },
    ],
    benefits: [
      { title: 'More stable applications', description: 'Infrastructure is designed to support uptime and consistent performance.', icon: 'check_circle' },
      { title: 'Faster releases', description: 'Teams ship improvements with less manual deployment overhead.', icon: 'speed' },
      { title: 'Improved resilience', description: 'Monitoring and recovery practices reduce the impact of operational incidents.', icon: 'shield' },
      { title: 'Cleaner platform ownership', description: 'Architecture and documentation make future support easier to manage.', icon: 'verified_user' },
    ],
    process: [
      { step: '01', title: 'Infrastructure assessment', description: 'We review application needs, traffic patterns, risks, and current deployment practices.' },
      { step: '02', title: 'Target architecture', description: 'We design environments, networks, access, and deployment flows.' },
      { step: '03', title: 'Cloud implementation', description: 'We build infrastructure, pipelines, monitoring, and operational controls.' },
      { step: '04', title: 'Resilience validation', description: 'We test deployments, alerts, permissions, backups, and recovery behavior.' },
      { step: '05', title: 'Operate and optimize', description: 'We refine performance, cost, security, and support practices over time.' },
    ],
    ctaTitle: 'Create cloud infrastructure your products can rely on',
    ctaDescription: 'Build scalable foundations with the deployment discipline and visibility needed for long-term operations.',
  },
  {
    slug: 'cybersecurity',
    menuLabel: 'Cybersecurity',
    title: 'Cybersecurity',
    summary: 'Security practices and controls that protect applications, data, users, and business continuity.',
    overview:
      'Axinex approaches cybersecurity as an engineering discipline, not an afterthought. We help organizations strengthen application security, access controls, data protection, monitoring, and operational readiness across their digital systems.',
    image: '/images/tech.webp',
    imageAlt: 'Secure technology environment and cyber controls',
    icon: 'security',
    tone: 'red',
    heroStatOne: 'Secure',
    heroStatOneLabel: 'Application posture',
    heroStatTwo: 'Ready',
    heroStatTwoLabel: 'Risk response',
    quickPoints: ['Application security', 'Security reviews', 'Monitoring readiness'],
    challenges: [
      { title: 'Security gaps appear late', description: 'We bring security checks into architecture, development, testing, and release decisions.' },
      { title: 'Access and data risks are unclear', description: 'We review permissions, sensitive flows, and protection points across the system.' },
      { title: 'Teams need response discipline', description: 'We help define logging, escalation, and remediation practices for real incidents.' },
    ],
    capabilities: [
      { title: 'Application security review', description: 'Assess code, configuration, authentication, and sensitive workflows for practical risk.', icon: 'shield' },
      { title: 'Secure architecture', description: 'Design controls for data handling, integrations, environments, and service boundaries.', icon: 'lock' },
      { title: 'Risk remediation', description: 'Prioritize fixes and hardening steps so teams can reduce exposure efficiently.', icon: 'verified_user' },
      { title: 'Security monitoring', description: 'Plan logs, alerts, and response flows for operational security visibility.', icon: 'visibility' },
    ],
    benefits: [
      { title: 'Reduced exposure', description: 'Critical risks are identified and handled before they become business incidents.', icon: 'security' },
      { title: 'Better release confidence', description: 'Security becomes part of the delivery process instead of a late-stage blocker.', icon: 'check_circle' },
      { title: 'Stronger data protection', description: 'Sensitive workflows are reviewed with access and handling controls in mind.', icon: 'lock' },
      { title: 'Clearer response readiness', description: 'Teams know what to monitor, who responds, and how incidents are escalated.', icon: 'shield' },
    ],
    process: [
      { step: '01', title: 'Security discovery', description: 'We review systems, data flows, roles, environments, and existing controls.' },
      { step: '02', title: 'Risk assessment', description: 'We identify practical security gaps and prioritize them by impact.' },
      { step: '03', title: 'Control design', description: 'We define architecture, access, logging, and remediation measures.' },
      { step: '04', title: 'Implementation support', description: 'We apply fixes, hardening, and secure delivery practices.' },
      { step: '05', title: 'Review and improve', description: 'We support ongoing security checks as systems and risks change.' },
    ],
    ctaTitle: 'Strengthen security across the systems your business depends on',
    ctaDescription: 'Review, harden, and monitor your applications with controls designed around real operational risk.',
  },
  {
    slug: 'identity-and-access-management',
    menuLabel: 'Identity & Access Management',
    title: 'Identity & Access Management',
    summary: 'Role-based access, authentication, and governance flows that keep users productive and systems protected.',
    overview:
      'Axinex designs identity and access management around how organizations actually operate. We structure roles, permissions, authentication flows, approvals, and access reviews so the right people get the right access without weakening security.',
    image: '/images/QA & testing.png',
    imageAlt: 'Identity and access control systems',
    icon: 'key',
    tone: 'red',
    heroStatOne: 'Right',
    heroStatOneLabel: 'Access by role',
    heroStatTwo: 'Traceable',
    heroStatTwoLabel: 'Permission governance',
    quickPoints: ['Role-based access', 'Authentication flows', 'Access review controls'],
    challenges: [
      { title: 'Permissions grow without control', description: 'We define role structures and access boundaries that are easier to review and maintain.' },
      { title: 'User journeys are interrupted', description: 'We design authentication and approval flows that protect systems without adding friction.' },
      { title: 'Access changes lack visibility', description: 'We create logs, request paths, and review practices for permission accountability.' },
    ],
    capabilities: [
      { title: 'Role and permission models', description: 'Access structures based on job responsibilities, data sensitivity, and workflow needs.', icon: 'group' },
      { title: 'Authentication flows', description: 'Login and verification patterns shaped around security, usability, and platform needs.', icon: 'key' },
      { title: 'Access requests', description: 'Guided approval workflows for onboarding, changes, exceptions, and removals.', icon: 'assignment' },
      { title: 'Audit and review', description: 'Traceable permission history and review support for governance requirements.', icon: 'verified_user' },
    ],
    benefits: [
      { title: 'Stronger control', description: 'Access is granted with clearer boundaries and fewer unmanaged exceptions.', icon: 'lock' },
      { title: 'Better user experience', description: 'Authentication and access requests become structured and easier to complete.', icon: 'check_circle' },
      { title: 'Cleaner audits', description: 'Permission changes and approvals are easier to explain and verify.', icon: 'verified_user' },
      { title: 'Lower access risk', description: 'Reviews and role design reduce stale or excessive permissions.', icon: 'shield' },
    ],
    process: [
      { step: '01', title: 'Access discovery', description: 'We map user groups, applications, permissions, and sensitive workflows.' },
      { step: '02', title: 'Role model design', description: 'We define access boundaries, approval needs, and exception handling.' },
      { step: '03', title: 'Authentication planning', description: 'We shape login, verification, session, and integration requirements.' },
      { step: '04', title: 'Implementation and testing', description: 'We build controls and validate user access across roles and workflows.' },
      { step: '05', title: 'Review operations', description: 'We support access reviews, governance reporting, and ongoing improvements.' },
    ],
    ctaTitle: 'Give every user the access they need, and nothing more',
    ctaDescription: 'Design identity and access controls that improve security, accountability, and daily usability.',
  },
]

export function getServiceBySlug(slug: string) {
  return serviceCatalog.find((service) => service.slug === slug)
}
