"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { Loader2, CheckCircle2, CreditCard } from "lucide-react"

const donationAmounts = [25, 50, 100, 250, 500, 1000]

export function DonationForm() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    amount: "",
    customAmount: "",
    recurring: false,
    frequency: "monthly",
    name: "",
    email: "",
    message: "",
    anonymous: false,
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleAmountSelect = (amount: number) => {
    setFormData((prev) => ({ ...prev, amount: amount.toString(), customAmount: "" }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // In production, this would integrate with a payment processor
    console.log("Donation submitted:", formData)

    setLoading(false)
    setSubmitted(true)

    toast({
      title: "Thank You!",
      description: "Your generous donation has been processed successfully.",
    })
  }

  const selectedAmount = formData.customAmount || formData.amount

  if (submitted) {
    return (
      <Card className="border-2 border-primary/20">
        <CardContent className="p-12 text-center">
          <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="h-8 w-8 text-primary" />
          </div>
          <h2 className="font-serif font-bold text-2xl mb-2">Thank You for Your Support!</h2>
          <p className="text-muted-foreground leading-relaxed mb-2">
            Your donation of <span className="font-semibold">${selectedAmount}</span> has been processed successfully.
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            A confirmation email has been sent to <span className="font-medium">{formData.email}</span>
          </p>
          <Button onClick={() => setSubmitted(false)} variant="outline">
            Make Another Donation
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-2xl">Make a Donation</CardTitle>
          <CardDescription>Support WESPA's mission to promote competitive Scrabble worldwide</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Amount Selection */}
          <div className="space-y-4">
            <Label>Select Amount</Label>
            <div className="grid grid-cols-3 gap-3">
              {donationAmounts.map((amount) => (
                <Button
                  key={amount}
                  type="button"
                  variant={formData.amount === amount.toString() ? "default" : "outline"}
                  onClick={() => handleAmountSelect(amount)}
                  className="h-12"
                >
                  ${amount}
                </Button>
              ))}
            </div>

            <div className="space-y-2">
              <Label htmlFor="customAmount">Or Enter Custom Amount</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                <Input
                  id="customAmount"
                  type="number"
                  min="1"
                  value={formData.customAmount}
                  onChange={(e) => {
                    handleInputChange("customAmount", e.target.value)
                    handleInputChange("amount", "")
                  }}
                  placeholder="Enter amount"
                  className="pl-7"
                />
              </div>
            </div>
          </div>

          {/* Recurring Donation */}
          <div className="space-y-4 p-4 bg-muted/30 rounded-lg">
            <div className="flex items-center gap-3">
              <Checkbox
                id="recurring"
                checked={formData.recurring}
                onCheckedChange={(checked) => handleInputChange("recurring", checked as boolean)}
              />
              <Label htmlFor="recurring" className="font-normal cursor-pointer">
                Make this a recurring donation
              </Label>
            </div>

            {formData.recurring && (
              <RadioGroup value={formData.frequency} onValueChange={(value) => handleInputChange("frequency", value)}>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="monthly" id="monthly" />
                  <Label htmlFor="monthly" className="font-normal cursor-pointer">
                    Monthly
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="annual" id="annual" />
                  <Label htmlFor="annual" className="font-normal cursor-pointer">
                    Annually
                  </Label>
                </div>
              </RadioGroup>
            )}
          </div>

          {/* Donor Information */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">
                Full Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="John Smith"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                Email <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message (Optional)</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                placeholder="Leave a message or dedication..."
                rows={3}
              />
            </div>

            <div className="flex items-center gap-3">
              <Checkbox
                id="anonymous"
                checked={formData.anonymous}
                onCheckedChange={(checked) => handleInputChange("anonymous", checked as boolean)}
              />
              <Label htmlFor="anonymous" className="font-normal cursor-pointer">
                Make my donation anonymous
              </Label>
            </div>
          </div>

          {/* Payment Info Placeholder */}
          <div className="space-y-4 p-4 border-2 border-dashed border-border rounded-lg">
            <div className="flex items-center gap-2 text-muted-foreground">
              <CreditCard className="h-5 w-5" />
              <span className="text-sm font-medium">Payment Information</span>
            </div>
            <p className="text-sm text-muted-foreground">
              In production, this section would integrate with a secure payment processor (Stripe, PayPal, etc.) to
              collect payment details.
            </p>
          </div>

          {/* Submit Button */}
          <div className="space-y-4">
            <Button type="submit" disabled={loading || !selectedAmount} size="lg" className="w-full">
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>Donate ${selectedAmount || "0"}</>
              )}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              Your donation is secure and will be processed through our trusted payment partner. You'll receive a
              confirmation email with tax receipt information.
            </p>
          </div>
        </CardContent>
      </Card>
    </form>
  )
}
