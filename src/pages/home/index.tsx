import * as React from 'react'
import { useEffect } from 'react'
import { Button } from 'xl-story-book'
require('xl-story-book/lib/button/style/css')

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
      <div>indesdx{token}</div>
      <Button disabled size={'lg'} label={'test'}></Button>
    </>
  )
}

export default Home
