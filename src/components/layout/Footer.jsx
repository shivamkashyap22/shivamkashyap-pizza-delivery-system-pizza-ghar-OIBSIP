function Footer() {
  return (
    <footer className=" bg-yellow-500 py-6">
      <div className="flex flex-row justify-center items-center container mx-auto text-yellow-200 text-center">
        <p>
          &copy; {new Date().getFullYear()} Pizza Ghar. All rights reserved.
          Created with ♥ by{' '}
          <a
            
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-800 underline underline-offset-4"
          >
            Shivam kashyap 
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
