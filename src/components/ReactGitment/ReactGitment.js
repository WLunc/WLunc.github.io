import React, { Component } from 'react'
import Gitment from 'gitment'
import 'gitment/style/default.css'

export default class ReactGitment extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const gitment = new Gitment({
      id: 'Your page ID', // optional
      owner: 'Your GitHub ID',
      repo: 'The repo to store comments',
      oauth: {
        client_id: 'Your client ID',
        client_secret: 'Your client secret',
      },
      // ...
      // For more available options, check out the documentation below
    })
    gitment.render('comments');
  }

  render() {
    return (
      <div id="comments"/>
    )
  }
}