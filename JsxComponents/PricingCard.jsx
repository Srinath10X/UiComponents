import React from "react";

const PricingCard = () => {
  return (
    <>
      <div class="container">
        <div class="card">
          <p class="text">FREE</p>
          <h1 class="title">$0</h1>
          <p class="description">Ideal for smaller team</p>
          <hr class="line" />
          <p class="benifits">
            <span class="tick">&#10004;</span> First benifit
            <br />
            <span class="tick">&#10004;</span> Second benifit
            <br />
            <span class="tick">&#10004;</span> Third benifit
            <br />
            <span class="tick">&#10004;</span> Fourth benifit
            <br />
            <span class="tick">&#10004;</span> Fifth benifit
            <br />
            <span class="tick">&#10004;</span> Sixth benifit
            <br />
          </p>
          <button class="btn">Get Started</button>
        </div>
      </div>
    </>
  );
};

export default PricingCard;
