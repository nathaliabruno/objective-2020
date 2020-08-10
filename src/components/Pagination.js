import React from 'react';
import {isSmallScreen} from '../utils/index'


export default class Pagination extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      totalPages: Math.ceil(this.props.total / this.props.limit)
    }
  }

  isSmall = isSmallScreen()

  getPaginationArray(totalItems, count) {
    let pagination = []
    for (var i = 0; i < this.state.totalPages; i++) {
      pagination.push(
          {
              'pageNumber': i+1
          }
        )
    }
    return pagination;
  }


  getPaginationWidth(element, pageNumber) {
    const itemW = element.offsetWidth + 16
    const totalPages = this.props.total
    const ul = document.getElementById('pagination-list')
    const wrapper = document.querySelector('.content-pagination-wrapper')
    let width = (itemW * totalPages) + 'px'
    let wrapperWidth = (itemW * 5) + 'px'

    ul.style.width = width
    wrapper.style.width = wrapperWidth

    this.changePosition(ul, pageNumber, itemW)

    if (this.isSmall) {
        wrapper.style.width = (itemW * 3) + 'px'
    }
  }

  setActivePage() {
    const pageNumber = this.props.page;
    const pages = document.querySelectorAll('.content-pagination-list-item');

    let linkPage = document.querySelector(`#page_${pageNumber}`)

    if (linkPage) {

      for (let i = 0; i < pages.length; i++) {
        pages[i].classList.remove('--active')
      }

      linkPage.classList.add('--active')
      this.getPaginationWidth(linkPage, pageNumber)
    }
  }

  changePosition(ul, pageNumber, elSize) {
    const maxMove = this.state.totalPages - 3
    if ( pageNumber > 2 ) {
      let move = (pageNumber - 3) * elSize
      ul.style.marginLeft = `-${move}px`

      if (pageNumber > maxMove ) {
        let move = (maxMove - 2) * elSize
        ul.style.marginLeft = `-${move}px`
      }
    } else {
      ul.style.marginLeft = '0px'
    }
  }

  componentDidMount() {
    this.setActivePage()
  }

  componentDidUpdate() {
    this.setActivePage()
  }


  render () {

    const {
      total,
      limit,
      page,
      updatePage
    } = this.props;

    const paginationArray = this.getPaginationArray(total, limit);

    let first = page !== 1,
        last = page !== this.state.totalPages;

    let pages = [];

    paginationArray.map(page => {
      pages.push(<li className="content-pagination-list-item" id={`page_${page.pageNumber}`} key={`page_${page.pageNumber}`}><button onClick={(e) => updatePage('goTo', page.pageNumber) }>{page.pageNumber}</button></li> )
      return false
    })


    return (
      <nav className="content-pagination" id="pagination">
          <button className={`content-pagination-first ${!first && '--inactive'}`} onClick={ (e) => updatePage('goTo', 1) }> {'<<'} </button>
          <button className={`content-pagination-prev ${!first && '--inactive'}`} onClick={ (e) => updatePage('decrement') }> {'<'} </button>
          <div className="content-pagination-wrapper">
              <ul className="content-pagination-list" id="pagination-list" style={{marginLeft: 0}}>
                {pages}
              </ul>
          </div>
          <button className={`content-pagination-next ${!last && '--inactive'}`} onClick={ (e) => updatePage('increment') }> {'>'} </button>
          <button className={`content-pagination-last ${!last && '--inactive'}`} onClick={ (e) => updatePage('goTo', this.state.totalPages) }> {'>>'} </button>
      </nav>
    )
  }
}