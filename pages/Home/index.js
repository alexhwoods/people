import React from 'react'

import styles from './styles'
import Person from './components/Person'

const data = [
  {
    name: 'Jessica Mendez',
    email: 'jessicamendez@gmail.com',
    jobTitle: 'Journalist',
  },
  {
    name: 'Ryan Dursley',
    email: 'ryandursley@gmail.com',
    jobTitle: 'Marketer',
  },
  {
    name: 'Jessica Mendez',
    email: 'jessicamendez@gmail.com',
    jobTitle: 'Journalist',
  },
  {
    name: 'Ryan Dursley',
    email: 'ryandursley@gmail.com',
    jobTitle: 'Marketer',
  },
  {
    name: 'Jessica Mendez',
    email: 'jessicamendez@gmail.com',
    jobTitle: 'Journalist',
  },
  {
    name: 'Ryan Dursley',
    email: 'ryandursley@gmail.com',
    jobTitle: 'Marketer',
  },
  {
    name: 'Jessica Mendez',
    email: 'jessicameaaaaaaaaandez@gmail.com',
    jobTitle: 'Journalist',
  },
  {
    name: 'Ryan Dursley',
    email: 'ryandursley@gmail.com',
    jobTitle: 'Marketer',
  },
  {
    name: 'Jessica Mendez',
    email: 'jessicamendez@gmail.com',
    jobTitle: 'Journalist',
  },
  {
    name: 'Ryan Dursley',
    email: 'ryandursley@gmail.com',
    jobTitle: 'Marketer',
  },
  {
    name: 'Jessica Mendez',
    email: 'jessicamendez@gmail.com',
    jobTitle: 'Journalist',
  },
  {
    name: 'Ryan Dursley',
    email: 'ryandursley@gmail.com',
    jobTitle: 'Marketer',
  },
]

export default () => (
  <div style={styles.container}>
    {data.map(person => <Person key={data.indexOf(person)} {...person} />)}
  </div>
)
