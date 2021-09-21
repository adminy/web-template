const Example = require('../components/example')
const backButton = require('./back-button.svg')

module.exports = (state, emit) => (
  <body>
    <section class='section'>
      <div class='container'>
        <h1 class='title'>
          Hello {state.params.name}
        </h1>
        <p class='subtitle'>
          Go <a href='/'><img src={backButton} width='48px' height='48px' /></a>
          <Example />
        </p>
      </div>
    </section>
  </body>
)
