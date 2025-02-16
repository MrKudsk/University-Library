import React from "react";

type BookCoverVariant = "extraSmall" | "small" | "medium" | "regular" | "wide";

const variantStyles: Record<BookCoverVariant, string> = {
  extraSmall: "book-cover-extra-small",
  small: "book-cover-small",
  medium: "book-cover-extra-small",
  regular: "book-cover-extra-small",
  extraSmall: "book-cover-extra-small",
};

interface Props {
  className?: string;
  variant: "wide" | "small";
  coverColor: string;
  coverUrl: string;
}

const BookCover = ({ className, variant, coverColor, coverUrl }): Props => {
  return <div>BookCover</div>;
};

export default BookCover;
