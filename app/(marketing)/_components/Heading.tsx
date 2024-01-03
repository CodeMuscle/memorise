'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents, & Plans. Unified. Welcome to <span className="underline">Memorise</span>
      </h1>
      <h3 className="text-base m:text-xl md:text-2xl font-medium">MemoRise is the connected workspace where <br />
          better, faster work happens.
      </h3>
      <Button className="arrow-right-div">
        Enter MemoRise
        <ArrowRight className="w-4 h-4 ml-2 right-arrow" />
      </Button>
    </div>
  )
}

export default Heading