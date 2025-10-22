import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"


function BenefitMembership() {
  return (
    <div>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className='w-[300px]'>Benefit</TableHead>
                    <TableHead>Federation Members</TableHead>
                    <TableHead>Individual Members</TableHead>
                    <TableHead>Supporters</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                </TableRow>
            </TableBody>
        </Table>
    </div>
  )
}

export default BenefitMembership