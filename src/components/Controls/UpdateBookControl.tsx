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

const UpdateBookControl = ({ id }: { id: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { data, refetch } = useQuery("book", () =>
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/books/${id}`)
      .then((res) => res.data as BookType)
  );

  const mutation = useMutation(
    (props: BookDto) =>
      axios
        .put(`${process.env.NEXT_PUBLIC_API_URL}/api/books/${id}`, props)
        .then((res) => res.data)
        .catch((error) => error.response),
    {
      onSuccess: () => {
        revalidateByTag("book");
        setIsOpen(false);
      },
      onError: () => {
        alert("Error adding a book!");
      },
    }
  );

  useEffect(() => {
    refetch();
  }, [isOpen, refetch]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      title: event.currentTarget.bookTitle.value,
      author: event.currentTarget.author.value,
      isAvailable: event.currentTarget.availability.checked,
      rating: parseFloat(event.currentTarget.rating.value),
      summary: event.currentTarget.summary.value,
    };

    mutation.mutate(data);
  };

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Dialog onOpenChange={handleOpen} open={isOpen}>
      <DialogTrigger asChild>
        <button className="px-4 py-2 border border-grey rounded-full text-grey font-sans uppercase tracking-widest text-sm transition-all duration-300 ease hover:bg-grey hover:text-dark-green pointer">
          Update
        </button>
      </DialogTrigger>
      <DialogContent className="bg-grey font-sans text-dark-green">
        <DialogHeader>
          <DialogTitle>Add a Book</DialogTitle>
          <DialogDescription>
            Enter details here to add a book to your library.
          </DialogDescription>
        </DialogHeader>

        <form className="grid grid-cols-1 font-sans" onSubmit={handleSubmit}>
          <div className="mb-3 grid grid-cols-1 gap-1">
            <Label htmlFor="title">Title</Label>
            <Input
              type="text"
              name="bookTitle"
              required
              defaultValue={data?.title}
            />
          </div>

          <div className="mb-3 grid grid-cols-1 gap-1">
            <Label htmlFor="author">Author</Label>
            <Input
              type="text"
              name="author"
              required
              defaultValue={data?.author}
            />
          </div>

          <div className="mb-3 grid grid-cols-1 gap-1">
            <Label htmlFor="summary">Summary</Label>
            <textarea
              className="border border-gray-300 rounded-md overflow-hidden px-3 py-1 resize-none overflow-y-auto"
              rows={5}
              name="summary"
              required
              defaultValue={data?.summary}
            />
          </div>

          <div className="mb-4 grid grid-cols-1 gap-1">
            <Label htmlFor="rating">Rating</Label>
            <Input
              type="number"
              name="rating"
              min={0}
              max={5}
              required
              step=".1"
              defaultValue={data?.rating}
            />
          </div>

          <div className="mb-4 grid grid-flow-col gap-3 w-fit items-center justify-center">
            <Label htmlFor="availability">Is this available?</Label>
            <Input
              type="checkbox"
              name="availability"
              className="w-4 h-4"
              defaultChecked={data?.isAvailable}
            />
          </div>

          <button
            type="submit"
            className="bg-dark-green py-2 px-4 w-full rounded-md text-center text-grey"
          >
            {mutation.isLoading ? "Loading..." : "Update"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateBookControl;
