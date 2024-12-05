import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Button>Click me - default</Button>
      <Button variant={'destructive'} size={'sm'}>
        Click me - destructive, sm
      </Button>
      <Button variant={'outline'} size={'lg'}>
        Click me - outline, lg
      </Button>
      <Button variant={'secondary'} size={'icon'}>
        Click me - secondary, icon
      </Button>
    </div>
  )
}
