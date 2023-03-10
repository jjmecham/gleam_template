// [slug].js
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import client from "../../client";
import Link from "next/link";

import styles from "../../styles/Post.module.css";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <img
          alt={value.alt || " "}
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit("max").auto("format")}
        />
      );
    },
  },
};

const Post = ({ post }) => {
  const { title, name, categories, authorImage, body = [], mainImage } = post;
  return (
    <article className={styles.article}>
      <h1>{title}</h1>
      {mainImage && (
        <div style={{display: 'flex' }}>
          <img
            className={styles.picture}
            src={urlFor(mainImage).width(500).url()}
            alt={`${name}'s picture`}
          />
          <div className={styles.post}>
           <PortableText value={body} components={ptComponents}/>
          </div>
        </div>
      )}
     
     {categories && (
        <ul className={styles.tags}>
          {categories.map((category) => (
            <li key={category} >{category}</li>
          ))}
        </ul>
      )}
      <span>By {name}</span>
      {authorImage && (
        <div>
          <img
            src={urlFor(authorImage).width(100).url()}
            alt={`${name}'s picture`}
            className={styles.authorPic}
          />
        </div>
      )}
      <Link href="/news" className={styles.btn}>
        Back
      </Link>
    </article>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  mainImage,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
}`;
export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const post = await client.fetch(query, { slug });
  return {
    props: {
      post,
    },
  };
}
export default Post;
