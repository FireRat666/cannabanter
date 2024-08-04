let firestateprop = null;
// const cannascene = BS.BanterScene.getInstance();
// cannascene.On("loaded", () => {
// 	console.log("STATEPROP.js: scene loaded, setting prop value");
// 	//// prop 0 enables YT player, 1 for screen cast
// 	setPublicSpaceProp('firestateprop', '1');
// SetPublicSpaceProps - Set a property on the space that will persist and be synced to all players. Like oneshot but includes persistance.
// cannascene.SetPublicSpaceProps(props: {[key: string]: string});
// })

window.onload = (event) => { 
	console.log("STATEPROP.js: Set State Prop")
	//// prop 0 enables YT player, 1 for screen cast
	setPublicSpaceProp('firestateprop', '1');
};

// window.addEventListener('load', (event) => {
document.addEventListener("DOMContentLoaded", () => {
  if(window.isBanter){
    let isFirstRun = false;
    console.log("set first run false");
  }
  AframeInjection.addEventListener('spaceStateChange', async e => {
    await window.AframeInjection.waitFor(window, "loaded");
    e.detail.changes.forEach(change => {
      switch(change.property) {
        case "firestateprop":
   	  firestateprop = change.newValue;
          if (firestateprop && firestateprop !== change.newValue) {
            console.log("firestateprop change: " + firestateprop);
            firestateprop = change.newValue;
          }
          if (firestateprop == "1") {
            console.log("firestateprop: IS 1");
            enableScreenStuff();
            // setTimeout(() => { loadscripts(); }, 3000);
            // setTimeout(() => { enablefirescreencast(); }, 5000);
          }
          if (firestateprop == "0") {
            console.log("firestateprop: NOT 1, IS 0");
            enableVideoPlayer();
            // disablefirescreencast();
            // setTimeout(() => { loadscripts(); }, 7000);
          }
        console.log("firestateprop value: " + firestateprop);
        break; 
      }
      })
      });
  i++;
});
