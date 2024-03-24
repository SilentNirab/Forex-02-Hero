


const UploadImage = async (photo) => {
   
    const Data = new FormData()
    Data.append("image", photo) 
    fetch(`https://api.imgbb.com/1/upload?key=ce2333bf62321691c88f982c14b6daba`, {
        method:"POST",
        body:Data
    })
    .then(res => res.json())
    .then(data => data?.data?.url)

}



export default UploadImage;