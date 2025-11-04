import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { CheckIcon, InfoIcon } from 'lucide-react'
import Image from 'next/image'

export default function Component() {
  const TEAM_MEMBERS = [
    {
      id: 1,
      imageUrl: '/TEAM-MEMBER-1.webp',
      name: 'Tabassum N. Haque',
      fallbackName: 'TH',
      designation: 'Co-Founder',
      description:
        '8+ yrs in Blockchain, IT strategic planner, Project Manager, Blockchain consultant, AI, Metaverse enthusiast The persue of innovation never stops. stay curious, stay inspired!',
    },
    {
      id: 2,
      imageUrl: '/TEAM-MEMBER-2.jpg',
      name: 'Rafiqur Rahman Priyam',
      fallbackName: 'RR',
      designation: 'Co-Founder',
      description:
        'Empowering Voices: Publisher at Rongon Publications | Transforming Digital Landscape: CEO & Co-Founder, Katriyam',
    },
    {
      id: 3,
      imageUrl: '/TEAM-MEMBER-3.JPG',
      name: 'Md Ahnaf Abir',
      fallbackName: 'AA',
      designation: 'Software Engineer',
      description:
        'Software Engineer specializing in designing, developing, and optimizing scalable, efficient, and user-friendly software solutions.',
    },
  ]

  return (
    <div>
      <section className="bg-muted">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-40">
          <div className="text-center space-y-3">
            <InfoIcon className="h-12 w-12 mx-auto" />
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              About Katriyam.
            </h1>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Katriyam is a leading freelancing company offering IT solutions,
              including Web Development, SEO, Website Scraping, Data Automation,
              Graphic Designing, Book Publishing Support, and more.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 lg:px-8 py-32">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
          <div className="flex items-center justify-center">
            <Image
              width={400}
              height={400}
              src="/our-mission-thumbnail.jpg"
              alt="Katriyam Mission"
              className="max-w-[200px] sm:max-w-[300px] lg:max-w-[400px]"
              style={{ aspectRatio: '300/300', objectFit: 'cover' }}
            />
          </div>

          <div className="space-y-4">
            <Badge>Our Mission</Badge>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Innovating Tomorrow&apos;s Digital Landscape
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              At Katriyam, our mission is to provide comprehensive IT solutions
              that empower businesses to scale and adapt in an ever-evolving
              digital world. By offering a wide range of services from web
              development to AI-based solutions, we strive to meet the unique
              needs of our clients and drive their success with cutting-edge
              technology.
            </p>

            <Badge variant="secondary">Our Values</Badge>
            <ul className="grid gap-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckIcon className="size-6" />
                <span>
                  <span className="font-semibold">Integrity:</span> We uphold
                  transparency, trustworthiness, and ethical practices in all
                  our interactions, ensuring our clients&apos; confidence and
                  satisfaction.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="size-6" />
                <span>
                  <span className="font-semibold">Innovation:</span> At
                  Katriyam, we are constantly exploring new technologies and
                  strategies to deliver fresh, creative solutions that set our
                  clients apart in the digital world.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="size-6" />
                <span>
                  <span className="font-semibold">Collaboration:</span> We
                  foster strong partnerships with our clients, working together
                  to create impactful solutions that bring real-world results.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="size-6" />
                <span>
                  <span className="font-semibold">Excellence:</span> We are
                  dedicated to providing top-tier services and ensuring that
                  every project meets the highest standards of quality,
                  performance, and client satisfaction.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 lg:px-8 py-32">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4">
            <Badge>Our History</Badge>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              A Journey of Excellence and Innovation
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Katriyam was founded to revolutionize IT and digital solutions,
              helping businesses thrive in a rapidly evolving landscape. We have
              expanded our expertise, offering web development, SEO, data
              automation, and AI services while delivering cutting-edge,
              reliable solutions tailored to client needs.
            </p>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our expert team stays ahead of industry trends, solving complex
              challenges with innovation and precision. By combining technical
              expertise with creative problem-solving, we empower businesses to
              streamline operations, enhance digital presence, and achieve
              long-term success through continuously evolving, state-of-the-art
              solutions.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <Image
              width={400}
              height={400}
              src="/our-history-thumbnail.jpg"
              alt="Katriyam History"
              className="max-w-[200px] sm:max-w-[300px] lg:max-w-[400px]"
              style={{ aspectRatio: '300/300', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      <section className="bg-muted">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-20">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Meet the Team
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our team of talented individuals is the driving force behind
              Katriyam&apos;s success. Get to know the people who make it all
              happen.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 justify-center mt-12">
            {TEAM_MEMBERS.map((member) => (
              <MemberDetails key={member.id} {...member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

interface MemberDetails {
  id: number
  imageUrl: string
  name: string
  fallbackName: string
  designation: string
  description: string
}

function MemberDetails({
  name,
  imageUrl,
  designation,
  description,
  fallbackName,
}: MemberDetails) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <Avatar className="size-20">
        <AvatarImage src={imageUrl} />
        <AvatarFallback className="bg-primary/20">
          {fallbackName}
        </AvatarFallback>
      </Avatar>
      <div className="space-y-1 text-center">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-muted-foreground">{designation}</p>
        <p className="text-sm text-muted-foreground max-w-96">{description}</p>
      </div>
    </div>
  )
}
