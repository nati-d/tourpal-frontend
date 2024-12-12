import Head from "next/head";
import Script from "next/script";

const VRPage = () => {
	return (
		<>
			<Head>
				<title>VR trial for TourPal</title>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>
				<meta
					name='description'
					content=''
				/>
				<meta
					name='keywords'
					content=''
				/>
			</Head>

			{/* ############################ VR Section ###############################*/}

			<div id='IfLUP2LTpy'>
				<Script
					type='text/javascript'
					async
					data-short='IfLUP2LTpy'
					data-path='tours'
					data-is-self-hosted='false'
					src='https://app.cloudpano.com/public/shareScript.js'
				/>
			</div>

			<br />
			<br />
			<br />

			<div id='phE4sYEanMEzJ'>
				<Script
					type='text/javascript'
					async
					data-short='phE4sYEanMEzJ'
					data-path='tours'
					data-is-self-hosted='false'
					src='https://app.cloudpano.com/public/shareScript.js'
				/>
			</div>

			<br />
			<br />
			<br />

			<iframe
				id='panoee-tour-embeded'
				name='Phuong tri'
				src='https://tour.panoee.net/may-waterfall/64ae1436440d40312b5cb136'
				frameBorder='0'
				width='100%'
				height='800px'
				scrolling='yes'
				allowvr='yes'
				allow='vr; xr; accelerometer; gyroscope; autoplay;'
				allowFullScreen
				webkitAllowFullScreen
				mozAllowFullScreen
				loading='eager'
			></iframe>

			<Script
				id='motion-listener-1'
				strategy='lazyOnload'
			>
				{`var pano_iframe_name = "panoee-tour-embeded";
        window.addEventListener("devicemotion", function(e) {
          var iframe = document.getElementById(pano_iframe_name);
          if (iframe)
            iframe.contentWindow.postMessage(
              {
                type: "devicemotion",
                deviceMotionEvent: {
                  acceleration: {
                    x: e.acceleration.x,
                    y: e.acceleration.y,
                    z: e.acceleration.z,
                  },
                  accelerationIncludingGravity: {
                    x: e.accelerationIncludingGravity.x,
                    y: e.accelerationIncludingGravity.y,
                    z: e.accelerationIncludingGravity.z,
                  },
                  rotationRate: {
                    alpha: e.rotationRate.alpha,
                    beta: e.rotationRate.beta,
                    gamma: e.rotationRate.gamma,
                  },
                  interval: e.interval,
                  timeStamp: e.timeStamp,
                },
              },
              "*"
            );
        });`}
			</Script>

			<br />
			<br />
			<br />

			<iframe
				id='panoee-tour-embeded'
				name='Phuong tri'
				src='https://tour.panoee.net/chua-doi-hoi/636235036f1eac7acf07c568'
				frameBorder='0'
				width='100%'
				height='800px'
				scrolling='yes'
				allowvr='yes'
				allow='vr; xr; accelerometer; gyroscope; autoplay;'
				allowFullScreen
				webkitAllowFullScreen
				mozAllowFullScreen
				loading='eager'
			></iframe>

			<Script
				id='motion-listener-2'
				strategy='lazyOnload'
			>
				{`var pano_iframe_name = "panoee-tour-embeded";
        window.addEventListener("devicemotion", function(e) {
          var iframe = document.getElementById(pano_iframe_name);
          if (iframe)
            iframe.contentWindow.postMessage(
              {
                type: "devicemotion",
                deviceMotionEvent: {
                  acceleration: {
                    x: e.acceleration.x,
                    y: e.acceleration.y,
                    z: e.acceleration.z,
                  },
                  accelerationIncludingGravity: {
                    x: e.accelerationIncludingGravity.x,
                    y: e.accelerationIncludingGravity.y,
                    z: e.accelerationIncludingGravity.z,
                  },
                  rotationRate: {
                    alpha: e.rotationRate.alpha,
                    beta: e.rotationRate.beta,
                    gamma: e.rotationRate.gamma,
                  },
                  interval: e.interval,
                  timeStamp: e.timeStamp,
                },
              },
              "*"
            );
        });`}
			</Script>

			<br />
			<br />
			<br />

			<iframe
				id='panoee-tour-embeded'
				name='Phuong tri'
				src='https://tour.panoee.net/wings-museum/63e10dffb3d8b080d441745a'
				frameBorder='0'
				width='100%'
				height='800px'
				scrolling='yes'
				allowvr='yes'
				allow='vr; xr; accelerometer; gyroscope; autoplay;'
				allowFullScreen
				webkitAllowFullScreen
				mozAllowFullScreen
				loading='eager'
			></iframe>

			<Script
				id='motion-listener-3'
				strategy='lazyOnload'
			>
				{`var pano_iframe_name = "panoee-tour-embeded";
        window.addEventListener("devicemotion", function(e) {
          var iframe = document.getElementById(pano_iframe_name);
          if (iframe)
            iframe.contentWindow.postMessage(
              {
                type: "devicemotion",
                deviceMotionEvent: {
                  acceleration: {
                    x: e.acceleration.x,
                    y: e.acceleration.y,
                    z: e.acceleration.z,
                  },
                  accelerationIncludingGravity: {
                    x: e.accelerationIncludingGravity.x,
                    y: e.accelerationIncludingGravity.y,
                    z: e.accelerationIncludingGravity.z,
                  },
                  rotationRate: {
                    alpha: e.rotationRate.alpha,
                    beta: e.rotationRate.beta,
                    gamma: e.rotationRate.gamma,
                  },
                  interval: e.interval,
                  timeStamp: e.timeStamp,
                },
              },
              "*"
            );
        });`}
			</Script>

			{/* ############################ /VR Section ###############################*/}
		</>
	);
};

export default VRPage;
