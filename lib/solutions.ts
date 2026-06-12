export type SolutionTone = 'blue' | 'red'

export type SolutionChallenge = {
  title: string
  response: string
}

export type SolutionFeature = {
  title: string
  description: string
  icon: string
}

export type SolutionBenefit = {
  title: string
  description: string
  icon: string
}

export type SolutionProcessStep = {
  step: string
  title: string
  description: string
}

export type SolutionItem = {
  slug: string
  menuLabel: string
  title: string
  summary: string
  overview: string
  image: string
  imageAlt: string
  icon: string
  tone: SolutionTone
  heroStatOne: string
  heroStatOneLabel: string
  heroStatTwo: string
  heroStatTwoLabel: string
  quickPoints: string[]
  challenges: SolutionChallenge[]
  features: SolutionFeature[]
  benefits: SolutionBenefit[]
  process: SolutionProcessStep[]
  ctaTitle: string
  ctaDescription: string
}

export const solutionCatalog: SolutionItem[] = [
  {
    slug: 'enterprise-solutions',
    menuLabel: 'Enterprise Solutions',
    title: 'Enterprise Solutions',
    summary: 'Connected business platforms that streamline operations, unify data, and give leadership a dependable operating view.',
    overview:
      'Axinex builds enterprise systems that connect departments, approvals, reporting, and integrations into one coherent operating layer. The goal is not just software delivery, but a durable platform that supports how the organization actually runs day to day.',
    image: '/images/custom software development.png',
    imageAlt: 'Illustration for enterprise software platforms and connected operations',
    icon: 'corporate_fare',
    tone: 'blue',
    heroStatOne: '360°',
    heroStatOneLabel: 'Operational visibility',
    heroStatTwo: 'Unified',
    heroStatTwoLabel: 'Data and workflows',
    quickPoints: ['ERP and workflow design', 'Role-based dashboards', 'Integration-ready architecture'],
    challenges: [
      { title: 'Fragmented systems across teams', response: 'We consolidate functions into a single platform so departments work from the same source of truth.' },
      { title: 'Slow reporting and approval cycles', response: 'We redesign workflows with automation, status tracking, and exception handling built in.' },
      { title: 'Scaling pain in legacy tools', response: 'We deliver modular systems that can grow without forcing a full replacement later.' },
    ],
    features: [
      { title: 'Unified operating modules', description: 'Finance, operations, HR, and reporting components built around the same data model.', icon: 'hub' },
      { title: 'Role-aware dashboards', description: 'Different views for executives, managers, and frontline users without duplicating effort.', icon: 'dashboard' },
      { title: 'Secure integrations', description: 'Connect existing systems, APIs, and data feeds without creating brittle handoffs.', icon: 'lock' },
      { title: 'Audit-ready controls', description: 'Approvals, logs, and traceability designed for governance and internal accountability.', icon: 'verified_user' },
    ],
    benefits: [
      { title: 'Higher process consistency', description: 'Teams follow the same operating path, reducing ambiguity and rework.', icon: 'check_circle' },
      { title: 'Faster decision-making', description: 'Leadership gets live data instead of waiting on manual reporting cycles.', icon: 'trending_up' },
      { title: 'Lower admin overhead', description: 'Automation removes repetitive coordination work from critical business functions.', icon: 'speed' },
      { title: 'Long-term platform ownership', description: 'The architecture is built for enhancement, support, and controlled expansion.', icon: 'security' },
    ],
    process: [
      { step: '01', title: 'Discovery and workflow mapping', description: 'We document the current operating model, gaps, and integration points before design starts.' },
      { step: '02', title: 'Architecture and module planning', description: 'We define the data model, roles, and module boundaries needed for the target platform.' },
      { step: '03', title: 'Build and integration', description: 'We develop the core modules and connect them to the systems the business already uses.' },
      { step: '04', title: 'Testing and rollout', description: 'We validate functionality, permissions, and reporting before production release.' },
      { step: '05', title: 'Support and evolution', description: 'We support ongoing enhancements so the platform keeps pace with the business.' },
    ],
    ctaTitle: 'Plan an enterprise platform around how your teams really work',
    ctaDescription: 'Talk to Axinex about a system that connects departments, reporting, and approval flows without adding operational friction.',
  },
  {
    slug: 'business-solutions',
    menuLabel: 'Business Solutions',
    title: 'Business Solutions',
    summary: 'Practical digital systems for process digitization, internal portals, approvals, and everyday operational control.',
    overview:
      'Business Solutions are designed for organizations that need more than a website but less than a heavyweight enterprise suite. Axinex creates focused systems for internal operations, service requests, approvals, and process digitization that remove manual bottlenecks and improve accountability.',
    image: '/images/web app development.png',
    imageAlt: 'Illustration for web applications and business operations tooling',
    icon: 'business_center',
    tone: 'red',
    heroStatOne: 'Fast',
    heroStatOneLabel: 'Process turnaround',
    heroStatTwo: 'Clear',
    heroStatTwoLabel: 'Ownership and status',
    quickPoints: ['Workflow digitization', 'Internal portals', 'Approval automation'],
    challenges: [
      { title: 'Manual processes slow the business down', response: 'We convert repetitive tasks into guided digital workflows with routing and validation.' },
      { title: 'Teams lack visibility on request status', response: 'We introduce tracking, notifications, and dashboards so work never disappears in inboxes.' },
      { title: 'Tools do not match actual business rules', response: 'We tailor the application around your approval chain, data capture, and escalation logic.' },
    ],
    features: [
      { title: 'Digital request flows', description: 'Capture, route, and track requests from start to finish with clear states.', icon: 'assignment' },
      { title: 'Configurable approval paths', description: 'Support one-step or multi-step approvals based on role and business rules.', icon: 'filter_list' },
      { title: 'Document handling', description: 'Attach, review, and manage files in the same place the workflow lives.', icon: 'forum' },
      { title: 'Operational dashboards', description: 'Expose workload, cycle times, and bottlenecks for managers and teams.', icon: 'analytics' },
    ],
    benefits: [
      { title: 'Shorter cycle times', description: 'Tasks move through the organization with less waiting and fewer handoffs.', icon: 'speed' },
      { title: 'Cleaner accountability', description: 'Every request has an owner, status, and traceable trail.', icon: 'check_circle' },
      { title: 'Better service consistency', description: 'The same operating standard is followed across users and locations.', icon: 'verified_user' },
      { title: 'Less spreadsheet dependency', description: 'Critical work moves out of ad hoc files and into a maintained application.', icon: 'dashboard' },
    ],
    process: [
      { step: '01', title: 'Map current business steps', description: 'We identify where work is manual, delayed, or inconsistent.' },
      { step: '02', title: 'Design the digital flow', description: 'We translate business rules into forms, statuses, and approvals.' },
      { step: '03', title: 'Build the solution', description: 'We implement the workflow, reporting, and permission model.' },
      { step: '04', title: 'Validate with users', description: 'We test the journey with the people who will use it every day.' },
      { step: '05', title: 'Support continuous improvement', description: 'We refine the system as the business changes and expands.' },
    ],
    ctaTitle: 'Replace manual business processes with a system your team can actually use',
    ctaDescription: 'Create structured workflows, approval logic, and internal portals that reduce overhead and improve visibility.',
  },
  {
    slug: 'ams-support',
    menuLabel: 'AMS Support',
    title: 'AMS Support',
    summary: 'Application support and enhancement services that keep business software stable, secure, and ready for change.',
    overview:
      'Application Management Services help organizations keep critical software running smoothly after launch. Axinex supports monitoring, fixes, enhancements, release coordination, and user support so the platform remains dependable instead of becoming a maintenance burden.',
    image: '/images/QA & testing.png',
    imageAlt: 'Illustration for quality assurance, monitoring, and managed support',
    icon: 'shield',
    tone: 'blue',
    heroStatOne: '24/7',
    heroStatOneLabel: 'Support mindset',
    heroStatTwo: 'Stable',
    heroStatTwoLabel: 'Release operations',
    quickPoints: ['Monitoring and incident handling', 'Release coordination', 'Enhancement backlog support'],
    challenges: [
      { title: 'Applications degrade after go-live', response: 'We provide structured support so bugs, regressions, and operational issues are handled quickly.' },
      { title: 'Backlogs become unmanaged over time', response: 'We prioritize enhancements and fixes to keep support work visible and controlled.' },
      { title: 'Teams need reliable release discipline', response: 'We coordinate testing, deployment, and rollback planning to reduce delivery risk.' },
    ],
    features: [
      { title: 'Incident response', description: 'Track, triage, and resolve support issues with clear ownership.', icon: 'security' },
      { title: 'Monitoring and alerts', description: 'Spot failures and unusual behavior before they impact users.', icon: 'visibility' },
      { title: 'Release and change support', description: 'Control enhancements and deployments through a repeatable process.', icon: 'rocket' },
      { title: 'User support workflows', description: 'Make support requests simple to submit, review, and close.', icon: 'forum' },
    ],
    benefits: [
      { title: 'Better application uptime', description: 'The software stays usable and stable for the people who depend on it.', icon: 'check_circle' },
      { title: 'Lower operational risk', description: 'Support is managed with defined processes instead of ad hoc fixes.', icon: 'shield' },
      { title: 'Faster issue resolution', description: 'Support teams can see, prioritize, and act on incidents quickly.', icon: 'speed' },
      { title: 'Controlled enhancements', description: 'New features are added without destabilizing the existing platform.', icon: 'trending_up' },
    ],
    process: [
      { step: '01', title: 'Assess the current environment', description: 'We review the application, known issues, and release history.' },
      { step: '02', title: 'Set support priorities', description: 'We define response levels, support categories, and escalation paths.' },
      { step: '03', title: 'Operate and resolve', description: 'We monitor, triage, and fix incidents while keeping stakeholders informed.' },
      { step: '04', title: 'Coordinate improvements', description: 'We manage enhancements as part of the support lifecycle.' },
      { step: '05', title: 'Report and optimize', description: 'We track patterns to improve stability and reduce repeat issues.' },
    ],
    ctaTitle: 'Keep your applications supported, secure, and ready for the next release',
    ctaDescription: 'Use a structured AMS model to reduce support risk while keeping enhancement work under control.',
  },
  {
    slug: 'government-solutions',
    menuLabel: 'Government Solutions',
    title: 'Government Solutions',
    summary: 'Secure digital public-service systems that improve transparency, citizen access, and department-level control.',
    overview:
      'Government systems must serve citizens, protect sensitive records, and simplify internal operations all at once. Axinex delivers secure public-sector platforms that support service requests, departmental workflows, records handling, and accountability reporting.',
    image: '/images/cloud infrastructure.png',
    imageAlt: 'Illustration for secure public sector and cloud-backed government systems',
    icon: 'public',
    tone: 'red',
    heroStatOne: 'Secure',
    heroStatOneLabel: 'Public-service workflows',
    heroStatTwo: 'Transparent',
    heroStatTwoLabel: 'Case tracking',
    quickPoints: ['Citizen service portals', 'Digital records governance', 'Audit-friendly operations'],
    challenges: [
      { title: 'Citizen requests are handled manually', response: 'We digitize requests and status tracking so citizens and departments can see progress clearly.' },
      { title: 'Records are hard to manage and audit', response: 'We organize records in secure digital workflows with traceability and access control.' },
      { title: 'Departments need better operational transparency', response: 'We create dashboards and reporting layers for service and case management oversight.' },
    ],
    features: [
      { title: 'Citizen service portals', description: 'Allow citizens to submit and track requests without manual follow-up.', icon: 'forum' },
      { title: 'Case and department dashboards', description: 'Give public teams a clearer view of workload, status, and performance.', icon: 'dashboard' },
      { title: 'Access control and audit trails', description: 'Protect sensitive records with role-based permissions and logs.', icon: 'lock' },
      { title: 'Records and reporting systems', description: 'Store documents and produce management reporting in one secure platform.', icon: 'analytics' },
    ],
    benefits: [
      { title: 'Improved service access', description: 'Citizens interact with digital services instead of waiting on manual handling.', icon: 'public' },
      { title: 'Better accountability', description: 'Departments can see where requests are, who owns them, and what changed.', icon: 'verified_user' },
      { title: 'Stronger governance', description: 'Data and workflows follow a structured, auditable model.', icon: 'security' },
      { title: 'Reduced administrative load', description: 'Routine service work is moved into digital flows and dashboards.', icon: 'speed' },
    ],
    process: [
      { step: '01', title: 'Review service and compliance needs', description: 'We map operational rules, access constraints, and reporting requirements.' },
      { step: '02', title: 'Design citizen and department journeys', description: 'We shape forms, statuses, and dashboards around public service goals.' },
      { step: '03', title: 'Build secure workflows', description: 'We implement the platform with controls suitable for public operations.' },
      { step: '04', title: 'Test governance and usability', description: 'We verify that the platform is understandable, secure, and reliable.' },
      { step: '05', title: 'Support ongoing service delivery', description: 'We maintain and evolve the system as departmental needs change.' },
    ],
    ctaTitle: 'Deliver public services with more transparency and less manual overhead',
    ctaDescription: 'Create secure digital systems that help citizens, departments, and auditors work from the same operating picture.',
  },
  {
    slug: 'data-reporting-solutions',
    menuLabel: 'Data & Reporting Solutions',
    title: 'Data & Reporting Solutions',
    summary: 'Management dashboards, reporting layers, and analytics systems that turn operational data into decisions.',
    overview:
      'Data and reporting platforms help leaders understand what is happening now, not what happened weeks ago. Axinex builds structured dashboards, KPI views, and reporting systems that consolidate data from multiple sources into a practical decision-making layer.',
    image: '/images/AI & Automation.png',
    imageAlt: 'Illustration for analytics, automation, and reporting systems',
    icon: 'analytics',
    tone: 'blue',
    heroStatOne: 'Live',
    heroStatOneLabel: 'Management visibility',
    heroStatTwo: 'Trusted',
    heroStatTwoLabel: 'Reporting logic',
    quickPoints: ['Dashboards and KPI layers', 'Centralized data models', 'Scheduled and on-demand reports'],
    challenges: [
      { title: 'Reporting relies on spreadsheets', response: 'We centralize the data flow so reports are generated from a governed source instead of manual files.' },
      { title: 'Leadership waits too long for MIS updates', response: 'We provide dashboards and automated report delivery for faster visibility.' },
      { title: 'Teams do not trust the numbers', response: 'We align the data model and KPI logic so metrics remain consistent across views.' },
    ],
    features: [
      { title: 'Live dashboards', description: 'Surface the metrics that matter most to operations and leadership.', icon: 'dashboard' },
      { title: 'KPI frameworks', description: 'Define reporting around the questions the business actually needs answered.', icon: 'trending_up' },
      { title: 'Central data models', description: 'Bring data together before it reaches the report layer.', icon: 'hub' },
      { title: 'Scheduled reporting', description: 'Automate regular outputs so stakeholders receive updates on time.', icon: 'check_circle' },
    ],
    benefits: [
      { title: 'Faster insight', description: 'Managers see performance shifts early enough to respond.', icon: 'speed' },
      { title: 'More confident planning', description: 'Decisions are based on clearer, better-structured data.', icon: 'verified_user' },
      { title: 'Less manual reporting work', description: 'Teams stop rebuilding the same reports every cycle.', icon: 'assignment' },
      { title: 'Consistent metrics', description: 'Everyone reviews the same definitions and the same data foundation.', icon: 'analytics' },
    ],
    process: [
      { step: '01', title: 'Define reporting goals', description: 'We identify the KPIs and management questions that matter most.' },
      { step: '02', title: 'Map source data', description: 'We review the systems and feeds required to power reporting.' },
      { step: '03', title: 'Build the data model', description: 'We create the structure that keeps metrics consistent and reliable.' },
      { step: '04', title: 'Deliver dashboards and reports', description: 'We design accessible views for leadership and operations teams.' },
      { step: '05', title: 'Refine and expand', description: 'We improve the reporting layer as business priorities evolve.' },
    ],
    ctaTitle: 'Make reporting a decision tool instead of a recurring manual task',
    ctaDescription: 'Use dashboards, KPI frameworks, and data models that give your leadership team the visibility it needs.',
  },
  {
    slug: 'crm-solutions',
    menuLabel: 'CRM Solutions',
    title: 'CRM Solutions',
    summary: 'Customer relationship platforms that support sales, service, follow-up, and a clearer view of the customer journey.',
    overview:
      'CRM systems help teams manage leads, customers, conversations, and service history in one place. Axinex creates customer platforms that improve follow-up discipline, give teams a better view of the pipeline, and support service experiences that feel coordinated instead of fragmented.',
    image: '/images/mobile application development.png',
    imageAlt: 'Illustration for customer relationship management and mobile customer workflows',
    icon: 'forum',
    tone: 'red',
    heroStatOne: '360°',
    heroStatOneLabel: 'Customer view',
    heroStatTwo: 'Faster',
    heroStatTwoLabel: 'Follow-up cycles',
    quickPoints: ['Lead and pipeline tracking', 'Service history and activity logs', 'Sales and support workflows'],
    challenges: [
      { title: 'Customer data is spread across tools', response: 'We centralize leads, interactions, and service history into a single customer record.' },
      { title: 'Follow-up discipline is inconsistent', response: 'We add reminders, status stages, and ownership so opportunities do not stall.' },
      { title: 'Sales and service teams are disconnected', response: 'We design shared workflows so the customer journey stays visible end to end.' },
    ],
    features: [
      { title: 'Pipeline and lead management', description: 'Track prospects through stages with visibility for the sales team.', icon: 'search' },
      { title: 'Customer history and notes', description: 'Store calls, follow-ups, and service activity in one place.', icon: 'forum' },
      { title: 'Task and reminder systems', description: 'Keep ownership clear and ensure follow-ups happen on time.', icon: 'assignment' },
      { title: 'Mobile-ready access', description: 'Give field and relationship teams access where they actually work.', icon: 'smartphone' },
    ],
    benefits: [
      { title: 'Stronger customer visibility', description: 'Sales and service teams work from the same relationship context.', icon: 'visibility' },
      { title: 'Better follow-up discipline', description: 'Opportunities and service items move forward with less drift.', icon: 'check_circle' },
      { title: 'Improved conversion potential', description: 'Leads are tracked and nurtured with more structure.', icon: 'trending_up' },
      { title: 'More consistent service', description: 'History, ownership, and next steps are visible to the whole team.', icon: 'verified_user' },
    ],
    process: [
      { step: '01', title: 'Understand customer journeys', description: 'We review how leads, sales, and support currently move through the business.' },
      { step: '02', title: 'Model the CRM structure', description: 'We define pipeline stages, service states, and customer record fields.' },
      { step: '03', title: 'Build team workflows', description: 'We implement the follow-up, assignment, and history features your team needs.' },
      { step: '04', title: 'Train and validate', description: 'We make sure users can adopt the CRM and trust the data inside it.' },
      { step: '05', title: 'Improve over time', description: 'We refine the CRM as sales and service practices mature.' },
    ],
    ctaTitle: 'Give your teams a clearer, more reliable view of every customer',
    ctaDescription: 'Build a CRM that strengthens follow-up, improves service, and keeps relationship data in one place.',
  },
]

export function getSolutionBySlug(slug: string) {
  return solutionCatalog.find((solution) => solution.slug === slug)
}
