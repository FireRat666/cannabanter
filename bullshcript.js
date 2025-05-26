// ZEPHII, you no longer need to edit bullshcript.js for anything, please edit youtubevideoID in line 13 in embed.html instead.
// ------> https://github.com/FireRat666/cannabanter/blob/main/embed.html <------

/* YouTube Playlists
Light Shows and Music PLZWiw-xxQ4SNl-dmJhSk6xSnGuALdCZGf
Night at Cannabanter PLZWiw-xxQ4SOvb8f0nA4_QbGl2hAQuoGR
Tech House Mix PLzgofGqYK8u47wzvoIz1MWBdOe6ow4R12
CannaTest PLzgofGqYK8u6AlSuAxhkaYzgkWBvDupWR
*/

/* Screencast - https://screen.sdq.st:8443/?room=cannabanter */ /* This one for gamestream. remove publish. put in line 14 */
/* YouTube Live - https://www.youtube.com/embed/***********?autoplay=1&controls=0 */ /* Use this for line 14. replace *********** after embed the url for Drac live session */
/* Fire Embed - https://cannabanter.firer.at/embed.html?21 */

let youtubePlaylist = `PLZWiw-xxQ4SPDmADhvme7-pU2bx3s7nKX`;
let otherwebsiteurl = "https://firer.at/pages/games.html";  // Small Screen Up Stairs

/* TOGGLE FOR YOUTUBE LIVE OR SCREENCAST */
/* DO NOT CHANGE THESE LINKS, only comment out line 16 or 17 */
// let websiteurl = "https://cannabanter.firer.at/embed.html?420" /* FOR YOUTUBE LIVE - Uncomment this & change youtubevideoID in line 13 in embed.html AND comment out the line below */
// let websiteurl = "https://screen.sdq.st:8443/?room=cannabanter" /* FOR SCREENCAST - Uncomment this AND comment out the line above */

BS.BanterScene.GetInstance().On("loaded", () => {
 	console.log("Scene loaded");
	/* UNCOMMENTED THIS TO ENABLE THE YOUTUBE PLAYER */
		// enableYouTube();
	/* UNCOMMENTED THIS TO ENABLE SCREEN CAST / YOUTUBE LIVE */
		// enableTheFireScreen();
  /* UNCOMMENTED THIS TO ENABLE THE KARAOKE PLAYER */
		// enableKaraokePlayer();
	/* UNCOMMENTED THIS TO ENABLE FIRE TABLET */
		 enableThePortableFireScreen();
});

// videoplayer toggle by HBR & FireRat
let ytplayerdisabled = true;
  function enableYouTube() {
  if (ytplayerdisabled){ ytplayerdisabled = false;
    console.log("YouTube Player Loading");
    const videoplayer = document.createElement("script");
		videoplayer.id = "cannabanter-videoplayer";
		videoplayer.setAttribute("scale", "1 1 1");
		videoplayer.setAttribute("rotation", "0 0 0");
		videoplayer.setAttribute("position", "0 -3 8");
		videoplayer.setAttribute("hand-controls", "true");
		videoplayer.setAttribute("button-position", "-0.15 1.159 30.156");
		videoplayer.setAttribute("volume", "3");
		videoplayer.setAttribute("button-rotation", "0 0 0");
		videoplayer.setAttribute("button-scale", "0.3 0.3 0.3");
	  	videoplayer.setAttribute("spatial", "false");
		// videoplayer.setAttribute("spatial-min-distance", "1");
		// videoplayer.setAttribute("spatial-max-distance", "500");
		videoplayer.setAttribute("playlist", "PLZWiw-xxQ4SPDmADhvme7-pU2bx3s7nKX");
		videoplayer.setAttribute("announce", "false");
		// videoplayer.setAttribute("announce-four-twenty", "false");
		videoplayer.setAttribute("data-playlist-icon-url", "https://cdn.glitch.global/47f0acb4-4420-4f3f-bb01-dba17f8c0edb/Playlist.png?v=1711786451727");
		videoplayer.setAttribute("data-vol-up-icon-url", "https://cdn.glitch.global/47f0acb4-4420-4f3f-bb01-dba17f8c0edb/Vol_Up.png?v=1711785431096");
		videoplayer.setAttribute("data-vol-down-icon-url", "https://cdn.glitch.global/47f0acb4-4420-4f3f-bb01-dba17f8c0edb/Vol_Dn.png?v=1711785430202");
		videoplayer.setAttribute("data-mute-icon-url", "https://cdn.glitch.global/47f0acb4-4420-4f3f-bb01-dba17f8c0edb/Vol_Mute_Off.png?v=1711785430667");
		videoplayer.setAttribute("data-skip-forward-icon-url", "https://cdn.glitch.global/47f0acb4-4420-4f3f-bb01-dba17f8c0edb/Sync_FW.png?v=1711785429798");
		videoplayer.setAttribute("data-skip-backward-icon-url", "https://cdn.glitch.global/47f0acb4-4420-4f3f-bb01-dba17f8c0edb/Sync_Bk.png?v=1711785429431");
		videoplayer.setAttribute("src", "https://vidya.sdq.st/playlist.js"); // https://best-v-player.glitch.me/playlist.js
    document.querySelector("a-scene").appendChild(videoplayer);
  } else {console.log("YouTube Player Loading...");}
};

