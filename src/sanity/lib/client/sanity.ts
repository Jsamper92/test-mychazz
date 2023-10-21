import { createClient } from 'next-sanity'

import { dataset, projectId, useCdn, token } from '../../env';

export const client = createClient({
  dataset,
  projectId,
  useCdn,
  token,
})
