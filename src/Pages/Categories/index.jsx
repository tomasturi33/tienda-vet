import { useState, useEffect } from 'react' 
import Icon from '@mdi/react';
import { mdiPencil, mdiTrashCan } from '@mdi/js';
import '../../App.css'

function Category() {
  const [loading, setLoading] = useState(true);
  const [sendSubmit, setSendSubmit] = useState(false);
  const [items, setItems] = useState(null)
  const [categoryName, setCategoryName] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/categories`)
      .then((response) => response.json())
      .then((data) => {
        // Procesar las imágenes para convertir strings JSON en arrays reales
        const processedItems = data.map((item) => ({
          ...item,
          // images: JSON.parse(item.images), // Convierte el string JSON en un array
        }));
        setItems(processedItems);
        setLoading(false);
      });
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/categories`);
      console.log(response)
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error("Error al obtener categorías:", error);
    }
};

  const handleSubmit = () => {
    if (categoryName.trim() === "") return;
    addCategory(categoryName);
    setCategoryName("");
    setSendSubmit(true);
  };

  const addCategory = async (name) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/categories`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });
  
      if (!response.ok) {
        throw new Error("Error al agregar la categoría");
      }
  
      const data = await response.json();
      fetchCategories();
      closeModal();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const closeModal = () => {
    setSendSubmit(false);
    setIsOpen(false);
  };
  
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 mt-14">
        {loading ? (
          <div className="flex items-center justify-center justify-center h-[80vh]">
            <div role="status">
                <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <div>
            <div className="relative overflow-x-auto">

              <div className='mb-8 flex justify-start'>
                <button 
                  className="block text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" 
                  type="button"
                  onClick={() => setIsOpen(true)}>
                  Crear categoría
                </button>
              </div>

              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-sm font-semibold text-gray-600 uppercase bg-gray-100 dark:bg-gray-800 dark:text-gray-300 border-b border-gray-300 dark:border-gray-600 tracking-wider hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
                  <tr>
                    <th scope="col" className="px-6 py-3 w-10">
                      #ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Categorias productos
                    </th>
                    <th scope="col" className="flex py-3 justify-center">
                        Acciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                {
                  items && items.map((item, index) => (
                    <tr
                      key={index}
                      className="odd:bg-white even:bg-gray-50 border-b dark:odd:bg-gray-800 dark:even:bg-gray-700 dark:border-gray-600"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item.id}
                      </th>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item.name}
                      </th>
                      <td className="flex py-3 justify-center">
                        <button className="mr-1 ml-1 w-7 h-7 flex items-center justify-center bg-yellow-400 hover:bg-yellow-300 text-black rounded-full">
                          <Icon path={mdiPencil} size={0.6} />
                        </button>

                        <button className="mr-1 ml-1 w-7 h-7 flex items-center justify-center bg-red-400 hover:bg-red-300 text-white rounded-full">
                          <Icon path={mdiTrashCan} size={0.6} />
                        </button>
                      </td>
                    </tr>
                  ))
                }
                </tbody>
              </table>

              <div
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 z-50 ${
                  isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}>
                {/* Modal */}
                <div
                  className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96 transform transition-all duration-300 ${
                    isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
                  }`}
                >
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Nueva Categoría
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Ingresa el nombre de la nueva categoría.
                  </p>

                  {/* Input */}
                  <input
                    type="text"
                    className="mt-3 w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white dark:border-gray-600"
                    placeholder="Nombre de la categoría"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                  />

                  {/* Botónes */}
                  <div className="mt-4 flex justify-end gap-2">
                    <button
                      className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg"
                      onClick={closeModal}
                      disabled={sendSubmit}
                    >
                      Cancelar
                    </button>
                    <button
                      className="w-24 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center"
                      onClick={handleSubmit}
                    >
                      {sendSubmit ? (
                        <>
                          <svg
                            className="animate-spin h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                            ></path>
                          </svg>
                        </>
                      ) : (
                        "Agregar"
                      )}
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default Category