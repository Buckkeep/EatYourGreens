import { Option } from "./Option";
import vegetable from "./data";

function Choices() {
  return (
    <div className="Choices">
      {vegetable.map((values) => {
        return (
          <div>
            <Option key={values.key} label={values.label}  />
          </div>
        );
      })}
    </div>
  );
}

export default Choices;
