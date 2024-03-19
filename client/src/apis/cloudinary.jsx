import ImageCompressor from "image-compressor.js";
import toast, { Toaster } from "react-hot-toast";
const handleProfileChange = async(e) => {
    e.preventDefault();
    // setFormData({...formData, "profile": e.target.files[0]});
     const selectedImage = e.target.files[0];
    // setProfile(selectedImage);
    if (selectedImage) {
      const compressedImage = await compressImage(selectedImage);
      const imageData = new FormData();
      imageData.append("file", compressedImage);
      imageData.append("upload_preset", "t516gx5k");
      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/dczv2ejcu/image/upload`,
          {
            method: "POST",
            body: imageData,
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        // setFormData({...formData,profile:data.secure_url});
        console.log(data.secure_url);
         toast.custom((t) => (
           <div
             className={`bg-toastGreen text-white px-6 py-5 shadow-xl rounded-xl transition-all  ${
               t.visible
                 ? "opacity-100 translate-y-0"
                 : "opacity-0 translate-y-4"
             } duration-300 ease-in-out`}>
             <div className="flex items-center gap-2 text-white">
               <span>
                 <i className="fa-solid fa-circle-check"></i>
               </span>
               <div>
                 <span className="">Image uploaded successfully !</span>
               </div>
             </div>
           </div>
         ));
      } catch (error) {
        console.error("Error uploading image to Cloudinary:", error);
           toast.custom((t) => (
             <div
               className={`bg-[#ff5e5b] text-white px-6 py-5 shadow-xl rounded-xl transition-all  ${
                 t.visible
                   ? "opacity-100 translate-y-0"
                   : "opacity-0 translate-y-4"
               } duration-300 ease-in-out`}>
               <div className="flex items-center gap-2 text-white">
                 <span>
                   <i className="fa-solid text-xl fa-circle-xmark"></i>
                 </span>
                 <div>
                   <span className="">
                    Error Uploading Image
                   </span>
                 </div>
               </div>
             </div>
           ));
      }
    }
  };
  const compressImage = async (image) => {
    return new Promise((resolve, reject) => {
      new ImageCompressor(image, {
        quality: 0.1,
        success(result) {
          resolve(result);
        },
        error(error) {
          reject(error);
        },
      });
    });
  };
