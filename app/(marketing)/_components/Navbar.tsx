'use client'

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { ModeToggle } from "@/components/mode-toggle";

const Navbar = () => {

  const scrolled = useScrollTop();

  return ( 
    <div className={cn("z-50 bg-background fixed dark:bg-[#1F1F1F] dark:shadow-[#404040] top-0 flex items-center w-full p-6 transition-all duration-200", scrolled && "border-b shadow-md")}>
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        <ModeToggle />
      </div>
    </div>
   );
}
 
export default Navbar;