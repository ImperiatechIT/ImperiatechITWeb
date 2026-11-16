export interface LegalSection {
  title: string;
  paragraphs?: string[];
  items?: string[];
}

export interface LegalDocument {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}

export const CONTACT_EMAIL = 'inquiries@imperiatechit.com';

export const PRIVACY_POLICY: LegalDocument = {
  eyebrow: 'Legal',
  title: 'Privacy Policy',
  updated: 'November 16, 2026',
  intro:
    'Imperiatech IT Consultancy ("ImperiaTech IT", "we", "us") respects your privacy and is committed to protecting your personal data in accordance with the Data Privacy Act of 2012 (Republic Act No. 10173), its Implementing Rules and Regulations, and the issuances of the National Privacy Commission of the Philippines. This policy explains what information we collect, how we use it, and the rights you have over it.',
  sections: [
    {
      title: 'Information We Collect',
      paragraphs: [
        'Our website does not use account registration, online forms, or tracking tools. We only receive personal information that you choose to send us, for example when you email us about our services.',
      ],
      items: [
        'Contact details you provide, such as your name, email address, phone number, and company name.',
        'The content of your enquiry or correspondence with us.',
        'Business and technical information you or your organization share with us while we deliver consulting, software, cybersecurity, or other IT services, including data about your systems, users, and operations.',
      ],
    },
    {
      title: 'How We Use Your Information',
      items: [
        'To respond to your enquiries and provide the information or proposals you request.',
        'To plan, deliver, support, and invoice the services we provide to our clients.',
        'To communicate with you about projects, service updates, and administrative matters.',
        'To maintain the security of our systems and prevent fraud or misuse.',
        'To comply with legal, regulatory, tax, and contractual obligations.',
      ],
    },
    {
      title: 'Client Project Data',
      paragraphs: [
        'When we handle data on behalf of a client, we act on that client\'s instructions and process the data only to the extent needed to perform the agreed services. Client data is treated as confidential, accessed only by personnel who need it for the engagement, and is governed by the confidentiality and data-processing terms in our agreement with that client.',
        'If you are an end user of one of our clients and have questions about your data, please contact that client directly, as they decide how your data is used.',
      ],
    },
    {
      title: 'Legal Basis for Processing',
      paragraphs: [
        'We process personal data where you have given consent, where it is necessary to enter into or perform a contract, where we have a legitimate interest that is not outweighed by your rights, or where the law requires it.',
      ],
    },
    {
      title: 'Sharing and Disclosure',
      paragraphs: ['We do not sell your personal data. We share it only when necessary, and only with:'],
      items: [
        'Service providers and subcontractors who help us deliver our services and are bound by confidentiality and data protection obligations.',
        'Professional advisers such as legal counsel, accountants, and auditors.',
        'Government agencies, courts, or regulators when we are required to do so by law.',
        'A successor entity in the event of a merger, acquisition, or restructuring, subject to this policy.',
      ],
    },
    {
      title: 'Data Retention',
      paragraphs: [
        'We keep personal data only for as long as needed for the purposes described above, to meet legal, accounting, or reporting requirements, or to protect our legitimate interests. When data is no longer needed, we securely delete or anonymize it.',
      ],
    },
    {
      title: 'Security',
      paragraphs: [
        'We apply organizational, physical, and technical safeguards appropriate to the sensitivity of the data we hold, including access controls, encryption where suitable, and staff confidentiality obligations. No method of transmission or storage is completely secure, but we work to protect your information and will notify affected individuals and the National Privacy Commission of qualifying data breaches as required by law.',
      ],
    },
    {
      title: 'Your Rights',
      paragraphs: ['Under the Data Privacy Act, you have the right to:'],
      items: [
        'Be informed about how your personal data is processed.',
        'Access the personal data we hold about you.',
        'Object to the processing of your personal data.',
        'Request correction of inaccurate or incomplete data.',
        'Request suspension, withdrawal, blocking, removal, or destruction of your data where justified.',
        'Data portability, where applicable.',
        'Claim compensation for damages caused by inaccurate, incomplete, unlawfully obtained, or unauthorized use of your data.',
        'File a complaint with the National Privacy Commission (privacy.gov.ph).',
      ],
    },
    {
      title: 'Third-Party Links',
      paragraphs: [
        'Our website may link to third-party websites. We are not responsible for the privacy practices or content of those sites and encourage you to read their policies.',
      ],
    },
    {
      title: 'Children\'s Privacy',
      paragraphs: [
        'Our services are intended for businesses and organizations. We do not knowingly collect personal data from children. If you believe a child has provided us with personal data, please contact us so we can delete it.',
      ],
    },
    {
      title: 'Changes to This Policy',
      paragraphs: [
        'We may update this policy from time to time. The "Last updated" date at the top of this page shows when it was last revised. Continued use of our website or services after an update means you accept the revised policy.',
      ],
    },
    {
      title: 'Contact Us',
      paragraphs: [
        'To exercise your rights or ask questions about this policy or how we handle personal data, please contact us at the email address below.',
      ],
    },
  ],
};

