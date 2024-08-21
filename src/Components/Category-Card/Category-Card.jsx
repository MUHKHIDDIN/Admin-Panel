import { useNavigate } from "react-router-dom";
import { useDeleteCategory } from "../../pages/Create-Category/Service/Mutation/use-Create-Category";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

export const CategoryCard = ({ id, name, img }) => {
  const navigate = useNavigate();
  const deleteMutation = useDeleteCategory();

  const handleDelete = () => {
    deleteMutation.mutate(id, {
      onSuccess: () => {
        console.log("Category deleted successfully");
        navigate(0);
      },
      onError: (error) => {
        console.error("Failed to delete category", error);
      },
    });
  };

  return (
    <div className="m-5 bg-[#1b1818]">
      <div>
        <div className="flex items-center justify-center bg-[#efe8e8] p-6">
          <img
            className="h-[150px] w-[150px] rounded-md object-cover"
            src={img}
            alt={name}
          />
        </div>
        <div className="p-6 text-center">
          <p className="mb-4 text-xl font-semibold text-white">{name}</p>
        </div>
        <div className="flex items-center justify-center gap-5 bg-[#ffffff] p-4">
          <button
            onClick={() => navigate(`/category-product/${id}`)}
            className="flex items-center gap-2 rounded-lg bg-[#4caf50] p-3 text-white"
          >
            Show Products <IoSend />
          </button>
          <button
            onClick={handleDelete}
            className="rounded-lg bg-[#140c5c] p-3 text-white"
          >
            <MdDeleteOutline />
          </button>
          <button onClick={() => navigate(`/category-edit/${id}`)} className="rounded-lg bg-[#ffa000] p-3 text-white">
            <FaRegEdit />
          </button>
        </div>
      </div>
    </div>
  );
};
