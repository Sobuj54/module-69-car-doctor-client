const PageNotFound = () => {
  return (
    <div className=" text-center h-screen my-auto flex flex-col justify-center">
      <h2 className="text-6xl font-bold text-warning">404</h2>
      <p className="text-xl font-semibold mt-5">Page Not Found</p>
      <div className="mt-5">
        <label className="swap swap-flip text-9xl">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" />

          <div className="swap-on">😈</div>
          <div className="swap-off">😇</div>
        </label>
      </div>
    </div>
  );
};

export default PageNotFound;
