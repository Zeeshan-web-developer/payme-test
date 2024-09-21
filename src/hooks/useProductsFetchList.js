import React from 'react'
import { BASE_URL } from '../constants';

function useProductsFetchList() {
    const [products, setProducts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    const fetchAllProducts = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${BASE_URL}/products`);
            const data = await response.json();
            setProducts(data);
           
        } catch (error) {
            setError(error);
          
        }
        finally {
            setLoading(false);
        }
    }

    React.useEffect(() => {
        fetchAllProducts();
    }, []);
    



  return {
    products,
    loading,
    error
  }
}

export default useProductsFetchList