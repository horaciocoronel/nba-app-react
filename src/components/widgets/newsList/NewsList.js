import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { URL } from '../../../config';
import styles from './newsList.css';
import Button from '../buttons/Buttons';
import CardInfo from '../../widgets/cardInfo/CardInfo';
import VideosList from '../videosList/VideosList';

export class NewsList extends Component {
    state = {
        items: [],
        teams: [],
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount
    }

    componentWillMount() {
      this.request(this.state.start, this.state.end)
    }

    request = (start, end) => {
      if(this.state.teams.length < 1) {
        axios.get(`${URL}/teams`)
          .then(res => {
            this.setState({teams: res.data})
          })
      }
      axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
          .then(res => {
            this.setState({
              items: [...this.state.items, ...res.data],
              start,
              end
            })
          })
    }

    loadMore = () => {
      let end = this.state.end + this.state.amount;
      this.request(this.state.end, end);
    }
    

    renderNews = (type) => {
      let template = null;
      switch(type) {
        case('card'):
          template = this.state.items.map((item, i) => (
            <CSSTransition
              classNames={{
                enter: styles.newsList_wrapper,
                enterActive: styles.newsList_wrapper_enter
              }}
              timeout={500}
              key={i}
            >
              <div>
                <div className={styles.newsList_item}>
                  <Link to={`articles/${item.id}`}>
                  <CardInfo teams={this.state.teams} teamId={item.team} articleDate={item.date} />
                    <h2>{item.title}</h2>
                  </Link>
                </div>
              </div>
            </CSSTransition>
          ));
          break;
        case('cardMain'):
          template= this.state.items.map((item, i) => (
            <CSSTransition
              classNames={{
                enter: styles.newsList_wrapper,
                enterActive: styles.newsList_wrapper_enter
              }}
              timeout={500}
              key={i}
            >
            <Link to={`/articles/${item.id}`}>
            <div className={styles.flex_wrapper}>
              <div className={styles.left}
                style={{
                  background: `url('/images/articles/${item.image}')`
                }}>
                <div></div>
                </div>
                <div className={styles.right}>
                  <CardInfo teams={this.state.teams} teamId={item.team} articleDate={item.date} />
                  <h2>{item.title}</h2>
                </div>
            </div>
            </Link>
            </CSSTransition>
          ))
          break;
        default:
          template = null;
      }
      return template;
    }
    
  render() {
    return (
      <div>
        <TransitionGroup
          component="div"
          className="list"
        >
          {this.renderNews(this.props.type)}
        </TransitionGroup>
        <Button 
          type="loadMore"
          loadMore={this.loadMore}
          cta={"Load More News"}
        />
        <VideosList 
          type="card"
          title={true}
          loadMore={true}
          start={0}
          amount={3}
        />
      </div>
    )
  }
}

export default NewsList
