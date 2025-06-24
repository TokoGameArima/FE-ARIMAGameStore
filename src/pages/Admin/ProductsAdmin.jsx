import { useEffect, useState } from "react";
import { getAllProducts, deleteProduct, createProduct, updateProduct } from "../../api";
import { Pencil, Trash } from "lucide-react";
import ProductFormModal from "../../components/Admin/ProductFormModal";

function ProductsAdmin() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [showFormModal, setShowFormModal] = useState(false);
  const [editData, setEditData] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    const data = await getAllProducts();
    setProducts(data);
    setLoading(false);
  };

  const confirmDelete = (product) => {
    setProductToDelete(product);
    setShowDeleteModal(true);
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setProductToDelete(null);
  };

  const proceedDelete = async () => {
    try {
      await deleteProduct(productToDelete._id);
      fetchProducts();
    } catch (err) {
      alert("Failed to delete product.");
    } finally {
      setShowDeleteModal(false);
      setProductToDelete(null);
    }
  };

  const openImageModal = (url) => {
    setSelectedImage(url);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const openCreateModal = () => {
    setEditData(null);
    setShowFormModal(true);
  };

  const openEditModal = (product) => {
    setEditData(product);
    setShowFormModal(true);
  };

  const handleFormSubmit = async (formData) => {
    try {
      if (editData) {
        await updateProduct(editData._id, formData);
      } else {
        await createProduct(formData);
      }
      fetchProducts();
      setShowFormModal(false);
    } catch (err) {
      alert("Failed to submit product.");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold">📦 Products List</h2>
        <button onClick={openCreateModal} className="w-full sm:w-fit font-bold px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700">
          + Add Product
        </button>
      </div>

      {loading ? (
        <p>Loading game products...</p>
      ) : products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-white bg-[#1c003a] rounded">
            <thead className="bg-purple-800 text-white">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Developer</th>
                <th className="px-4 py-2">Picture</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id} className="border-b border-purple-900">
                  <td className="px-4 py-2">{product.name}</td>
                  <td className="px-4 py-2">
                    {Number(product.price).toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </td>
                  <td className="px-4 py-2">{product.categories_id?.category_name || "-"}</td>
                  <td className="px-4 py-2">{product.developer_id?.developer_name || "-"}</td>
                  <td className="px-4 py-2">
                    <button onClick={() => openImageModal(product.pictures)} className="text-blue-400 hover:underline">
                      Show Image
                    </button>
                  </td>
                  <td className="px-4 py-2 flex gap-2">
                    <button onClick={() => openEditModal(product)} className="text-yellow-400 hover:underline">
                      <Pencil size={16} />
                    </button>
                    <button onClick={() => confirmDelete(product)} className="text-red-500 hover:underline">
                      <Trash size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="bg-[#15003a] p-6 rounded-lg max-w-sm w-full text-white text-center">
            <h3 className="text-lg font-semibold mb-4">Product Image</h3>
            <img src={selectedImage} alt="Preview" className="w-full rounded mb-4" />
            <button onClick={closeImageModal} className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded">
              Close
            </button>
          </div>
        </div>
      )}

      {showDeleteModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="bg-[#15003a] p-6 rounded-lg max-w-sm w-full text-white text-center">
            <h3 className="text-lg font-semibold mb-4">
              Are you sure you want to delete <span className="text-red-400">{productToDelete?.name}</span>?
            </h3>
            <div className="flex justify-center gap-4">
              <button onClick={cancelDelete} className="px-4 py-2 rounded bg-gray-600 hover:bg-gray-700">
                No
              </button>
              <button onClick={proceedDelete} className="px-4 py-2 rounded bg-red-600 hover:bg-red-700">
                Yes
              </button>
            </div>
          </div>
        </div>
      )}

      <ProductFormModal isOpen={showFormModal} onClose={() => setShowFormModal(false)} onSubmit={handleFormSubmit} initialData={editData} />
    </div>
  );
}

export default ProductsAdmin;
