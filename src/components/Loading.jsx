import heroLogo from "../assets/logo.png";
const Loading = () => {
  return (
    <div className="flex h-64 w-full items-center justify-center">
      <div className="flex items-center text-3xl font-bold text-[#102A43]">
        <span>L</span>
        <img
          src={heroLogo}
          alt="Loading"
          className="mx-1 h-10 w-10 animate-spin"
        />
        <span>ading...</span>
      </div>
    </div>
  );
};

export default Loading;