import React, { useState } from "react";
import BlogCard from "./blog-card";
import { BlogPost } from "../../utils/types";
import PendingRequestsTable from "./pending-request-table";
import ReviewRequestsTable from "./review-request-table";

const MOCK_POSTS: BlogPost[] = [
    {
      id: "1",
      title: "Understanding Modern Web Development",
      description:
        "Learn about the latest trends and best practices in modern web development including frameworks, tools, and techniques.",
      coverImage: "/placeholder.svg?height=200&width=400",
      readTime: 5,
      lastModified: "2024-03-15",
      author: {
        name: "John Doe",
        id: "1",
      },
    },
    {
      id: "2",
      title: "The Future of AI in Web Design",
      description: "Explore how artificial intelligence is reshaping the landscape of web design and development...",
      coverImage: "/placeholder.svg?height=200&width=400",
      readTime: 8,
      lastModified: "2024-03-14",
      author: {
        name: "Jane Smith",
        id: "2",
      },
    },
  ]
  
  const MOCK_PENDING_REQUESTS = [
    { id: "1", title: "Modern CSS Tips", status: "Pending" },
    { id: "2", title: "React Best Practices", status: "Pending" },
  ]
  
  const MOCK_REVIEW_REQUESTS = [
    { id: "1", title: "TypeScript Guide", author: "Mike Johnson" },
    { id: "2", title: "Node.js Tutorial", author: "Sarah Lee" },
  ]

const Blog = () => {
        const [currentPage, setCurrentPage] = useState(1)
        const postsPerPage = 6
        const totalPages = Math.ceil(MOCK_POSTS.length / postsPerPage)
      
        const handleApprove = (id: string) => {
          console.log("Approved:", id)
        }
      
        const handleReject = (id: string) => {
          console.log("Rejected:", id)
        }
      
        return (
          <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold">Blog Posts</h1>
                <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">Create Blog</button>
              </div>
      
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Blog Posts Grid */}
                <div className="lg:col-span-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {MOCK_POSTS.map((post) => (
                      <BlogCard key={post.id} post={post} />
                    ))}
                  </div>
      
                  {/* Pagination */}
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50"
                    >
                      ←
                    </button>
                    {[...Array(totalPages)].map((_, i) => (
                      <button
                        key={i + 1}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`w-8 h-8 rounded-lg ${
                          currentPage === i + 1 ? "bg-emerald-600 text-white" : "hover:bg-gray-100"
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                    <button
                      onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                      className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50"
                    >
                      →
                    </button>
                  </div>
                </div>
      
                {/* Sidebar */}
                <div className="lg:col-span-1 space-y-6">
                  <PendingRequestsTable requests={MOCK_PENDING_REQUESTS} />
                  <ReviewRequestsTable requests={MOCK_REVIEW_REQUESTS} onApprove={handleApprove} onReject={handleReject} />
                </div>
              </div>
            </div>
          </div>
    );
    
}

export default Blog;