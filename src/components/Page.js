import React from 'react';
import CharacterList from './CharacterList';
import Pagination from './Pagination';
import Header from './Header';
import Search from './Search';
import Details from './Details';



export default class Page extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      characters: null,
      currentPage: 1,
      search: '',
      detailsId: 0,
      details: {}
    }

    this.updatePage = this.updatePage.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.updateDetails = this.updateDetails.bind(this);
  }

  fetchMarvel(id = null, name = null, page = 1) {
    if (id) {
      fetch(`https://gateway.marvel.com/v1/public/characters/${id}?apikey=a09c7cee2afceec7a177ee8e2155acea&limit=10&hash=18ee8a5e6eb6d452811857293b1dd4ab&ts=1`)
        .then(res => res.json())
        .then((json) => {
            this.setState({details: json.data});
        })
    } else if (name) {
      fetch(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${name}&apikey=a09c7cee2afceec7a177ee8e2155acea&limit=100&hash=18ee8a5e6eb6d452811857293b1dd4ab&ts=1`)
        .then(res => res.json())
        .then((json) => {
            this.setState({characters: json.data, currentPage: page});
        })
    } if (page) {
      let offset = page > 1 ? page * 10 : 0
      fetch(`https://gateway.marvel.com/v1/public/characters?apikey=a09c7cee2afceec7a177ee8e2155acea&limit=10&hash=18ee8a5e6eb6d452811857293b1dd4ab&ts=1&offset=${offset}`)
        .then(res => res.json())
        .then((json) => {
            this.setState({characters: json.data, currentPage: page});
        })
    }
  }

  updatePage(type, pageNumber = this.state.currentPage) {

    switch (type) {
      case "increment":
        pageNumber < 150 ? this.setState({currentPage: pageNumber + 1}) : this.setState({currentPage: pageNumber});
        break;
      case "decrement":
        pageNumber > 1 ? this.setState({currentPage: pageNumber - 1}) : this.setState({currentPage: pageNumber});
        break;
      default:
        this.setState({currentPage: pageNumber});
        break;

    }
    this.fetchMarvel(null, null, pageNumber)
  }

  updateSearch(value) {

    if (value) {
      this.setState({search: value})
      this.fetchMarvel(null, value, null)
    }
    else {
      this.fetchMarvel(null, null, 1)
    }
  }

  updateDetails(id) {
    this.setState({detailsId: id})
    if (id !== 0) {
      this.fetchMarvel(id, null, null)
    } else {
      this.setState({details: {}})
    }
  }

  componentDidMount() {
    this.fetchMarvel(null, null, this.state.currentPage)
    this.fetchMarvel(this.state.detailsId, null, null)
  }

  render () {

    const {
        characters,
        currentPage,
        search
    } = this.state

    return (
      <div className="wrapper">
        <Header />
        <main className="main-content">
          <Search value={search} updateSearch={this.updateSearch} />
          {characters && <CharacterList updateDetails={this.updateDetails} characters={characters.results} /> }
          {characters && !search ? <Pagination updatePage={this.updatePage} page={currentPage} total={characters.total} limit={characters.limit} /> : null}
        </main>
        <Details details={this.state.details.results} updateDetails={this.updateDetails} id={this.state.detailsId}/>
      </div>
    )
  }
}