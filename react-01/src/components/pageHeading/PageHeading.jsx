import "./PageHeading.css";

const PageHeading = (props) => {
  return (
    <section className="page-heading">
      <div className="container">
        <h1>{props.title}</h1>
      </div>
    </section>
  );
};

export default PageHeading;
