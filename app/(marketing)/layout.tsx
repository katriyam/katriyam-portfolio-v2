import { NavigationMenu } from '@/components/nav-menu'
import { Footer } from '@/components/footer-section'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavigationMenu />
      {children}
      <Footer />
    </>
  )
}
