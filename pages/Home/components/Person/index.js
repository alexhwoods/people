import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardHeader, CardBody } from 'react-simple-card'

import styles from './styles'
import truncateChars from '../../../../services/truncateChars'

const Person = ({ name, email, jobTitle }) => (
  <Card style={styles.card}>
    <CardHeader>{name}</CardHeader>
    <CardBody>
      <p>{truncateChars(email, 30)}</p>
      <p>{truncateChars(jobTitle, 30)}</p>
    </CardBody>
  </Card>
)

Person.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
}

export default Person
