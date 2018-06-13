import React from 'react'
import PropTypes from 'prop-types'
import { BarChart } from 'react-easy-chart'

import stringFrequency from '../../../../services/stringFrequency'

class FrequencyDisplay extends React.Component {
  constructor() {
    super()
    this.state = { frequencyData: undefined }
  }

  componentDidMount() {
    const frequencyData = stringFrequency(
      this.props.data
        .map(person => person.email)
        .reduce((accumulator, currentValue) => currentValue.concat(accumulator))
        .split('')
        .sort()
        .join(''),
    )
    this.setState({ frequencyData }) // eslint-disable-line react/no-did-mount-set-state
  }

  render() {
    const { frequencyData } = this.state
    return (
      <div>
        {frequencyData && (
          <BarChart
            axes
            axisLabels={{ x: 'Letters', y: 'Count' }}
            height={500}
            width={650}
            data={frequencyData.map(({ value, count }) => ({
              x: value,
              y: count,
            }))}
          />
        )}
      </div>
    )
  }
}

FrequencyDisplay.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default FrequencyDisplay
