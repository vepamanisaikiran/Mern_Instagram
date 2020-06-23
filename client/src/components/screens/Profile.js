import React from 'react'

const Profile = ()=>{
    return (
     <div style={{
                maxWidth:"550px",
                margin:"0px auto"

                }}>
         <div style={{
             display:"flex",
             justifyContent:"space-around",
             margin:"18px 0px",
             borderBottom:"1px solid grey"
         }}>
             <div>
                 <img style={{width:"200px",height:"200px",borderRadius:"100px"}}
                 src="https://images.unsplash.com/photo-1592419044706-39796d40f98c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                 />
             </div>
             <div>
                 <h4>Sai Kiran Vepamani</h4>
                 <div style={{
                    display:"flex",
                    justifyContent:"space-around",
                    width:"108%"

                 }}>
                     <h6>40 posts</h6>
                     <h6>40 follwers</h6>
                     <h6>40 following</h6>

                 </div>
             </div>
         </div>
        <div className="gallery">
        <img className="item" src="https://images.unsplash.com/photo-1592419044706-39796d40f98c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
         
        <img className="item" src="https://images.unsplash.com/photo-1592419044706-39796d40f98c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
         
        <img className="item" src="https://images.unsplash.com/photo-1592419044706-39796d40f98c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
         
        <img className="item" src="https://images.unsplash.com/photo-1592419044706-39796d40f98c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
         
        <img className="item" src="https://images.unsplash.com/photo-1592419044706-39796d40f98c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
         
        <img className="item" src="https://images.unsplash.com/photo-1592419044706-39796d40f98c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
         
        </div>
     </div>
    )
}

export default Profile