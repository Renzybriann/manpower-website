// File: src/sanityClient.js
import {createClient} from '@sanity/client'

export default createClient({
  // Find this in your sanity.json or on sanity.io/manage
  projectId: 'bn7cdelx', 
  dataset: 'production',
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: '2024-07-22', // use a UTC date string
});