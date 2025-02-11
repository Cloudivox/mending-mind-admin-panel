import React from "react";
import { IBlogs } from "../../../types";

interface ReviewRequestsTableProps {
  requests: IBlogs[];
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
}

const ReviewRequestsTable = ({
  requests,
  onApprove,
  onReject,
}: ReviewRequestsTableProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border mt-6">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">Review Requests</h2>
      </div>
      <div className="min-h-[200px] max-h-[400px] overflow-y-auto">
        <table className="w-full">
          <thead className="sticky top-0 bg-white">
            <tr className="text-left text-sm text-gray-500">
              <th className="px-4 py-2">Blog Title</th>
              <th className="px-4 py-2">Author</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {requests.map((request: any) => (
              <tr key={request._id} className="border-t">
                <td className="px-4 py-3">{request.title}</td>
                <td className="px-4 py-3">{request.author}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button
                      onClick={() => onApprove(request._id)}
                      className="p-1 rounded-full bg-emerald-100 text-emerald-600 hover:bg-emerald-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </button>
                    <button
                      onClick={() => onReject(request._id)}
                      className="p-1 rounded-full bg-red-100 text-red-600 hover:bg-red-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReviewRequestsTable;
