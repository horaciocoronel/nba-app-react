import React, { Component } from 'react';
import axios from 'axios';
import { URL } from '../../../../config';
import styles from '../../articles.css';
import Header from './Header';

export class NewsArticles extends Component {
  state = {
    article: [],
    team: [],
  }

  componentWillMount() {
    axios.get(`${URL}/articles?id=${this.props.match.params.id}`)
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
      <div className={styles.articleWrapper}>
        <Header
          teamData = {team[0]}
          articleDate = {article.date}
          author = {article.author}
        />
        <div className={styles.articleBody}>
          <h1>{article.title}</h1>
          <div className={styles.articleImage}
            style={{
              background: `url('/images/articles/${article.image}')`
            }}
          >
          </div>
          <div className={styles.articleText}>
            {article.body}
          </div>
        </div>
        
      </div>
    )
  }
}

export default NewsArticles