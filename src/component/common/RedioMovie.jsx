const RedioMovie = ({ moviesListArray, setSelectedValue }) => {
	const handleChange = (event) => {
		console.log(event.target.value);
		setSelectedValue(event.target.value);
	};
	return (
		<section className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium">
			เลือกหนังที่คุณชอบ <span className="text-red-500">*</span>
			<div className="grid gap-y-2 my-2">
				{moviesListArray.map((item) => (
					<div className="flex gap-3" key={item.name + item.year}>
						<input
							id={item.name + item.year}
							type="radio"
							name="movieList"
							value={item}
							onChange={handleChange}
							className=" text-5xl peer accent-blue-700 cursor-pointer "
						/>
						<label
							className="text-sm leading-none  font-medium "
							htmlFor={item.name + item.year}
						>
							{item.title} ({item.year})
							<p className="text-sm text-muted-foreground">
								Director: {item.director}
							</p>
						</label>
						{/* <div class="w-5 h-5 border-2 border-gray-500 rounded-full flex items-center justify-center peer-checked:border-blue-500 peer-checked:bg-blue-500">
						<div class="w-2.5 h-2.5 bg-white rounded-full"></div>
					</div> */}
						{/* <label className="grid gap-1 "> */}
						{/* </label> */}
					</div>
				))}
			</div>
		</section>
	);
};
export default RedioMovie;

{
	/* <section>
<div
    role="radiogroup"
    aria-required="false"
    dir="ltr"
    className="grid gap-2 space-y-3"
    tabindex="0"
    // style="outline:none"
>
    <div className="flex items-start space-x-2 rounded-md p-2 hover:bg-slate-100 transition-colors">
        <button
            type="button"
            role="radio"
            aria-checked="true"
            data-state="checked"
            value="Avatar"
            className="aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
            id="Avatar"
            tabindex="0"
            data-radix-collection-item=""
        >
            <span
                data-state="checked"
                className="flex items-center justify-center"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-circle h-2.5 w-2.5 fill-current text-current"
                >
                    <circle cx="12" cy="12" r="10"></circle>
                </svg>
            </span>
        </button>
        <input
            type="radio"
            aria-hidden="true"
            // style="transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px; width: 16px; height: 16px;"
            tabindex="-1"
            value="Avatar"
            checked=""
        />
        <div className="grid gap-1">
            <label
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-medium cursor-pointer"
                htmlFor="Avatar"
            >
                Avatar2009
            </label>
            <p className="text-sm text-muted-foreground">
                Director: James Cameron
            </p>
        </div>
    </div>
</div>
<div className="flex items-start space-x-2 rounded-md p-2 hover:bg-slate-100 transition-colors">
    <button
        type="button"
        role="radio"
        aria-checked="false"
        data-state="unchecked"
        value="Inception"
        className="aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
        id="Inception"
        tabindex="-1"
        data-radix-collection-item=""
    ></button>
    <input
        type="radio"
        aria-hidden="true"
        // style="transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px; width: 16px; height: 16px;"
        tabindex="-1"
        value="Inception"
    />
    <div className="grid gap-1">
        <label
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-medium cursor-pointer"
            htmlFor="Inception"
        >
            Inception2010
        </label>
        <p className="text-sm text-muted-foreground">
            Director: Christopher Nolan
        </p>
    </div>
</div>
<div className="flex items-start space-x-2 rounded-md p-2 hover:bg-slate-100 transition-colors">
    <button
        type="button"
        role="radio"
        aria-checked="false"
        data-state="unchecked"
        value="Interstellar"
        className="aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
        id="Interstellar"
        tabindex="-1"
        data-radix-collection-item=""
    ></button>
    <input
        type="radio"
        aria-hidden="true"
        // style="transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px; width: 16px; height: 16px;"
        tabindex="-1"
        value="Interstellar"
    />
    <div className="grid gap-1" />
    <label
        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-medium cursor-pointer"
        htmlFor="Interstellar"
    >
        Interstellar2014
    </label>
    <p className="text-sm text-muted-foreground">
        Director: Christopher Nolan
    </p>
</div>{" "}
<div className="flex items-start space-x-2 rounded-md p-2 hover:bg-slate-100 transition-colors">
    <button
        type="button"
        role="radio"
        aria-checked="false"
        data-state="unchecked"
        value="The Shawshank Redemption"
        className="aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
        id="The Shawshank Redemption"
        tabindex="-1"
        data-radix-collection-item=""
    ></button>
    <input
        type="radio"
        aria-hidden="true"
        // style="transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px; width: 16px; height: 16px;"
        tabindex="-1"
        value="The Shawshank Redemption"
    />
    <div className="grid gap-1">
        <label
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-medium cursor-pointer"
            htmlFor="The Shawshank Redemption"
        >
            The Shawshank Redemption1994
        </label>
        <p className="text-sm text-muted-foreground">
            Director: Frank Darabont
        </p>
    </div>
</div>
<div className="flex items-start space-x-2 rounded-md p-2 hover:bg-slate-100 transition-colors">
    <button
        type="button"
        role="radio"
        aria-checked="false"
        data-state="unchecked"
        value="Pulp Fiction"
        className="aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
        id="Pulp Fiction"
        tabindex="-1"
        data-radix-collection-item=""
    ></button>
    <input
        type="radio"
        aria-hidden="true"
        // style="transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px; width: 16px; height: 16px;"
        tabindex="-1"
        value="Pulp Fiction"
    />
    <div className="grid gap-1">
        <label
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-medium cursor-pointer"
            htmlFor="Pulp Fiction"
        >
            Pulp Fiction1994
        </label>
        <p className="text-sm text-muted-foreground">
            Director: Quentin Tarantino
        </p>
    </div>
</div>
<div className="flex items-start space-x-2 rounded-md p-2 hover:bg-slate-100 transition-colors">
    <button
        type="button"
        role="radio"
        aria-checked="false"
        data-state="unchecked"
        value="Parasite"
        className="aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
        id="Parasite"
        tabindex="-1"
        data-radix-collection-item=""
    ></button>
    <input
        type="radio"
        aria-hidden="true"
        // style="transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px; width: 16px; height: 16px;"
        tabindex="-1"
        value="Parasite"
    />
    <div className="grid gap-1">
        <label
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-medium cursor-pointer"
            htmlFor="Parasite"
        >
            Parasite2019
        </label>
        <p className="text-sm text-muted-foreground">
            Director: Bong Joon-ho
        </p>
    </div>
</div>
</section> */
}
