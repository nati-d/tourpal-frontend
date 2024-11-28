import { Wifi, Tv, Car, Utensils, Wind, Waves, Coffee, ShowerHead } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const amenities = [
  { icon: Wifi, label: 'Free WiFi' },
  { icon: Tv, label: 'Smart TV' },
  { icon: Car, label: 'Free parking' },
  { icon: Utensils, label: 'Fully equipped kitchen' },
  { icon: Wind, label: 'Air conditioning' },
  { icon: Waves, label: 'Beach access' },
  { icon: Coffee, label: 'Coffee maker' },
  { icon: ShowerHead, label: 'Hot water' },
]

export default function Amenities() {
  return (
    <Card className='mt-10'>
      <CardHeader>
        <CardTitle>Amenities</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex items-center space-x-2">
              <amenity.icon className="w-5 h-5 text-muted-foreground" />
              <span>{amenity.label}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
