import React from 'react'
import PropTypes from 'prop-types'

const Dropdown = ({ handleChange, selectedValue, values }) => (
  <select defaultValue={selectedValue} onChange={handleChange}>
    {values.map(value => (
      <option key={values.indexOf(value)} value={value}>
        {value}
      </option>
    ))}
  </select>
)

Dropdown.propTypes = {
  handleChange: PropTypes.func.isRequired,
  selectedValue: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Dropdown
