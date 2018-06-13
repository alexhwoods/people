import React from 'react'
import PropTypes from 'prop-types'

const Duplicate = ({ emails }) => (
  <div>{emails && <p>{emails.join(' : ')}</p>}</div>
)

Duplicate.propTypes = {
  emails: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Duplicate
