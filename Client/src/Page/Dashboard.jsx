import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import * as XLSX from 'xlsx';
// import axios from 'axios';


function ExcelDashboard() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadFile = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData);
      setData(response.data.data);
    } catch (error) {
      console.error('Upload error:', error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/data');
      setData(response.data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">📊 Excel Analytics Dashboard</h1>
      <div className="mb-4">
        <input type="file" onChange={handleFileChange} className="mr-2" />
        <button
          onClick={uploadFile}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Upload Excel
        </button>
      </div>

      {data.length > 0 && (
        <>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border border-collapse">
              <thead>
                <tr>
                  {Object.keys(data[0]).map((key) => (
                    <th key={key} className="border px-4 py-2 bg-gray-100">
                      {key}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    {Object.values(row).map((val, idx) => (
                      <td key={idx} className="border px-4 py-2">
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10">
            <LineChart width={700} height={300} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={Object.keys(data[0])[0]} />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey={Object.keys(data[0])[1]}
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </div>
        </>
      )}
    </div>
  );
}

export default ExcelDashboard;
