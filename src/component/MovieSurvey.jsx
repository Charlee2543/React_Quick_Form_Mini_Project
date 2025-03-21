import { useState } from "react";

// component
const MovieSurvey = () => {
	//ชุดข้อมูล
	const movies = [
		{ title: "Avatar", year: "2009", director: "James Cameron" },
		{ title: "Inception", year: "2010", director: "Christopher Nolan" },
		{ title: "Interstellar", year: "2014", director: "Christopher Nolan" },
		{
			title: "The Shawshank Redemption",
			year: "1994",
			director: "Frank Darabont",
		},
		{ title: "Pulp Fiction", year: "1994", director: "Quentin Tarantino" },
		{ title: "Parasite", year: "2019", director: "Bong Joon-ho" },
	];
	//useState
	const [nameUser, setNameUser] = useState("");
	const [emailUser, setEmailUser] = useState("");
	const [commentUser, setCommentUser] = useState("");
	const [selectedValue, setSelectedValue] = useState({
		// nameUser: "",
		// emailUser: "",
		title: "",
		year: "",
		director: " ",
	});
	//function
	console.log(selectedValue);
	console.log(nameUser);
	console.log(emailUser);
	console.log(commentUser);
	const handleChange = (event) => {
		setSelectedValue(...selectedValue, movies[event.target.value]);
	};
	const nameChange = (event) => {
		setNameUser(event.target.value);
	};
	const emailChange = (event) => {
		setEmailUser(event.target.value);
	};
	const commentChange = (event) => {
		setCommentUser(event.target.value);
	};
	const resetBotton = () => {};
	const buttonClickSubmit = (event) => {
		event.preventDefault();
		alert(JSON.stringify(selectedValue));
	};

	return (
		<form className="p-6 space-y-6 pt-6" onSubmit={buttonClickSubmit}>
			{/*--------------------ส่วนกรอกข้อมูล --------------------*/}
			<section className="space-y-2">
				<label
					className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium"
					htmlFor="name"
				>
					ชื่อ <span className="text-red-500">*</span>
				</label>
				<input
					className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
					id="name"
					placeholder="กรุณากรอกชื่อของคุณ"
					name="name"
					value={nameUser}
					onChange={nameChange}
				/>
			</section>
			<section className="space-y-2">
				<label
					className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium"
					htmlFor="email"
				>
					อีเมล <span className="text-red-500">*</span>
				</label>
				<input
					className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
					id="email"
					placeholder="example@email.com"
					name="email"
					value={emailUser}
					onChange={emailChange}
				/>
			</section>
			{/*-------------------- ส่วนเลือกMovie --------------------*/}
			<section className="space-y-3">
				<section className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium">
					เลือกหนังที่คุณชอบ <span className="text-red-500">*</span>
					<div className="grid gap-y-2 my-2">
						{movies.map((item, index) => (
							<div className="flex gap-3" key={item.title + item.year}>
								<input
									id={item.title + item.year}
									type="radio"
									name="movieList"
									value={index}
									onChange={handleChange}
									className=" text-5xl peer hidden accent-blue-700 cursor-pointer "
								/>
								<label
									htmlFor={item.title + item.year}
									class="w-5 h-5 border-2 border-gray-500 rounded-full flex items-center justify-center peer-checked:border-blue-500 peer-checked:bg-blue-500"
								>
									<div class="w-2.5 h-2.5 bg-white rounded-full"></div>
								</label>
								<label
									className="text-sm leading-none  font-medium "
									htmlFor={item.title + item.year}
								>
									{item.title} ({item.year})
									<p className="text-sm text-muted-foreground">
										Director: {item.director}
									</p>
								</label>
							</div>
						))}
					</div>
				</section>
			</section>
			{/*-------------------- ส่วน ความคิดเห็นเกี่ยวกับหนัง --------------------*/}
			<section className="space-y-2">
				<label
					className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium"
					htmlFor="comment"
				>
					ความคิดเห็นเกี่ยวกับหนัง
				</label>
				<textarea
					className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
					id="comment"
					name="comment"
					placeholder="พิมพ์ความคิดเห็นของคุณที่นี่..."
					rows="4"
					value={commentUser}
					onChange={commentChange}
					// style="height: 41px;"
				></textarea>
			</section>
			{/*-------------------- ส่วน submit reset --------------------*/}
			<section className="items-center flex justify-between border-t p-6 pt-4">
				<button
					className="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 flex items-center gap-1"
					type="button"
					onClick={resetBotton}
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
					รีเซ็ต
				</button>
				<button
					className="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary hover:bg-primary/90 h-10 px-4 py-2 bg-gradient-to-r from-purple-700 to-indigo-600 text-white flex items-center gap-1"
					type="submit"
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
						className="lucide lucide-send h-4 w-4"
					>
						<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
						<path d="m21.854 2.147-10.94 10.939"></path>
					</svg> */}
					ส่งแบบสำรวจ
				</button>
			</section>
		</form>
	);
};

export default MovieSurvey;
