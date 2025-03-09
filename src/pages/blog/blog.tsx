import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import BlogCard from "./blog-card";
import PendingRequestsTable from "./pending-request-table";
import ReviewRequestsTable from "./review-request-table";
import useGetAllBlogs from "./services/get-all-blogs/get-all-blogs";
import useCreateBlog from "./services/create-blog/create-blog";
import { IBlogs } from "../../types";

const Blog = () => {
  // const [blogs, setBlogs] = useState<IBlogs[]>([]);
  const [pendingBlogs, setPendingBlogs] = useState<IBlogs[]>([]);
  const [approvedBlogs, setApprovedBlogs] = useState<IBlogs[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const getAllApprovedBlogs = useGetAllBlogs("approved");
  const getAllPendingBlogs = useGetAllBlogs("pending");
  // const getAllBlogs = useGetAllBlogs();
  const createBlog = useCreateBlog();

  const [formData, setFormData] = useState<any>({
    title: "",
    desc: "",
    author: "",
    date: "",
    image: null,
    readTime: "",
  });

  const handleApprove = (id: string) => {
    console.log("Approved:", id);
  };

  const handleReject = (id: string) => {
    console.log("Rejected:", id);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e: any) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
    createBlog.mutate(formData);
    setIsModalOpen(false);
    toast.success("Blog added successfully!");
  };

  useEffect(() => {
    if (getAllApprovedBlogs.isSuccess && getAllApprovedBlogs.data) {
      setApprovedBlogs(getAllApprovedBlogs.data.blogs || []);
    }
  }, [getAllApprovedBlogs.isSuccess, getAllApprovedBlogs.data]);

  useEffect(() => {
    if (getAllPendingBlogs.isSuccess && getAllPendingBlogs.data) {
      setPendingBlogs(getAllPendingBlogs.data.blogs || []);
    }
  }, [getAllPendingBlogs.isSuccess, getAllPendingBlogs.data]);

  // useEffect(() => {
  //   if (getAllBlogs.isSuccess && getAllBlogs.data) {
  //     setBlogs(getAllBlogs.data.blogs || []);
  //   }
  // }, [getAllBlogs.isSuccess, getAllBlogs.data]);

  useEffect(() => {
    if (createBlog.isSuccess) {
      getAllApprovedBlogs.refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createBlog.isSuccess]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className=" mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Blog Posts</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#16A085] hover:bg-[#457067] text-[#ffffff] font-montserrat font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg flex items-center gap-2"
          >
            Create Blog
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {approvedBlogs.map((post: any) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>

            <div className="flex justify-center mt-8 gap-2">
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  className={`px-4 py-2 rounded-lg font-montserrat font-semibold transition-all duration-300 ${
                    page === 1
                      ? "bg-[#16A085] text-white"
                      : "bg-white text-[#2C3E50] hover:bg-[#16A085] hover:text-white"
                  } `}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <PendingRequestsTable requests={pendingBlogs} />
            <ReviewRequestsTable
              requests={pendingBlogs}
              onApprove={handleApprove}
              onReject={handleReject}
            />
          </div>

          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-gray-800">
                    Add New Blog
                  </h2>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    &times;
                  </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Description
                    </label>
                    <textarea
                      name="desc"
                      value={formData.desc}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Author
                    </label>
                    <input
                      type="text"
                      name="author"
                      value={formData.author}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Image
                    </label>
                    <input
                      type="file"
                      name="image"
                      onChange={handleImageChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Read Time
                    </label>
                    <input
                      type="text"
                      name="readTime"
                      value={formData.readTime}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex justify-end gap-2 mt-6">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                    >
                      Add Blog
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
