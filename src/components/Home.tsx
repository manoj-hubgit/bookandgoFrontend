import { useNavigate } from "react-router-dom";


function Home(){
const navigate = useNavigate();
    const handleClick=()=>{
        navigate("/Movies")
    }
    return(
        <>
        <h1>This is home Page</h1>
        <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>Hello</button>
        </>
        
    )
}
export default Home;