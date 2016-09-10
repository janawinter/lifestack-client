import React from 'react'
import UserDetail from './UserDetail'
import SkillList from './SkillList'
import UserGame from './UserGame'

export default React.createClass({
    props: {
        user: React.PropTypes.object.isRequired
    },
    render () {
        return (
            <div className="profile">
                <UserDetail id={this.props.user.id}
                    username={this.props.user.username}
                    profile_pic={this.props.user.profile_pic} />
                <SkillList skillList={this.props.user.skillList} />

                <UserGame level ={this.props.user.level}
                    totalXp ={this.props.user.totalXp}
                    remainingXp ={this.props.user.remainingXp} />
            </div>
        )
    }
})
