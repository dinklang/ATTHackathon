import { Html, Head, Main, NextScript } from 'next/document'
import SideBar from '@/components/SideBar'

export default function Document() {
  return (
    <Html lang="en">
      <Head><title>Pokemon Dashboard</title></Head>
      <body>
        <SideBar></SideBar>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
