interface TLoadingProps {
  message: string;
}

const Loading = ({ message }: TLoadingProps) => {
  if (message) {
    return <div>{message}</div>;
  }
  return <div>...loading</div>;
};

export default Loading;
