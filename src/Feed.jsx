import { useNavigate } from "react-router-dom";

function Welcome(props){
  console.log(props);
  const navigate = useNavigate();

  const navigateTo = (route) => {
    navigate(route);
  }

return(
  <>
    <h1>Welcome</h1>
    <button 
      type='button'
      onClick={() => {
        navigateTo('/about');
      }}
      >
      About
      </button>
  </>
);
}