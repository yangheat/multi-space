import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card>
        <CardContent className="grid gap-4 p-6">
          <Link href="/utils">
            <Button className="w-full" variant="outline">
              Go to About Utils
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
