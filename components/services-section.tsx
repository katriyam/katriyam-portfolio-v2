import { cn } from '@/lib/utils'
import {
  IconPalette,
  IconBook2,
  IconBrandOpenai,
  IconBrowserCheck,
  IconBrush,
  IconDeviceTablet,
  IconTerminal2,
  IconScript,
  IconDatabase,
  IconSettingsAutomation,
  IconCurrencyBitcoin,
  IconFileBitcoin,
} from '@tabler/icons-react'

export function Services() {
  const features = [
    {
      title: 'Web Development',
      description: 'Custom websites built for performance and scalability.',
      icon: <IconTerminal2 />,
    },
    {
      title: 'Android/iOS App Development',
      description: 'Cross-platform mobile apps with native performance.',
      icon: <IconDeviceTablet />,
    },
    {
      title: 'UI/UX Design',
      description: 'Intuitive, user-focused interfaces and experiences.',
      icon: <IconPalette />,
    },
    {
      title: 'Graphic Design',
      description: 'Creative visuals for branding and marketing.',
      icon: <IconBrush />,
    },
    {
      title: 'AI-Based Services',
      description: 'AI chatbots, vision tools, automation solutions.',
      icon: <IconBrandOpenai />,
    },
    {
      title: 'SEO & Digital Marketing',
      description: 'Grow online presence through SEO and ads.',
      icon: <IconBrowserCheck />,
    },
    {
      title: 'Online Book Publishing & Editing',
      description: 'Edit, format, illustrate, and publish books.',
      icon: <IconBook2 />,
    },
    {
      title: 'Web Crawling & Scraping',
      description: 'Extract structured data from any website.',
      icon: <IconScript />,
    },
    {
      title: 'Database Management',
      description: 'Secure, optimized database setup and maintenance.',
      icon: <IconDatabase />,
    },
    {
      title: 'Web Data Automation',
      description: 'Automate workflows with intelligent data pipelines.',
      icon: <IconSettingsAutomation />,
    },
    {
      title: 'Blockchain Consultation',
      description: 'Strategy and solutions for blockchain adoption.',
      icon: <IconCurrencyBitcoin />,
    },
    {
      title: 'Smart Contract Development',
      description: 'Secure, efficient contracts on major blockchains.',
      icon: <IconFileBitcoin />,
    },
  ]

  return (
    <div
      id="services"
      className="container mx-auto px-4 pt-20 pb-12 md:px-6 lg:px-8"
    >
      <div className="md:mt-20 mb-8 lg:mb-16">
        <h2 className="max-w-2xl mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Empowering Your Business with Cutting-Edge Solutions
        </h2>

        <p className="max-w-2xl text-gray-500 sm:text-xl dark:text-gray-400">
          Unlock the full potential of your business with our expert-driven
          services. From seamless integrations to innovative web solutions, we
          craft digital experiences that drive success. Let’s build something
          extraordinary together!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  )
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string
  description: string
  icon: React.ReactNode
  index: number
}) => {
  return (
    <div
      className={cn(
        'flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800',
        (index === 0 || index === 4) && 'lg:border-l dark:border-neutral-800',
        index < 4 && 'lg:border-b dark:border-neutral-800'
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-2xl md:text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 group-hover/feature:bg-primary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 sm:max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  )
}
