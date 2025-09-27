import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle, 
} from "@/components/ui/sheet";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "lucide-react";

interface NavbarItem {
    href: string;
    children: React.ReactNode
}
interface Props{
    items: NavbarItem[];
    open: boolean;
    onOpenChange:(open: boolean) => void;
}

export const NavbarSidebar=({
    items,
    open,
    onOpenChange,
}: Props)=>{
    return(
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent side="left" className="p-0 transition-none">
                <SheetHeader className="p-4 borber-b">
                    <div className="flex items-center">
                    <SheetTitle className="text-2xl font-bold mb-4">
                        Menu
                    </SheetTitle>
                    </div>
                </SheetHeader>
                <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
                    <div className="flex flex-col space-y-2">
                        {items.map((item)=>(
                            <Link
                            key={item.href}
                            href={item.href}
                            className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
                            >
                                {item.children}
                            </Link >
                        ))}
                        
                       <div className="">
                        <Link
                            href="/login"
                            className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
                            >
                                Login
                            </Link >

                        <Link   
                            href="/signup"
                            className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
                            >
                                Start Selling
                            </Link >
                       </div>

                    </div>
                </ScrollArea>
            </SheetContent>
        </Sheet>
    )
}