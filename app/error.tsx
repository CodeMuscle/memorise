'use client'

import Link from "next/link"
import Image from 'next/image'

import { Button } from "@/components/ui/button"

const ErrorPage = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image src={`/error.png`} alt={`error-img`} height={300} width={300} className="dark:hidden"  />
      <Image src={`/error-dark.png`} alt={`error-img`} height={300} width={300} className="dark:block hidden"  />
      <h2 className="text-xl font-medium">
        Something went wrong!
      </h2>
      <Button asChild>
        <Link href={`/documents`}>
          Go back
        </Link>
      </Button>
    </div>
  )
}

export default ErrorPage