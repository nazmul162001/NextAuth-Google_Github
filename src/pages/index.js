import Head from 'next/head'
import { useSession } from 'next-auth/react'

const HomePage = () => {
  const { data: session } = useSession()

  return (
    <div>
      <Head>
        <title>Next Auth</title>
      </Head>
      <h1 style={{ textAlign: 'center', marginTop: '10%' }}>
        Welcome {session?.user?.name} To Next Auth Home Page
      </h1>
    </div>
  )
}

export default HomePage
