import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'next/router'
import { BarChart } from 'react-easy-chart'

import { getPeople } from '../../services/network'
import stringFrequency from '../../services/stringFrequency'

class ProfilePage extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  async componentDidMount() {
    const { id } = this.props.router.query
    const [{ name, email }] = await getPeople([id])
    this.setState({ name, email }) // eslint-disable-line
  }

  render() {
    const { name, email } = this.state || { name: 'Name', email: 'Email' }
    return (
      <div>
        <h1>{name}</h1>
        <p>{email}</p>
        {email && (
          <BarChart
            axes
            axisLabels={{ x: 'Letters', y: 'Count' }}
            height={500}
            width={650}
            data={stringFrequency(
              email
                .split('')
                .sort()
                .join(''),
            ).map(({ value, count }) => ({
              x: value,
              y: count,
            }))}
          />
        )}
      </div>
    )
  }
}

ProfilePage.propTypes = {
  router: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
}

export default withRouter(ProfilePage)
