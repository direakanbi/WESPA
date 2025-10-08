"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"

interface CommitteeMember {
  id: number
  name: string
  role: string
  country: string
  countryCode: string
  photo: string
  bio: string
  committee: string
}

export function CommitteeMemberCard({ member }: { member: CommitteeMember }) {
  const [showBio, setShowBio] = useState(false)

  return (
    <>
      <Card className="hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <div className="flex flex-col items-center text-center">
            <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden bg-muted">
              <Image src={member.photo || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
            </div>
            <h3 className="font-serif font-semibold text-xl mb-1">{member.name}</h3>
            <p className="text-primary font-medium mb-2">{member.role}</p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <span className="text-xs bg-muted px-2 py-1 rounded font-mono">{member.countryCode}</span>
              <span>{member.country}</span>
            </div>
            <Button variant="outline" size="sm" onClick={() => setShowBio(true)}>
              Read Bio
            </Button>
          </div>
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
                  <span>{member.country}</span>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
