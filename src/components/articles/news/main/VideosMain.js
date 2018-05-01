import React from 'react';
import VideosList from '../../../widgets/videosList/VideosList';
import NewsSlider from '../../../widgets/newsSlider/Slider';
import NewsList from '../../../widgets/newsList/NewsList';

const VideosMain = () => (
  <div>
    <VideosList  
      type="card"
      title={false}
      loadMore={true}
      start={0}
      amount={10}
    />
  </div>
)

export default VideosMain;
