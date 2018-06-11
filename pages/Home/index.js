import React from 'react'

import styles from './styles'
import Person from './components/Person'
import { getPeople } from '../../services/network'

class Home extends React.Component {
  constructor() {
    super()
    this.state = { data: undefined }
  }
  async componentDidMount() {
    const data = await getPeople()
    this.setState({ data }) // eslint-disable-line react/no-did-mount-set-state
  }

  render() {
    const { data } = this.state
    return (
      <div style={styles.container}>
        {data &&
          data.map(person => <Person key={data.indexOf(person)} {...person} />)}
      </div>
    )
  }
}

export default Home
