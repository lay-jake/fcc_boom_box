import './App.css';
import React,{useEffect,useState} from 'react'


const drumData =[
{title: 'Heater 1',key: 'Q',audio:'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'},
{title: 'Heater 2',key: 'W',audio:'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'},
{title: 'Heater 3',key: 'E',audio:'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'},
{title: 'Heater 4',key: 'A',audio:'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'},
{title: 'Clap',key: 'S',audio:'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'},
{title: 'Open HH',key: 'D',audio:'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'},
{title: 'Kick n\' hat',key: 'Z',audio:'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'},
{title: 'Kick',key: 'X',audio:'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'},
{title: 'Closed HH',key: 'C',audio:'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'},]



function App() {
  
  const [displayWindow,setDisplayWindow] = useState('');
  
  useEffect(() => {
    const keyDownHandler = event => {
      {
      playAudio(drumData.filter( obj => {return obj.key === event.key.toUpperCase()})[0].key)
    }};

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  function playAudio(key) {
   const audio = document.getElementById(key);
   audio.play();
   setDisplayWindow(drumData.filter( obj => {return obj.key === key.toUpperCase()})[0].title)
  }

  return (
    <div className="App">
      <header className="App-header">
      <div id='drum-machine'>
        <h5 id='title'>JDM v1.0</h5>
        <div className='drum-pads'>
          {drumData.map((obj) =>{
            return(
              <div className='drum-pad' id={obj.title} onClick={() => playAudio(obj.key)}>
                <h1>{obj.key}</h1>
                <audio id={obj.key} className='clip' src={obj.audio}></audio>
              </div>
            )})}

          </div>
        <div id='display'>
          <div>{displayWindow}</div>
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;
