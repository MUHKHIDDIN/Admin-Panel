import React from "react";
import { CreateForm } from "../../Components/Creat-Form";
import { useCreateCategory } from "./Service/Mutation/use-Create-Category";
import { useNavigate } from "react-router-dom";

export const CreateCategory = () => {
  const navigate = useNavigate();
  const mutation = useCreateCategory();

  const handleSubmit = (data) => {
    mutation.mutate(data, {
      onSuccess: () => {
        
        navigate("/categories");
      },
      onError: (error) => {
        console.error("Failed to create category", error);
      }
    });
  };

  return (
    <div>
      <CreateForm submit={handleSubmit} />
    </div>
  );
};
