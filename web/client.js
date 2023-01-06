import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'u8cnyogk', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  apiVersion: '2021-10-21',  // use a UTC date string
  token: '', // or leave blank for unauthenticated usage sanity-auth-token
  useCdn: true // `false` if you want to ensure fresh data
})