import Image from 'next/image'

export default function Header() {
    return(
      <header className='h-16 md:flex md:px-24 sm:justify-center'>
        <div className='mx-auto text-center justify-center'>
            <Image src='/pictures/icon.png' alt="Logo" width={80} height={80} className='md:mr-8'/>
        </div>
        <h1 className='my-auto ml-6 text-2xl font-bold invisible md:visible' >Mon petit panneau</h1>
      </header>
    );
}