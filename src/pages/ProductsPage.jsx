const ProductsPage = () => {
  return (
    <div>
      <div className="flex justify-center items-center gap-4 h-screen">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">W1</h2>
            <p>Price : Rp. 10.000</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">D1</h2>
            <p>Price : Rp. 15.000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
