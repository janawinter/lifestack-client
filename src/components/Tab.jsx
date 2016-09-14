import React from 'react'
import SkillVideo from './SkillVideo'
import ReactDisqusThread from 'react-disqus-thread'

const env = process.env.NODE_ENV || 'development'
const clientURL = env === 'production' ? 'https://adulting.herokuapp.com/'
                                    :'http://localhost:5000'

export default React.createClass({
  props: {
    userId: React.PropTypes.number.isRequired,
    skillId: React.PropTypes.number.isRequired,
    videos: React.PropTypes.array.isRequired,
    onUpvote: React.PropTypes.func.isRequired,
    onDownvote: React.PropTypes.func.isRequired,
    onWatchedSkill: React.PropTypes.func.isRequired
  },
  render () {
    const videos = (this.props.videos || [])
      .sort((a, b) => a.votes < b.votes)
      .map(elem => {
        return <SkillVideo key={elem.id}
                    userId={this.props.userId}
                    video={elem}
                    onUpvote={this.props.onUpvote}
                    onDownvote={this.props.onDownvote} />
    })

    // Logged out tab
    if (this.props.userId === 0) {
      if (!this.props.skillId) {
        return (
          <div className="tab">
            <p>Select a skill and start browsing videos</p>
          </div>
        )
      } else {
        return (
          <div className="tab">
            <p>Log in to vote on the best videos!</p>
            {videos}
          </div>
        )
      }
    // Logged in tab
    } else {
      if (!this.props.skillId) {
        return (
          <div className="tab">
            <p>Select a skill and start browsing videos</p>
          </div>
        )
      } else {
        return (
          <div className="tab">
          <button
          className="got-it-btn"
          name={this.props.skillId}
          onClick={this.props.onWatchedSkill}>Got It!</button>
            {videos}
            <ReactDisqusThread
            shortname="hashtagadulting-co-nz"
            identifier={this.props.skillId}
            title="Post your comments here"
            url={`${clientURL}/search/${this.props.skillId}`}/>
          </div>
        )
      }
    }
  }
})
