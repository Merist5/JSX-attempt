var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <form className={contactForm}>
        <input
          className={"form-control"}
          type={"text"}
          placeholder={"Imię"}
          value={this.props.contact.firstName}>
        <input
          className={"form-control"}
          type={"text"}
          placeholder={"Nazwisko"}
          value={this.props.contact.lastName}>
        <input
          className={"form-control"}
          type={"Email"}
          placeholder={"Email"}
          defaultValue={this.props.contact.email}>
        React.createElement('button', {type: 'submit'}, "Dodaj kontakt")
      </form>
    )
  },
})