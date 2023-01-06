// [slug].js
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import client from "../client";
import Link from "next/link";
import Script from 'next/script'
import styles from "../styles/Gallery.module.css";
import ModalImage from "react-modal-image";
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

// get the image url from the sanity asset
function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}
//end get the image url

//query get sanity data
export const getStaticProps = async () => {
  const query = groq`*[_type == "gallery"]`

  const data = await client.fetch(query)
  // console.log(data)
  return {
    props: { data }
  }
}
// end get data exported as 'data'

// the magic
const Gallery = ({ data }) => {


  const pictures = data.map(data => ({
    src: urlFor(data.imgUrl).url(),
    alt: `${data.title}`
  }));
console.log(pictures)
  
  return (
    <>
      <div className={styles.gallery}>
          {data.map(data => (
             <div key={data._id} className={styles.data}>
              <h3>{ data.title }</h3>
                 <img 
                      src={urlFor(data.imgUrl)
                      .width(300)
                      .url()}
                      alt={data.title}
                      className={styles.pic}
                />
            </div>
            ))
          }
      </div>
      <div style={{display: "flex"}}>
        <Carousel images={pictures} style={{height: 700}} widgetsHasShadow={true} hasCaptions={"top"}/>
      </div>
    </>
  )
}

export default Gallery