import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Layout from './hoc/layout/Layout';
import NewsArticle from './components/articles/news/post/Index';
import NewsMain from './components/articles/news/main/NewsMain';
import VideoArticle from './components/articles/videos/video/Index';

class Routes extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/articles/:id" exact component={NewsArticle} />
                    <Route path="/videos/:id" exact component={VideoArticle} />
                    <Route path="/news" exact component={NewsMain} />
                </Switch>
            </Layout>
        );
    }
}

export default Routes;