// Fire Screen Toggle
let screenstuffDisabled = true;
function enableTheFireScreen() {
  if (screenstuffDisabled){
		screenstuffDisabled = false;
		console.log("Adding Screen Cast");
		const firescreen = document.createElement("script");
		firescreen.id = "cannabanter-firescreen";
		firescreen.setAttribute("scale", "1 1 1");
		firescreen.setAttribute("rotation", "0 180 0");
		firescreen.setAttribute("screen-rotation", "0 180 0");
		firescreen.setAttribute("screen-scale", "0.515 0.515 1");
		firescreen.setAttribute("position", "0 0.1 -29");
		firescreen.setAttribute("lock-position", "true");
		firescreen.setAttribute("mipmaps", "0");
		firescreen.setAttribute("pixelsperunit", "1600");
		firescreen.setAttribute("castmode", "true");
		firescreen.setAttribute("backdrop", "false");
		firescreen.setAttribute("disable-rotation", "true");
		firescreen.setAttribute("hand-controls", "false");
		firescreen.setAttribute("announce", "false");
		firescreen.setAttribute("announce-events", "false");
		firescreen.setAttribute("announce-420", "false");
		firescreen.setAttribute("volume", "0.2");
		firescreen.setAttribute("width", "1920");
		firescreen.setAttribute("height", "1080");
		firescreen.setAttribute("screen-position", "0 -3.1 -21");
		firescreen.setAttribute("website", websiteurl);
		firescreen.setAttribute("src", "https://firer.at/scripts/firescreenv2.js");
		document.querySelector("a-scene").appendChild(firescreen);
		if (websiteurl.includes("hyperbeam.com/i/")) {
			setTimeout(async () => { 
				let theBrowserthingy = await cannascene.Find(`MyBrowser2`);
				let thebrowserpart = theBrowserthingy.GetComponent(BS.ComponentType.BanterBrowser);
				thebrowserpart.RunActions(JSON.stringify({"actions": [{ "actionType": "runscript","strparam1": "const checkbox = document.querySelector(`.p-checkbox-box[role='checkbox']`); const joinButton = document.querySelector('.footer_3Yiou .joinBtn_1TAU6'); if (checkbox) checkbox.click(); if (joinButton) { const observer = new MutationObserver(() => { if (!joinButton.classList.contains('p-disabled')) { joinButton.click(); observer.disconnect(); setTimeout(() => { const skipButton = document.querySelector('.dialog-secondary-btn'); if (skipButton) skipButton.click(); }, 3000); } }); observer.observe(joinButton, { attributes: true, attributeFilter: ['class'] }); }" }]}));
				setTimeout(async () => {
					thebrowserpart.RunActions(JSON.stringify({"actions": [{ "actionType": "runscript","strparam1": "var fullscreenButton = document.querySelector(`.p-button.p-component.tu-button.btn-tertiary.btn_2YRyp svg path[d^='M3 3h6.429']`); if (fullscreenButton) { fullscreenButton.closest('button').click(); } setTimeout(async () => { var chatButton = document.querySelector(`.p-button.p-component.tu-button.btn-tertiary.fsChatBtn_2cCyy svg path[d^='M22 22h-2V2h2v20zM2 11h12.17']`); if (chatButton) { chatButton.closest('button').click(); } }, 3500);" }]}));
				}, 5000);
			}, 3000);
		}
  }
	console.log("Screen Stuff enabled: " + screenstuffDisabled);
};

