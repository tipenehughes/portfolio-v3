const projects = [
	{
		name: "SpaceX App",
		role: "Front-end Developer",
		imageUrl:
			"/spacex.png",
		tools: ["React", "CSS Modules", "SpaceX API", "Framer", "react-query"],
		linkedinUrl: "#",
	},
	{
		name: "Whakaari Rotorua",
		role: "Front-end Developer",
		imageUrl:
			"/whakaari.png",
		tools: ["HTML", "CSS", "JavaScript", "Formik"],
		linkedinUrl: "#",
	},
	{
		name: "Pounamunui Marae",
		role: "Front-end Developer",
		imageUrl:
			"/marae.png",
		tools: ["HTML", "CSS", "JavaScript"],
		linkedinUrl: "#",
	},
];

export default function ProjectsContent() {
	return (
		<div className="bg-white">
			<div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
				<div className="space-y-12">
					<div className="md:max-w-xl lg:max-w-3xl xl:max-w-none">
						<h2 className="font-bold tracking-tight text-gray-900 text-6xl">
							Projects.
						</h2>
						<p className="text-4xl text-gray-300">
							Check out some of my recent work
						</p>
					</div>
					<ul
						role="list"
						className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
					>
						{projects.map((project) => (
							<li key={project.name}>
								<div className="space-y-4">
									<div className="aspect-w-3 aspect-h-4">
										<img
											className="object-cover shadow-lg rounded-lg"
											src={project.imageUrl}
											alt=""
										/>
									</div>

									<div className="space-y-2">
										<div className="text-lg text-gray-900 leading-6 font-medium space-y-1">
											<h3>{project.name}</h3>
										</div>
										<ul role="list" className="flex flex-wrap">
											{project.tools.map((tool) => (
												<li key={tool} className="mr-2 mt-2">
													<div className="bg-gray-100 rounded">
														<p className="px-4 py-1 text-gray-700 font-medium">{tool}</p>
													</div>
												</li>
											))}
										</ul>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
