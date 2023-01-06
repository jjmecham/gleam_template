import Link from 'next/link'
import Image from 'next/image';

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/gleam270w.png" alt="gleam graphics logo" width={135} height={70} />
            </div>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/gallery'>Gallery</Link>
            <Link href='/news'>News</Link>
            <Link href='/apidata'>API</Link>
        </nav>
     );
}
 
export default Navbar;