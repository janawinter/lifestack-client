import React from 'react'
import SkillList from './SkillList'
import UserGame from './UserGame'

export default React.createClass({
    props: {
      params: React.PropTypes.object.isRequired,
      user: React.PropTypes.object.isRequired,
      onSkill: React.PropTypes.object.isRequired,
      onRandomSkill: React.PropTypes.object.isRequired,
      onLoad: React.PropTypes.func.isRequired,
      onClickUpload: React.PropTypes.func.isRequired,
      onDelete: React.PropTypes.func.isRequired
    },
    componentWillMount () {
      this.props.onLoad(this.props.params.id)
      this.props.onRandomSkill(this.props.params.id)
    },
    getRandom() {
      this.props.onRandomSkill(this.props.params.id)
    },
    render () {
        return (
            <div className="user-profile">
              <UserGame
                  id={this.props.user.id}
                  username={this.props.user.username}
                  profile_pic={this.props.user.profile_pic}level ={this.props.user.level}
                  totalXp ={this.props.user.totalXp}
                  remainingXp ={this.props.user.remainingXp} />
                <div>
                  Want to learn {this.props.randomSkill.skillName}? <br />
                  <span id={this.props.randomSkill.id} onClick={this.props.onSkill}>YES!</span><br />
                  <span onClick={this.getRandom}>Show me another skill</span>
                </div>
                <SkillList skillList={this.props.user.skillList}
                           onSkill={this.props.onSkill}
                           onClickUpload={this.props.onClickUpload}
                           onDelete={this.props.onDelete} />
            </div>
        )
    }
})
