import React from "react";

export const DownloadButton = ({texts}) =>{
    return(
        <a href="/curriculo.pdf" download="curriculo.pdf">
            <button style={{padding: "10px 20px", fontSize: "16px", cursor: "pointer" }} className="btn-dowload">
                {texts}
            </button>
        </a>
    )
}

export default DownloadButton;