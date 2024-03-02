import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import groq from 'groq'
import client from '../client'
import imageUrlBuilder from "@sanity/image-url";

import styles from '../styles/News.module.css'


function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

export default function News({posts}) {
    return ( 
    <>
      <Head>
        <title>News</title>
        <meta name="keywords" content="ninjas" />
      </Head>
        <div>
            <h3 className="">News</h3>
        </div>
      {posts.length > 0 && posts.map(
        ({ _id, title = '', slug = '', publishedAt = '' }) =>
          slug && (
            <div className={styles.main}>
            <p key={_id} className={styles.entry}>
              <Link href="/post/[slug]" as={`/post/${slug.current}`} className={styles.slug}>
                {title}:
              </Link>
              <span className={styles.date}>  {new Date(publishedAt).toDateString()}</span>
            </p>
            </div>
          )
      )}
    </>
  );
}
export async function getStaticProps() {
  const posts = await client.fetch(groq`
    *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
  `)
  return {
    props: {
      posts
    }
  }
}