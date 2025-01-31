import React from "react";

 const Products = () => {
    
  return (
    <div id="webcrumbs" className="w-full min-h-screen"> 
            	<div className="w-full p-6 bg-white shadow rounded-xl min-h-screen">
    	    <div className="flex justify-between items-center mb-8">
    	        <h1 className="text-2xl font-playfair font-bold">Products Dashboard</h1>
    	        <div className="relative">
    	            <details className="relative">
    	                <summary className="flex items-center gap-2 px-4 py-2 bg-[#E5F9FF] rounded-lg cursor-pointer hover:bg-[#CCF4FF] transition-all">
    	                    <span className="material-symbols-outlined">calendar_month</span>
    	                    <span>Select Date Range</span>
    	                </summary>
    	                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl p-4 z-10">
    	                    <input type="date" className="w-full mb-2 p-2 border rounded" />
    	                    <input type="date" className="w-full p-2 border rounded" />
    	                </div>
    	            </details>
    	        </div>
    	    </div>
    	
    	    <div className="grid grid-cols-3 gap-6 mb-8">
    	        <div className="p-6 bg-[#E5F9FF] rounded-xl hover:shadow-lg transition-all">
    	            <p className="text-sm font-montserrat mb-2">Products Sold</p>
    	            <h2 className="text-3xl font-playfair font-bold">1,234</h2>
    	            <p className="text-sm text-green-500 mt-2">+12.5% from last month</p>
    	        </div>
    	        <div className="p-6 bg-[#FFF4E5] rounded-xl hover:shadow-lg transition-all">
    	            <p className="text-sm font-montserrat mb-2">Revenue</p>
    	            <h2 className="text-3xl font-playfair font-bold">$45,678</h2>
    	            <p className="text-sm text-green-500 mt-2">+8.3% from last month</p>
    	        </div>
    	        <div className="p-6 bg-[#F5E6FF] rounded-xl hover:shadow-lg transition-all">
    	            <p className="text-sm font-montserrat mb-2">Orders</p>
    	            <h2 className="text-3xl font-playfair font-bold">897</h2>
    	            <p className="text-sm text-green-500 mt-2">+15.2% from last month</p>
    	        </div>
    	    </div>
    	
    	    <div className="grid grid-cols-3 gap-6">
    	        <div className="col-span-1 bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all">
    	            <h3 className="font-playfair font-bold mb-4">Trending Up</h3>
    	            <table className="w-full">
    	                <thead>
    	                    <tr className="border-b">
    	                        <th className="py-2 text-left font-montserrat">Product</th>
    	                        <th className="py-2 text-left font-montserrat">Price</th>
    	                        <th className="py-2 text-left font-montserrat">Growth</th>
    	                    </tr>
    	                </thead>
    	                <tbody>
    	                    <tr className="border-b hover:bg-gray-50">
    	                        <td className="py-3">Product A</td>
    	                        <td className="py-3">$299</td>
    	                        <td className="py-3 text-green-500">+45%</td>
    	                    </tr>
    	                    <tr className="border-b hover:bg-gray-50">
    	                        <td className="py-3">Product D</td>
    	                        <td className="py-3">$199</td>
    	                        <td className="py-3 text-green-500">+32%</td>
    	                    </tr>
    	                </tbody>
    	            </table>
    	        </div>
    	        
    	        <div className="col-span-1 bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all">
    	            <h3 className="font-playfair font-bold mb-4">Top Selling</h3>
    	            <table className="w-full">
    	                <thead>
    	                    <tr className="border-b">
    	                        <th className="py-2 text-left font-montserrat">Product</th>
    	                        <th className="py-2 text-left font-montserrat">Price</th>
    	                        <th className="py-2 text-left font-montserrat">Sold</th>
    	                    </tr>
    	                </thead>
    	                <tbody>
    	                    <tr className="border-b hover:bg-gray-50">
    	                        <td className="py-3">Product B</td>
    	                        <td className="py-3">$399</td>
    	                        <td className="py-3">234</td>
    	                    </tr>
    	                    <tr className="border-b hover:bg-gray-50">
    	                        <td className="py-3">Product E</td>
    	                        <td className="py-3">$249</td>
    	                        <td className="py-3">189</td>
    	                    </tr>
    	                </tbody>
    	            </table>
    	        </div>
    	
    	        <div className="col-span-1 bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all">
    	            <h3 className="font-playfair font-bold mb-4">Not Selling</h3>
    	            <table className="w-full">
    	                <thead>
    	                    <tr className="border-b">
    	                        <th className="py-2 text-left font-montserrat">Product</th>
    	                        <th className="py-2 text-left font-montserrat">Price</th>
    	                        <th className="py-2 text-left font-montserrat">Decline</th>
    	                    </tr>
    	                </thead>
    	                <tbody>
    	                    <tr className="border-b hover:bg-gray-50">
    	                        <td className="py-3">Product C</td>
    	                        <td className="py-3">$499</td>
    	                        <td className="py-3 text-red-500">-12%</td>
    	                    </tr>
    	                    <tr className="border-b hover:bg-gray-50">
    	                        <td className="py-3">Product F</td>
    	                        <td className="py-3">$349</td>
    	                        <td className="py-3 text-red-500">-8%</td>
    	                    </tr>
    	                </tbody>
    	            </table>
    	        </div>
    	    </div>
    	</div> 
            </div>
  )
}

export default Products;

