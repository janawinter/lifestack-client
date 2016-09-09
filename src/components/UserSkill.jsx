import React from 'react'

export default React.createClass({
  props: {
    skillName: React.PropTypes.string.isRequired,
    status: React.PropTypes.string.isRequired,
    skillXp: React.PropTypes.number.isRequired,
    showcase: React.PropTypes.string.isRequired
  },

  render() {
    return(
      <div className="user-skill">
        <table>
          <tr>
            <th>{this.props.skillName}</th>
            <td>{this.props.status}</td>
            <td>{this.props.skillXp}</td>
            <td>{this.props.showcase}</td>
          </tr>
        </table>
      </div>
    )
  }
})
