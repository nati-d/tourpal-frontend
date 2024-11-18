import React from "react";

const VideoSection = () => {
	return (
		<div className="container">
			<video
				width='100%'
                height='40dvh'
				controls
                loop
			>
				<source
					src='/videos/vid.mp4'
					type='video/mp4'
				/>
				Your browser does not support the video tag.
			</video>
		</div>
	);
};

export default VideoSection;
