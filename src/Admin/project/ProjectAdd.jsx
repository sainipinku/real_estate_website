import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import Listing from "../Apis/Listing";
import ImageUploader from "./ImageUploader";
import SideBarAdmin from "../common/SideBarAdmin";

const ProjectAdd = () => {
    const { id } = useParams();
    console.log("Id", id)
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState([]);
    const [instructorDetails, setInstructorDetails] = useState({
        content: "",
        title: "",
        category: "",
        client: "",
        date: "",
        client_review: "",
        client_name: "",
        location: "",
        banner_image: "",
        list_image: "",
        id: ""
    });
    console.log("images", images)

    const [preview, setPreview] = useState(null);

    // Handle file selection
    const handleUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setInstructorDetails((prev) => ({
                ...prev,
                banner_image: file,
            }));
            const previewURL = URL.createObjectURL(file);
            setPreview(previewURL);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };
      const [previewBanner, setPreviewBanner] = useState(null);


    const handleUploads = (e) => {
        const file = e.target.files[0];
        if (file) {
            setInstructorDetails((prev) => ({
                ...prev,
                list_image: file,
            }));
            const previewURL = URL.createObjectURL(file);

            setPreviewBanner(previewURL);

            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    console.log("instructorDetails", instructorDetails)
    const fetchInstructorData = async () => {
        setLoading(true);
        try {
            const main = new Listing();
            const response = await main.ProjectGetDetails(id);
            console.log("response", response)
            if (response?.data?.data) {
                const data = response.data.data;
                const formattedDate = data.date
                    ? new Date(data.date).toISOString().split("T")[0]
                    : "";
                setInstructorDetails({
                    ...data,
                    date: formattedDate,
                });
                if (data.images && Array.isArray(data.images)) {
                    setImages(data.images);
                }
            } else {
                toast.error("Failed to fetch project details.");
            }
        } catch (error) {
            console.error("Error fetching project data:", error);
            toast.error("Unable to load project data.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (id) fetchInstructorData();
    }, [id]);


    const handleInputChange = (e) => {
        const { name, value } = e.target;


        if (name === "content" && e.target.value > 300) {
            toast.error("Please limit content to 300 words only.");
            return;
        }

        if (name === "title" && e.target.value > 100) {
            toast.error("Please limit title to 100 words only.");
            return;
        }

        setInstructorDetails((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (loading) return;
        setLoading(true);
        const main = new Listing();
        const formData = new FormData();
        console.log("formData", formData)
        formData.append("title", instructorDetails.title);
        formData.append("content", instructorDetails.content);
        formData.append("id", instructorDetails._id);
        formData.append("category", instructorDetails.category);

        formData.append("client", instructorDetails.client);
        formData.append("client_review", instructorDetails.client_review);
        formData.append("client_name", instructorDetails.client_name);
        formData.append("location", instructorDetails.location);
        formData.append("banner_image", instructorDetails.banner_image);
        formData.append("list_image", instructorDetails.list_image);
        images.forEach((img) => {
            formData.append("images[]", img); // remove [] — most servers expect 'images' multiple times
        });
        try {
            let response;
            if (id) {
                response = await main.ProjectUpdate(formData);
            } else {
                response = await main.ProjectAdds(formData);
            }
            if (response?.data) {
                toast.success(response.data.message || "Operation successful");
                if (!id) {
                    setInstructorDetails({
                        Image: "",
                        content: "",
                        title: "",
                        content: "",
                        meta_title: "",
                        meta_description: "",
                        meta_keyword: "",
                    });
                }
                navigate("/admin/project-list");
            } else {
                toast.error(response?.data?.message || "Unexpected error occurred.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error(error?.response?.data?.message || "Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="md:flex flex-wrap bg-[#F5F6FB]">
            <SideBarAdmin />
            <div className="w-full lg:w-[calc(100%-304px)] ">
                <div className="px-4 py-2 lg:px-10 lg:py-2.5  ">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                        {id ? "Edit Project" : "Add Project"}
                    </h2>

                    <hr className="mb-6" />

                    <form onSubmit={handleSubmit} className="space-y-5">

                        {/* Title */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Project Title</label>
                            <input
                                type="text"
                                name="title"
                                value={instructorDetails.title}

                                onChange={(e) => {
                                    if (e.target.value.length > 100) {
                                        return;
                                    }
                                    setInstructorDetails((prev) => ({
                                        ...prev,
                                        [e.target.name]: e.target.value,
                                    }));
                                }}
                                required
                                className="border border-gray-300 p-2 rounded-md w-full"

                            />

                            <div className="flex flex-wrap justify-between">
                                <label className="block text-sm mb-2 font-medium text-start text-gray-700 mt-3">
                                    {instructorDetails.title ? (
                                        <span>{instructorDetails.title.length}/100 characters</span>
                                    ) : (
                                        <span>0/100 characters</span>
                                    )}
                                </label>
                                <label className="block text-sm mb-2 font-medium text-end text-gray-700 mt-3">
                                    Minimum 100 words.
                                </label>
                            </div>
                        </div>

                        {/* Short Content */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Project Content</label>
                            <textarea
                                type="text"
                                name="content"
                                value={instructorDetails.content}
                                onChange={(e) => {
                                    setInstructorDetails((prev) => ({
                                        ...prev,
                                        [e.target.name]: e.target.value,
                                    }));
                                }}
                                required
                                rows={6}
                                className="border border-gray-300 p-2 rounded-md w-full text-black"

                            />

                            <div className="flex flex-wrap justify-between">
                                <label className="block text-sm mb-2 font-medium text-start text-gray-700 mt-3">
                                    {instructorDetails.content ? (
                                        <span>{instructorDetails.content.length}/300 characters</span>
                                    ) : (
                                        <span>0/300 characters</span>
                                    )}
                                </label>
                                <label className="block text-sm mb-2 font-medium text-end text-gray-700 mt-3">
                                    Minimum 300 words.
                                </label>
                            </div>
                        </div>

                        {/* Short Content */}




                        <div>
                            <label className="block text-sm font-medium text-gray-700">Project Category</label>
                            <input
                                type="text"
                                name="category"
                                value={instructorDetails.category}
                                onChange={handleInputChange}
                                required
                                className="border border-gray-300 p-2 rounded-md w-full"

                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Project Client</label>
                            <input
                                type="text"
                                name="client"
                                value={instructorDetails.client}
                                onChange={handleInputChange}
                                required
                                className="border border-gray-300 p-2 rounded-md w-full"

                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Project List Image </label>

                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleUploads}
                                className="border border-gray-300 p-2 rounded-md w-full"
                            />
                        </div>
                        {previewBanner ? (
                                <div className="mt-4">
                            <img
                                src={previewBanner }
                                alt="Banner Preview"
                                className="w-full h-48 object-cover rounded-md border"
                            />
                        </div>
                        ) : (
                                <div className="mt-4">
                            <img
                                src={ instructorDetails?.list_image}
                                alt="Banner Preview"
                                className="w-full h-48 object-cover rounded-md border"
                            />
                        </div>
                        )}
                    
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Project Banner Image </label>

                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleUpload}
                                className="border border-gray-300 p-2 rounded-md w-full"
                            />
                        </div>
                        <div className="mt-4">
                            {preview ? (
                                   <img
                                src={preview }
                                alt="Banner Preview"
                                className="w-full h-48 object-cover rounded-md border"
                            />
                            ) : (
                                   <img
                                src={ instructorDetails?.banner_image}
                                alt="Banner Preview"
                                className="w-full h-48 object-cover rounded-md border"
                            />
                            )}
                         
                        </div>


                        <div>
                            <label className="block text-sm font-medium text-gray-700">Client Review</label>
                            <textarea
                                type="text"
                                name="client_review"
                                value={instructorDetails.client_review}
                                onChange={(e) => {
                                    setInstructorDetails((prev) => ({
                                        ...prev,
                                        [e.target.name]: e.target.value,
                                    }));
                                }}
                                required
                                rows={6}
                                className="border border-gray-300 p-2 rounded-md w-full"

                            />

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Project Location</label>
                                <input
                                    type="text"
                                    name="location"
                                    value={instructorDetails.location}
                                    onChange={handleInputChange}
                                    required
                                    className="border border-gray-300 p-2 rounded-md w-full"

                                />
                            </div>

                            <div className="flex flex-wrap justify-between">
                                <label className="block text-sm mb-2 font-medium text-start text-gray-700 mt-3">
                                    {instructorDetails.client_review ? (
                                        <span>{instructorDetails.client_review.length}/300 characters</span>
                                    ) : (
                                        <span>0/300 characters</span>
                                    )}
                                </label>
                                <label className="block text-sm mb-2 font-medium text-end text-gray-700 mt-3">
                                    Minimum 300 words.
                                </label>
                            </div>
                        </div>


                        <div
                        >
                            <label className="block text-sm font-medium text-gray-700">Project Image</label>

                            <ImageUploader images={images} setImages={setImages} setInstructorDetails={setInstructorDetails} instructorDetails={instructorDetails} />

                        </div>
                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="inline-flex items-center px-6 py-2 bg-red-500 text-white font-semibold rounded-md shadow hover:bg-red-600 transition-all disabled:opacity-50"
                            >
                                {loading ? "Saving..." : id ? "Update Project" : "Add Project"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default ProjectAdd;
