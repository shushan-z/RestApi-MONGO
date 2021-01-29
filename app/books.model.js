module.exports = mongoose => {
    const Book = mongoose.model(
      "book",
      mongoose.Schema(
        {
          title: String,
          author: String,
          description: String,
          pages: Number,
          published: Boolean
        },
        { timestamps: true }
      )
    );

    return Book;
  };