import { useEffect, useState } from "react";
import { getDevelopers, createDeveloper, updateDeveloper, deleteDeveloper } from "../../api/developerApi";
import { Pencil, Trash } from "lucide-react";

function DevelopersAdmin() {
  const [developers, setDevelopers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editData, setEditData] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [developerToDelete, setDeveloperToDelete] = useState(null);

  const fetchDevelopers = async () => {
    setLoading(true);
    const data = await getDevelopers();
    setDevelopers(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchDevelopers();
  }, []);

  const openForm = (developer = null) => {
    setEditData(developer);
    setName(developer?.developer_name || "");
    setDescription(developer?.description || "");
    setShowForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { developer_name: name, description };
    try {
      if (editData) {
        await updateDeveloper(editData._id, payload);
      } else {
        await createDeveloper(payload);
      }
      fetchDevelopers();
      setShowForm(false);
      setEditData(null);
      setName("");
      setDescription("");
    } catch (err) {
      alert("Failed to save developer");
    }
  };

  const confirmDelete = (developer) => {
    setDeveloperToDelete(developer);
    setShowDeleteModal(true);
  };

  const proceedDelete = async () => {
    try {
      await deleteDeveloper(developerToDelete._id);
      fetchDevelopers();
    } catch {
      alert("Failed to delete");
    } finally {
      setDeveloperToDelete(null);
      setShowDeleteModal(false);
    }
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold">👨‍💻 Developers</h2>
        <button onClick={() => openForm()} className="w-full sm:w-fit font-bold px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700">
          + Add Developer
        </button>
      </div>

      {loading ? (
        <p>Loading developers...</p>
      ) : developers.length === 0 ? (
        <p>No developers found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-white bg-[#1c003a] rounded">
            <thead className="bg-purple-800 text-white">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {developers.map((dev) => (
                <tr key={dev._id} className="border-b border-purple-900">
                  <td className="px-4 py-2">{dev.developer_name}</td>
                  <td className="px-4 py-2">{dev.description}</td>
                  <td className="px-4 py-2 flex gap-2">
                    <button onClick={() => openForm(dev)} className="text-yellow-400 hover:underline">
                        <Pencil size={16} />
                    </button>
                    <button onClick={() => confirmDelete(dev)} className="text-red-500 hover:underline">
                        <Trash size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
          <form onSubmit={handleSubmit} className="bg-[#15003a] p-6 rounded-lg w-full max-w-md text-white space-y-4">
            <h3 className="text-xl font-semibold">{editData ? "Edit Developer" : "Add Developer"}</h3>

            <div>
              <label className="block mb-1">Developer Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="w-full p-2 rounded bg-[#1d004f] border border-purple-600" />
            </div>

            <div>
              <label className="block mb-1">Description</label>
              <textarea rows={3} value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-2 rounded bg-[#1d004f] border border-purple-600" />
            </div>

            <div className="flex justify-end gap-3">
              <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-700">
                Cancel
              </button>
              <button type="submit" className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-700">
                {editData ? "Update" : "Create"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="bg-[#15003a] p-6 rounded-lg max-w-sm w-full text-white text-center">
            <h3 className="text-lg font-semibold mb-4">
              Are you sure you want to delete <span className="text-red-400">{developerToDelete?.developer_name}</span>?
            </h3>
            <div className="flex justify-center gap-4">
              <button onClick={() => setShowDeleteModal(false)} className="px-4 py-2 rounded bg-gray-600 hover:bg-gray-700">
                No
              </button>
              <button onClick={proceedDelete} className="px-4 py-2 rounded bg-red-600 hover:bg-red-700">
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DevelopersAdmin;
