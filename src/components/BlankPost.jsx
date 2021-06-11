import React from 'react';
import "./Post.css"
import Skeleton from 'react-loading-skeleton';


function BlankPost() {

   return (
      <div className="post">
       

         <div className="post__body">
         <div className="post__body__header">
               <Skeleton width={48} height={48} circle={true}/>
           
            <div className="post__top__header__info">
               <Skeleton width={95} height={10}/>
               <Skeleton width={95} height={10}/>
               <Skeleton width={65} height={10}/>
            </div>
         </div>

         <div className="post__textual__data__blank">
         <Skeleton  height={10} count={5}/>
         </div>

         <div className="post__image__data__blank">
         <Skeleton  height={350}/>
         </div>
        
         </div>

       
        
      </div>
   )
}


export default BlankPost
