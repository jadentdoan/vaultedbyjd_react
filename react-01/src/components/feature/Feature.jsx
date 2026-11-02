import "./Feature.css";

const Feature = (props) => {
  return (
    <div className="feature">
      <span className="icon">
        {props.icon}
      </span>
      <p>
        {props.title}
        <span>{props.description}</span>
      </p>
    </div>
  );
};

export default Feature;
