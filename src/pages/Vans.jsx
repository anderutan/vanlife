import { useEffect, useState } from 'react';
import Card from '../components/Card';

export default function Vans() {
  let [vanData, setVanData] = useState([]);

  useEffect(() => {
    fetch('/api/vans')
      .then((res) => res.json())
      .then((data) => setVanData(data.vans));
  }, []);

  return (
    <div>
      <Card />
    </div>
  );
}
