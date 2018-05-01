import React, { Component } from 'react';
import axios from 'axios';
import { URL } from '../../../../config';

import styles from '../../articles.css';
import Header from './Header';

export class VideoArticle extends Component {

  state = {
    article: [],
    team: []
  }

  componentWillMount() {
    axios.get(`${URL}/videos?id=${this.props.match.params.id}`)
    .then(res => {
      let article = res.data[0];
      axios.get(`${URL}/teams?id=${article.team}`)
        .then(res => {
          this.setState({
            article,
            team: res.data
          })
        })
    })
  }
  render() {
    const article = this.state.article;
    const team = this.state.team;
    return (
      <div>
        <Header teamData={team[0]} />
        <div className={styles.videoWrapper}>
          <h1>{article.title}</h1>
          <iframe
            title="videoplayer"
            width="100%"
            height="300px"
            src={`https://www.youtube.com/embed/${article.url}`}
          >
          </iframe>
        </div>
      </div>
    )
  }
}

export default VideoArticle
