"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image, { StaticImageData } from "next/image"

interface CommitteeMember {
  id: number
  name: string
  role: string
  country:StaticImageData
  countryCode: string
  photo:  StaticImageData
}

export function CommitteeMemberCard({ member }: { member: CommitteeMember }) {
  const [showBio, setShowBio] = useState(false)

  return (
    <>
      <Card className="hover:shadow-lg transition-shadow">
        <CardContent>
          
        </CardContent>
      </Card>

      <Dialog open={showBio} onOpenChange={setShowBio}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl">{member.name}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-20 rounded-full overflow-hidden bg-muted flex-shrink-0">
                <Image src={member.photo || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <div>
                <p className="font-medium text-primary">{member.role}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="text-xs bg-muted px-2 py-1 rounded font-mono">{member.countryCode}</span>
                  <Image src={member.country} alt={member.countryCode} width={20} height={15} className="object-cover rounded-sm" />
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
