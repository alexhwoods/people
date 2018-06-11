import axios from 'axios'
import getConfig from 'next/config'

// eslint-disable-next-line import/prefer-default-export
export const getPeople = async () => {
  const { publicRuntimeConfig } = getConfig()
  const config = {
    method: 'get',
    url: `${publicRuntimeConfig.apiUrl}v2/people.json`,
    headers: {
      Authorization: `Bearer ${publicRuntimeConfig.apiKey}`,
      'Acess-Control-Allow-Origin': '*',
    },
  }

  const response = await axios(config)
  const { data: { data } } = response

  return data.map(person => ({
    name: person.display_name,
    email: person.email_address,
    jobTitle: person.title,
  }))
}
