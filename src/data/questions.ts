export interface Question {
  id: string;
  framework: string;
  category: string;
  text: string;
  description?: string;
}

export const questions: Question[] = [
  // ISO 27001 Questions
  {
    id: 'iso-27001-isms',
    framework: 'iso-27001',
    category: 'Governance & Risk Management',
    text: 'Does your organization have a formal Information Security Management System (ISMS) in place?',
    description: 'A systematic approach to managing sensitive company information so that it remains secure.'
  },
  {
    id: 'iso-27001-risk-assessments',
    framework: 'iso-27001',
    category: 'Governance & Risk Management',
    text: 'Are regular risk assessments conducted to identify and analyze information security risks?',
    description: 'Systematic process of identifying risks and evaluating their potential impact.'
  },
  {
    id: 'iso-27001-role-based-access',
    framework: 'iso-27001',
    category: 'Access Control & Identity',
    text: 'Is role-based access control implemented to ensure users have appropriate access rights?',
    description: 'Access based on job function, restricting access to authorized users only.'
  },
  {
    id: 'iso-27001-data-classification',
    framework: 'iso-27001',
    category: 'Data Protection & Privacy',
    text: 'Is data classification implemented to identify and protect sensitive information?',
    description: 'Categorizing data based on sensitivity and applying appropriate protection levels.'
  },
  {
    id: 'iso-27001-incident-response',
    framework: 'iso-27001',
    category: 'Monitoring & Incident Response',
    text: 'Does your organization have a documented incident response plan and team?',
    description: 'Prepared procedures and designated team for handling security incidents.'
  },
  {
    id: 'iso-27001-vendor-assessments',
    framework: 'iso-27001',
    category: 'Vendor & Third-Party Security',
    text: 'Are security assessments conducted for third-party vendors and suppliers?',
    description: 'Evaluating the security posture of external partners and vendors.'
  },

  // NCA ECC Questions - Based on ECC-2:2024 Essential Cybersecurity Controls
  {
    id: 'nca-ecc-cybersecurity-strategy',
    framework: 'nca-ecc',
    category: 'Governance & Risk Management',
    text: 'Is the cybersecurity strategy identified, documented, approved, and supported by the head of the entity or authorized official, with goals aligned with legislative and regulatory requirements?',
    description: '1-1-1: Formal cybersecurity strategy documentation and top-level support.'
  },
  {
    id: 'nca-ecc-strategy-action-plan',
    framework: 'nca-ecc',
    category: 'Governance & Risk Management',
    text: 'Is there an executed action plan to apply the cybersecurity strategy, and is the strategy reviewed at planned intervals or when requirements change?',
    description: '1-1-2 & 1-1-3: Strategy implementation through action plans and regular reviews.'
  },
  {
    id: 'nca-ecc-cybersecurity-department',
    framework: 'nca-ecc',
    category: 'Governance & Risk Management',
    text: 'Is there an independent cybersecurity department established, filled with full-time qualified Saudi cybersecurity professionals, and reporting appropriately to avoid conflicts of interest?',
    description: '1-2-1 & 1-2-2: Independent cybersecurity department with qualified personnel.'
  },
  {
    id: 'nca-ecc-supervisory-committee',
    framework: 'nca-ecc',
    category: 'Governance & Risk Management',
    text: 'Is there a cybersecurity supervisory committee established with identified members, responsibilities, and governance framework, including the head of cybersecurity as a member?',
    description: '1-2-3: Cybersecurity supervisory committee with proper governance structure.'
  },
  {
    id: 'nca-ecc-policies-procedures',
    framework: 'nca-ecc',
    category: 'Governance & Risk Management',
    text: 'Are cybersecurity policies and procedures identified, documented, approved, communicated, implemented, and supported by technical security standards, with regular reviews and updates?',
    description: '1-3-1 through 1-3-4: Comprehensive policy lifecycle management.'
  },
  {
    id: 'nca-ecc-roles-responsibilities',
    framework: 'nca-ecc',
    category: 'Governance & Risk Management',
    text: 'Is the governance organizational structure, roles, and responsibilities for cybersecurity identified, documented, approved, assigned, and reviewed periodically?',
    description: '1-4-1 & 1-4-2: Clear definition and periodic review of cybersecurity roles.'
  },
  {
    id: 'nca-ecc-risk-management',
    framework: 'nca-ecc',
    category: 'Governance & Risk Management',
    text: 'Is the cybersecurity risk management methodology identified, documented, approved, implemented, and reviewed, with risk assessments conducted at key project stages and before major changes?',
    description: '1-5-1 through 1-5-4: Systematic risk management methodology and implementation.'
  },
  {
    id: 'nca-ecc-project-management',
    framework: 'nca-ecc',
    category: 'Governance & Risk Management',
    text: 'Are cybersecurity requirements included in project management methodology, covering vulnerability assessments, secure configuration reviews, secure coding standards, and regular reviews?',
    description: '1-6-1 through 1-6-4: Cybersecurity integration into project lifecycle.'
  },
  {
    id: 'nca-ecc-international-agreements',
    framework: 'nca-ecc',
    category: 'Governance & Risk Management',
    text: 'Are nationally approved international agreements or commitments with cybersecurity requirements identified and complied with?',
    description: '1-7-1: Compliance with international cybersecurity agreements.'
  },
  {
    id: 'nca-ecc-audit-review',
    framework: 'nca-ecc',
    category: 'Governance & Risk Management',
    text: 'Is the implementation of cybersecurity controls periodically reviewed by the cybersecurity department and independently audited by other parties, with results documented and presented to appropriate committees?',
    description: '1-8-1 through 1-8-3: Internal reviews and independent audits of controls.'
  },
  {
    id: 'nca-ecc-human-resources',
    framework: 'nca-ecc',
    category: 'Governance & Risk Management',
    text: 'Are cybersecurity requirements for personnel identified, documented, approved, and implemented throughout employment lifecycle, including contract clauses, screening, awareness, and access revocation?',
    description: '1-9-1 through 1-9-6: Comprehensive personnel security management.'
  },
  {
    id: 'nca-ecc-awareness-training',
    framework: 'nca-ecc',
    category: 'Governance & Risk Management',
    text: 'Is there a periodic cybersecurity awareness program delivered through multiple channels, covering key cyber risks, and providing specialized training for cybersecurity personnel, developers, and executives?',
    description: '1-10-1 through 1-10-5: Comprehensive awareness and training program.'
  },
  {
    id: 'nca-ecc-asset-management',
    framework: 'nca-ecc',
    category: 'Access Control & Identity',
    text: 'Are cybersecurity requirements for managing information and technology assets identified, documented, approved, implemented, including acceptable use policies and asset classification?',
    description: '2-1-1 through 2-1-6: Comprehensive asset management and classification.'
  },
  {
    id: 'nca-ecc-identity-access',
    framework: 'nca-ecc',
    category: 'Access Control & Identity',
    text: 'Are identity and access management requirements implemented, including single-factor authentication, multi-factor authentication, user authorization, privileged access management, and periodic reviews?',
    description: '2-2-1 through 2-2-4: Comprehensive identity and access management system.'
  },
  {
    id: 'nca-ecc-systems-protection',
    framework: 'nca-ecc',
    category: 'Access Control & Identity',
    text: 'Are information systems and processing facilities protected with modern antivirus technologies, external storage media restrictions, patch management, and centralized clock synchronization?',
    description: '2-3-1 through 2-3-4: System protection measures and maintenance.'
  },
  {
    id: 'nca-ecc-email-protection',
    framework: 'nca-ecc',
    category: 'Access Control & Identity',
    text: 'Is email service protected with advanced filtering techniques, multi-factor authentication, archiving, APT protection, and domain validation (SPF, DKIM, DMARC)?',
    description: '2-4-1 through 2-4-4: Comprehensive email security measures.'
  },
  {
    id: 'nca-ecc-network-security',
    framework: 'nca-ecc',
    category: 'Access Control & Identity',
    text: 'Is network security managed with secure segmentation, production environment isolation, secure browsing, wireless security, service restriction, IPS, DNS security, and DDoS protection?',
    description: '2-5-1 through 2-5-4: Comprehensive network security management.'
  },
  {
    id: 'nca-ecc-mobile-devices',
    framework: 'nca-ecc',
    category: 'Access Control & Identity',
    text: 'Are mobile devices and BYOD security implemented with data separation, controlled usage, data deletion capabilities, and user security awareness?',
    description: '2-6-1 through 2-6-4: Mobile device and BYOD security management.'
  },
  {
    id: 'nca-ecc-data-protection',
    framework: 'nca-ecc',
    category: 'Data Protection & Privacy',
    text: 'Are cybersecurity requirements for protecting and handling data identified, documented, approved, and implemented based on classification level?',
    description: '2-7-1 through 2-7-3: Data protection requirements based on classification.'
  },
  {
    id: 'nca-ecc-cryptography',
    framework: 'nca-ecc',
    category: 'Data Protection & Privacy',
    text: 'Are cryptography requirements implemented according to National Cryptographic Standards, including approved systems, key management, and data encryption in transit and at rest?',
    description: '2-8-1 through 2-8-4: Comprehensive cryptographic controls and key management.'
  },
  {
    id: 'nca-ecc-backup-recovery',
    framework: 'nca-ecc',
    category: 'Data Protection & Privacy',
    text: 'Are backup and recovery requirements identified, documented, approved, and implemented, covering critical assets, quick recovery capability, and periodic testing?',
    description: '2-9-1 through 2-9-4: Comprehensive backup and recovery management.'
  },
  {
    id: 'nca-ecc-vulnerability-management',
    framework: 'nca-ecc',
    category: 'Data Protection & Privacy',
    text: 'Are technical vulnerabilities managed with periodic assessments, classification, remediation, patch management, and communication with trusted resources?',
    description: '2-10-1 through 2-10-4: Systematic vulnerability management process.'
  },
  {
    id: 'nca-ecc-penetration-testing',
    framework: 'nca-ecc',
    category: 'Data Protection & Privacy',
    text: 'Are penetration testing requirements identified, documented, approved, and implemented, covering all externally provided services and conducted periodically?',
    description: '2-11-1 through 2-11-4: Comprehensive penetration testing program.'
  },
  {
    id: 'nca-ecc-logs-monitoring',
    framework: 'nca-ecc',
    category: 'Monitoring & Incident Response',
    text: 'Are cybersecurity event logs and monitoring requirements implemented, including log activation for critical assets, SIEM techniques, continuous monitoring, and 12-month retention?',
    description: '2-12-1 through 2-12-4: Comprehensive log management and monitoring.'
  },
  {
    id: 'nca-ecc-incident-management',
    framework: 'nca-ecc',
    category: 'Monitoring & Incident Response',
    text: 'Are incident and threat management requirements implemented, including response plans, incident classification, NCA reporting, threat intelligence sharing, and feed collection?',
    description: '2-13-1 through 2-13-4: Comprehensive incident and threat management.'
  },
  {
    id: 'nca-ecc-physical-security',
    framework: 'nca-ecc',
    category: 'Monitoring & Incident Response',
    text: 'Are information and technology assets protected against unauthorized physical access through authorized area access, monitoring logs, log protection, secure destruction, and device security?',
    description: '2-14-1 through 2-14-4: Comprehensive physical security measures.'
  },
  {
    id: 'nca-ecc-web-application',
    framework: 'nca-ecc',
    category: 'Monitoring & Incident Response',
    text: 'Are external web applications protected with web application firewall, multi-tier architecture, secure protocols, and secure usage policies?',
    description: '2-15-1 through 2-15-4: Web application security measures.'
  },
  {
    id: 'nca-ecc-business-continuity',
    framework: 'nca-ecc',
    category: 'Monitoring & Incident Response',
    text: 'Are cybersecurity resilience aspects integrated into Business Continuity Management, ensuring cybersecurity considerations in continuity planning?',
    description: '3-1: Cybersecurity resilience in business continuity management.'
  },
  {
    id: 'nca-ecc-third-party-security',
    framework: 'nca-ecc',
    category: 'Vendor & Third-Party Security',
    text: 'Are third-party cybersecurity requirements identified, documented, approved, and implemented according to entity needs and risk assessments?',
    description: '4-1: Third-party cybersecurity management.'
  },
  {
    id: 'nca-ecc-cloud-security',
    framework: 'nca-ecc',
    category: 'Vendor & Third-Party Security',
    text: 'Are cloud computing and hosting cybersecurity requirements identified, documented, approved, and implemented for entities using cloud services?',
    description: '4-2: Cloud computing and hosting cybersecurity management.'
  },

  // UAE IA/NESA Questions
  {
    id: 'uae-ia-governance',
    framework: 'uae-ia-nesa',
    category: 'Governance & Risk Management',
    text: 'Is there a formal governance framework aligned with UAE IA/NESA standards?',
    description: 'Structured approach to cybersecurity governance meeting UAE requirements.'
  },
  {
    id: 'uae-ia-privileged-monitoring',
    framework: 'uae-ia-nesa',
    category: 'Access Control & Identity',
    text: 'Are privileged accounts monitored and controlled according to NESA standards?',
    description: 'Special controls for administrative and high-privilege accounts.'
  },
  {
    id: 'uae-ia-realtime-monitoring',
    framework: 'uae-ia-nesa',
    category: 'Monitoring & Incident Response',
    text: 'Is real-time monitoring implemented for critical infrastructure and systems?',
    description: 'Continuous surveillance of systems with immediate threat detection.'
  },
  {
    id: 'uae-ia-sensitive-data',
    framework: 'uae-ia-nesa',
    category: 'Data Protection & Privacy',
    text: 'Are sensitive data protection measures implemented per UAE regulations?',
    description: 'Enhanced protection for critical and sensitive information assets.'
  },
  {
    id: 'uae-ia-vendor-compliance',
    framework: 'uae-ia-nesa',
    category: 'Vendor & Third-Party Security',
    text: 'Do vendors comply with UAE IA/NESA cybersecurity requirements?',
    description: 'Third-party compliance with UAE cybersecurity standards.'
  },

  // PCI-DSS Questions
  {
    id: 'pci-dss-policies',
    framework: 'pci-dss',
    category: 'Governance & Risk Management',
    text: 'Are policies and procedures documented for cardholder data security?',
    description: 'Formal documentation of security measures for payment card data.'
  },
  {
    id: 'pci-dss-access-restriction',
    framework: 'pci-dss',
    category: 'Access Control & Identity',
    text: 'Is access to cardholder data restricted on a need-to-know basis?',
    description: 'Limiting access to payment card data to authorized personnel only.'
  },
  {
    id: 'pci-dss-encryption',
    framework: 'pci-dss',
    category: 'Data Protection & Privacy',
    text: 'Is encryption implemented for cardholder data transmission and storage?',
    description: 'Protecting payment card data through cryptographic methods.'
  },
  {
    id: 'pci-dss-log-monitoring',
    framework: 'pci-dss',
    category: 'Monitoring & Incident Response',
    text: 'Are system logs monitored and reviewed for suspicious activities?',
    description: 'Regular review of logs to detect potential security incidents.'
  },
  {
    id: 'pci-dss-vendor-compliance',
    framework: 'pci-dss',
    category: 'Vendor & Third-Party Security',
    text: 'Are third-party service providers PCI-DSS compliant?',
    description: 'Ensuring vendors handling payment data meet PCI standards.'
  },

  // PDPL/GDPR Questions
  {
    id: 'pdpl-privacy-officer',
    framework: 'pdpl',
    category: 'Governance & Risk Management',
    text: 'Has a Data Protection Officer (DPO) or privacy lead been appointed?',
    description: 'Designated individual responsible for data protection compliance.'
  },
  {
    id: 'pdpl-access-controls',
    framework: 'pdpl',
    category: 'Access Control & Identity',
    text: 'Are access controls implemented to protect personal data?',
    description: 'Technical measures to protect personal information from unauthorized access.'
  },
  {
    id: 'pdpl-data-subject-rights',
    framework: 'pdpl',
    category: 'Data Protection & Privacy',
    text: 'Are data subject rights (access, rectification, deletion) implemented?',
    description: 'Processes for individuals to exercise their data protection rights.'
  },
  {
    id: 'pdpl-breach-management',
    framework: 'pdpl',
    category: 'Monitoring & Incident Response',
    text: 'Is there a data breach notification and management process?',
    description: 'Procedures for handling and reporting data breaches.'
  },
  {
    id: 'pdpl-third-party',
    framework: 'pdpl',
    category: 'Vendor & Third-Party Security',
    text: 'Are data processing agreements in place with third-party processors?',
    description: 'Legal agreements ensuring third parties protect personal data.'
  },

  // NIST CSF Questions
  {
    id: 'nist-risk-identification',
    framework: 'nist-csf',
    category: 'Governance & Risk Management',
    text: 'Are assets and risks identified and managed according to NIST CSF?',
    description: 'Systematic identification and management of cybersecurity risks.'
  },
  {
    id: 'nist-identity-management',
    framework: 'nist-csf',
    category: 'Access Control & Identity',
    text: 'Is identity and access management implemented per NIST guidelines?',
    description: 'Comprehensive approach to managing digital identities and access.'
  },
  {
    id: 'nist-data-protection',
    framework: 'nist-csf',
    category: 'Data Protection & Privacy',
    text: 'Are data protection measures aligned with NIST CSF recommendations?',
    description: 'Protecting data confidentiality, integrity, and availability.'
  },
  {
    id: 'nist-event-detection',
    framework: 'nist-csf',
    category: 'Monitoring & Incident Response',
    text: 'Are security events detected and analyzed in real-time?',
    description: 'Continuous monitoring and detection of potential security incidents.'
  },
  {
    id: 'nist-supply-chain',
    framework: 'nist-csf',
    category: 'Vendor & Third-Party Security',
    text: 'Is supply chain risk management implemented?',
    description: 'Managing risks associated with third-party suppliers and vendors.'
  },

  // CIS Controls Questions
  {
    id: 'cis-asset-inventory',
    framework: 'cis-controls',
    category: 'Governance & Risk Management',
    text: 'Is a comprehensive hardware and software asset inventory maintained?',
    description: 'Complete inventory of all technology assets within the organization.'
  },
  {
    id: 'cis-admin-privileges',
    framework: 'cis-controls',
    category: 'Access Control & Identity',
    text: 'Are administrative privileges controlled and monitored?',
    description: 'Strict management of administrative access to systems and data.'
  },
  {
    id: 'cis-sensitive-data',
    framework: 'cis-controls',
    category: 'Data Protection & Privacy',
    text: 'Is sensitive data identified and protected?',
    description: 'Locating and securing sensitive information throughout the organization.'
  },
  {
    id: 'cis-vulnerability-assessment',
    framework: 'cis-controls',
    category: 'Monitoring & Incident Response',
    text: 'Are regular vulnerability assessments performed?',
    description: 'Systematic scanning and assessment of security vulnerabilities.'
  },
  {
    id: 'cis-external-providers',
    framework: 'cis-controls',
    category: 'Vendor & Third-Party Security',
    text: 'Are external providers and cloud services monitored and secured?',
    description: 'Security management of third-party services and cloud providers.'
  },

  // Aramco CCC Questions - Based on SACS-002 Third Party Cybersecurity Standard
  {
    id: 'aramco-ccc-aup',
    framework: 'aramco-ccc',
    category: 'Governance & Risk Management',
    text: 'Does your organization establish, maintain and communicate a Cybersecurity Acceptable Use Policy (AUP) governing the use of Technology Assets?',
    description: 'TPC-1: Formal policy documenting acceptable use of technology assets and systems.'
  },
  {
    id: 'aramco-ccc-password-policy',
    framework: 'aramco-ccc',
    category: 'Access Control & Identity',
    text: 'Are password protection measures enforced including minimum 8 characters, password history, 90-day maximum age, and account lockout after 10 invalid attempts?',
    description: 'TPC-2: Comprehensive password protection measures including length requirements, history, age limits, and lockout thresholds.'
  },
  {
    id: 'aramco-ccc-password-storage',
    framework: 'aramco-ccc',
    category: 'Access Control & Identity',
    text: 'Does your organization prohibit writing down, electronically storing in clear text, or disclosing any password or authentication code used to access Assets or Critical Facilities?',
    description: 'TPC-3: Strict controls on password handling to prevent unauthorized disclosure or storage.'
  },
  {
    id: 'aramco-ccc-mfa-remote',
    framework: 'aramco-ccc',
    category: 'Access Control & Identity',
    text: 'Is Multi-Factor Authentication enforced on all remote access, including access from the Internet, to company computing resources?',
    description: 'TPC-4: MFA requirement for all remote access connections to prevent unauthorized access.'
  },
  {
    id: 'aramco-ccc-mfa-cloud',
    framework: 'aramco-ccc',
    category: 'Access Control & Identity',
    text: 'Is Multi-Factor Authentication enforced on all access to Cloud services utilized by the organization, including access to cloud-based email?',
    description: 'TPC-5: MFA protection for all cloud service access points.'
  },
  {
    id: 'aramco-ccc-security-training',
    framework: 'aramco-ccc',
    category: 'Governance & Risk Management',
    text: 'Do all information systems users complete yearly mandatory Cybersecurity training covering internet security, acceptable use, social engineering, credential sharing, and data security?',
    description: 'TPC-7: Annual mandatory cybersecurity awareness training for all system users.'
  },
  {
    id: 'aramco-ccc-personal-email-prohibition',
    framework: 'aramco-ccc',
    category: 'Data Protection & Privacy',
    text: 'Are personnel informed that using personal email to share and transmit company data is strictly prohibited?',
    description: 'TPC-8: Policy prohibiting use of personal email for company data transmission.'
  },
  {
    id: 'aramco-ccc-asset-password-protection',
    framework: 'aramco-ccc',
    category: 'Data Protection & Privacy',
    text: 'Are all Technology Assets and Systems password protected as per security requirements?',
    description: 'TPC-10: Universal password protection requirement for all technology assets and systems.'
  },
  {
    id: 'aramco-ccc-patch-management',
    framework: 'aramco-ccc',
    category: 'Data Protection & Privacy',
    text: 'Are Technology Assets and Systems regularly updated with operating system, software, and applet patches?',
    description: 'TPC-11: Regular patching schedule for OS, software, and applications.'
  },
  {
    id: 'aramco-ccc-antivirus',
    framework: 'aramco-ccc',
    category: 'Data Protection & Privacy',
    text: 'Are Technology Assets protected with anti-virus software with daily updates and full system scans every two weeks?',
    description: 'TPC-12: AV protection with daily updates and bi-weekly full scans.'
  },
  {
    id: 'aramco-ccc-spf-implementation',
    framework: 'aramco-ccc',
    category: 'Data Protection & Privacy',
    text: 'Is Sender Policy Framework (SPF) technology implemented on the mail server and enforced for company email domains?',
    description: 'TPC-13 & TPC-14: SPF implementation and enforcement for email security.'
  },
  {
    id: 'aramco-ccc-private-email-domain',
    framework: 'aramco-ccc',
    category: 'Data Protection & Privacy',
    text: 'Does your organization use a private email domain instead of generic domains like Gmail or Hotmail?',
    description: 'TPC-17: Requirement for private email domain usage for business communications.'
  },
  {
    id: 'aramco-ccc-employee-offboarding',
    framework: 'aramco-ccc',
    category: 'Governance & Risk Management',
    text: 'Does your organization have formal procedures for off-boarding employees including asset return and access removal?',
    description: 'TPC-18: Structured employee offboarding process with asset and access management.'
  },
  {
    id: 'aramco-ccc-data-sanitization',
    framework: 'aramco-ccc',
    category: 'Data Protection & Privacy',
    text: 'Are Assets used to process or store company data sanitized at the end of the Data Life Cycle using industry best practices like NIST 800-88?',
    description: 'TPC-19: Data sanitization process at end of lifecycle with certification requirements.'
  },
  {
    id: 'aramco-ccc-cybersecurity-certificate',
    framework: 'aramco-ccc',
    category: 'Governance & Risk Management',
    text: 'Does your organization obtain and renew a Cybersecurity Compliance Certificate (CCC) every two years from authorized audit firms?',
    description: 'TPC-20 & TPC-21: CCC requirement and biennial renewal process.'
  },
  {
    id: 'aramco-ccc-endpoint-firewalls',
    framework: 'aramco-ccc',
    category: 'Data Protection & Privacy',
    text: 'Are firewalls configured and enabled on all endpoint devices?',
    description: 'TPC-22: Endpoint firewall configuration and enablement requirement.'
  },
  {
    id: 'aramco-ccc-incident-notification',
    framework: 'aramco-ccc',
    category: 'Monitoring & Incident Response',
    text: 'Does your organization have procedures to notify within 24 hours and follow Cybersecurity Incident Response Instructions when discovering a security incident?',
    description: 'TPC-23: 24-hour incident notification requirement and response procedures.'
  },
  {
    id: 'aramco-ccc-information-classification',
    framework: 'aramco-ccc',
    category: 'Governance & Risk Management',
    text: 'Does your organization have policies and processes to classify information in terms of its value, criticality, and confidentiality?',
    description: 'TPC-24: Information classification policies and processes for data categorization.'
  },
  {
    id: 'aramco-ccc-cybersecurity-policies',
    framework: 'aramco-ccc',
    category: 'Governance & Risk Management',
    text: 'Does your organization establish, maintain, and communicate comprehensive Cybersecurity Policies and Standards?',
    description: 'TPC-25: Formal cybersecurity policy framework and communication process.'
  },
  {
    id: 'aramco-ccc-dedicated-security-personnel',
    framework: 'aramco-ccc',
    category: 'Governance & Risk Management',
    text: 'Is your organization staffed by employee(s) whose primary responsibility is Cybersecurity, including maintaining system security and ensuring policy compliance?',
    description: 'TPC-26: Dedicated cybersecurity personnel with defined responsibilities.'
  },
  {
    id: 'aramco-ccc-penetration-testing',
    framework: 'aramco-ccc',
    category: 'Governance & Risk Management',
    text: 'Does your organization conduct annual external Penetration Testing on IT infrastructure systems and internet-facing applications?',
    description: 'TPC-27: Annual penetration testing requirements for infrastructure and applications.'
  },
  {
    id: 'aramco-ccc-unique-user-accounts',
    framework: 'aramco-ccc',
    category: 'Access Control & Identity',
    text: 'Are users accessing applications and information systems issued unique user logins and passwords, with generic accounts prohibited unless explicitly approved?',
    description: 'TPC-32: Unique user account requirement with restrictions on generic accounts.'
  },
  {
    id: 'aramco-ccc-access-reviews',
    framework: 'aramco-ccc',
    category: 'Access Control & Identity',
    text: 'Is user access to operating systems, applications, and databases reviewed on a semiannual basis to determine continued access requirements?',
    description: 'TPC-33: Semiannual access reviews for all systems and applications.'
  },
  {
    id: 'aramco-ccc-privileged-account-management',
    framework: 'aramco-ccc',
    category: 'Access Control & Identity',
    text: 'Are all privileged accounts limited, justified, and reviewed on a regular basis?',
    description: 'TPC-34: Privileged account management with regular review requirements.'
  },
  {
    id: 'aramco-ccc-remote-admin-restriction',
    framework: 'aramco-ccc',
    category: 'Access Control & Identity',
    text: 'Is remote administrative access from the Internet prohibited unless explicitly approved, restricted, and controlled?',
    description: 'TPC-35: Restrictions on remote administrative access from the Internet.'
  },
  {
    id: 'aramco-ccc-network-segregation',
    framework: 'aramco-ccc',
    category: 'Access Control & Identity',
    text: 'Is company data logically and/or physically segregated from data of other clients or customers?',
    description: 'TPC-38: Data segregation requirements to prevent co-mingling with other client data.'
  },
  {
    id: 'aramco-ccc-wireless-encryption',
    framework: 'aramco-ccc',
    category: 'Access Control & Identity',
    text: 'Do wireless networks accessing information systems use strong encryption for authentication and transmission, such as WPA2 or WPA2 Enterprise?',
    description: 'TPC-42: Strong encryption requirements for wireless network communications.'
  },
  {
    id: 'aramco-ccc-data-center-security',
    framework: 'aramco-ccc',
    category: 'Access Control & Identity',
    text: 'Are all systems housed in communication rooms and locked racks, with access controlled by security requirements such as access card readers or biometric devices?',
    description: 'TPC-46: Physical security requirements for system housing and access control.'
  },
  {
    id: 'aramco-ccc-visitor-management',
    framework: 'aramco-ccc',
    category: 'Access Control & Identity',
    text: 'Does your organization define a process for visitor management including maintaining and reviewing visitor logs with identification, purpose, and check-in/out times?',
    description: 'TPC-47: Visitor management process with logging requirements.'
  },
  {
    id: 'aramco-ccc-backup-security',
    framework: 'aramco-ccc',
    category: 'Data Protection & Privacy',
    text: 'Are backup media secured to block/inhibit unauthorized physical access?',
    description: 'TPC-50: Physical security requirements for backup media.'
  },
  {
    id: 'aramco-ccc-encryption-transit',
    framework: 'aramco-ccc',
    category: 'Data Protection & Privacy',
    text: 'Does your organization encrypt data in transit using protocols such as SSH, FTPS, HTTPS, TLS, or IPSEC?',
    description: 'TPC-52: Encryption requirements for data in transit.'
  },
  {
    id: 'aramco-ccc-encryption-at-rest',
    framework: 'aramco-ccc',
    category: 'Data Protection & Privacy',
    text: 'Are encryption mechanisms implemented using at least AES encryption algorithm and 256-bit key on all devices or storage media hosting sensitive data?',
    description: 'TPC-54: AES-256 encryption requirements for sensitive data at rest.'
  },
  {
    id: 'aramco-ccc-device-control',
    framework: 'aramco-ccc',
    category: 'Data Protection & Privacy',
    text: 'Is a device control mechanism implemented on Assets used to receive, store, process, or transmit company data, such as disabling external storage media?',
    description: 'TPC-56: Device control mechanisms to prevent unauthorized data transfer.'
  },
  {
    id: 'aramco-ccc-content-filtering',
    framework: 'aramco-ccc',
    category: 'Data Protection & Privacy',
    text: 'Is access to the Internet restricted by Content-filtering technologies to block malicious websites, personal email services, and unauthorized cloud services?',
    description: 'TPC-57: Content filtering requirements for internet access control.'
  },
  {
    id: 'aramco-ccc-remote-wipe',
    framework: 'aramco-ccc',
    category: 'Data Protection & Privacy',
    text: 'Is remote wipe solution installed on all tablets and mobile phones used to receive, store, or produce Critical Data?',
    description: 'TPC-59: Remote wipe capability for mobile devices handling critical data.'
  },
  {
    id: 'aramco-ccc-input-validation',
    framework: 'aramco-ccc',
    category: 'Data Protection & Privacy',
    text: 'Is data validation implemented on all input fields for applications to only accept input with valid data type, syntax, and length range?',
    description: 'TPC-60: Input validation requirements for application security.'
  },
  {
    id: 'aramco-ccc-error-message-security',
    framework: 'aramco-ccc',
    category: 'Data Protection & Privacy',
    text: 'Do application error messages avoid displaying any sensitive technical information?',
    description: 'TPC-61: Secure error message handling to prevent information disclosure.'
  },
  {
    id: 'aramco-ccc-password-storage-prohibition',
    framework: 'aramco-ccc',
    category: 'Data Protection & Privacy',
    text: 'Do applications or services avoid storing, generating, transmitting, or using plain-text passwords?',
    description: 'TPC-62: Prohibition of plain-text password handling in applications.'
  },
  {
    id: 'aramco-ccc-baseline-configurations',
    framework: 'aramco-ccc',
    category: 'Governance & Risk Management',
    text: 'Does your organization create and manage baseline configurations to harden information systems, including resetting defaults, disabling unneeded software/services, and removing administrative access?',
    description: 'TPC-63: System hardening through baseline configuration management.'
  },
  {
    id: 'aramco-ccc-backup-procedures',
    framework: 'aramco-ccc',
    category: 'Governance & Risk Management',
    text: 'Does your organization establish and follow regular procedures for backup of critical systems, data, software, and websites?',
    description: 'TPC-64: Regular backup procedures for critical systems and data.'
  },
  {
    id: 'aramco-ccc-offsite-backup-encryption',
    framework: 'aramco-ccc',
    category: 'Governance & Risk Management',
    text: 'Is backup stored at off-site locations encrypted using at least AES encryption algorithm and 256-bit key, except for public data?',
    description: 'TPC-65: Encryption requirements for off-site backup storage.'
  },
  {
    id: 'aramco-ccc-asset-sanitization',
    framework: 'aramco-ccc',
    category: 'Governance & Risk Management',
    text: 'Does your organization implement a sanitization process before any Assets are loaned, donated, destroyed, transferred, or surplused, aligned with industry best practices?',
    description: 'TPC-66: Asset sanitization process before disposal or transfer.'
  },
  {
    id: 'aramco-ccc-disaster-recovery',
    framework: 'aramco-ccc',
    category: 'Governance & Risk Management',
    text: 'Does your organization have a documented, maintained, and communicated Disaster Recovery Plan addressing recovery of Assets and communications following major disruptions?',
    description: 'TPC-67: Comprehensive disaster recovery planning and communication.'
  },
  {
    id: 'aramco-ccc-business-continuity',
    framework: 'aramco-ccc',
    category: 'Governance & Risk Management',
    text: 'Does your organization have a comprehensive Business Continuity plan addressing equipment failure, power disruption, application failure, human error, malicious attacks, environmental disasters, and emergency contacts?',
    description: 'TPC-68: Business continuity planning covering various disruption scenarios.'
  },
  {
    id: 'aramco-ccc-employee-onboarding',
    framework: 'aramco-ccc',
    category: 'Governance & Risk Management',
    text: 'Does your organization have formal procedures for on-boarding employees including background checks such as verification of work histories?',
    description: 'TPC-71: Employee onboarding procedures with background verification.'
  },
  {
    id: 'aramco-ccc-audit-log-retention',
    framework: 'aramco-ccc',
    category: 'Monitoring & Incident Response',
    text: 'Does your organization retain all audit logs from information systems and applications storing, processing, or transmitting company data for one year?',
    description: 'TPC-75: One-year audit log retention requirement for relevant systems.'
  },
  {
    id: 'aramco-ccc-network-firewalls',
    framework: 'aramco-ccc',
    category: 'Monitoring & Incident Response',
    text: 'Are firewalls implemented at the network perimeter allowing only required services and blocking vulnerable services or insecure protocols?',
    description: 'TPC-76: Network perimeter firewall implementation with service restrictions.'
  },
  {
    id: 'aramco-ccc-ids-ips',
    framework: 'aramco-ccc',
    category: 'Monitoring & Incident Response',
    text: 'Are Intrusion Detection Systems (IDS) or Intrusion Prevention Systems (IPS) implemented at the network perimeter?',
    description: 'TPC-77: IDS/IPS implementation at network perimeter for threat detection.'
  },
  {
    id: 'aramco-ccc-signature-updates',
    framework: 'aramco-ccc',
    category: 'Monitoring & Incident Response',
    text: 'Are signatures of firewalls, IDS, and IPS kept up-to-date?',
    description: 'TPC-78: Regular signature updates for security devices.'
  },
  {
    id: 'aramco-ccc-waf-implementation',
    framework: 'aramco-ccc',
    category: 'Monitoring & Incident Response',
    text: 'Is Web Application Firewall (WAF) implemented to inspect all incoming traffic for potential threats and malicious activity when hosting applications or websites?',
    description: 'TPC-79: WAF implementation for web application protection.'
  },
  {
    id: 'aramco-ccc-security-monitoring',
    framework: 'aramco-ccc',
    category: 'Monitoring & Incident Response',
    text: 'Does your organization monitor Technology Assets, Systems, and applications to identify unauthorized access or unauthorized activity?',
    description: 'TPC-80: Continuous monitoring for unauthorized access and activities.'
  },
  {
    id: 'aramco-ccc-log-aggregation',
    framework: 'aramco-ccc',
    category: 'Monitoring & Incident Response',
    text: 'Does your organization periodically aggregate and correlate data from multiple systems and applications such as Firewalls, IDS/IPS, and anti-virus in a central repository?',
    description: 'TPC-81: Central log aggregation and correlation for security monitoring.'
  },
  {
    id: 'aramco-ccc-physical-security',
    framework: 'aramco-ccc',
    category: 'Monitoring & Incident Response',
    text: 'Are multiple physical security measures implemented to prevent unauthorized access to facilities, including secured entrances with authentication and video monitoring?',
    description: 'TPC-82: Multi-layered physical security measures for facility protection.'
  },
  {
    id: 'aramco-ccc-privileged-account-monitoring',
    framework: 'aramco-ccc',
    category: 'Monitoring & Incident Response',
    text: 'Is privileged account activity logged and monitored on a regular basis?',
    description: 'TPC-83: Regular monitoring of privileged account activities.'
  },
  {
    id: 'aramco-ccc-unauthorized-device-prohibition',
    framework: 'aramco-ccc',
    category: 'Monitoring & Incident Response',
    text: 'Are non-authorized devices such as personal devices and mobile phones prohibited from being used to store, process, or access Assets?',
    description: 'TPC-84: Prohibition of unauthorized personal devices for asset access.'
  },
  {
    id: 'aramco-ccc-vulnerability-scanning',
    framework: 'aramco-ccc',
    category: 'Monitoring & Incident Response',
    text: 'Are monthly Vulnerability scans conducted to evaluate configuration, patches, and services for known Vulnerabilities?',
    description: 'TPC-85: Monthly vulnerability scanning for security assessment.'
  },
  {
    id: 'aramco-ccc-physical-access-restriction',
    framework: 'aramco-ccc',
    category: 'Monitoring & Incident Response',
    text: 'Is physical access to facilities where information systems reside restricted to authorized personnel and reviewed on a regular basis?',
    description: 'TPC-86: Restricted physical access with regular review processes.'
  },
  {
    id: 'aramco-ccc-audit-events',
    framework: 'aramco-ccc',
    category: 'Monitoring & Incident Response',
    text: 'Do information systems and applications log auditable events including system start/shutdown, login attempts, user account changes, privilege escalations, and security configuration modifications?',
    description: 'TPC-87: Comprehensive audit event logging for security monitoring.'
  },
  {
    id: 'aramco-ccc-incident-management',
    framework: 'aramco-ccc',
    category: 'Monitoring & Incident Response',
    text: 'Is incident management policy and plan documented, maintained, and communicated to management and appropriate team members?',
    description: 'TPC-88: Formal incident management policy and communication process.'
  },
  {
    id: 'aramco-ccc-incident-response-capability',
    framework: 'aramco-ccc',
    category: 'Monitoring & Incident Response',
    text: 'Does your organization have an Incident Response capability including preparation, detection, analysis, containment, eradication, recovery, documentation, evidence preservation, communication protocols, and lessons learned?',
    description: 'TPC-89: Comprehensive incident response capability with full lifecycle management.'
  },
  {
    id: 'aramco-ccc-incident-tracking',
    framework: 'aramco-ccc',
    category: 'Monitoring & Incident Response',
    text: 'Does your organization track, classify, and document all Cybersecurity Incidents?',
    description: 'TPC-90: Incident tracking, classification, and documentation processes.'
  },
  {
    id: 'aramco-ccc-vulnerability-remediation',
    framework: 'aramco-ccc',
    category: 'Monitoring & Incident Response',
    text: 'Does your organization resolve or mitigate identified security Vulnerabilities within specified timeframes: Critical Risk within 14 days, High Risk within 1 month, Medium/Low Risk within 3 months?',
    description: 'TPC-91: Time-bound vulnerability remediation requirements based on risk level.'
  },
  {
    id: 'aramco-ccc-ddos-protection',
    framework: 'aramco-ccc',
    category: 'Monitoring & Incident Response',
    text: 'When hosting websites or providing Cloud Computing Services, are they secured by Distributed Denial of Service (DDOS) protection?',
    description: 'TPC-92: DDOS protection requirements for hosted services and cloud offerings.'
  }
];

export const categories = [
  'Governance & Risk Management',
  'Access Control & Identity',
  'Data Protection & Privacy',
  'Monitoring & Incident Response',
  'Vendor & Third-Party Security'
];

export const frameworkLabels: Record<string, string> = {
  'iso-27001': 'ISO 27001',
  'nca-ecc': 'NCA ECC',
  'uae-ia-nesa': 'UAE IA/NESA',
  'pci-dss': 'PCI-DSS',
  'pdpl': 'PDPL',
  'sama': 'SAMA',
  'nist-csf': 'NIST CSF',
  'cis-controls': 'CIS Controls',
  'gdpr': 'GDPR',
  'aramco-ccc': 'Aramco CCC'
};

export const maturityLevels = [
  { value: 0, label: 'Not Implemented', description: 'No formal processes or controls in place' },
  { value: 1, label: 'Ad-hoc', description: 'Informal processes, inconsistent implementation' },
  { value: 2, label: 'Partially', description: 'Defined processes, partially implemented' },
  { value: 3, label: 'Mostly', description: 'Comprehensive processes, mostly implemented' },
  { value: 4, label: 'Fully Implemented', description: 'Fully implemented, monitored, and optimized' }
];