import Card from "./Card";
import productos from "../utils/productos";

export default function Cards(props) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {productos.map((e, i) => (
        <Card key={i} {...e} />
      ))}
    </div>
  );
}
