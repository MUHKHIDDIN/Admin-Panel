import { useNavigate } from "react-router-dom";
import { useCategoryProduct } from "../../pages/Category-product/Service/Mutation/use-Category-Product";
import { MdDeleteSweep } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
export const ProductCard = ({ id, name, img, price }) => {
  const deleteMutation = useCategoryProduct();
  
  const navigate = useNavigate();
  
  const handleDelete = () => {
    deleteMutation.mutate(id, {
      onSuccess: () => {
        console.log("Category deleted successfully");
        window.location.reload();
      },
      onError: (error) => {
        console.error("Failed to delete category", error);
      },
    });
  };

  return (
    <div
      className="overflow-hidden rounded-lg shadow-lg "
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div >
        <div className="flex flex-col items-center p-6 bg-white bg-opacity-80">
          <img
        
            className="mb-4 h-[150px] w-[150px] rounded-lg object-cover"
            src={img}
            alt={name}
          />
          <p className="mb-2 text-xl font-semibold">
            {name}
          </p>
          <strong  className="text-lg text-gray-800">
            ${price}
          </strong>
        </div>
        <div className="flex justify-around bg-gray-100 p-4">
          <button
            onClick={handleDelete}
            className="rounded-lg bg-red-500 px-6 text-[20px] py-2 text-white transition-colors duration-300 hover:bg-red-600"
          >
            <MdDeleteSweep />
          </button>
          <button onClick={() => navigate(`/product-edit/${id}`)} className="rounded-lg bg-[#0004ff] px-6 py-2 text-white transition-colors duration-300 hover:bg-yellow-500">
          <FaEdit />
          </button>
        </div>
      </div>
    </div>
  );
};
