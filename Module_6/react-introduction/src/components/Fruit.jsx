const Fruit= ({ fruits }) => {
  return (
    <div>
      {
        fruits.map((fruit, index) => (
          <p key={index}>{fruit}</p>
        ))
      }
    </div>
  );
};

export default Fruit;