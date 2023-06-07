const education = ({ name, date, where }) => {
    return (
      <div>
        <h3>{name}</h3>
        <p>Date: {date}</p>
        <p>Where: {where}</p>
      </div>
    );
  };

export default education
