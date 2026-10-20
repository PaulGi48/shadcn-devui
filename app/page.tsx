import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinners"


export default function Home() {
  return (
    <div className="flex min-h-svh items-center justify-center">
      <Button>Click me</Button>
      <Spinner>LOADING</Spinner>
    </div>
  )
}