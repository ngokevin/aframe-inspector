var React = require('react');

export default class InputWidget extends React.Component {
  getInitialState: function() {
    return {value: this.props.value || ''};
  },
  onChange: function(e) {
    var value = e.target.value;
    this.setState({value: value});
    if (this.props.onChange)
      this.props.onChange(this.props.entity, this.props.componentname, this.props.name, value);
  },
  componentWillReceiveProps: function(newProps) {
    if (newProps.value != this.state.value) {
      this.setState({value: newProps.value});
    }
  },
  render: function() {
    return <input type="text" className="string" value={this.state.value} onChange={this.onChange}/>;
  }
}
