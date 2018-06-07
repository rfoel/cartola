import React, { Component } from 'react'

export default class DefaultLayout extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <main className="flex-grow">{this.props.children}</main>
      </div>
    )
  }
}
