"use client";

import { revalidateByTag } from "@/app/actions";
import { BookDto } from "@/dto/books.dto";
import axios from "axios";
import React, { useState } from "react";
import { useMutation } from "react-query";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/Dialog";
import { Input, Label } from "../ui/FormComponents";

const AddBookControl = () => {
  const [isOpen, setIsOpen] = useState(false);

  const mutation = useMutation(
    (props: BookDto) =>
      axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/api/books`, props)
        .then((res) => res.data)
        .catch((error) => error.response),
    {
      onSuccess: () => {
        revalidateByTag("books");
        setIsOpen(false);
      },
      onError: () => {
        alert("Error adding a book!");
      },
    }
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {
      title: event.currentTarget.bookTitle.value,
      author: event.currentTarget.author.value,
      isAvailable: event.currentTarget.availability.value.checked,
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
        <button className="block mx-auto mb-12 font-bold font-sans px-4 py-2 bg-grey hover:bg-grey-dark transition-colors duration-300 rounded-md shadow-sm text-foreground">
          + ADD A BOOK
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
            <Input type="text" name="bookTitle" required />
          </div>

          <div className="mb-3 grid grid-cols-1 gap-1">
            <Label htmlFor="author">Author</Label>
            <Input type="text" name="author" required />
          </div>

          <div className="mb-3 grid grid-cols-1 gap-1">
            <Label htmlFor="summary">Summary</Label>
            <textarea
              className="border border-gray-300 rounded-md overflow-hidden px-3 py-1 resize-none overflow-y-auto"
              rows={5}
              name="summary"
              required
            />
          </div>

          <div className="mb-4 grid grid-cols-1 gap-1">
            <Label htmlFor="rating">Rating</Label>
            <Input
              type="number"
              name="rating"
              min={0}
              max={5}
              defaultValue={5}
              required
            />
          </div>

          <div className="mb-4 grid grid-flow-col gap-3 w-fit items-center justify-center">
            <Label htmlFor="availability">Is this available?</Label>
            <Input
              type="checkbox"
              name="availability"
              defaultChecked
              required
              className="w-4 h-4"
            />
          </div>

          <button
            type="submit"
            className="bg-dark-green py-2 px-4 w-full rounded-md text-center text-grey"
          >
            {mutation.isLoading ? "Loading..." : "Submit"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddBookControl;
