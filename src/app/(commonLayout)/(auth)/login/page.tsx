import { LoginForm } from '@/components/modules/auth/login-form'
import HelloDocLogo from '@/components/shared/HelloDocLogo'
import React from 'react'

const LoginPage = () => {
  return (
     <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <div className="  flex size-6 items-center justify-center self-center rounded-md">
          <HelloDocLogo />
        </div>
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage