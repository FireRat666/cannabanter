let firestateprop = null;

// window.onload = (event) => { 
	// console.log("STATEPROP.js: Set State Prop")
	// setPublicSpaceProp('firestateprop', '1');
// };

const cannascene = BS.BanterScene.GetInstance();
cannascene.On("loaded", () => {
	console.log("cannascene: scene loaded");
	// COMMENTED THIS OUT TO REMOVE THE YOUTUBE PLAYER
	//enableVideoPlayer();
	// UNCOMMENTED THIS OUT TO ENABLE SCREEN HAND CONTROLS
	// enableScreenStuff2();
});

// videoplayer toggle by HBR.& Fire Thank you HBR!
let ytplayerdisabled = true;
  function testenableVideoPlayer() {
  if (ytplayerdisabled){
    console.log("yt player enabling");
    ytplayerdisabled = false;
    const videoplayer = document.createElement("script");
		videoplayer.id = "cannabanter-videoplayer";
		videoplayer.setAttribute("scale", "1 1 1");
		videoplayer.setAttribute("rotation", "0 0 0");
		videoplayer.setAttribute("position", "0 -3 8");
		videoplayer.setAttribute("hand-controls", "true");
		videoplayer.setAttribute("button-position", "0 1.159 30.156");
		videoplayer.setAttribute("volume", "3");
		videoplayer.setAttribute("button-rotation", "0 0 0");
		videoplayer.setAttribute("button-scale", "0.4 0.4 0.4");
		videoplayer.setAttribute("spatial-min-distance", "1");
		videoplayer.setAttribute("spatial-max-distance", "100");
		videoplayer.setAttribute("playlist", "PLzgofGqYK8u47wzvoIz1MWBdOe6ow4R12");
		videoplayer.setAttribute("announce", "false");
		// videoplayer.setAttribute("announce-four-twenty", "false");
		videoplayer.setAttribute("data-playlist-icon-url", "https://cdn.glitch.global/47f0acb4-4420-4f3f-bb01-dba17f8c0edb/Playlist.png?v=1711786451727");
		videoplayer.setAttribute("data-vol-up-icon-url", "https://cdn.glitch.global/47f0acb4-4420-4f3f-bb01-dba17f8c0edb/Vol_Up.png?v=1711785431096");
		videoplayer.setAttribute("data-vol-down-icon-url", "https://cdn.glitch.global/47f0acb4-4420-4f3f-bb01-dba17f8c0edb/Vol_Dn.png?v=1711785430202");
		videoplayer.setAttribute("data-mute-icon-url", "https://cdn.glitch.global/47f0acb4-4420-4f3f-bb01-dba17f8c0edb/Vol_Mute_Off.png?v=1711785430667");
		videoplayer.setAttribute("data-skip-forward-icon-url", "https://cdn.glitch.global/47f0acb4-4420-4f3f-bb01-dba17f8c0edb/Sync_FW.png?v=1711785429798");
		videoplayer.setAttribute("data-skip-backward-icon-url", "https://cdn.glitch.global/47f0acb4-4420-4f3f-bb01-dba17f8c0edb/Sync_Bk.png?v=1711785429431");
		videoplayer.setAttribute("src", "https://vidya.sdq.st/playlist.js");
    document.querySelector("a-scene").appendChild(videoplayer);
  } else {console.log("enable yt player called");}
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
        case "":
   	  firestateprop = change.newValue;
          if (firestateprop && firestateprop !== change.newValue) {
            console.log("firestateprop change: " + firestateprop);
            firestateprop = change.newValue;
          }
          if (firestateprop == "1") {
            console.log("firestateprop: IS 1");
            // enableScreenStuff2();
            // setTimeout(() => { loadscripts(); }, 3000);
          }
          if (firestateprop == "0") {
            console.log("firestateprop: NOT 1, IS 0");
            // testenableVideoPlayer();
          }
        console.log("firestateprop value: " + firestateprop);
        break; 
      }
      })
      });
  i++;
});

let screenstuffenabled2 = 0;
function enableScreenStuff2() {
  if (screenstuffenabled2 == 0){
      screenstuffenabled2 = 1;
	console.log("Adding Screen Cast");
	//now add it
	const firescreen = document.createElement("script");
	firescreen.id = "cannabanter-firescreen";
	firescreen.setAttribute("scale", "1 1 1");
	firescreen.setAttribute("rotation", "0 0 0");
	firescreen.setAttribute("position", "0 -3 8");
	firescreen.setAttribute("mipmaps", "1");
	firescreen.setAttribute("pixelsperunit", "1600");
	firescreen.setAttribute("castmode", "true");
	firescreen.setAttribute("backdrop", "false");
	firescreen.setAttribute("hand-controls", "true");
	firescreen.setAttribute("volume", "0.25");
	firescreen.setAttribute("website", "https://www.youtube.com/embed/YDfiTGGPYCk?si=FN5DAq1va3bnKpdM");
	firescreen.setAttribute("src", "https://firer.at/scripts/firescreen.js");
	document.querySelector("a-scene").appendChild(firescreen);
  }
  // setTimeout(() => { 
  //   let firescreencast = document.getElementById("cannabanter-firescreen");
  //   firescreencast.browser.RunActions(JSON.stringify(
  //       {"actions":[{"actionType": "click2d","strparam1": "0.5,0.5;"}]}));
  //   console.log("Hopefully set browser page width and height");
  // }, 3000); 
	
    console.log("Screen Stuff enabled: " + screenstuffenabled2);
	
};

