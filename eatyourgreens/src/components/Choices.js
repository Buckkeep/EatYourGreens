import { Option } from "./Option";
import vegetables from "./data";

function Choices() {
  return (
    <div className="Choices">
      {vegetables.map((values) => {
        return (
            <Option label={values.label} key={values.id}/>
        );
      })}
    </div>
  );
}

export default Choices;
