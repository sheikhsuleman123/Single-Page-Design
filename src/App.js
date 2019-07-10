import React,{Component} from 'react';
import './core.css';
import './App.css';

import Navigation from './components/Navigation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    view : "home"   
    };

  this.setView = this.setView.bind(this);
  } 

    componentDidMount() {
      $(".content").trastition({
        x: $(window).width() + 200,
        duration:300
      }).trastition({
        x:0,
        duration:300
      });
    }

  setView(view) {
    this.setState({
      view : view
    });
  }

  getView() {
    switch(this.state.view) {
      case "home":
      return <HomeView />
      case "profile":
       return <Profile />
      case "gallery":
      return <Gallery />
      case "contact":
       return <Contact />
                      
      }
}
  render() {
    return (
      <div className="wrapper fixed"> 
          <Navigation switchView={this.setView} />
          {this.getView()}
      </div>
    )
  }
}

class HomeView extends Component {
  constructor(props) {
      super(props);
  }
    render() {
    return (
      <div className="home-view content fixed">  

         </div>
    );
  }
}

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="profile-view content fixed">
      
      </div>
    );
  }
}

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="gallery-view content fixed">
      
      </div>
    );
  }
}

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="contact-view  content fixed">
      
      </div>
    );
  }
}
export default App;
