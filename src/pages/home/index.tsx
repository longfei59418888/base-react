import * as React from 'react'
import { useEffect } from 'react'

import { get } from '@/apis/request'
import useMemberInfoStore from '@/hooks/store/useMemberInfoStore'

const Home: React.FC = () => {
  const { token } = useMemberInfoStore()

  useEffect(() => {
    if (!token)
      setTimeout(() => {
        get('http://www.bai.dsf', {})
      }, 2000)
  }, [token])
  return (
    <>
      <div>index{token}</div>
    </>
  )
}

export default Home
