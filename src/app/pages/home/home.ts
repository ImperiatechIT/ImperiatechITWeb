import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Icon } from '../../components/icon/icon';

interface Service {
  title: string;
  description: string;
  icon: string;
}

interface ServiceTab {
  label: string;
  gridClass: string;
  services: Service[];
}

interface ProductFeature {
  title: string;
  description: string;
}

interface Product {
  name: string;
  subtitle: string;
  logo: string;
  tagline?: string;
  description: string[];
  features?: ProductFeature[];
}

interface Client {
  name: string;
  logo: string;
}

const SERVICE_TABS: ServiceTab[] = [
  {
    label: 'Core Services',
    gridClass: 'lg:grid-cols-4',
    services: [
      { title: 'Application Development', description: 'Build smart, scalable, and user-friendly web & mobile applications tailored to your business needs.', icon: 'code' },
      { title: 'IT Consulting Services', description: 'Expert guidance to align your IT strategy with your business goals.', icon: 'users' },
      { title: 'Project Management', description: 'End-to-end project execution delivered with precision and efficiency.', icon: 'calendar' },
      { title: 'System Analysis & Design', description: 'Create robust, scalable, and future-proof systems.', icon: 'layers' },
      { title: 'IT Infrastructure', description: 'Strong and secure foundations for your business operations.', icon: 'server' },
      { title: 'System Integration', description: 'Seamlessly connect platforms, tools, and processes.', icon: 'share' },
      { title: 'Software Implementation & Maintenance', description: 'Hassle-free deployment and reliable support.', icon: 'package' },
      { title: 'Networking Solutions', description: 'Build secure, scalable, and efficient networks.', icon: 'globe' }
    ]
  },
  {
    label: 'Cybersecurity',
    gridClass: 'lg:grid-cols-4',
    services: [
      { title: 'Vulnerability Assessment', description: 'Comprehensive security testing to identify and address potential vulnerabilities in your systems.', icon: 'search' },
      { title: 'Digital Forensics', description: 'Advanced incident response and digital investigation capabilities for security breaches.', icon: 'alert' },
      { title: 'Cyber Threat Intelligence', description: 'Proactive threat monitoring and intelligence gathering to protect your organization.', icon: 'activity' },
      { title: 'Cybersecurity Consultation', description: 'Strategic cybersecurity planning and risk assessment for comprehensive protection.', icon: 'shield' }
    ]
  },
  {
    label: 'AI & Emerging Tech',
    gridClass: 'lg:grid-cols-5',
    services: [
      { title: 'Face Recognition Systems', description: 'AI-powered facial recognition for security, access control, and user authentication.', icon: 'eye' },
      { title: 'AI-Driven Analytics', description: 'Transform raw data into actionable insights with machine learning models.', icon: 'bar-chart' },
      { title: 'Intelligent Automation', description: 'Streamline workflows with AI-powered process automation.', icon: 'zap' },
      { title: 'Chatbots & Virtual Assistants', description: 'Enhance customer engagement with AI-driven conversational platforms.', icon: 'message' },
      { title: 'Predictive Modeling', description: 'Forecast trends and behaviors to make smarter business decisions.', icon: 'trending' }
    ]
  }
];

const PRODUCTS: Product[] = [
  {
    name: 'KlikCamp',
    subtitle: 'Corporate Learning Management System',
    logo: '/images/products/Klikcamp.png',
    description: [
      'KlikCamp is a robust content and learning management platform for the corporate sector. Perfect for training centers, review institutions, and corporate HR/OD teams, KlikCamp allows instructors to create, manage, and distribute courseware efficiently. Learners benefit from a centralized learning hub, online assessments, progress tracking, and mobile access anytime, anywhere.'
    ]
  },
  {
    name: 'PhilEduOnline',
    subtitle: 'Learning Management System for Schools',
    logo: '/images/products/PhilEduOnline.png',
    description: [
      'PhilEduOnline empowers educators to build engaging online classrooms. Teachers can upload course materials, schedule assessments, and securely receive submissions, while students can learn flexibly and take tests with real-time results. Its built-in Test Secure feature ensures academic integrity by capturing random snapshots during online exams.'
    ]
  },
  {
    name: 'RuruSuite',
    subtitle: 'Smart Accounting System',
    logo: '/images/products/RuruSuite.png',
    tagline: 'Your Business Finances, Simplified.',
    description: [
      "RuruSuite is a scalable, cloud-based accounting platform designed to help businesses of all sizes gain control of their finances with ease and confidence. Whether you're a startup, SME, or growing enterprise, RuruSuite provides the tools you need to manage your accounting operations—anytime, anywhere."
    ],
    features: [
      { title: 'Mobile App Access', description: 'Stay on top of your finances on the go with real-time mobile access.' },
      { title: 'Cloud-Based Security', description: 'Your data is securely stored in the cloud with reliable backup and 24/7 accessibility.' },
      { title: 'Third-Party Integrations', description: 'Connect seamlessly with payroll, CRM, e-commerce, and banking platforms.' },
      { title: 'Advanced Invoicing', description: 'Automate billing, create branded invoices, and track payments with ease.' },
      { title: 'Expense Management', description: 'Monitor daily expenses, control budgets, and track expenses in real-time.' },
      { title: 'User-Friendly Interface', description: 'Intuitive dashboards and workflows designed for both accountants and non-accountants.' },
      { title: 'Scalable Architecture', description: 'From small businesses to large enterprises, RuruSuite grows with your company.' },
      { title: 'Customizable Reports & Analytics', description: 'Generate insights on sales, expenses, profits, and more to make data-driven decisions.' },
      { title: 'Affordable Pricing', description: 'Enterprise-grade accounting solutions at a cost that fits your budget.' }
    ]
  },
  {
    name: 'StrataVue',
    subtitle: 'Estate Management System',
    logo: '/images/products/StrataVue.png',
    description: [
      'StrataVue Estate Management System is a cloud-based homeowner association (HOA) solution that helps property administrators manage amenity booking, concierge management, communications, accounting, invoicing, expense tracking and reporting. It also has powerful analytics features to track business activities and performance.',
      'StrataVue Estate Management System provides easy access to reports, community announcements, billing, payment status and requests via a mobile portal and at the same time has a back-office platform for property administrators.'
    ]
  }
];

const CLIENTS: Client[] = [
  { name: 'Center For Educational Measurement', logo: '/images/clients/CenterForEducationalMeasurement.png' },
  { name: 'ER Tiles', logo: '/images/clients/ERTiles.jpg' },
  { name: 'Cyber Group', logo: '/images/clients/CyberGroup.png' },
  { name: 'Bilci', logo: '/images/clients/Bilci.png' },
  { name: 'TelStark', logo: '/images/clients/TelStark.png' },
  { name: 'Aquest International', logo: '/images/clients/AquestInternational.png' }
];

@Component({
  selector: 'app-home',
  imports: [RouterLink, Icon],
  templateUrl: './home.html'
})
export class Home {
  protected readonly serviceTabs = SERVICE_TABS;
  protected readonly products = PRODUCTS;
  protected readonly marqueeClients = [...CLIENTS, ...CLIENTS];

  protected readonly activeServiceTab = signal(0);
  protected readonly activeProduct = signal(0);

  protected readonly currentService = computed(() => this.serviceTabs[this.activeServiceTab()]);
  protected readonly currentProduct = computed(() => this.products[this.activeProduct()]);
}
