import Head from 'next/head'
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";
import React, { useState } from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import styles from "../styles/Gallery.module.css";


// get the image url from the sanity asset
function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}
//end get the image url

//query get sanity data
export const getStaticProps = async () => {
  const query = groq`*[_type == "gallery" ]{
    "url": images.asset->url,
    images,
    title,
    description,
    projectLink,
    codeLink,
    tags
  }`
  const data = await client.fetch(query)
  return {
    props: { data }
  }
}
// end get data exported as 'data'

// the page magic
const Gallery = ({ data }) => {
// create an array of images to use for prev and next
const images = data.map(({ url }) => [url])
// end create an array

const [info, setInfo] = useState({img: '', i: 0})

const viewImage = (img, i)=>{
  setInfo({img, i})
}

const imgAction = (action) => {
  let i = info.i

  if(action === 'next-img'){
    setInfo({img: images[i + 1], i: i + 1})
  }
  if(action === 'prev-img'){
    setInfo({img: images[i - 1], i: i - 1})

  }
  if(!action){
    setInfo({img: '', i: 0})
  }
  }

  return (
    <>
    <Head>
      <title>Gallery</title>
      <meta name="keywords" content="gallery" />
    </Head>
    {info.img &&
      <div style={{
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgb(0, 0, 0, 0.75)',
        backdropFilter: 'blur(15px)',
        position: 'fixed',
        top: '0',
        left: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}>
      <button onClick={()=> imgAction()} style={{position: 'absolute', top: '20px', right: '20px', borderRadius: '5px 0px', border: '1px solid #0C0908'}}>X</button>
      <button onClick={()=> imgAction('prev-img')} style={{position: 'absolute', left: '5%', width: '80px', borderRadius: '5px 0px', border: '1px solid #0C0908'}}>Previous</button>
      <img src={info.img} style={{width: 'auto', maxWidth: '90%', maxHeight: '90%', borderRadius: '20px 0px', border: '1px solid #0C0908'}}/>
      <button onClick={()=> imgAction('next-img')} style={{ position: 'absolute', right: '5%', width: '80px', borderRadius: '5px 0px', border: '1px solid #0C0908', }}>Next</button>
    </div>
    }
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry gutter="20px">
                  { data.map((p, _key)=>( 
                  <div key={_key} className={styles.desc}>
                   <img 
                      key={_key}
                      src={urlFor(p.url).width(300).url()}
                      alt={p.title}
                      className={styles.pic}
                      onClick={()=> viewImage(p.url, _key)}
                    />
                    <div className={styles.desc}>{p.description}</div>
                  </div>
                  ))}
                </Masonry>
            </ResponsiveMasonry>
    </>
  )
}

export default Gallery