import axios from "axios";

const UploadImage = async (image) => {
  const formData = new FormData();
  formData.append("image", image);
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_API_IMAGE_Key
    }`,
    formData
  );
  return data;
};

export default UploadImage;
