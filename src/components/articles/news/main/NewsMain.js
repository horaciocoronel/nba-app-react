import React from 'react';
import NewsSlider from '../../../widgets/newsSlider/Slider';
import NewsList from '../../../widgets/newsList/NewsList';

const NewsMain = () => (
  <div>
    <NewsSlider 
      type="featured"
      settings={{dots: false}}
      start={0}
      amount={3}
    />
    <NewsList 
      type="cardMain"
      loadMore={true}
      start={3}
      amount={3}
    />
  </div>
)

export default NewsMain;
