const RedioMovie = () => {
	return (
		<>
			<div className="space-y-3">
				<label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium">
					เลือกหนังที่คุณชอบ <span className="text-red-500">*</span>
				</label>
			</div>
		</>
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
