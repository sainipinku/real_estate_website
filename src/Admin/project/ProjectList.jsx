import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { MdAdd, MdDelete, MdEdit } from "react-icons/md";
import debounce from "lodash.debounce";
import Pagination from "../component/Pagination";
import NoDataPage from "../component/NoDataPage";
import DeletePopup from "../component/DeletePopup";
import Listing from "../Apis/Listing";
import Image from "../component/Image";
import SideBarAdmin from "../common/SideBarAdmin";
import HeaderAdmin from "../common/HeaderAdmin";
import toast from "react-hot-toast";

const ProjectList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [listing, setListing] = useState([]);

  // Fetch data
  const fetchMarketLists = async (searchQuery = "", page = 1, limit = 15) => {
    setLoading(true);
    try {
      const main = new Listing();
      const response = await main.ProjectGet(searchQuery, page, limit);

      setListing(response?.data?.data || []);
      setTotalPages(response?.data?.totalPages || 1);
      setCurrentPage(response?.data?.currentPage || 1);
      setTotalItems(response?.data?.totalUsers || 0);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMarketLists(search, currentPage);
  }, [currentPage]);

  // Debounced search
  const debouncedFetchMarketLists = useCallback(
    debounce((query) => fetchMarketLists(query, 1), 300),
    []
  );

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (value.length === 0 || value.length >= 3) {
      debouncedFetchMarketLists(value);
    }
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const handleDelete = async (id) => {
    try {
      const main = new Listing();
      await main.ProjectDelete({ id: id });
      toast.success("Project deleted successfully!");
      fetchMarketLists(search, currentPage);
    } catch (error) {
      console.error("Error deleting project:", error);
      toast.error("Failed to delete project.");
    }
  };


  return (
    <div className="md:flex flex-wrap bg-[#F5F6FB]">
      <SideBarAdmin />
      <div className="w-full lg:w-[calc(100%-304px)]">
        <HeaderAdmin title={"Project Listing"} />
        <div className="px-4 py-2 lg:px-10 lg:py-2.5">
          <div className="bg-white rounded-[20px] mb-[30px]">
            <div className="py-4 px-4 md:px-6 lg:px-10 flex justify-between items-center border-b border-black border-opacity-10">
              <h3 className="text-base lg:text-lg font-semibold text-[#1E1E1E] tracking-[-0.03em]">
                Project Members
              </h3>
              <Link
                to="/admin/project-add"
                className=" bg-[#0367F7] bg-opacity-10 text-[#0367F7] p-2 rounded-lg flex items-center gap-3 text-base lg:text-lg  font-semibold  tracking-[-0.03em]"
              >
                <MdAdd /> Add Project
              </Link>

            </div>

            <div className="overflow-x-auto">
              {loading ? (
                <div className="text-center py-10">Loading...</div>
              ) : listing.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-3">
                  {listing.map((blog, index) => (
                    <div
                      key={index}
                      className="bg-white border rounded-lg shadow-sm overflow-hidden hover:shadow-md transition duration-300"
                    >
                      <div className="relative">
                        {/* Image */}
                        <Image
                          className="w-full h-[200px] object-cover rounded-t-lg"
                          alt={blog.title || "Blog Image"}
                          src={blog?.list_image || "/work/Interior.png"}
                        />

                        {/* Delete Button Overlay */}
                        <button
                          onClick={() => handleDelete(blog._id)}
                          className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 shadow-md transition"
                          title="Delete Project"
                        >
                          <MdDelete size={20} />
                        </button>
                      </div>

                      <Link to={`/admin/project-details/${blog.slug}`}>
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-gray-800 mb-1">
                            {blog.title || "Untitled"}
                          </h3>
                          <p className="text-gray-500 text-sm mb-1">
                            <strong>Client:</strong> {blog.client || "N/A"}
                          </p>

                          <p className="text-gray-500 text-sm mb-3">
                            <strong>Category:</strong> {blog.category || "N/A"}
                          </p>

                          <p className="text-gray-600 line-clamp-3 text-sm">
                            {blog?.short_content || blog?.content?.slice(0, 100) || "No content available."}
                          </p>

                          {/* <div className="flex justify-between items-center mt-4 border-t pt-3">
                          <Link
                            to={`/admin/project-update/${blog._id}`}
                            className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                          >
                            <MdEdit />
                          </Link>

                          <DeletePopup
                            item={blog}
                            title="Delete project"
                            step={4}
                            fetchTeamList={fetchMarketLists}
                          />
                        </div> */}
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10">
                  <NoDataPage />
                </div>
              )}

              <div className="mt-6">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default ProjectList;
