const ValidationError = ({ text }) => {
  return (
    <div
      style={{
        color: 'red',
        fontSize: '10px',
        margin: '5px',
        textAlign: 'center',
      }}
    >
      <br />
      {text}
    </div>
  );
};

export default ValidationError;
