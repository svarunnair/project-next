import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './componets/productCard'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
   <h1>haiii</h1>
   <Link href="/users">Users</Link>
   <ProductCard/>
 <input
        type="text"
        placeholder="Enter text..."
        color='black'
        className="border p-2 rounded-md"
      />
      <text>gfddsfghj</text>
      <text>gfddsfghj</text>

    </main>
  )
}
