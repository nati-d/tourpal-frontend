'use client'

import { useState, useTransition } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Search, Star, DollarSign, Home, Wifi,  Dumbbell, Utensils } from 'lucide-react'

export default function SearchFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()

  const [search, setSearch] = useState(searchParams.get('search') || '')
  const [minRating, setMinRating] = useState(Number(searchParams.get('minRating')) || 1)
  const [maxPrice, setMaxPrice] = useState(Number(searchParams.get('maxPrice')) || 1000)
  const [amenities, setAmenities] = useState<string[]>(searchParams.get('amenities')?.split(',').filter(Boolean) || [])
  const [propertyType, setPropertyType] = useState(searchParams.get('propertyType') || '')

  const updateSearch = (newParams: Record<string, string>) => {
    const params = new URLSearchParams(searchParams.toString())
    Object.entries(newParams).forEach(([key, value]) => {
      if (value) {
        params.set(key, value)
      } else {
        params.delete(key)
      }
    })
    startTransition(() => {
      router.push(`/category/hotels?${params.toString()}`)
    })
  }

  const handleSearch = (value: string) => {
    setSearch(value)
    updateSearch({ search: value })
  }

  const handleRatingChange = (value: number[]) => {
    setMinRating(value[0])
    updateSearch({ minRating: value[0].toString() })
  }

  const handlePriceChange = (value: number[]) => {
    setMaxPrice(value[0])
    updateSearch({ maxPrice: value[0].toString() })
  }

  const handleAmenityChange = (amenity: string, checked: boolean) => {
    const newAmenities = checked
      ? [...amenities, amenity]
      : amenities.filter(a => a !== amenity)
    setAmenities(newAmenities)
    updateSearch({ amenities: newAmenities.join(',') })
  }

  const handlePropertyTypeChange = (value: string) => {
    setPropertyType(value)
    updateSearch({ propertyType: value })
  }

  return (
    <Card className="mb-8 shadow-lg transition-all duration-300 hover:shadow-xl my-10">
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="search" className="flex items-center text-sm font-medium">
              <Search className="w-4 h-4 mr-2" />
              Search Hotels
            </Label>
            <Input
              id="search"
              type="text"
              placeholder="Search hotels..."
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <Label className="flex items-center text-sm font-medium">
              <Star className="w-4 h-4 mr-2" />
              Minimum Rating: {minRating}
            </Label>
            <Slider
              min={1}
              max={5}
              step={1}
              value={[minRating]}
              onValueChange={handleRatingChange}
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <Label className="flex items-center text-sm font-medium">
              <DollarSign className="w-4 h-4 mr-2" />
              Maximum Price: ${maxPrice}
            </Label>
            <Slider
              min={100}
              max={1000}
              step={50}
              value={[maxPrice]}
              onValueChange={handlePriceChange}
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <Label className="flex items-center text-sm font-medium">
              <Home className="w-4 h-4 mr-2" />
              Property Type
            </Label>
            <RadioGroup value={propertyType} onValueChange={handlePropertyTypeChange}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="hotel" id="hotel" />
                <Label htmlFor="hotel">Hotel</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="apartment" id="apartment" />
                <Label htmlFor="apartment">Apartment</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="resort" id="resort" />
                <Label htmlFor="resort">Resort</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="villa" id="villa" />
                <Label htmlFor="villa">Villa</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label className="flex items-center text-sm font-medium">
              Amenities
            </Label>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="wifi" 
                  checked={amenities.includes('wifi')}
                  onCheckedChange={(checked) => handleAmenityChange('wifi', checked as boolean)}
                />
                <Label htmlFor="wifi" className="flex items-center">
                  <Wifi className="w-4 h-4 mr-2" />
                  Wi-Fi
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="pool" 
                  checked={amenities.includes('pool')}
                  onCheckedChange={(checked) => handleAmenityChange('pool', checked as boolean)}
                />
                <Label htmlFor="pool" className="flex items-center">
                  Pool
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="gym" 
                  checked={amenities.includes('gym')}
                  onCheckedChange={(checked) => handleAmenityChange('gym', checked as boolean)}
                />
                <Label htmlFor="gym" className="flex items-center">
                  <Dumbbell className="w-4 h-4 mr-2" />
                  Gym
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="restaurant" 
                  checked={amenities.includes('restaurant')}
                  onCheckedChange={(checked) => handleAmenityChange('restaurant', checked as boolean)}
                />
                <Label htmlFor="restaurant" className="flex items-center">
                  <Utensils className="w-4 h-4 mr-2" />
                  Restaurant
                </Label>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      {isPending && <div className="text-center text-sm text-muted-foreground">Updating results...</div>}
    </Card>
  )
}