// Karaoke Player Toggle
let karaokeplayerdisabled = true;
  function enableKaraokePlayer() {
  if (karaokeplayerdisabled){
    console.log("karaoke player enabling");
    karaokeplayerdisabled = false;
    const videoplayer = document.createElement("script");
		videoplayer.id = "cannabanter-karaokeplayer";
		videoplayer.setAttribute("scale", "1 1 1");
		videoplayer.setAttribute("mip-maps", "0");
		videoplayer.setAttribute("rotation", "0 0 0");
		videoplayer.setAttribute("position", "0 -3 8");
		videoplayer.setAttribute("hand-controls", "true");
		videoplayer.setAttribute("button-position", "-2.815 6.5775 15.3");
		videoplayer.setAttribute("volume", "15");
		videoplayer.setAttribute("button-rotation", "0 90 0");
		videoplayer.setAttribute("button-scale", "0.7 0.7 0.7");
		videoplayer.setAttribute("singer-button-position", "0 -50 0");
		videoplayer.setAttribute("singer-button-rotation", "0 0 0");
		// videoplayer.setAttribute("singer-button-scale", "1.5 1.5 1.5");
	  	videoplayer.setAttribute("spatial", "false");
		// videoplayer.setAttribute("spatial-min-distance", "1");
		// videoplayer.setAttribute("spatial-max-distance", "1000");
		videoplayer.setAttribute("playlist", "");
		videoplayer.setAttribute("announce", "false");
	  	videoplayer.setAttribute("announce-events", "false");
		// videoplayer.setAttribute("data-playlist-icon-url", "https://cdn.glitch.global/69f02c8f-d538-43b7-9c66-5d3973208d79/Playlist.png?v=1713028119937");
		// videoplayer.setAttribute("data-vol-up-icon-url", "https://cdn.glitch.global/69f02c8f-d538-43b7-9c66-5d3973208d79/VolUp.png?v=1713028119640");
		// videoplayer.setAttribute("data-vol-down-icon-url", "https://cdn.glitch.global/69f02c8f-d538-43b7-9c66-5d3973208d79/VolDown.png?v=1713028119279");
		// videoplayer.setAttribute("data-mute-icon-url", "https://cdn.glitch.global/69f02c8f-d538-43b7-9c66-5d3973208d79/Mute.png?v=1713028120228");
		// videoplayer.setAttribute("data-skip-forward-icon-url", "https://cdn.glitch.global/69f02c8f-d538-43b7-9c66-5d3973208d79/Forward.png?v=1713028118642");
		// videoplayer.setAttribute("data-skip-backward-icon-url", "https://cdn.glitch.global/69f02c8f-d538-43b7-9c66-5d3973208d79/Backwardsd.png?v=1713028118986");
		videoplayer.setAttribute("src", "https://vidya.sdq.st/karaoke.js"); // https://best-v-player.glitch.me/karaoke.js
    document.querySelector("a-scene").appendChild(videoplayer);
  } else {console.log("enable karaoke player called");}
};

// Fire Tablet
let screenPortableDisabled = true;
function enableThePortableFireScreen() {
  if (screenPortableDisabled){ screenPortableDisabled = false;
   setTimeout(() => { 
	console.log("Adding Fire Tablet");
	const firescreen = document.createElement("script");
	firescreen.id = "cannabanter-firetablet";
	firescreen.setAttribute("scale", "0.8 0.8 1");
	firescreen.setAttribute("rotation", "0 0 0");
	firescreen.setAttribute("position", "-3.131 7.5 -15.3");
	firescreen.setAttribute("mipmaps", "0");
	firescreen.setAttribute("pixelsperunit", "1300");
	firescreen.setAttribute("width", "1280");
	firescreen.setAttribute("height", "720");
	firescreen.setAttribute("announce", "false");
	firescreen.setAttribute("announce-events", "true");
  firescreen.setAttribute("announce-420", "true");
	firescreen.setAttribute("volume", "0.25");
  firescreen.setAttribute("backdrop", "true");
	firescreen.setAttribute("hand-controls", "true");
  // firescreen.setAttribute("disable-rotation", "false");
	firescreen.setAttribute("custom-button01-url", "https://jackbox.tv");
	firescreen.setAttribute("custom-button01-text", "Jackbox.tv");
	firescreen.setAttribute("custom-button02-url", "https://papas.tv");
	firescreen.setAttribute("custom-button02-text", "Papas.tv");
	firescreen.setAttribute("custom-button03-url", "https://songpop-party.com/join");
	firescreen.setAttribute("custom-button03-text", "SongPop Party");	   
	firescreen.setAttribute("custom-button04-url", "https://firer.at/pages/scuffeduno.html");
	firescreen.setAttribute("custom-button04-text", "ScuffedUNO");
	firescreen.setAttribute("website", otherwebsiteurl);
	firescreen.setAttribute("src", "https://firer.at/scripts/firescreenv2.js");
	document.querySelector("a-scene").appendChild(firescreen);
   }, 5000); 
  }
    console.log("Fire Tablet enabled");

};

// BobCast Home Button Auto Play
document.addEventListener('CustomButtonClick', async function(event) {
 // console.log('--- 1 Detected a Button Click event in another script! ---');
 // console.log('Button Name:', event.detail.buttonName);
 // console.log('Detail:', event.detail);
 // console.log('Message:', event.detail.message);
 // console.log('Timestamp:', event.detail.timestamp);
  switch (event.detail.buttonName) {
    case 'Home':
     // console.log('Handling action for: Primary Action Button HOME HOME');
      if (String(event.detail.message).includes("embed/video")) {
      // console.log('HOME IS watch.owncast.online');
        setTimeout(async () => { 
          (await BS.BanterScene.GetInstance().Find(`MyBrowser1`)).GetComponent(BS.ComponentType.BanterBrowser).RunActions(JSON.stringify({
          actions: [
            {
              actionType: "runscript",
              strparam1: `document.querySelector('[title="Play Video"]').click();`
            },
            {
              actionType: "keypress",
              strparam1: "f"
            }
          ]
        }));
        }, 2000);
      } else {
       // console.log(`HOME IS NOT watch.owncast.online`, event.detail.message);
      };
      break;
    case 'Info':
     // console.log('Handling action for: More Info Button');
      // Do something specific for button 2
      break;
    case 'Google':
     // console.log('Handling action for: Google Button');
      // Do something specific for button 3
      break;
    default:
     // console.log('An unknown button triggered the custom event.');
  }
});
