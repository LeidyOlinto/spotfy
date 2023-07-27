import { Home as HomeIcon, Heart, Search, Library, Play, ChevronLeft, ChevronRight, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Volume, Maximize2, Laptop2 } from 'lucide-react'
import Image from 'next/image'
import { Footer } from './components/Footer'
import { Sidebar } from './components/Sidebar'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className='flex items-center gap-3'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className=' rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>
          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href='#' className='bg-white/10 group rounded flex items-center h-20 gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <Image src='/album.jpg' width={80} height={80} alt='Capa do album Wasting Light da banda Foo Fighters' />
              <strong>Wasting Light</strong>
              <button className=' w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/10 group rounded flex items-center h-20 gap-4 overflow-hidden  hover:bg-white/20 transition-colors'>
              <Image src='/album.jpg' width={80} height={80} alt='Capa do album Wasting Light da banda Foo Fighters' />
              <strong>Wasting Light</strong>
              <button className=' w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/10 group rounded flex items-center h-20 gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <Image src='/album.jpg' width={80} height={80} alt='Capa do album Wasting Light da banda Foo Fighters' />
              <strong>Wasting Light</strong>
              <button className=' w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/10 group rounded flex items-center h-20 gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <Image src='/album.jpg' width={80} height={80} alt='Capa do album Wasting Light da banda Foo Fighters' />
              <strong>Wasting Light</strong>
              <button className=' w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/10 group rounded flex items-center h-20 gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <Image src='/album.jpg' width={80} height={80} alt='Capa do album Wasting Light da banda Foo Fighters' />
              <strong>Wasting Light</strong>
              <button className=' w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/10 group rounded flex items-center h-20 gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <Image src='/album.jpg' width={80} height={80} alt='Capa do album Wasting Light da banda Foo Fighters' />
              <strong>Wasting Light</strong>
              <button className=' w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
          </div>

          <h2 className='font-semibold text-2xl mt-10'> Made for Leidy Olinto</h2>

          <div className='grid grid-cols-5 gap-4 mt-4'>
            <a href='' className='bg-white/5 p-3 group rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <div className='relative '>
                <Image src='/album.jpg' className='w-full' width={120} height={120} alt='Capa do album Wasting Light da banda Foo Fighters' />
                <button className='absolute flex items-center justify-center pl-1 bottom-2 right-2 w-9 h-9 rounded-full bg-green-500 text-black   invisible group-hover:visible'>
                  <Play />
                </button>
              </div>
              <strong className='font-semibold'> Daily Mix 1</strong>
              <span className='text-xs text-zinc-500'>Wallows, Coin, girl in red and more</span>
            </a>
            <a href='' className='bg-white/5 p-3 group rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <div className='relative '>
                <Image src='/album.jpg' className='w-full' width={120} height={120} alt='Capa do album Wasting Light da banda Foo Fighters' />
                <button className='absolute flex items-center justify-center pl-1 bottom-2 right-2 w-9 h-9 rounded-full bg-green-500 text-black   invisible group-hover:visible'>
                  <Play />
                </button>
              </div>
              <strong className='font-semibold'> Daily Mix 1</strong>
              <span className='text-xs text-zinc-500'>Wallows, Coin, girl in red and more</span>
            </a>
            <a href='' className='bg-white/5 p-3 group rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <div className='relative '>
                <Image src='/album.jpg' className='w-full' width={120} height={120} alt='Capa do album Wasting Light da banda Foo Fighters' />
                <button className='absolute flex items-center justify-center pl-1 bottom-2 right-2 w-9 h-9 rounded-full bg-green-500 text-black   invisible group-hover:visible'>
                  <Play />
                </button>
              </div>
              <strong className='font-semibold'> Daily Mix 1</strong>
              <span className='text-xs text-zinc-500'>Wallows, Coin, girl in red and more</span>
            </a>
            <a href='' className='bg-white/5 p-3 group rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <div className='relative '>
                <Image src='/album.jpg' className='w-full' width={120} height={120} alt='Capa do album Wasting Light da banda Foo Fighters' />
                <button className='absolute flex items-center justify-center pl-1 bottom-2 right-2 w-9 h-9 rounded-full bg-green-500 text-black   invisible group-hover:visible'>
                  <Play />
                </button>
              </div>
              <strong className='font-semibold'> Daily Mix 1</strong>
              <span className='text-xs text-zinc-500'>Wallows, Coin, girl in red and more</span>
            </a>
            <a href='' className='bg-white/5 p-3 group rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <div className='relative '>
                <Image src='/album.jpg' className='w-full' width={120} height={120} alt='Capa do album Wasting Light da banda Foo Fighters' />
                <button className='absolute flex items-center justify-center pl-1 bottom-2 right-2 w-9 h-9 rounded-full bg-green-500 text-black   invisible group-hover:visible'>
                  <Play />
                </button>
              </div>
              <strong className='font-semibold'> Daily Mix 1</strong>
              <span className='text-xs text-zinc-500'>Wallows, Coin, girl in red and more</span>
            </a>

          </div>

        </main>
      </div>
      <Footer />
    </div>
  )
}
