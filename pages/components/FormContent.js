export default function FormContent() {
	return (
		<div className="relative bg-white">
			<div className="absolute inset-y-0 right-0 w-1/2">
				<img
					className=" w-auto object-cover h-full"
					src="/contact.png"
					alt=""
				/>
			</div>
			<div className="relative py-16 px-4 sm:py-24 sm:px-6 md:px-8 md:max-w-7xl md:mx-auto md:py-32 md:grid md:grid-cols-2">
				<div className="lg:pr-8">
					<div className="max-w-md mx-auto sm:max-w-xl lg:mx-0">
						<h2 className="text-6xl font-bold tracking-tight text-gray-900">
							Get in touch.
						</h2>
						<p className="text-3xl text-gray-300">
							Questions? Ideas? I’d love to chat!
						</p>
						<form
							action="#"
							method="POST"
							className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 bg-gray-100 p-5 rounded-md"
						>
							<div className="sm:col-span-2">
								<label
									htmlFor="full-name"
									className="block text-sm font-medium text-gray-600"
								>
									Name
								</label>
								<div className="mt-1">
									<input
										type="text"
										name="full-name"
										id="full-name"
										autoComplete="given-name"
										className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-200 rounded-md"
									/>
								</div>
							</div>
							<div className="sm:col-span-2">
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-600"
								>
									Email
								</label>
								<div className="mt-1">
									<input
										id="email"
										name="email"
										type="email"
										autoComplete="email"
										className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-200 rounded-md"
									/>
								</div>
							</div>
							<div className="sm:col-span-2">
								<div className="flex justify-between">
									<label
										htmlFor="how-can-we-help"
										className="block text-sm font-medium text-gray-600"
									>
										Message
									</label>
									<span
										id="how-can-we-help-description"
										className="text-sm text-gray-400"
									>
										Max. 500 characters
									</span>
								</div>
								<div className="mt-1">
									<textarea
										id="how-can-we-help"
										name="how-can-we-help"
										aria-describedby="how-can-we-help-description"
										rows={4}
										className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-200 rounded-md"
										defaultValue={""}
									/>
								</div>
							</div>

							<div className="text-left sm:col-span-2">
								<button
									type="submit"
									className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
								>
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
