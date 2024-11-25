import React, { Component } from 'react';
import './App.css';
import meImage from './assets/me.jpeg';


class App extends Component {
  state = {
    shows: false,
    mountedTime: 0
  };

  timer = null;

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        mountedTime: prevState.mountedTime + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  toggleProfile = () => this.setState({ shows: !this.state.shows });

  render() {
    const { shows, mountedTime } = this.state;
    return (
      <div className="App">
        <button onClick={this.toggleProfile}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        {shows && (
          <div className="profile-card">
            <img src={meImage} alt="Profile" />

            <h2>Zakaria Jari</h2>
            <p>Chef Cuisinier</p>
            <p>Passionate about creating culinary experiences that blend tradition with innovation. I have honed my skills in top restaurants and strive to deliver excellence with every dish.</p>
          </div>
        )}
        <p>Time elapsed since component mounted: {mountedTime} seconds</p>
      </div>
    );
  }
}

export default App;
