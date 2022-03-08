import Nav from "./Nav";

export default function HomeContent() {
	return (
		<div className="relative bg-gray-50 h-full">
			<div className="max-w-7xl mx-auto h-full">
				<Nav />
				<main className="lg:relative h-full -mt-20 flex items-center justify-center flex-col md:flex-row sm:justify-center">
					<div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
						<div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
							<h1 className="text-6xl tracking-normal font-bold text-gray-900 lg:text-7xl xl:text-7xl">
								Hi, I'm Tipene!
							</h1>
							<p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-2xl md:mt-5 md:max-w-3xl">
								I’m a frontend developer specializing in React. I love to build
								visually beautiful, accessible, user friendly web experiences.
							</p>
							<div className="mt-10 sm:flex sm:justify-center lg:justify-start">
								<div className="rounded-full ">
									<a
										href="#"
										className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 md:py-4 md:text-lg md:px-10"
									>
										See my work
									</a>
								</div>
								<div className="mt-3 rounded-full  sm:mt-0 sm:ml-3">
									<a
										href="#"
										className="w-full flex items-center justify-center px-8 py-3 border-2 border-gray-200 text-base font-medium rounded-full text-gray-500 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
									>
										Get in touch
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
						<img
							src="/hero.png"
							alt=""
							className="absolute inset-0 w-1/2 2xl:w-2/3 h-auto m-auto"
						/>
					</div>
				</main>
			</div>
		</div>
	);
}
