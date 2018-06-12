import axios from 'axios'
import getConfig from 'next/config'

// eslint-disable-next-line import/prefer-default-export
export const getPeople = async ids => {
  const { publicRuntimeConfig } = getConfig()
  const config = {
    method: 'get',
    url: `${publicRuntimeConfig.apiUrl}v2/people.json${ids && `?ids=${ids}`}`,
    headers: {
      Authorization: `Bearer ${publicRuntimeConfig.apiKey}`,
      'Acess-Control-Allow-Origin': '*',
    },
  }

  const response = await axios(config)
  const { data: { data } } = response

  return data.map(person => ({
    id: person.id,
    name: person.display_name,
    email: person.email_address,
    jobTitle: person.title,
  }))
}
