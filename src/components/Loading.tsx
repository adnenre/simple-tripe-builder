interface TLoadingProps {
  message: string;
}

const Loading = ({ message }: TLoadingProps) => {
  return (
    <div className="w-full h-[100vh] flex bg-black">
      <p className="m-auto text-white">{message ? message : "...loading"}</p>
    </div>
  );
};

export default Loading;
