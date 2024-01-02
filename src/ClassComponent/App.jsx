import React, { Component } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import Footer from './Footer'
export default class App extends Component {
  constructor(){
    super()
    this.state={
      language:"hi"
    }
  }
  changeLanguage=(data)=>{
    this.setState({language:data})
  }
  changeSearch=(data=>{
    this.setState({search:data})
  })
  render() {
    return (
      <BrowserRouter>
        <Navbar changeLanguage={this.changeLanguage} changeSearch={this.changeSearch}/>
        <Routes>
            <Route path='' element={<Home search={this.state.search} language={this.state.language}  q="All"/>}/>
            <Route path='/All' element={<Home search={this.state.search} language={this.state.language} q="All"/>}/>
            <Route path='/Politics' element={<Home search={this.state.search} language={this.state.language} q="Politics"/>}/>
            <Route path='/Education' element={<Home search={this.state.search} language={this.state.language} q="Education"/>}/>
            <Route path='/Crime' element={<Home search={this.state.search} language={this.state.language} q="Crime"/>}/>
            <Route path='/Science' element={<Home search={this.state.search} language={this.state.language} q="Science"/>}/>
            <Route path='/Technology' element={<Home search={this.state.search} language={this.state.language} q="Technology"/>}/>
            <Route path='/Entertainment' element={<Home search={this.state.search} language={this.state.language} q="Entertainment"/>}/>
            <Route path='/Sport' element={<Home search={this.state.search} language={this.state.language} q="Sport"/>}/>
            <Route path='/Cricket' element={<Home search={this.state.search} language={this.state.language} q="Cricket"/>}/>
            <Route path='/Covid-19' element={<Home search={this.state.search} language={this.state.language} q="Covid-19"/>}/>
            <Route path='/Jokes' element={<Home search={this.state.search} language={this.state.language} q="Jokes"/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    )
  }
}
