import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<div className="bg-dark p-1"></div>
            <div className="d-inline-flex bg-dark m-2">
				<div className="d-flex flex-column align-items-center gap-2 p-2">
					<div className="col-4 bg-danger rounded-4 p-3"></div>
					<div className="col-4 bg-warning rounded-4 p-3"></div>
					<div className="col-4 bg-successh rounded-4 p-3"></div>
				</div>
			</div>

		
		</div>
	);
};

export default Home;