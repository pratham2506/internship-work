const CallToActions = () => {
  return (
    <div className="outer-box aos-init aos-animate" data-aos="fade-up">
      <div className="content-column">

    <div className="sec-title ">
      <h2>Recruiting?</h2>
      <div className="text">
        Advertise your jobs to millions of monthly users and search 15.8 million <br />
        CVs in our database.
      </div>
      <a href="#" className="theme-btn btn-style-one bg-blue">
        <span className="btn-title">Start Recruiting Now</span>
      </a>
    </div>
      </div>
      <div
        className="image-column"
        style={{ backgroundImage: "url(/images/resource/image-1.png)" }}
      ></div>
    </div>
  );
};

export default CallToActions;
