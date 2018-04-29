import React, { Component } from 'react';
import axios from 'axios';
import SliderTemplates from './SliderTemplates';

export class NewsSlider extends Component {
    state = {
        news:[]
    }

    componentWillMount() {
        axios.get(`http://localhost:3004/articles?_start=0&_end=3`)
            .then(res => {
                this.setState({
                    news: res.data
                })
            })
    }
  render() {
    return (
      <div>
        <SliderTemplates data={this.state.news} type="featured" />
      </div>
    )
  }
}

export default NewsSlider
