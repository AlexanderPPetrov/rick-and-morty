import { NOT_FOUND } from '@root/src/errors/statuses'

const graphqlHost: string = process.env.REACT_APP_GRAPHQL_URL as string
import { NotFoundError } from '@root/src/errors/NotFoundError'
export function fetchData<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(graphqlHost, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    })

    const json = await res.json()

    if (json.errors) {
      const { message, extensions } = json.errors[0]
      const status: number = extensions?.response?.status
      //For now, we will throw errors only if status is above 500
      if (status && status >= 500) {
        throw new Error(message)
      }
      if (status === NOT_FOUND) {
        throw new NotFoundError(
          extensions?.response?.body?.error ?? message,
          json.data,
          extensions.response.url,
        )
      }
      //For now, we will return null data so that we can handle it in the UI
      return json.data
    }

    return json.data
  }
}
