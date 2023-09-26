import Image from 'next/image'
import Hero from '../../public/hero.png'
export default function Home() {
  return (
    <div className="flex items-center gap-24">
      <div className="flex-1 flex flex-col gap-12">
        <h1 className="text-[72px] title">
          Global Chronicles: Bringing the World to You
        </h1>
        <p className="text-[24px] font-light">
          Welcome to Penta News, your trusted source for timely and insightful
          news, delivering headlines that matter, when they matter.
        </p>
        <button className="p-5 cursor-pointer bg-[#66FCF1] border-none rounded w-max text-white">
          See My Work
        </button>
      </div>
      <div className="flex-1 flex flex-col gap-12">
        <Image src={Hero} className="w-24 h-[500px] object-cover" alt="home" />
      </div>
    </div>
  )
}
