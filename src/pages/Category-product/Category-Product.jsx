import { Link, useParams } from "react-router-dom";
import { useProductList } from "./Service/Query/use-Product-List";
import { ProductCard } from "../../components/Product-card";
import { Search2 } from "../../Components/Search2";

export const CategoryProduct = () => {
  const { id } = useParams();
  const { data } = useProductList(id);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mb-6  justify-between items-center">
        <Link
          to="/create-product"
          className="w-40 rounded-full bg-indigo-600 px-4 py-2 text-center text-sm font-semibold text-white shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Create Product
        </Link>
        <span>
          <Search2 />
        </span>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md: lg:grid-cols-4">
        {data?.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
