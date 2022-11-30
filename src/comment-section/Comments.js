import Comment from "./Comment";

const Comments = ({ comments }) => {
  return (
    <>
      {comments.map((comment, index) => {
        return (
          <>
            <Comment comment={comment} key={index} />
          </>
        );
      })}
    </>
  );
};

export default Comments;
