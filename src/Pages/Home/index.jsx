import { useState, useEffect } from 'react' 
import Card from '../../Components/Card'
import '../../App.css'

function Home() {
  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((response) => response.json())
      .then((data) => {
        // Procesar las imágenes para convertir strings JSON en arrays reales
        const processedItems = data.map((item) => ({
          ...item,
          images: JSON.parse(item.images), // Convierte el string JSON en un array
        }));
        setItems(processedItems);
      });
  }, []);

  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 mt-14">
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
          {
            items && items.map(item => (
              <Card key={item.id} data={item} />
            ))
          }
        </div>
      </div>
      <pre>
        {
          items ? JSON.stringify(items, null, 2) : "Loading..."
        }
      </pre>
    </div>
  )
}

export default Home