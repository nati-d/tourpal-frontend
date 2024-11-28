'use client'

import { useState } from 'react'
import { Star, ChevronDown, ChevronUp } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const reviews = [
  {
    id: 1,
    author: 'John Doe',
    avatar: '/placeholder.svg?height=40&width=40&text=JD',
    rating: 5,
    content: 'Amazing place! The views were incredible and the cottage was so cozy. We loved every minute of our stay and can\'t wait to come back.',
    date: 'May 2023'
  },
  {
    id: 2,
    author: 'Jane Smith',
    avatar: '/placeholder.svg?height=40&width=40&text=JS',
    rating: 4,
    content: 'Lovely stay. The beach access was perfect. Only downside was some noise from nearby construction, but overall a great experience.',
    date: 'April 2023'
  },
  {
    id: 3,
    author: 'Mike Johnson',
    avatar: '/placeholder.svg?height=40&width=40&text=MJ',
    rating: 5,
    content: 'Absolutely stunning location. The cottage had everything we needed and more. Hosts were very responsive and helpful.',
    date: 'March 2023'
  },
  {
    id: 4,
    author: 'Emily Brown',
    avatar: '/placeholder.svg?height=40&width=40&text=EB',
    rating: 5,
    content: 'Perfect getaway spot. Clean, comfortable, and those ocean views! Well definitely be returning.',
    date: 'February 2023'
  },
]

export default function Reviews( ) {
  const [expanded, setExpanded] = useState(false)

  const visibleReviews = expanded ? reviews : reviews.slice(0, 2)

  return (
    <Card className='my-10'>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Star className="w-5 h-5 fill-primary mr-2" />
          4.8 · 28 reviews
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {visibleReviews.map((review) => (
            <div key={review.id} className="flex space-x-4">
              <Avatar>
                <AvatarImage src={review.avatar} alt={`${review.author}'s avatar`} />
                <AvatarFallback>{review.author[0]}</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h3 className="font-semibold">{review.author}</h3>
                <div className="flex items-center">
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <Star key={index} className="w-4 h-4 fill-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">{review.content}</p>
                <p className="text-sm text-muted-foreground">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
        {reviews.length > 2 && (
          <Button
            variant="ghost"
            className="mt-4 w-full"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? (
              <>
                <ChevronUp className="mr-2 h-4 w-4" /> Show less
              </>
            ) : (
              <>
                <ChevronDown className="mr-2 h-4 w-4" /> Show all {reviews.length} reviews
              </>
            )}
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

