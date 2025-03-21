const ShowData = ({ toglePageData, getData }) => {
	// console.log(`ShhowData :  ` + getData);
	// console.log(`ShhowDataNmae :  ` + getData.nameUser);
	// console.log(`ShhowDataEmail :  ` + getData.emailUser);
	return (
		<>
			<div className="p-6 space-y-6 py-6 max-w-[450px] ">
				<div className="rounded-lg bg-green-50 p-4 border border-green-200">
					<h3 className="text-lg font-medium text-green-800 flex items-center gap-2 mb-4">
						{/* <svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							className="lucide lucide-circle-check-big h-5 w-5 text-green-600"
						>
							<path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
							<path d="m9 11 3 3L22 4"></path>
						</svg> */}
						ส่งแบบสำรวจสำเร็จ!
					</h3>
					<div className="space-y-3">
						<div className="grid grid-cols-3 gap-1">
							<p className="text-sm font-medium text-gray-500">ชื่อ:</p>
							<p className="text-sm col-span-2">{getData.nameUser}</p>
						</div>
						<div className="grid grid-cols-3 gap-1">
							<p className="text-sm font-medium text-gray-500">อีเมล:</p>
							<p className="text-sm col-span-2">{getData.emailUser}</p>
						</div>
						<div className="grid grid-cols-3 gap-1">
							<p className="text-sm font-medium text-gray-500">หนังที่เลือก:</p>
							<p className="text-sm font-medium text-purple-700 col-span-2">
								{getData.title} ({getData.year})
							</p>
						</div>
						<div
							className={`mt-4 pt-4  ${
								getData.commentUser ? "flex" : "hidden"
							}`}
						>
							<p className="text-sm font-medium text-gray-500 mb-2">
								ความคิดเห็น:
							</p>
							<p className="text-sm bg-gray-50 p-3 rounded-md">
								{getData.commentUser}
							</p>
						</div>
					</div>
				</div>
				<button
					className="whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full flex items-center justify-center gap-2 bg-black text-white"
					onClick={toglePageData}
				>
					{/* <svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						className="lucide lucide-refresh-cw h-4 w-4"
					>
						<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
						<path d="M21 3v5h-5"></path>
						<path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
						<path d="M8 16H3v5"></path>
					</svg> */}
					ทำแบบสำรวจใหม่
				</button>
			</div>
		</>
	);
};
export default ShowData;
