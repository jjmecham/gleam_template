import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import client from '../client'
import Link from 'next/link'
import groq from 'groq'

const inter = Inter({ subsets: ['latin'] })
const About = () => {
  return (
      <>
      <Head>
        <title>About</title>
        <meta name="keywords" content="about" />
      </Head>
      <div className=" bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 w-auto sm:rounded-lg">
        <h3 className="">About</h3>
        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla corrupti nisi perferendis debitis reiciendis laboriosam, facilis deleniti iusto enim totam repellat reprehenderit. Neque inventore error explicabo saepe non vero praesentium.</p>
        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla corrupti nisi perferendis debitis reiciendis laboriosam, facilis deleniti iusto enim totam repellat reprehenderit. Neque inventore error explicabo saepe non vero praesentium.</p>
        <Link href="/apidata" className="block w-40 p-2 mt-5 ml-auto mr-auto bg-indigo-500 rounded text-white text-center">
          See API Items
        </Link>
      </div>
        </>
     );
}
 
export default About