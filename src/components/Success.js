import {React,useState} from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import axios from 'axios';

export default function Success() {

  const params = useParams();
  const navigate = useNavigate();
  const [downloadState, setDownloadState] = useState("Invoice");

  const downloadInvoice = () => {
    setDownloadState("Downloading...");
    axios
        .get(`http://localhost:8000/download/${params.id}`, { responseType: "blob" })
        .then((res) => {
            console.log(res);
            const url = window.URL.createObjectURL(
                new Blob([res.data], { type: "application/pdf" })
            );
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute(
                "download",
                "Invoice"
            );
            link.click();
            setDownloadState("Downloaded Successfully!");
            setTimeout(() => {
                setDownloadState("Downloaded");
            }, 5000);
        })
        .catch((err) => {
            console.log(err);
            alert("Error in downloading invoice");
            setDownloadState("Download Invoice");
        });
};


  return (
    <div>
      {params.id}
      <div>
      <button className="bg-emerald-400 text-white py-1 px-3 rounded-xl" onClick={downloadInvoice}>{downloadState}</button>
      </div>
    </div>
  )
}