export const CODE_OF_CONDUCT: LegalDocument = {
  eyebrow: 'Legal',
  title: 'Code of Conduct',
  updated: 'November 16, 2026',
  intro:
    'ImperiaTech IT is built on trust, technical excellence, and respect. This Code of Conduct sets out the standards we expect from all employees and contractors in everything they do on behalf of the company, whether working in our offices, at client sites, or remotely.',
  sections: [
    {
      title: 'Scope',
      paragraphs: [
        'This Code applies to all ImperiaTech IT employees, consultants, freelancers, and contractors, in their dealings with each other, with clients, vendors, partners, and the public. It applies to conduct in person, online, and in any setting connected to our work.',
      ],
    },
    {
      title: 'Integrity and Professionalism',
      items: [
        'Act honestly, ethically, and in good faith in all business dealings.',
        'Deliver work to the best of your ability and be truthful about progress, risks, and limitations.',
        'Take responsibility for your work and admit and correct mistakes promptly.',
        'Never misrepresent your qualifications, experience, or the capabilities of our services.',
      ],
    },
    {
      title: 'Respect and Inclusion',
      paragraphs: [
        'We treat everyone with dignity and respect. We do not tolerate discrimination, harassment, bullying, or retaliation based on race, ethnicity, nationality, gender, gender identity, sexual orientation, age, religion, disability, marital or family status, or any other protected characteristic.',
      ],
      items: [
        'Communicate courteously and constructively, including when you disagree.',
        'Do not engage in unwelcome conduct, offensive jokes, or abusive language.',
        'Value diverse perspectives and give everyone an equal opportunity to contribute.',
      ],
    },
    {
      title: 'Confidentiality and Data Protection',
      items: [
        'Keep client, company, and colleague information confidential, during and after your engagement with us.',
        'Access, use, and share personal and client data only as needed for your work and as permitted by the Data Privacy Act of 2012 and our agreements.',
        'Never copy, remove, or disclose confidential data through unapproved channels or personal accounts and devices.',
        'Report suspected data breaches or loss of data or devices immediately.',
      ],
    },
    {
      title: 'Information Security',
      items: [
        'Follow company and client security policies, including strong passwords, multi-factor authentication, and secure handling of credentials.',
        'Do not bypass security controls, install unauthorized software, or access systems you are not authorized to use.',
        'Use company and client systems and resources only for legitimate business purposes.',
        'Conduct security testing only when you have clear written authorization from the system owner.',
      ],
    },
    {
      title: 'Conflicts of Interest',
      paragraphs: [
        'Avoid situations where personal interests conflict, or appear to conflict, with the interests of ImperiaTech IT or our clients. Disclose any potential conflict, such as outside work for a competitor or a personal stake in a vendor or client, to management as soon as you become aware of it.',
      ],
    },
    {
      title: 'Gifts, Bribery, and Corruption',
      items: [
        'Never offer, give, request, or accept bribes, kickbacks, or improper payments.',
        'Do not accept gifts, hospitality, or favors that could influence, or appear to influence, a business decision.',
        'Comply with all applicable anti-corruption and anti-bribery laws.',
      ],
    },
    {
      title: 'Intellectual Property',
      items: [
        'Respect the intellectual property rights of ImperiaTech IT, our clients, and third parties.',
        'Use software, code, and content only in line with their licenses, and do not use pirated or unlicensed materials.',
        'Do not use client or former-employer proprietary information without proper permission.',
      ],
    },
    {
      title: 'Safe and Healthy Workplace',
      paragraphs: [
        'We are committed to a safe, healthy, and drug-free working environment. Violence, threats, and the possession or use of illegal substances while working are prohibited. Report any unsafe conditions or incidents to management.',
      ],
    },
    {
      title: 'Compliance with Laws',
      paragraphs: [
        'Comply with all laws and regulations that apply to our work, including those on data privacy, cybercrime, labor, taxation, and intellectual property, as well as the terms of our client agreements.',
      ],
    },
    {
      title: 'Reporting Concerns',
      paragraphs: [
        'If you witness or experience a violation of this Code, or are unsure whether something is appropriate, speak up. You may raise concerns with your manager or contact us at the email address below. Reports are treated confidentially and handled fairly and promptly. Retaliation against anyone who raises a concern in good faith is strictly prohibited.',
      ],
    },
    {
      title: 'Consequences of Violations',
      paragraphs: [
        'Violations of this Code may result in disciplinary action, up to and including termination of employment or engagement, and where applicable, legal action or referral to the authorities.',
      ],
    },
  ],
};
