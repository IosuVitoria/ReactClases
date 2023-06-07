const experience = ({ name, date, where, description }) => {
    return (
      <div>
        <h3>{name}</h3>
        <p>Date: {date}</p>
        <p>Where: {where}</p>
        <p>Description: {description}</p>

      </div>
    );
  };

export default experience
