const cannascene = BS.BanterScene.GetInstance();

/* YouTube Playlists
Light Shows and Music PLZWiw-xxQ4SNl-dmJhSk6xSnGuALdCZGf
Night at Cannabanter PLZWiw-xxQ4SOvb8f0nA4_QbGl2hAQuoGR
Tech House Mix PLzgofGqYK8u47wzvoIz1MWBdOe6ow4R12
CannaTest PLzgofGqYK8u6AlSuAxhkaYzgkWBvDupWR
*/

/* Screencast - https://screen.sdq.st:8443/?room=cannabanter */ /* This one for gamestream. remove publish. put in line 14 */
/* YouTube Live - https://www.youtube.com/embed/***********?autoplay=1&controls=0 */ /* Use this for line 14. replace *********** after embed the url for Drac live session */

/* CHANGE THIS URL FOR SCREENCAST OR YOUTUBE LIVE */
let websiteurl = "https://www.youtube.com/embed/nHLxv_nwwsg?autoplay=1&controls=0"; /* ?autoplay=1&controls=0 For YouTube Live */

let otherwebsiteurl = "https://firer.at/pages/games.html"; // Small Screen Up Stairs

async function somerandomStartCrap() {
	const waitingForUnity = async () => { while (!cannascene.unityLoaded) { await new Promise(resolve => setTimeout(resolve, 500)); } };
	await waitingForUnity(); console.log("SCRIPT: Unity-Loaded"); setSceneSettings(); setTimeout(() => { 

		/* COMMENTED THIS OUT TO REMOVE THE YOUTUBE PLAYER */
			 // enableVideoPlayer2();
		/* UNCOMMENTED THIS TO ENABLE SCREEN CAST / YOUTUBE LIVE */
			enableScreenStuff2();

    setTimeout(() => { enableScreenThingy(); }, 5000);
	}, 1000);
};

async function setSceneSettings() {
	console.log("setSceneSettings Loading...");
	const settings = new BS.SceneSettings();
	settings.EnableDevTools = false;
	settings.EnableTeleport = false;
	settings.EnableForceGrab = false;
	settings.EnableSpiderMan = true;
	settings.EnablePortals = true;
	settings.EnableGuests = true;
	// settings.EnableQuaternionPose = false;
	// settings.EnableControllerExtras = true;
	// settings.EnableFriendPositionJoin = true;
	// settings.EnableDefaultTextures = true;
	// settings.EnableAvatars = true;
	settings.MaxOccupancy = 50;
	settings.RefreshRate = 72;
	settings.ClippingPlane = new BS.Vector2(0.05, 1000);
	settings.SpawnPoint = new BS.Vector4(0, 0.01, 0, 180);
	cannascene.TeleportTo({x: 0, y: 0.01, z: 0}, 180, true);
	cannascene.SetSettings(settings);
	setTimeout(() => { cannascene.SetSettings(settings); }, 2000);
};

// videoplayer toggle by HBR.& Fire Thank you HBR!
let ytplayerdisabled = true;
  function enableVideoPlayer2() {
  if (ytplayerdisabled){
    console.log("yt player enabling");
    ytplayerdisabled = false;
    const videoplayer = document.createElement("script");
		videoplayer.id = "cannabanter-videoplayer";
		videoplayer.setAttribute("scale", "1 1 1");
		videoplayer.setAttribute("rotation", "0 0 0");
		videoplayer.setAttribute("position", "0 -3 8");
		videoplayer.setAttribute("hand-controls", "true");
		videoplayer.setAttribute("button-position", "-0.15 1.159 30.156");
		videoplayer.setAttribute("volume", "1");
		videoplayer.setAttribute("button-rotation", "0 0 0");
		videoplayer.setAttribute("button-scale", "0.3 0.3 0.3");
		videoplayer.setAttribute("spatial-min-distance", "1");
		videoplayer.setAttribute("spatial-max-distance", "500");
		videoplayer.setAttribute("playlist", "PLZWiw-xxQ4SNl-dmJhSk6xSnGuALdCZGf");
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
  } else {console.log("enable yt player called");}
};

let screenstuffDisabled = true;
function enableScreenStuff2() {
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
		firescreen.setAttribute("mipmaps", "1");
		firescreen.setAttribute("pixelsperunit", "1600");
		firescreen.setAttribute("castmode", "true");
		firescreen.setAttribute("backdrop", "false");
		firescreen.setAttribute("disable-rotation", "true");
		firescreen.setAttribute("hand-controls", "false");
		firescreen.setAttribute("announce", "true");
		firescreen.setAttribute("announce-events", "true");
		firescreen.setAttribute("announce-420", "true");
		firescreen.setAttribute("volume", "0.25");
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

let otherScreenDisabled = true;

function enableScreenThingy() {
	console.log("File: loaded");
	if (otherScreenDisabled) {
		otherScreenDisabled = false;
		console.log("Adding Screen");
		const firescreen = document.createElement("script");
		firescreen.id = "banter-firescreen";
		firescreen.setAttribute("scale", "0.8 0.8 1");
		firescreen.setAttribute("position", "-3.131 7.5 -15.3");
		firescreen.setAttribute("rotation", "0 180 0");		
		firescreen.setAttribute("mipmaps", "0");
		firescreen.setAttribute("pixelsperunit", "1300");
		firescreen.setAttribute("hand-controls", "true");
		firescreen.setAttribute("announce", "true");
		firescreen.setAttribute("announce-events", "true");
		firescreen.setAttribute("announce-420", "true");
		firescreen.setAttribute("volume", "0.25");
		firescreen.setAttribute("width", "1280");
		firescreen.setAttribute("height", "720");
		firescreen.setAttribute("website", otherwebsiteurl);
		// firescreen.setAttribute("disable-rotation", "false");
		firescreen.setAttribute("custom-button01-url", "https://firer.at/pages/scuffeduno.html");
		firescreen.setAttribute("custom-button02-url", "https://jackbox.tv");
		firescreen.setAttribute("custom-button03-url", "https://papas.tv");
		firescreen.setAttribute("custom-button01-text", "ScuffedUNO");
		firescreen.setAttribute("custom-button02-text", "Jackbox.tv");
		firescreen.setAttribute("custom-button03-text", "Papas.tv");
		firescreen.setAttribute("src", "https://firer.at/scripts/firescreenv2.js");
		document.querySelector("a-scene").appendChild(firescreen);
	};
}

setTimeout(() => { somerandomStartCrap(); }, 5000);
