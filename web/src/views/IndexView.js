import React from 'react'

export default class Index extends React.Component {
  componentWillMount() {
    document.title = 'Blumpa'
  }

  render() {
    return (
      <section className="hero is-primary is-bold is-medium">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Cartola</h1>
            <h2 className="subtitle">
              Um jeito <strong>não oficial</strong> de visualizar seu Cartola ⚽
            </h2>
            <a className="button">Entrar</a>
          </div>
        </div>
      </section>
    )
  }
}
