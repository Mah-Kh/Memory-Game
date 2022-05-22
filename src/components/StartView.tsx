type StartViewProps = {
  seconds: number;
};

const StartView = ({ seconds }: StartViewProps) => {
  return (
    <div className="w-full flex items-center justify-center h-[100px] text-7xl text-white bg-primary">
      {seconds}
    </div>
  );
};

export default StartView;
