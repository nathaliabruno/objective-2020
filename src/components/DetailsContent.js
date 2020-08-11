import React from 'react';
import {generateThumbURL} from '../utils/index'
import DetailsList from './DetailsList'

export default class DetailsContent extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      series: {},
      events: {}
    }
  }

  getSeries(id) {
    fetch(`https://gateway.marvel.com/v1/public/characters/${id}/series?apikey=a09c7cee2afceec7a177ee8e2155acea&limit=100&hash=18ee8a5e6eb6d452811857293b1dd4ab&ts=1`)
    .then(res => res.json())
    .then((json) => {
      this.setState({series: json.data.results})
    })
  }

  getStories(id) {
    fetch(`https://gateway.marvel.com/v1/public/characters/${id}/events?apikey=a09c7cee2afceec7a177ee8e2155acea&limit=100&hash=18ee8a5e6eb6d452811857293b1dd4ab&ts=1`)
    .then(res => res.json())
    .then((json) => {
      this.setState({events: json.data.results})
    })
  }

  componentDidMount() {
    this.getSeries(this.props.id)
    this.getStories(this.props.id)
  }

  render() {
    const {
      name,
      thumbnail,
      description
    } = this.props.characterDetails[0]

    const {
      series,
      events
    } = this.state

    return (
      <div className="details-content">
        <h4 id="character-name" className="details-content-title">{name}</h4>
        <div className="details-content-infos">
          <img src={generateThumbURL(thumbnail)} id="character-image" alt={name} className="details-content-image" />
          <p className="details-content-description" id="character-description">
            {description}
          </p>
        </div>
        <div className="details-content-columns">
          <section className="details-content-section">
            <h5 className="details-content-section-title">Series</h5>
            {series && <DetailsList list={series} />}
          </section>
          <section className="details-content-section">
            <h5 className="details-content-section-title">Events</h5>
            {events && <DetailsList list={events} />}
          </section>
        </div>
      </div>
      )
    }
  }

