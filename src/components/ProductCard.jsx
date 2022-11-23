import React from "react";
import desktopImage from "../assets/image-product-desktop.jpg";
import mobileImage from "../assets/image-product-mobile.jpg";
import cart from "../assets/icon-cart.svg";

function ProductCard({ windowWidth }) {
  const imageUrl = windowWidth >= 600 ? desktopImage : mobileImage;
  return (
    <div className="mx-4 my-16 w-auto bg-white rounded-lg text-grayish_blue lg:w-[624px] md:w-[624px] lg:flex md:flex lg:mx-auto lg:my-32 md:my-32 md:mx-24">
      <div className="lg:w-[1048px] md:w-[1048px]">
        <img
          src={imageUrl}
          alt="perfume bottle kept down"
          className="rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none md:rounded-l-lg md:rounded-tr-none"
        />
      </div>
      <div className="px-6 py-4 lg:px-10 lg:py-8 grid gap-4 lg:gap-0 md:px-10 md:py-8">
        <p className="uppercase tracking-[.3rem] text-xs font-medium">
          Perfume
        </p>
        <h1 className="text-3xl font-serif font-bold text-dark_blue leading-7">
          Gabrielle Essence Eau De Parfum
        </h1>
        <p className="text-sm">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="flex gap-3 items-center">
          <p className="font-serif font-bold text-3xl text-dark_cyan-200">
            $149.99
          </p>
          <p>
            <s>$169.99</s>
          </p>
        </div>
        <button
          type="button"
          className="bg-dark_cyan-200 hover:bg-dark_cyan-400 lg:py-0 md:py-0 py-3 rounded-lg text-white text-sm font-bold inline-flex justify-center items-center gap-3"
        >
          <span>
            <img src={cart} alt="cart icon" />
          </span>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
