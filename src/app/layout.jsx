/* eslint-env node */
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { EntityEngineProviderWrapper } from '../entity/provider';
import 'nextra-theme-docs/style.css'
import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'
import '@scenemesh/entity-engine/main.css'

export const metadata = {
  metadataBase: new URL('https://nextra.site'),
  title: {
    template: '%s - Entity-Engine',
  },
  description: 'Nextra: the Next.js site builder',
  applicationName: 'Nextra',
  generator: 'Next.js',
  appleWebApp: {
    title: 'Nextra'
  },
  other: {
    'msapplication-TileImage': '/ms-icon-144x144.png',
    'msapplication-TileColor': '#fff'
  },
  twitter: {
    site: 'https://nextra.site'
  }
}

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar
      logo={
        <div>
          <span style={{ display: 'flex', gap: '8px', alignItems: 'center' }}><img src="/assets/images/logo.png" alt='logo' width="24" height="24"/> <b>SceneMesh Entity Engine</b> <span style={{ opacity: '60%' }}>模型驱动开发框架</span></span>{' '}
          
        </div>
      }
      // Next.js discord server
      chatLink="https://discord.gg/hEM84NMkRv"
      projectLink='https://github.com/shuding/nextra'
    />
  )
  const pageMap = await getPageMap()
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="✦" />
      <body>
        <Layout
          banner={<Banner storageKey="Nextra 2">SceneMesh Entity Engine coming soon ...</Banner>}
          navbar={navbar}
          footer={<Footer>MIT {new Date().getFullYear()} © SceneMesh Entity Engine.</Footer>}
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://github.com/shuding/nextra/blob/main/examples/docs"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={pageMap}
        >
          <EntityEngineProviderWrapper>
          {children}
          </EntityEngineProviderWrapper>
        </Layout>
      </body>
    </html>
  )
}
