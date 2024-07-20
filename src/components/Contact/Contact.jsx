const Contact = ({ name, number, handleDelete }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{number}</p>
      <button onClick={handleDelete}>DELETE</button>
    </div>
  );
};

export default Contact;
