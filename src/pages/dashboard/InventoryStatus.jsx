'use client'

import {Link} from "react-router-dom"

import { Button } from "@/components/ui/button"


export default function InventoryStatus() {

  return (
  
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Inventory Status</h1>
          </div>
          <div
            className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1"
          >
            <div className="flex flex-col items-center gap-1 text-center">
              <h3 className="text-2xl font-bold tracking-tight">
                You don&apos;t have anything yet
              </h3>
              <p className="text-sm text-muted-foreground">
                Soon this website will be finish
              </p>
              <Link to={"/"}>
                <Button className="mt-4">Logout</Button>
                </Link>
            </div>
          </div>
       </main>
     
  )
}
