export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-18'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'xscs6w0z',
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  process.env.SANITY_AUTH_TOKEN || 'skPt8jAdYHmyYZ2qxwSyW1nlD6FZ4rtSEKT9UWFfLo0am534oa454pzX1tCmv6CQdhN9e6yMMSyJ0yOOXDfuRCAzAtwtfWx5gIs9arC0KcBUEAUtJcd4azuALzQDAVXEeB6EsOhwq5XTXoUyrgZH8esy1Gp2V8i8secKP7jTgQ5rVPlngS1w',
  'Missing environment variable: NEXT_PUBLIC_SANITY_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
