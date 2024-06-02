const App = () => {
  const [products, setproducts] = React.useState([]);

  React.useEffect(() => {
    fetchProducts();
  }, []);
  function fetchProducts() {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <ul class="list-group">
      <li class="list-group-item">And a fifth one</li>
    </ul>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
