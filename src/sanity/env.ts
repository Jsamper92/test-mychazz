export const apiVersion = `${process.env.SANITY_STUDIO_SANITY_DATASET}-${Date.now()}`;

export const dataset = assertValue(
  process.env.SANITY_STUDIO_SANITY_DATASET,
  'Missing environment variable: SANITY_STUDIO_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.SANITY_STUDIO__SANITY_PROJECT_ID,
  'Missing environment variable: SANITY_STUDIO__SANITY_PROJECT_ID'
)

export const token = process.env.SANITY_AUTH_TOKEN;


export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
