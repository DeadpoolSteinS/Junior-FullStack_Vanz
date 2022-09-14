class IComment {
  constructor(id, content, replies = null) {
    this.commentId = id;
    this.commentContent = content;
    this.replies = replies;
  }
}

// mengambil total comment pada array comments
function totalComments(comments) {
  let total = 0;

  comments.forEach((comment) => {
    total++;
    if (comment.replies) total += totalComments(comment.replies);
  });

  return total;
}

let comments = [
  new IComment(1, "Hai", [
    new IComment(11, "Hai juga", [
      new IComment(111, "Haai juga hai jugaa"),
      new IComment(112, "Haai juga hai jugaa"),
    ]),
    new IComment(12, "Hai juga", [new IComment(121, "Haai juga hai jugaa")]),
  ]),
  new IComment(2, "Halooo"),
];

console.log("Total komentar yang ada: " + totalComments(comments));
