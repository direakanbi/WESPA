import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

/**
 * Renders a rankings table based on the new design.
 * @param {object} props - The component props.
 * @param {any[]} props.rankings - An array of player ranking data.
 */
export default function RankingsTable({ rankings }: { rankings: any[] }) {
  return (
    <div className=' max-w-5xl mx-auto flex flex-col gap-5 py-10'>
            <section className="text-sm text-gray-600">Last updated • <span className=" text-primary">10/26/2025</span></section>

            <Table className=' border-collapse border border-gray-200'>
                <TableHeader className=' bg-[#47b2e4] '>
                    <TableRow >
                        <TableHead className=' text-white p-3 font-bold text-base'>Rank</TableHead>
                        <TableHead className=' text-left text-white p-3 font-bold text-base'>Player Name</TableHead>
                        <TableHead className=' text-left text-white p-3 font-bold text-base'>Country</TableHead>
                        <TableHead className=' text-center text-white p-3 font-bold text-base'>Rating</TableHead>
                        <TableHead className=' text-center text-white p-3 font-bold text-base'>Details</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        rankings.map((rating: any) => {
                            return (
                                <TableRow key={rating.rank} className="even:bg-[#F7F7F7] border-b border-gray-200">
                                    <TableCell className="p-3 text-base font-bold text-black">{rating.rank}</TableCell>
                                    <TableCell className="p-3 text-base font-bold text-left text-black">{rating.name}</TableCell>
                                    <TableCell className="p-3 text-base font-bold text-left text-black">{rating.country}</TableCell>
                                    <TableCell className="p-3 text-base font-bold text-center">
                                        <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#a2e5f2] text-black font-bold text-sm">
                                            {rating.rating}
                                        </span>
                                    </TableCell>
                                    <TableCell className="p-2 text-base text-center">
                                        <button className="px-1 py-1 text-[0.65rem] font-bold text-black bg-white rounded-md border border-gray-900 hover:bg-[#47b2e4]">
                                            View Profile
                                        </button>
                                    </TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </div>
  );
}

