import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      image: undefined,
    };

    this.fetchRandomDogImage = this.fetchRandomDogImage.bind(this);
  };

  async fetchRandomDogImage() {
    this.setState(
      { image: undefined },
      async () => {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const jsonResponse = await response.json();
        const { message } = jsonResponse;
        this.setState({
          image: message,
        })
      })
  }

  componentDidMount() {
    this.fetchRandomDogImage();
  }

  renderRandomDogImage() {
    const { image } = this.state;
    return (
      <>
        <img src={image} alt="dog aleatório do dia" />
      </>
    );
  };

  render() {
    const loadingMessage = <span>loading...</span>
    const { image } = this.state

    return (
      <div className="App">
        <h1>Dog aleatório do dia:</h1>
        {image ? this.renderRandomDogImage() : loadingMessage}
        <button type="button" onClick={this.fetchRandomDogImage}>quer ver mais um?</button>
      </div>
    );
  }
};

export default App;
