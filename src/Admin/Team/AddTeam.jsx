import { useEffect, useState } from "react";
import Listing from "../Apis/Listing";
import toast from "react-hot-toast";
import { MdAdd, MdEdit } from "react-icons/md";

function AddTeam({ item, fetchTeamList }) {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: item?.name || "",
    position: item?.position || "",
    file: null, // store the actual file
    _id: item?._id,
  });

  useEffect(() => {
    setFormData({
      name: item?.name,
      position: item?.position
    })
    setPreview(item?.imageUrl)
  }, [item])
  const [preview, setPreview] = useState(item?.imageUrl || "");

  // Handle text input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file selection
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, file }));
      setPreview(URL.createObjectURL(file)); // show preview
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const main = new Listing();
      const data = new FormData();
      data.append("name", formData.name);
      data.append("position", formData.position);
      if (formData.file) {
        data.append("file", formData.file); // append file
      }
      let response;

      if (item?._id) {
        data.append("_id", item._id);
        response = await main.Editeam(data); // backend should accept multipart/form-data
      } else {
        response = await main.AddTeam(data);
      }

      toast.success(response.data.message);
      setShowModal(false);
      setFormData({ name: "", position: "", file: null });
      setPreview("");
      fetchTeamList();
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Add/Edit Button */}
      <div className="px-2 py-4 text-center">
        <button
          onClick={() => setShowModal(true)}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          {item?._id ? <MdEdit /> : <MdAdd />}
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-4 text-gray-600 hover:text-black text-2xl font-bold"
            >
              &times;
            </button>

            <h2 className="text-2xl font-semibold mb-4">
              {item?._id ? "Edit Team Member" : "Add Team Member"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded-md w-full"
                  required
                />
                <input
                  type="text"
                  name="position"
                  placeholder="Position"
                  value={formData.position}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded-md w-full"
                  required
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleUpload}
                  className="border border-gray-300 p-2 rounded-md w-full"
                />
                {preview && (
                  <img
                    src={preview}
                    alt="Preview"
                    className="h-32 w-32 object-cover rounded-md mt-2"
                  />
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                {loading
                  ? "Processing..."
                  : item?._id
                    ? "Update Team Member"
                    : "Add Team Member"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default AddTeam;
