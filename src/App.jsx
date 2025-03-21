import TitleMovie from "./component/TitleMovie";
import MovieSurvey from "./component/MovieSurvey";
import ShowData from "./component/Showdata";
import "./App.css";
import { useState } from "react";

function App() {
	const [statusPage, setStatusPage] = useState(false);
	const [getData, setGetData] = useState({});
	const toglePageData = () => {
		setStatusPage(!statusPage);
	};
	//นำ Data เข้าหน้า App
	const getDataFrom = (dataFrom) => {
		// setGetData((data) => ({ ...data, ...dataFrom }));
		setGetData(dataFrom);
	};
	// console.log(`appData :`, getData);
	return (
		<div className="w-[100vw] flex flex-col items-center ">
			<TitleMovie />
			{statusPage ? (
				<ShowData toglePageData={toglePageData} getData={getData} />
			) : (
				<MovieSurvey
					toglePageData={toglePageData}
					statusPage={statusPage}
					getDataFrom={getDataFrom}
				/>
			)}
		</div>
	);
}

export default App;
