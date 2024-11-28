import { Hotel } from '@/types'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Star, DollarSign, Wifi, PocketIcon as Pool, Dumbbell, Utensils } from 'lucide-react'

interface HotelListProps {
  hotels: Hotel[]
  totalHotels: number
}

export default function HotelList({ hotels, totalHotels }: HotelListProps) {
  const totalPages = Math.ceil(totalHotels / 10)

  const amenityIcons = {
    wifi: Wifi,
    pool: Pool,
    gym: Dumbbell,
    restaurant: Utensils,
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 my-10">
        {hotels.map((hotel) => (
          <Card key={hotel.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
            <Image src={hotel.image} alt={hotel.name} width={300} height={200} className="w-full h-48 object-cover" />
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                {hotel.name}
                <Badge variant="secondary" className="ml-2">
                  <Star className="w-4 h-4 mr-1 inline" />
                  {hotel.rating}
                </Badge>
              </CardTitle>
              <CardDescription>{hotel.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-2">
                <div className="text-lg font-bold flex items-center">
                  <DollarSign className="w-5 h-5 mr-1" />
                  {hotel.price}
                  <span className="text-sm font-normal ml-1">per night</span>
                </div>
                <Badge>{hotel.propertyType}</Badge>
              </div>
              <div className="flex space-x-2">
                {hotel.amenities.map((amenity) => {
                  const IconComponent = amenityIcons[amenity as keyof typeof amenityIcons]
                  return IconComponent ? (
                    <IconComponent key={amenity} className="w-4 h-4 text-muted-foreground" />
                  ) : null
                })}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/hotels/${hotel.id}`}>View Details</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Pagination totalPages={totalPages} />
    </div>
  )
}

function Pagination({ totalPages }: { totalPages: number }) {
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1

  return (
    <div className="flex justify-center space-x-2 mb-10">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set('page', page.toString())
        return (
          <Link
            key={page}
            href={`/hotels?${params.toString()}`}
            className={`px-4 py-2 rounded transition-colors duration-200 ${
              currentPage === page 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-secondary hover:bg-primary/90 hover:text-primary-foreground'
            }`}
          >
            {page}
          </Link>
        )
      })}
    </div>
  )
}

