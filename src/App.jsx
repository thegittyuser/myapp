import reactlogo from "./assets/react.svg";
import landscape from "./assets/landscape.jpg";

function App() {
  return (
    <>
      <h1>Dummy Text</h1>
      {/* <br /> -> Self Closing Tag  */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, error
        non sed atque suscipit laborum reiciendis ea provident exercitationem
        cumque repellat aliquam asperiores similique placeat ipsum! Dolore
        minima amet consequuntur.
      </p>

      <img src={landscape} alt="" width="200" />
      <img src={reactlogo} alt="" width="200" />
    </>
  );
}

export default App;
