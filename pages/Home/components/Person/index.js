import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardHeader, CardBody, CardFooter } from 'react-simple-card'
import Link from 'next/link'

import styles from './styles'
import truncateChars from '../../../../services/truncateChars'

const Person = ({ id, name, email, jobTitle }) => (
  <Card style={styles.card}>
    <CardHeader>{name}</CardHeader>
    <CardBody>
      <p>{truncateChars(email, 30)}</p>
      <p>{truncateChars(jobTitle, 30)}</p>
    </CardBody>
    <CardFooter>
      <Link href={{ pathname: '/profile', query: { id } }}>
        <button>View more</button>
      </Link>
    </CardFooter>
  </Card>
)

Person.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
}

export default Person
