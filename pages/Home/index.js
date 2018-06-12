import React from 'react'

import styles from './styles'
import Person from './components/Person'
import Dropdown from './components/Dropdown'
import { getPeople } from '../../services/network'

class Home extends React.Component {
  constructor() {
    super()
    this.state = { data: undefined, display: 'data' }
  }
  async componentDidMount() {
    const data = await getPeople()
    this.setState({ data }) // eslint-disable-line react/no-did-mount-set-state
  }

  render() {
    const { data, display } = this.state
    return (
      <div style={styles.container}>
        <Dropdown
          handleChange={({ target: { value } }) =>
            this.setState({ display: value })
          }
          values={['data', 'frequency', 'duplicates']}
          selectedValue="data"
        />
        <div style={styles.container}>
          {display === 'data' &&
            data &&
            data.map(person => (
              <Person key={data.indexOf(person)} {...person} />
            ))}
        </div>
      </div>
    )
  }
}

export default Home
