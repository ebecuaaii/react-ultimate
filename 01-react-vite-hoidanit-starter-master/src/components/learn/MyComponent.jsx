//JSX: 1 parent
import "./style.css";

const MyComponent = () => {
  return (
    <>
      <div>ngoc truc hoc react day 1</div> //tag
      <div className="child">child style = {{ borderRadius: "10px" }}</div>
    </>
  );
};
export default MyComponent;
