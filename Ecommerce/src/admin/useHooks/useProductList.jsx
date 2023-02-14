import axios from "axios";

export default function useProductList() {
  const [products, setProducts] = useState([]);

  function fetchData() {
    axios.get("http://localhost:4000").then((response) => {
      const { data, status } = response;
      if (status === 200) {
        setProducts(data);
      } else {
        alert(`aldaa garlaaa: ${status}`);
      }
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return products;
}
