import React from 'react'

const CreatePost =()=>{
     return(
         <div className="card input-field"
         style={{margin:"10px auto",
            maxWidth:"500px",
            padding:"20px",
            textAlign:"center"
        }}
         >
             <input type="text" placeholder="title"/>
             <input type="text" placeholder="body"/>
             <div className="file-field input-field">
                <div className="btn #29b6f6 light-blue darken-1">
                    <span>Upload Image</span>
                    <input type="file" multiple />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" placeholder="Upload one or more files" />
                </div>
            </div>
               <button className="btn waves-effect waves-light #29b6f6 light-blue darken-1">
                Submit post
               </button>

         </div>
     )
}


export default CreatePost