import useSWR from 'swr'

export function useFetch(url) {
  const { data, error } = useSWR(url, async url => {
    const response = await fetch(url);
    const data = response.json()
    return data;
  })

  return { data, error }
}