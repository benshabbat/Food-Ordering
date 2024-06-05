import { Menu } from "lucide-react"
import { Sheet, SheetTrigger } from "../ui/sheet"

const MobileNav = () => {
  return (
    <Sheet>
        <SheetTrigger>
            <Menu className="text-orange-500"/>
        </SheetTrigger>
    </Sheet>
  )
}

export default MobileNav