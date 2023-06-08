const volunteer = ({ name, where, description }) => {
    return (
      <div>
        <h3>{name}</h3>
        <p>Where: {where}</p>
        <p>Description: {description}</p>

      </div>
    );
  };

export default volunteer
