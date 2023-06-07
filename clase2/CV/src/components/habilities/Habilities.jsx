
const habilities = ({ habilities }) => {
  return (
    <div>
      <h2>Habilities</h2>
      <ul>
        {habilities.map((ability, index) => (
          <li key={index}>{ability}</li>
        ))}
      </ul>
    </div>
  );
};

export default habilities;