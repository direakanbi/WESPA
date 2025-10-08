"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { Loader2, Upload, CheckCircle2 } from "lucide-react"

export function MembershipForm() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    // Organization Info
    organizationName: "",
    country: "",
    address: "",
    city: "",
    postalCode: "",
    website: "",
    email: "",
    phone: "",

    // Structure
    legalStatus: "",
    yearEstablished: "",
    memberCount: "",
    activePlayerCount: "",

    // Alignment
    governanceStructure: "",
    electionProcess: "",

    // Activities
    regularActivities: "",
    tournamentsPerYear: "",
    youthPrograms: "",

    // Compliance
    rulesCompliance: false,
    codeOfConduct: false,

    // Class
    membershipClass: "",

    // Authorization
    applicantName: "",
    applicantTitle: "",
    applicantEmail: "",
    signature: "",
    date: new Date().toISOString().split("T")[0],

    // Documents
    registrationDoc: null as File | null,
    bylawsDoc: null as File | null,
  })

  const handleInputChange = (field: string, value: string | boolean | File | null) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFileChange = (field: string, file: File | null) => {
    setFormData((prev) => ({ ...prev, [field]: file }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // In production, this would send an email to membership@wespa.org
    console.log("Membership application submitted:", formData)

    setLoading(false)
    setSubmitted(true)

    toast({
      title: "Application Submitted",
      description: "Your membership application has been sent to WESPA for review. We'll contact you soon.",
    })
  }

  if (submitted) {
    return (
      <Card className="border-2 border-primary/20">
        <CardContent className="p-12 text-center">
          <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="h-8 w-8 text-primary" />
          </div>
          <h2 className="font-serif font-bold text-2xl mb-2">Application Submitted!</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Thank you for applying for WESPA membership. Your application has been sent to{" "}
            <span className="font-medium">membership@wespa.org</span> for review. Our committee will contact you within
            2-3 weeks regarding the status of your application.
          </p>
          <Button onClick={() => setSubmitted(false)} variant="outline">
            Submit Another Application
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-8">
        {/* Organization Information */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif">Organization Information</CardTitle>
            <CardDescription>Basic details about your organization</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="organizationName">
                  Organization Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="organizationName"
                  required
                  value={formData.organizationName}
                  onChange={(e) => handleInputChange("organizationName", e.target.value)}
                  placeholder="National Scrabble Association"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="country">
                  Country <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="country"
                  required
                  value={formData.country}
                  onChange={(e) => handleInputChange("country", e.target.value)}
                  placeholder="United States"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">
                Street Address <span className="text-destructive">*</span>
              </Label>
              <Input
                id="address"
                required
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                placeholder="123 Main Street"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">
                  City <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="city"
                  required
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  placeholder="New York"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="postalCode">Postal Code</Label>
                <Input
                  id="postalCode"
                  value={formData.postalCode}
                  onChange={(e) => handleInputChange("postalCode", e.target.value)}
                  placeholder="10001"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
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
                  placeholder="info@example.org"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                type="url"
                value={formData.website}
                onChange={(e) => handleInputChange("website", e.target.value)}
                placeholder="https://example.org"
              />
            </div>
          </CardContent>
        </Card>

        {/* Structure */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif">Organizational Structure</CardTitle>
            <CardDescription>Information about your organization's structure and membership</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="legalStatus">
                  Legal Status <span className="text-destructive">*</span>
                </Label>
                <Select value={formData.legalStatus} onValueChange={(value) => handleInputChange("legalStatus", value)}>
                  <SelectTrigger id="legalStatus">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nonprofit">Non-profit Organization</SelectItem>
                    <SelectItem value="registered">Registered Association</SelectItem>
                    <SelectItem value="incorporated">Incorporated Society</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="yearEstablished">
                  Year Established <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="yearEstablished"
                  type="number"
                  required
                  min="1900"
                  max={new Date().getFullYear()}
                  value={formData.yearEstablished}
                  onChange={(e) => handleInputChange("yearEstablished", e.target.value)}
                  placeholder="2000"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="memberCount">
                  Total Members <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="memberCount"
                  type="number"
                  required
                  min="0"
                  value={formData.memberCount}
                  onChange={(e) => handleInputChange("memberCount", e.target.value)}
                  placeholder="150"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="activePlayerCount">
                  Active Competitive Players <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="activePlayerCount"
                  type="number"
                  required
                  min="0"
                  value={formData.activePlayerCount}
                  onChange={(e) => handleInputChange("activePlayerCount", e.target.value)}
                  placeholder="75"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Alignment & Governance */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif">Governance & Alignment</CardTitle>
            <CardDescription>How your organization is governed and operates</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="governanceStructure">
                Governance Structure <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="governanceStructure"
                required
                value={formData.governanceStructure}
                onChange={(e) => handleInputChange("governanceStructure", e.target.value)}
                placeholder="Describe your board structure, committees, and decision-making processes..."
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="electionProcess">
                Election Process <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="electionProcess"
                required
                value={formData.electionProcess}
                onChange={(e) => handleInputChange("electionProcess", e.target.value)}
                placeholder="Explain how leaders are elected and terms of service..."
                rows={3}
              />
            </div>
          </CardContent>
        </Card>

        {/* Activities */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif">Activities & Programs</CardTitle>
            <CardDescription>Your organization's Scrabble activities and initiatives</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="regularActivities">
                Regular Activities <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="regularActivities"
                required
                value={formData.regularActivities}
                onChange={(e) => handleInputChange("regularActivities", e.target.value)}
                placeholder="Describe your regular club meetings, training sessions, and other activities..."
                rows={4}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="tournamentsPerYear">
                  Tournaments Per Year <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="tournamentsPerYear"
                  type="number"
                  required
                  min="0"
                  value={formData.tournamentsPerYear}
                  onChange={(e) => handleInputChange("tournamentsPerYear", e.target.value)}
                  placeholder="12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="youthPrograms">Youth Programs</Label>
                <Input
                  id="youthPrograms"
                  value={formData.youthPrograms}
                  onChange={(e) => handleInputChange("youthPrograms", e.target.value)}
                  placeholder="School programs, youth tournaments, etc."
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Compliance */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif">Compliance & Standards</CardTitle>
            <CardDescription>Commitment to WESPA rules and standards</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <Checkbox
                id="rulesCompliance"
                required
                checked={formData.rulesCompliance}
                onCheckedChange={(checked) => handleInputChange("rulesCompliance", checked as boolean)}
              />
              <div className="space-y-1">
                <Label htmlFor="rulesCompliance" className="font-normal cursor-pointer">
                  I confirm that our organization follows WESPA rules and regulations for competitive play{" "}
                  <span className="text-destructive">*</span>
                </Label>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Checkbox
                id="codeOfConduct"
                required
                checked={formData.codeOfConduct}
                onCheckedChange={(checked) => handleInputChange("codeOfConduct", checked as boolean)}
              />
              <div className="space-y-1">
                <Label htmlFor="codeOfConduct" className="font-normal cursor-pointer">
                  I agree to uphold WESPA's code of conduct and ethical standards{" "}
                  <span className="text-destructive">*</span>
                </Label>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Membership Class */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif">Membership Class</CardTitle>
            <CardDescription>Select the appropriate membership level</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="membershipClass">
                Requested Membership Class <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.membershipClass}
                onValueChange={(value) => handleInputChange("membershipClass", value)}
              >
                <SelectTrigger id="membershipClass">
                  <SelectValue placeholder="Select class" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full">Full Member (National Association)</SelectItem>
                  <SelectItem value="associate">Associate Member (Regional/Developing)</SelectItem>
                  <SelectItem value="affiliate">Affiliate Member (Club/Organization)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Document Upload */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif">Supporting Documents</CardTitle>
            <CardDescription>Upload required documentation (PDF format preferred)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="registrationDoc">Registration Certificate</Label>
              <div className="flex items-center gap-2">
                <Input
                  id="registrationDoc"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => handleFileChange("registrationDoc", e.target.files?.[0] || null)}
                  className="cursor-pointer"
                />
                <Upload className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="text-xs text-muted-foreground">Proof of legal registration or incorporation</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bylawsDoc">Constitution/Bylaws</Label>
              <div className="flex items-center gap-2">
                <Input
                  id="bylawsDoc"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => handleFileChange("bylawsDoc", e.target.files?.[0] || null)}
                  className="cursor-pointer"
                />
                <Upload className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="text-xs text-muted-foreground">Your organization's governing documents</p>
            </div>
          </CardContent>
        </Card>

        {/* Authorization */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif">Authorization</CardTitle>
            <CardDescription>Authorized representative information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="applicantName">
                  Full Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="applicantName"
                  required
                  value={formData.applicantName}
                  onChange={(e) => handleInputChange("applicantName", e.target.value)}
                  placeholder="John Smith"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="applicantTitle">
                  Title/Position <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="applicantTitle"
                  required
                  value={formData.applicantTitle}
                  onChange={(e) => handleInputChange("applicantTitle", e.target.value)}
                  placeholder="President"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="applicantEmail">
                Email <span className="text-destructive">*</span>
              </Label>
              <Input
                id="applicantEmail"
                type="email"
                required
                value={formData.applicantEmail}
                onChange={(e) => handleInputChange("applicantEmail", e.target.value)}
                placeholder="president@example.org"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="signature">
                Digital Signature (Type Full Name) <span className="text-destructive">*</span>
              </Label>
              <Input
                id="signature"
                required
                value={formData.signature}
                onChange={(e) => handleInputChange("signature", e.target.value)}
                placeholder="John Smith"
                className="font-serif italic"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => handleInputChange("date", e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={() => window.history.back()}>
            Cancel
          </Button>
          <Button type="submit" disabled={loading} size="lg">
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Application"
            )}
          </Button>
        </div>
      </div>
    </form>
  )
}
