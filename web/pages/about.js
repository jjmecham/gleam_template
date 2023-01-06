import Head from 'next/head'
import styles from '../styles/About.module.css'

const About = () => {
    return ( 
    <>
      <Head>
        <title>About</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <h3 className={styles.title}>About</h3>
        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla corrupti nisi perferendis debitis reiciendis laboriosam, facilis deleniti iusto enim totam repellat reprehenderit. Neque inventore error explicabo saepe non vero praesentium.</p>
        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla corrupti nisi perferendis debitis reiciendis laboriosam, facilis deleniti iusto enim totam repellat reprehenderit. Neque inventore error explicabo saepe non vero praesentium.</p>
    </>
     );
}
 
export default About
