// window.onload = (event) => { 
//     console.log("StateProp.js: Set State Prop")
//      //// prop 0 enables YT player, 1 for screen cast
//     setPublicSpaceProp('firestateprop', '1');
//   };

const cannascene = BS.BanterScene.getInstance();
cannascene.On("loaded", () => {
	console.log("STATEPROP: scene loaded, setting prop value");
    setPublicSpaceProp('firestateprop', '0');
	})
