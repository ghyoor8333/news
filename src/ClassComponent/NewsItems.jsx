import React, { Component } from 'react'

export default class NewsItems extends Component {
    render() {
        return (
            <div className="col-lg-3 col-md-4 col-sm-6 col-12" >
                <div className="card">
                    <img src={this.props.pic} height="200px" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title.slice(0,100)+"..."}</h5>
                        <hr />
                        <p className="card-text" style={{height:"180px"}}>{this.props.description.slice(0,200)}</p>
                        <a target="_blank" href={this.props.url} className="btn btn-primary w-100 btn-sm">Read full article</a>
                    </div>
                </div>
            </div>
        )
    }
}

