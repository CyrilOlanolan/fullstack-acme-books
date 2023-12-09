"use client";

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/Dialog";
import { Label, Input } from "../ui/FormComponents";
import { revalidateByTag } from "@/app/actions";
import axios from "axios";
import { BookDto, BookType } from "@/dto/books.dto";
import { useMutation, useQuery } from "react-query";
import { useRouter } from "next/navigation";

const DeleteBookControl = ({ id }: { id: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const { data } = useQuery("book", () =>
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/books/${id}`)
      .then((res) => res.data as BookType)
  );

  const mutation = useMutation(
    () =>
      axios
        .delete(`${process.env.NEXT_PUBLIC_API_URL}/api/books/${id}`)
        .then((res) => res.data)
        .catch((error) => error.response),
    {
      onSuccess: () => {
        revalidateByTag("books");
        setIsOpen(false);
        router.push("/");
      },
      onError: () => {
        alert("Error adding a book!");
      },
    }
  );

  const handleDelete = () => {
    mutation.mutate();
  };

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Dialog onOpenChange={handleOpen} open={isOpen}>
      <DialogTrigger asChild>
        <button>Delete</button>
      </DialogTrigger>
      <DialogContent className="bg-grey font-sans text-dark-green">
        <DialogHeader>
          <DialogTitle>Delete book</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete{" "}
            {data?.title ? data?.title + "?" : "this book?"}
          </DialogDescription>
        </DialogHeader>

        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-600 transition-colors duration-300 ease py-2 px-4 w-full rounded-md text-center text-grey"
        >
          {mutation.isLoading ? "Loading..." : "Delete"}
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteBookControl;
