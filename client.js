import {createClient} from '@sanity/client'

export default createClient({
  projectId: "hgry4f7y",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-03-08"
})
