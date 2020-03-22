import React from 'react';
import './App.css';
import Main from './components/main';
import { Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import {Link} from 'react-router-dom';
function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Manuprasad M" scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/about">About Me</Link>
                <Link to="/project">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Manuprasad M">
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/about">About Me</Link>
                <Link to="/project">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
        <div className="page-content" />
          <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
