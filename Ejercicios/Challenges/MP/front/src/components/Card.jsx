import axios from "axios";

export default function Card(props) {
  const handleClik = (e) => {
    axios
      .post("http://localhost:3001/createOrder", props)
      .then((response) => {
        window.location.href = response.data.body.init_point;
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div style={{ width: "30%", border: "1px solid grey" }}>
      <h3>{props.title}</h3>
      <img src={props.image} alt={props.title} style={{ width: "50%" }} />
      <h4>{props.price}</h4>
      <button onClick={handleClik}>Comprar</button>
    </div>
  );
}
