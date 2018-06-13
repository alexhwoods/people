import React from 'react'
import PropTypes from 'prop-types'

import findDuplicates from '../../../../services/findDuplicates'
import Duplicate from './components/Duplicate'
import actualDuplicates from './actualDuplicates'

class DuplicateDisplay extends React.Component {
  constructor() {
    super()
    this.state = { useExampleData: false }
  }

  render() {
    const { useExampleData } = this.state
    const duplicatesData = findDuplicates(
      useExampleData
        ? actualDuplicates
        : this.props.data.map(person => person.email),
    )

    return (
      <div>
        <label htmlFor="duplicateData">
          <input
            type="radio"
            value="option1"
            checked={useExampleData}
            onClick={() => this.setState({ useExampleData: !useExampleData })}
          />
          Use Fake Data
        </label>
        {duplicatesData &&
          duplicatesData.map(edge => (
            <Duplicate
              key={duplicatesData.indexOf(edge)}
              emails={[edge.u, edge.v]}
            />
          ))}
        {duplicatesData.length === 0 && <p>No Duplicates Found</p>}
      </div>
    )
  }
}

DuplicateDisplay.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default DuplicateDisplay
