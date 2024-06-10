import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Bell, BookUser, Database, Home, ScrollText } from 'lucide-react'
import { Link, useNavigation } from "react-router-dom";

export default function NavbarWeb() {
    return (<div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-17 items-center border-b px-4 lg:h-[140px] lg:px-6">
                <Link to={"/inventory-status"} className="flex flex-col items-start gap-2 font-semibold">
                    <img
                        src="/logo-april.png"
                        alt="Image"
                        width="140"
                        height="140"
                    />
                    <b className="text-xs font-bold">Terminal Inventory System</b>

                    <span className="text-xs font-medium ">Buatan Port</span>
                </Link>


                <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                    <Bell className="h-4 w-4" />
                    <span className="sr-only">Toggle notifications</span>
                </Button>
            </div>
            <div className="flex-1">
                <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                    {/* <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary  bg-muted"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link> */}
                    <Accordion type="single" collapsible className=" rounded-lg px-3 py-2 text-muted-foreground transition-all ">
                        <AccordionItem value="item-1" className="border-none">
                            <AccordionTrigger className="hover:text-primary hover:no-underline">
                                <span className="flex items-center gap-3">
                                    <Home className="h-4 w-4" />
                                    Dashboard
                                </span>
                            </AccordionTrigger>
                            <AccordionContent>
                                <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                                    
                                    <Link
                                        to={"/terminal-in-out"}
                                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all text-primary hover:text-primary bg-muted"
                                    >

                                        Terminal In/Out
                                    </Link>
                                    <Link
                                        to={"/inventory-status"}
                                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary "
                                    >

                                        Invetory Status
                                    </Link>
                                </nav>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="border-none">
                            <AccordionTrigger className="hover:text-primary hover:no-underline ">
                                <span className="flex items-center gap-3">
                                    <ScrollText className="h-4 w-4" />
                                    Transaction
                                </span>
                            </AccordionTrigger>
                            <AccordionContent>
                                <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                                    <Link
                                        to={"/incoming"}
                                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground  transition-all hover:text-primary"
                                    >
                                        {/* <Home className="h-4 w-4" /> */}
                                        Incoming
                                    </Link>
                                    <Link
                                        to={"/outgoing"}
                                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary "
                                    >
                                        {/* <Home className="h-4 w-4" /> */}
                                        Outgoing
                                    </Link>
                                    <Link
                                        to={"/weighing"}
                                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary "
                                    >
                                        {/* <Home className="h-4 w-4" /> */}
                                        Weighing
                                    </Link>
                                </nav>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3" className="border-none">
                            <AccordionTrigger className="hover:text-primary hover:no-underline">
                                <span className="flex items-center gap-3">
                                    <Database className="h-4 w-4" />
                                    Master Data
                                </span>
                            </AccordionTrigger>
                            <AccordionContent>
                                <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                                    <Link
                                        to={"/material"}
                                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                    >
                                        {/* <Home className="h-4 w-4" /> */}
                                        Material
                                    </Link>
                                    <Link
                                        to={"/yard-manager"}
                                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary "
                                    >
                                        {/* <Home className="h-4 w-4" /> */}
                                        Yard Manager
                                    </Link>
                                    <Link
                                        to={"/vessel-master"}
                                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary "
                                    >
                                        {/* <Home className="h-4 w-4" /> */}
                                        Vessel Master
                                    </Link>
                                    <Link
                                        to={"/truck-master"}
                                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary "
                                    >
                                        {/* <Home className="h-4 w-4" /> */}
                                        Truck Master
                                    </Link>
                                </nav>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4" className="border-none">
                            <AccordionTrigger className="hover:text-primary hover:no-underline">
                                <span className="flex items-center gap-3">
                                    <BookUser className="h-4 w-4" />
                                    Human Resource
                                </span>
                            </AccordionTrigger>
                            <AccordionContent>
                                <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                                    <Link
                                        to={"/terminal"}
                                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                    >
                                        {/* <Home className="h-4 w-4" /> */}
                                        Terminal
                                    </Link>
                                    <Link
                                        to={"/employee"}
                                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary "
                                    >
                                        {/* <Home className="h-4 w-4" /> */}
                                        Employee
                                    </Link>
                                    <Link
                                        to={"/role"}
                                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary "
                                    >
                                        {/* <Home className="h-4 w-4" /> */}
                                        Role
                                    </Link>

                                </nav>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </nav>
            </div>

        </div>
    </div>)
}