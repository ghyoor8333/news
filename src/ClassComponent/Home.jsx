import React, { Component } from 'react'
import NewsItems from './NewsItems'

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      articles: [],
      totalResults: 0,

    }
  }
  async getApiData() {
    if (this.props.search !== "")
      var response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search}&language=${this.props.language}&apiKey=02de8145e98f451688054e11dd25c440`)
    else
      var response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&language=${this.props.language}&apiKey=02de8145e98f451688054e11dd25c440`)
    var result = await response.json()
    this.setState({ type: this.props.search })
    this.setState({
      type: this.props.search,
      articles: result.articles,
      totalResults: result.totalResults
    })
  }

  componentDidMount() {
    this.getApiData()
  }
  componentDidUpdate(old) {
    if (this.props.q !== old.q || this.props.language !== old.language || this.props.search !==old.search) {
      this.getApiData()
    }
  }
  render() {
    return (
      <div className='container-fluid'>
        <h5 className='text-center p-2'>{(this.props.search && this.props.search) || this.props.q} News Section</h5>
        <div className="row">
          {
            this.state.articles.map((item, index) => {
              return <NewsItems key={index}
                title={item.title}
                source={item.source}
                description={item.description}
                pic={item.urlToImage}
                date={item.publishedAt}
                url={item.url}
              />
            })
          }
        </div>

      </div>
    )
  }
}
