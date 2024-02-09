import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddPackage = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      // now send the menu item data to the server with the image url
      const packageItem = {
        place: data.place,
        guide: data.guide,
        guideImage: data.guideImage,
        category: data.category,
        price: parseFloat(data.price),
        details: data.details,
        image: res.data.data.display_url,
      };
      //
      const packageRes = await axiosSecure.post("/packages", packageItem);
      console.log(packageRes.data);
      if (packageRes.data.insertedId) {
        // show success popup
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.place} is added to the menu.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log("with image url", res.data);
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex">
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Place*</span>
              </label>
              <input
                type="text"
                placeholder="Place Name"
                {...register("place", { required: true })}
                required
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control  mx-4 w-full my-6">
              <label className="label">
                <span className="label-text">Guide Name*</span>
              </label>
              <input
                type="text"
                placeholder="Guide Name"
                {...register("guide", { required: true })}
                required
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="flex gap-6">
            {/* category */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                defaultValue="default"
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="nature">Nature</option>
                <option value="beach">Beach</option>
                <option value="hill ">Hill </option>
                <option value="island">Island</option>
                <option value="city">City</option>
                <option value="river">River</option>
              </select>
            </div>

            {/* price */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                {...register("price", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* recipe details */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              {...register("details")}
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
          </div>

          <div>
            <div className="form-control w-full my-6">
              <input
                {...register("image", { required: true })}
                type="file"
                className="file-input w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full my-6">
              <input
                {...register("guideImage", { required: true })}
                type="file"
                className="file-input w-full max-w-xs"
              />
            </div>
          </div>

          <button className="btn">Add Item</button>
        </form>
      </div>
    </div>
  );
};

export default AddPackage;
