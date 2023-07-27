import { Image, Play } from "lucide-react"

export function Navbar(){
  return(

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
  )
}