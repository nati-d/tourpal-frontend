'use client'

import { useState } from 'react'
import { Calendar, CreditCard } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ReservationBox() {
  const [dateRange, setDateRange] = useState<{ from: Date | null; to: Date | null }>({
    from: null,
    to: null,
  })
  const [guests, setGuests] = useState('1')

  const calculateNights = () => {
    if (dateRange.from && dateRange.to) {
      return Math.ceil((dateRange.to.getTime() - dateRange.from.getTime()) / (1000 * 3600 * 24))
    }
    return 0
  }

  const nightsCount = calculateNights()
  const basePrice = 250
  const cleaningFee = 100
  const serviceFee = 50
  const total = nightsCount * basePrice + cleaningFee + serviceFee

  return (
    <Card className="sticky top-4 mb-10">
      <CardHeader>
        <CardTitle className="flex items-baseline">
          <span className="text-2xl font-bold">${basePrice}</span>
          <span className="text-muted-foreground text-sm font-normal ml-1">night</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="check-in">Check-in</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    <Calendar className="mr-2 h-4 w-4" />
                    {dateRange.from ? dateRange.from.toLocaleDateString() : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="range"
                    selected={dateRange}
                    onSelect={(range) => setDateRange(range as { from: Date | null; to: Date | null })}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <Label htmlFor="check-out">Check-out</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    <Calendar className="mr-2 h-4 w-4" />
                    {dateRange.to ? dateRange.to.toLocaleDateString() : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="range"
                    selected={dateRange}
                    onSelect={(range) => setDateRange(range as { from: Date | null; to: Date | null })}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div>
            <Label htmlFor="guests">Guests</Label>
            <Select value={guests} onValueChange={setGuests}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select number of guests" />
              </SelectTrigger>
              <SelectContent>
                {['1', '2', '3', '4'].map((num) => (
                  <SelectItem key={num} value={num}>
                    {num} {num === '1' ? 'guest' : 'guests'}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {nightsCount > 0 && (
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>${basePrice} x {nightsCount} nights</span>
                <span>${basePrice * nightsCount}</span>
              </div>
              <div className="flex justify-between">
                <span>Cleaning fee</span>
                <span>${cleaningFee}</span>
              </div>
              <div className="flex justify-between">
                <span>Service fee</span>
                <span>${serviceFee}</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${total}</span>
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" disabled={!dateRange.to || guests === '0'}>
          <CreditCard className="mr-2 h-4 w-4" /> Reserve
        </Button>
      </CardFooter>
    </Card>
  )
}

