import Image from 'next/image'
import { Poppins } from 'next/font/google'

import { cn } from '@/lib/utils'

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"]
})

const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image src={`/logo.png`} height={20} width={20} alt={`Logo`} className="object-fit dark:hidden" />
      <Image src={`/logo-dark.png`} height={20} width={20} alt={`Logo`} className="object-fit hidden dark:block" />
      <p className={cn("font-semibold", font.className)}>
        Memorise
      </p>
    </div>
  )
}

export default Logo