import React from 'react';
import NewsSlider from '../widgets/newsSlider/Slider';
import NewsList from '../widgets/newsList/NewsList';

const Home = () => {
  return (
      <div>
          <NewsSlider 
            type="featured"
            start={0}
            amount={3}
            settings = {{
                dots: false
            }}
          />
          <NewsList />
      </div>
  )
}

export default Home;