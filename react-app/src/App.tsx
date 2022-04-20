import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [data, setData] = useState(null as any);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await axios.get("http://localhost:3001/api");
    setData(res.data);
  }

  return (
    <div>
      {
        data ? (
          <h3>{data}</h3>
        ) : <h3>Loading...</h3>
      }
    </div>
  );
}

export default App;
