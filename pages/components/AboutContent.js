import GlobeComp from "./GlobeComp";

export default function AboutContent() {
	return (
		<div className="relative bg-white pt-16 pb-32 overflow-hidden">
			<div className="mt-24">
				<div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
					<div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
						<div>
							<div className="mt-6">
								<h2 className="text-6xl font-bold tracking-tight text-gray-900">
									About Me.
								</h2>
								<p className="mt-4 text-lg text-gray-500">
									Originally from New Zealand, lived and worked in Melbourne,
									Australia and now New York City - it’s been an fun ride so
									far!
								</p>
								<p className="mt-4 text-lg text-gray-500">
									My interest in writing code started back in 2017 when I worked
									in customer advocacy at a tech company and gained exposure to
									what’s possible with computer programming. I already had a
									passion for building things with my hands and figuring out
									what makes stuff tick so learning to code was a natural
									progression.
								</p>
								<p className="mt-4 text-lg text-gray-500">
									Fast forward to today, I’m working on projects with React,
									Node.js/Express and a bunch of other fun tools and packages.
								</p>
								<p className="mt-4 text-lg text-gray-500">
									In my spare time, I like to hang out with my dog Summer,
									explore the amazing things NYC has to offer, and catch up on
									the rugby when it’s in season.{" "}
									<span className="text-gray-600 font-bold">
										Go the All Blacks!
									</span>
								</p>
							</div>
						</div>
					</div>
					<div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
						<div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full flex justify-end items-center">
							<GlobeComp />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
