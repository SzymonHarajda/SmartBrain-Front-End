import React, {useState} from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import ParticlesBg from 'particles-bg'



function App() {
  const [input, inputState]=useState('');
  const [imgURL, imgURLState]=useState('');
  const [box,boxState]=useState([]);
  const [route, routeState]=useState('signin');
  const [isSignedIn, isSignedInState]=useState(false);
  const [user, userState] = useState({
    id: '',
    name: '',
    email: '',
    password: '',
    enries: 0,  
    joined: ''
  })



  const setupClarifaiRequest=(imageURL)=>{
    const PAT = '7cbab129482f461a9eac2b56f8a6c73c';
    const USER_ID = 'wnammmq0x3moa';       
    const APP_ID = 'APIFun';
    const IMAGE_URL = imageURL;

    const raw = JSON.stringify({
        "user_app_id": {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        "inputs": [
            {
                "data": {
                    "image": {
                        "url": IMAGE_URL
                    }
                }
            }
        ]
    });

    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Key ' + PAT
        },
        body: raw
    };
    return requestOptions;
  }
  const calculateFaceLocation=(datas)=>{
    const clarifaiFace = datas.outputs[0].data.regions.map(face =>{
      const faceCoordinates = face.region_info.bounding_box;

    const image = document.getElementById('inputImage');
    const width= Number(image.width);
    const height= Number(image.height);
    return {
      leftCol: faceCoordinates.left_col * width,
      topRow: faceCoordinates.top_row * height,
      rightCol: width-(faceCoordinates.right_col * width),
      bottomRow: height-(faceCoordinates.bottom_row * height),
    }
  })
  return clarifaiFace;
  }
  const displayFaceBox=(boxes)=>{
    boxState(boxes);
  }

  const onInputChange = (event)=>{  
    inputState(event.target.value);
    
  }
  const onSubmit = () => {
    imgURLState(input+`?${Date.now()}`);
    fetch("https://api.clarifai.com/v2/models/" + 'face-detection' + "/outputs", setupClarifaiRequest(input))
      .then(result => result.json())
      .then(response => {
        const numberOfFaces = response.outputs[0].data.regions.length;
        displayFaceBox(calculateFaceLocation(response));
        if (response) {
          fetch('http://localhost:3001/image', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: user.id,
              numberOfFaces: numberOfFaces
            })
          })
            .then(result => result.json())
            .then(data => {
              userState(prevState => ({
                ...prevState,
                enries: data.enries
              }));
            })
            .catch(error => console.log('error', error));
        }
      })
      .catch(error => console.log('error', error));
  }

  const onRouteChange = (routeChange)=>{
    if(routeChange === 'signin'){
      isSignedInState(false);
    }else if (routeChange === 'home'){
      isSignedInState(true);
    }
    routeState(routeChange);
  }
  const loadUser = (data) => {
    console.log(data)
    console.log(data.enries)
    userState(prevState => ({
      ...prevState,
      id: data.id,
      name: data.name,
      email: data.email,
      enries: data.enries,
      joined: data.joined
    }));
    imgURLState('');
    boxState([]);
  }

  
  return (
    <div className="App">
      <ParticlesBg type="cobweb" bg={true} />
      <Navigation isSignedIn={isSignedIn}onRouteChange={onRouteChange}/>
      { route === 'home' 
        ?  <div> 
            <Logo />
            <Rank name = {user.name} enries={user.enries}/>
            <ImageLinkForm  onInputChange={onInputChange} onSubmit={onSubmit}/>
            <FaceRecognition box={box} imgURLState={imgURL}/>
          </div>
        :( route === 'signin' 
          ? <Signin onRouteChange={onRouteChange} loadUser={loadUser}/> 
          : <Register onRouteChange={onRouteChange} loadUser={loadUser}/>
        )
      }
    </div>
  );
}

export default App;
