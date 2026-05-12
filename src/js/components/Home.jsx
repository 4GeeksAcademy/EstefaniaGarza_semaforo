import React, {useState} from "react";

const Home = () => {

    const [color, setColor] = useState("green")

    const colors = [
        "red",
        "yellow",
        "green"
    ]

    function getColorBg (item) {
        if (item=="red"){
            return " bg-danger" // Espacio al inicio
        }
        if (item=="yellow"){
            return " bg-warning" // Espacio al inicio
        }
        if (item=="green"){
            return " bg-success" // Espacio al inicio
        }
    }

    function isColorActive (item) {
        if (item=="red" && item == color){
            return " turn-on-red" // Espacio al inicio
        }
        if (item=="yellow" && item == color){
            return " turn-on-yellow" // Espacio al inicio
        }
        if (item=="green" && item == color){
            return " turn-on-green" // Espacio al inicio
        }
        return ""
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <div className="bg-dark p-2" style={{width: '5px', height: '40px'}}></div>
            <div className="d-inline-flex bg-dark">
                <div className="d-flex flex-column align-items-center gap-2 p-2">
                    {
                        colors.map((item)=> {
                            return (
                                <div 
                                    key={item} 
                                    
                                    className={"rounded-circle p-3" + getColorBg(item) + isColorActive(item)} 
                                    style={{ width: "50px", height: "50px", cursor: "pointer" }}
                                    onClick={() => setColor(item)}
                                ></div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;