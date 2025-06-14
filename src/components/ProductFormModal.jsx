import { useEffect, useState } from "react";
import { getCategories } from "../api/categoryApi";
import { getDevelopers } from "../api/developerApi";

function ProductFormModal({ isOpen, onClose, onSubmit, initialData }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [pictures, setPictures] = useState("");
  const [category, setCategory] = useState("");
  const [developer, setDeveloper] = useState("");
  const [categories, setCategories] = useState([]);
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const cats = await getCategories();
      const devs = await getDevelopers();
      setCategories(cats);
      setDevelopers(devs);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (initialData) {
      setName(initialData.name || "");
      setDescription(initialData.description || "");
      setPrice(initialData.price || "");
      setPictures(initialData.pictures || "");
      setCategory(initialData.categories_id?._id || "");
      setDeveloper(initialData.developer_id?._id || "");
    } else {
      setName("");
      setDescription("");
      setPrice("");
      setPictures("");
      setCategory("");
      setDeveloper("");
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      name,
      description,
      price,
      pictures,
      categories_id: category,
      developer_id: developer,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-[#15003a] p-6 rounded-lg w-full max-w-md text-white space-y-4">
        <h3 className="text-xl font-semibold">{initialData ? "Edit Product" : "Add Product"}</h3>

        <div>
          <label className="block mb-1">Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 rounded bg-[#1d004f] border border-purple-600" required />
        </div>

        <div>
          <label className="block mb-1">Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-2 rounded bg-[#1d004f] border border-purple-600" rows={3} required />
        </div>

        <div>
          <label className="block mb-1">Price</label>
          <input type="number" min="0" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full p-2 rounded bg-[#1d004f] border border-purple-600" required />
        </div>

        <div>
          <label className="block mb-1">Picture URL</label>
          <input type="text" value={pictures} onChange={(e) => setPictures(e.target.value)} className="w-full p-2 rounded bg-[#1d004f] border border-purple-600" required />
        </div>

        <div>
          <label className="block mb-1">Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full p-2 rounded bg-[#1d004f] border border-purple-600" required>
            <option value="">-- Select Category --</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.category_name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1">Developer</label>
          <select value={developer} onChange={(e) => setDeveloper(e.target.value)} className="w-full p-2 rounded bg-[#1d004f] border border-purple-600" required>
            <option value="">-- Select Developer --</option>
            {developers.map((dev) => (
              <option key={dev._id} value={dev._id}>
                {dev.developer_name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-700">
            Cancel
          </button>
          <button type="submit" className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-700">
            {initialData ? "Update" : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductFormModal;
