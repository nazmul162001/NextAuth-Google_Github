import Head from 'next/head'
import { useSession } from 'next-auth/react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '@/firebase/firebase.auth'

const HomePage = () => {
  const { data: session } = useSession()
  const [user, loading, error] = useAuthState(auth)
  return (
    <div>
      <Head>
        <title>Next Auth</title>
      </Head>
      <h1 style={{ textAlign: 'center', marginTop: '10%' }}>
        Welcome {session?.user?.name} {user?.email} To Next Auth Home Page
      </h1>
    </div>
  )
}

export default HomePage
