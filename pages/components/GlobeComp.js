import { useEffect, useRef } from "react";

const GlobeComp = () => {
	let Globe = () => null;
	if (typeof window !== "undefined") Globe = require("react-globe.gl").default;

	const globeEl = useRef();
	const MAP_CENTER = { lat: -38.14, lng: 176.25 };

	useEffect(() => {
		globeEl.current.controls().autoRotate = true;
		globeEl.current.camera().zoom = 1.5;
		globeEl.current.controls().autoRotateSpeed = 1;
		globeEl.current.controls().minPolarAngle = 1;
		globeEl.current.controls().minZoom = 1000;
		globeEl.current.pointOfView(MAP_CENTER);
	}, []);

	// console.log(globeEl.current.scene());

	const arcData = [
		{
			startLat: -38.1405122408599,
			startLng: 176.2568852940652,
			endLat: -37.81593825017786,
			endLng: 144.96322497406535,
			color: ["red", "white"],
		},
		{
			startLat: -37.81593825017786,
			startLng: 144.96322497406535,
			endLat: 40.67216090380327,
			endLng: -73.97650647309584,
			color: ["red", "white"],
		},
	];
	const width = 800;
	return (
		<Globe
			ref={globeEl}
			width={width}
			height={width / (8 / 7)}
			backgroundColor={"rgba(0,0,0,0)"}
			globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
			arcsData={arcData}
			arcColor={"color"}
			arcDashLength={1}
			arcDashGap={1}
			arcDashAnimateTime={1000}
			showAtmosphere={false}
		/>
	);
};

export default GlobeComp;
