import { useNavigate } from "react-router-dom";

export default function Feed(props) {
  console.log(props);
  const navigate = useNavigate();

  const navigateTo = (route) => {
    navigate(route);
  }

return(
  <>
    <p>Aquí verás tus notas</p>
    <button 
      type='button'
      onClick={() => {
        navigateTo('/');
      }}
      >
      Welcome
      </button>
  </>
);
}