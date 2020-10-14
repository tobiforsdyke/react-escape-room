import React, { useEffect } from "react";
import { Viewer } from "photo-sphere-viewer";
import './App.css';
import "../node_modules/photo-sphere-viewer/dist/photo-sphere-viewer.css";

// function App() {
//   const sphereElementRef = React.createRef();

//   useEffect(() => {
//     const shperePlayerInstance = new Viewer({
//       container: sphereElementRef.current,
//       panorama:
//         "https://upload.wikimedia.org/wikipedia/commons/f/f0/Colonia_Ulpia_Traiana_-_Rekonstruktion_r%C3%B6mischer_Schiffe-0010560.jpg",
//     });

//     // unmount component instructions
//     return () => {
//       shperePlayerInstance.destroy();
//     };
//   }, []); // will only be called when the src prop gets updated

//   return <div ref={sphereElementRef} />;
// };

// export default App;


export default function App(props) {
  const sphereElementRef = React.createRef();
  const { src } = props;

  useEffect(() => {
    const shperePlayerInstance = new Viewer({
      container: sphereElementRef.current,
      panorama:
        "https://upload.wikimedia.org/wikipedia/commons/f/f0/Colonia_Ulpia_Traiana_-_Rekonstruktion_r%C3%B6mischer_Schiffe-0010560.jpg",
      navbar: [
        'autorotate',
        'zoom',
        'fullscreen'
      ]
    });
    // unmount component instructions
    return () => {
      shperePlayerInstance.destroy();
    };
  }, [src]); // will only be called when the src prop gets updated

  return <div ref={sphereElementRef} />;
}