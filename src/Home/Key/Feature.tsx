import { useLocation } from "react-router-dom";

const Feature =()=>{
    const location = useLocation();
  const currentPath = location.pathname;
    return (<>
      <h1>{currentPath}</h1>
    
    
    </>);

}

export default Feature;