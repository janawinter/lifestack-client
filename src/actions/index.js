import request from 'superagent'
import {push} from 'react-router-redux'
const env = process.env.NODE_ENV || 'development'
const url = env === 'production' ? 'placeholderURL'
                                    :'http://localhost:3000'

const updateSearch = (skill) => {
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

export const changeStatus = (skill_id, status) => {
  return function (dispatch, getState) {
    console.log(getState().user.id, skill_id, status)
    request
      .put(`${url}/v1/users/${getState().user.id}/status`)
      .send({status: status, skill_id: skill_id})
      .end((err, res) => {
        if (err) {
          console.log(err)
        } else {
          console.log(res)
        }
      })
  }
}

export const getUserDetails = (id) => {
  return function (dispatch) {
    request
      .get(`${url}/v1/users/${id}`)
      .end((err, res) => {
        if (err) {
          // ERROR HANDLING HERE
          console.log(err)
        } else {
          dispatch(setUser(res.body.data))
        }
      })
  }
}

const setUser = (user) => {
  return {
    type: "SET_USER",
    user: user
  }
}
