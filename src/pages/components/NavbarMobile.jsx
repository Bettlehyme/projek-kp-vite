import {  BookUser, Database, Home, KeyRound, LogOut, Menu, MenuIcon, ScrollText, Settings, User } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { Link, useNavigate } from 'react-router-dom'

export default function NavbarMobile() {
  
    
    function handleClick() {
        window.location.replace("/")
      }

    function getTime() {
  
      const now = new Date()
      const day = now
      const time = now.toLocaleDateString('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });
  
  
      return time
  
    }

    return (

        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="shrink-0 md:hidden"
                  >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col">
                  <nav className="grid gap-2 text-lg font-medium">
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
                              href="/terminal-in-out"
                              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all text-primary hover:text-primary bg-muted"
                            >

                              Terminal In/Out
                            </Link>
                            <Link
                              href="/inventory-status"
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
                              href="/incoming"
                              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground  transition-all hover:text-primary"
                            >
                              {/* <Home className="h-4 w-4" /> */}
                              Incoming
                            </Link>
                            <Link
                              href="/outgoing"
                              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary "
                            >
                              {/* <Home className="h-4 w-4" /> */}
                              Outgoing
                            </Link>
                            <Link
                              href="/weighing"
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
                              href="/material"
                              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                              {/* <Home className="h-4 w-4" /> */}
                              Material
                            </Link>
                            <Link
                              href="/yard-manager"
                              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary "
                            >
                              {/* <Home className="h-4 w-4" /> */}
                              Yard Manager
                            </Link>
                            <Link
                              href="/vessel-master"
                              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary "
                            >
                              {/* <Home className="h-4 w-4" /> */}
                              Vessel Master
                            </Link>
                            <Link
                              href="/truck-master"
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
                              href="/terminal"
                              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                              {/* <Home className="h-4 w-4" /> */}
                              Terminal
                            </Link>
                            <Link
                              href="/employee"
                              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary "
                            >
                              {/* <Home className="h-4 w-4" /> */}
                              Employee
                            </Link>
                            <Link
                              href="/role"
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

                </SheetContent>
              </Sheet>
              <div className="w-full flex-1">
                <div>
                  {getTime()}
                </div>

              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="secondary" size="icon" className="rounded-full">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span className="sr-only">Toggle user menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>
                    <Card className="flex flex-row pt-6 w-full h-full items-center content-center justify-center">
                      <CardContent className="flex flex-row w-full h-full items-center gap-3">

                        <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <span className="font-bold">Haikal Alatas</span>
                          <span className="text-muted-foreground text-xs">SYSTEM ADMIN</span>
                        </div>
                        <Button onClick={handleClick}  className="absolute right-10 ">
                          <LogOut className="h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>


                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <Tabs defaultValue="profile" className="w-[400px]">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="profile" className="gap-2"> <User className="h-4 w-4" /> Profile</TabsTrigger>
                      <TabsTrigger value="setting" className="gap-2"> <Settings className="h-4 w-4" />Setting</TabsTrigger>
                    </TabsList>
                    <TabsContent value="profile">
                      <Link href="#" className="text-sm flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground  transition-all hover:text-primary hover:bg-muted">
                        <User className="h-4 w-4" />
                        Profile Info
                      </Link>
                    </TabsContent>
                    <TabsContent value="setting">
                      <Link to="/reset-password" className="text-sm flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground  transition-all hover:text-primary hover:bg-muted">
                        <KeyRound className="h-4 w-4" />
                        Reset Password
                      </Link>
                      <Link href="#" className="text-sm flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground  transition-all hover:text-primary hover:bg-muted">
                        <MenuIcon className="h-4 w-4" />
                        Platform Menu
                      </Link>
                    </TabsContent>
                  </Tabs>

                </DropdownMenuContent>
              </DropdownMenu>
            </header>
    )
}