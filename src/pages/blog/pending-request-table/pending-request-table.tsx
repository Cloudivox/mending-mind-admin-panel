import React from "react";
import { IBlogs } from "../../../types";

interface PendingRequestsTableProps {
  requests: IBlogs[];
}

const PendingRequestsTable: React.FC<PendingRequestsTableProps> = ({
  requests,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">Pending Requests</h2>
      </div>
      <div className="min-h-[200px] max-h-[400px] overflow-y-auto">
        <table className="w-full">
          <thead className="sticky top-0 bg-white">
            <tr className="text-left text-sm text-gray-500">
              <th className="px-4 py-2">Blog Title</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {requests.map((request) => (
              <tr key={request._id} className="border-t">
                <td className="px-4 py-3">{request.title}</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                    Pending
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default PendingRequestsTable;
