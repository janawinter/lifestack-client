import request from 'superagent'
import {push} from 'react-router-redux'
const env = process.env.NODE_ENV || 'development'
const url = env === 'production' ? 'placeholderURL'
                                    :'http://localhost:3000'

export const updateSearch = (skill) => {
  return {
    type: "UPDATE_SEARCH",
    skill: skill
  }
}

export const retrieveSkill = (id) => {
  return function (dispatch) {
    request
      .get(`${url}/v1/skills/${id}`)
      .end((err, res) => {
        if (err) {
          // ERROR HANDLING HERE
          console.log(err)
        } else {
          dispatch(updateSearch(res.body.data))
          dispatch(push('/search'))
        }
      })
  }
}
