
const LoadSingleBlogData = async (id) => {
const res  = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
    cache:'force-cache',   
}) 
return res.json()
  
};

export default LoadSingleBlogData;