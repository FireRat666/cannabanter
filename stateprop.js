let firestateprop = null;

// window.onload = (event) => { 
	// console.log("STATEPROP.js: Set State Prop")
	// setPublicSpaceProp('firestateprop', '1');
// };

const cannascene = BS.BanterScene.getInstance();
cannascene.On("loaded", () => {
	console.log("cannascene: scene loaded");
	// COMMENTED THIS OUT TO REMOVE THE YOUTUBE PLAYER
	enableVideoPlayer();
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
            enableScreenStuff2();
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
      console.log("BullShcript: Enabling Hand Controls")
      const handcontrols = document.createElement("script");
      handcontrols.id = "fires-handcontrols";
      handcontrols.setAttribute("src", handcontrolscripturl);
      document.querySelector("a-scene").appendChild(handcontrols);
  }
    console.log("Screen Stuff enabled: " + screenstuffenabled2);
};

