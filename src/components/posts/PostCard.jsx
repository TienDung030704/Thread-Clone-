function PostCard({ children }) {
  return (
    <div className="w-full h-full flex justify-center ">
      <div className=" w-[636px] h-full">
        <div className=" min-h-dvh border rounded rounded-tl-2xl rounded-tr-2xl">
          {children}
        </div>
      </div>
    </div>
  );
}
export default PostCard;
