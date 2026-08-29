const SingleApp = ({ singleApp }) => {
  const { image, title, ratingAvg, downloads } = singleApp;

  return (
    <div className="rounded-lg bg-white p-3 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
      <img
        className="h-64 w-full rounded-md bg-gray-100 object-contain p-6"
        src={image}
        alt={title}
      />

      <h3 className="mt-3 text-lg font-semibold text-[#102A43]">{title}</h3>

      <div className="mt-3 flex items-center justify-between">
        <p className="rounded bg-green-50 px-3 py-1 text-sm font-medium text-green-500">
          ↓ {downloads}
        </p>

        <p className="rounded bg-orange-50 px-3 py-1 text-sm font-medium text-orange-500">
          ★ {ratingAvg}
        </p>
      </div>
    </div>
  );
};

export default SingleApp;
