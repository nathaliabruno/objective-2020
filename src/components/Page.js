import React from 'react';
import CharacterList from './CharacterList';
import Pagination from './Pagination';
import Header from './Header';



export default class Page extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      characters: null,
      currentPage: 1
    }


    this.updatePage = this.updatePage.bind(this);
  }

  fetchMarvel(id = null, name = null, page = 1) {
    if (id) {
      fetch(`https://gateway.marvel.com/v1/public/characters/${id}?apikey=f804a6ba72e8f9e0aa1f02098a4d9760&limit=10&hash=798cc55b71bd99cdbb17ea46e4d9ecc4&ts=1`)
        .then(res => res.json())
        .then((json) => {
            this.setState({characters: json.data, currentPage: page});
        })
    } else if (name) {
      fetch(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${name}&apikey=f804a6ba72e8f9e0aa1f02098a4d9760&limit=100&hash=798cc55b71bd99cdbb17ea46e4d9ecc4&ts=1`)
        .then(res => res.json())
        .then((json) => {
            this.setState({characters: json.data, currentPage: page});
        })
    } if (page) {
      let offset = page > 1 ? page * 10 : 0
      fetch(`https://gateway.marvel.com/v1/public/characters?apikey=f804a6ba72e8f9e0aa1f02098a4d9760&limit=10&hash=798cc55b71bd99cdbb17ea46e4d9ecc4&ts=1&offset=${offset}`)
        .then(res => res.json())
        .then((json) => {
            this.setState({characters: json.data, currentPage: page});
        })
    }
  }


  componentDidMount() {
    this.fetchMarvel(null, null, this.state.currentPage)
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


  render () {

    const {
        characters,
        currentPage
    } = this.state

    return (
      <div className="wrapper">
        <Header />
        <main className="main-content">
          {characters && <CharacterList props={characters.results} /> }
          {characters && <Pagination updatePage={this.updatePage} page={currentPage} total={characters.total} limit={characters.limit} />}
        </main>
      </div>
    )
  }
}