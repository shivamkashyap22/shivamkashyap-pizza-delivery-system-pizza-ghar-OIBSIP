import React from 'react';
import Logo from '/android-chrome-512x512.png';

function AboutScreen() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-20 pb-10 px-10 sm:px-16 bg-gradient-to-b from-yellow-200 to-yellow-100">
      <div className="flex flex-row justify-center items-center">
        <img
          src={Logo}
          alt="Pizza GharLogo"
          className="hidden sm:block h-32 w-32"
        />
        <h1 className="text-4xl lg:text-5xl text-yellow-500 font-semibold mt-4">
          <span className="text-yellow-700">About</span>
          <br /> Pizza Ghar
        </h1>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">
        <article className="mb-4">
          <h2 className="text-2xl text-black font-semibold mb-2">
            Introduction
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed">
           Pizza Ghar is your ultimate pizza ordering app where you can craft your own custom pizza just the way you like it. Choose from a wide range of fresh toppings and flavorful sauces to create your perfect slice—or pick from our delicious selection of chef-curated pizzas
          </p>
        </article>

        <article className="mb-4">
          <h2 className="text-2xl text-black font-semibold mb-2">
            What We Believe
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            At Pizza Ghar, we believe pizza is more than just food. it’s an experience. Everyone should have the freedom to enjoy their pizza just the way they like it. That’s why we empower you to customize every bite, with fresh ingredients, flavorful sauces, and endless combinations. We believe great taste comes from great choice.
          </p>
        </article>

        <article className="mb-4">
          <h2 className="text-2xl text-black font-semibold mb-2">Contact Us</h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            If you have any questions or concerns, please contact us at{' '}
            <a
              href="mailto:support@pizzaghar.com"
              className="text-yellow-500 hover:text-yellow-700"
            >
             support@pizzaghar.com
            </a>
          </p>
        </article>
      </div>
    </section>
  );
}

export default AboutScreen;
