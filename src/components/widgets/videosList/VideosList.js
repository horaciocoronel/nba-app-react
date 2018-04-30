import React, { Component } from 'react';
import styles from './videosList.css';
import axios from 'axios';
import { URL } from '../../../config';
import Button from '../buttons/Buttons';


export class VideosList extends Component {
  state = {
    teams: [],
    videos: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  }

  renderTitle = () => {
    return this.props.title ? (
      <h3><strong>NBA</strong> Videos</h3>
    ) : null
  }

  loadMore = () => {
    
  }
  

  renderButton = () => {
    return this.props.loadMore ? (
      <Button
        type="loadMore"
        loadMore={() => this.loadMore()}
        cta="Load More Videos"
      >

      </Button>
    ) : (
      <Button type="linkTo" cta="More Videos" linkTo="/videos" />
    )
  }
  
  

  render() {
    return (
      <div className={styles.videoList_wrapper}>
        {this.renderTitle()}
        {this.renderButton()}
      </div>
    )
  }
}

export default VideosList;
