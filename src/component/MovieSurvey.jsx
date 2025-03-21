import RedioMovie from "./RedioMovie";

const MovieSurvey = () => {
	return (
		<div className="p-6 space-y-6 pt-6">
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
					// value=""
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
					// value=""
				/>
			</section>
			<RedioMovie />
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
					// style="height: 41px;"
				></textarea>
			</section>
		</div>
	);
};

export default MovieSurvey;
