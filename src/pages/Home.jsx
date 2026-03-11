import React from "react";

function Home() {
  const products = [
    {
      id: 1,
      name: "Corporate Gift Box",
      price: "₹999",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      name: "Custom Coffee Mug",
      price: "₹299",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 3,
      name: "Premium Diary Set",
      price: "₹499",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 4,
      name: "Office Gift Hamper",
      price: "₹1299",
      image: "https://via.placeholder.com/300",
    },
  ];

  return (
    <div>
      {/* NAVBAR */}

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            GiftStore
          </a>

          <div className="collapse navbar-collapse">
            <form className="d-flex mx-auto w-50">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search gifts..."
              />
              <button className="btn btn-warning">Search</button>
            </form>

            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Account
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Orders
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Cart 🛒
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}

      <div className="bg-light text-center p-5">
        <div className="container">
          <h1 className="display-4 fw-bold">
            Corporate Gifts for Every Occasion
          </h1>

          <p className="lead mt-3">
            Discover premium gifts for employees, clients and partners.
          </p>

          <button className="btn btn-dark mt-3">Shop Now</button>
        </div>
      </div>

      {/* FEATURED PRODUCTS */}

      <div className="container mt-5">
        <h2 className="text-center mb-4">Featured Gifts</h2>

        <div className="row">
          {products.map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                />

                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>

                  <p className="text-muted">{product.price}</p>

                  <button className="btn btn-outline-dark">View Product</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CORPORATE GIFT SECTION */}

      <div className="bg-dark text-white text-center p-5 mt-5">
        <div className="container">
          <h2>Bulk Corporate Orders</h2>

          <p className="mt-3">
            Looking for bulk gifts for your employees or clients? We provide
            customized corporate gift solutions.
          </p>

          <button className="btn btn-warning mt-2">Contact Us</button>
        </div>
      </div>

      {/* FOOTER */}

      <footer className="bg-light text-center p-4 mt-4">
        <p className="mb-1">© 2026 GiftStore. All rights reserved.</p>

        <small className="text-muted">Corporate gifting made simple.</small>
      </footer>
    </div>
  );
}

export default Home;
