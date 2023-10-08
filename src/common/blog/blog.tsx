import NewsLetter from "../news-letter/newsLetter";

const Blog = () => {
  return (
    <div>
      <div className="flex flex-1">
        <p className="pl-6 pr-6 mt-6">
          <div className="block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
              <img
                className="rounded-t-lg"
                src="https://tecdn.b-cdn.net/img/new/standard/city/062.jpg"
                alt=""
              />
            </div>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                Card title
              </h5>
              <p className="text-base text-neutral-600 dark:text-neutral-200">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <ul className="w-full">
              <li className="w-full border-b-2 border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50">
                Cras justo odio
              </li>
              <li className="w-full border-b-2 border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50">
                Dapibus ac facilisis in
              </li>
              <li className="w-full border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50">
                Vestibulum at eros
              </li>
            </ul>
            <div className="p-6">
              <a
                type="button"
                href="#"
                className="pointer-events-auto mr-5 inline-block cursor-pointer rounded text-base font-normal leading-normal text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700"
              >
                Card Link
              </a>
              <a
                type="button"
                href="#"
                className="pointer-events-auto inline-block cursor-pointer rounded text-base font-normal leading-normal text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700"
              >
                Another Link
              </a>
            </div>
          </div>
        </p>
        <div className="h-[250px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-20 dark:opacity-100"></div>
        <p className="pl-6">
          <div className="container my-24 mx-auto md:px-6">
            <section className="mb-32">
              <h1 className="mb-4 text-3xl font-bold">
                An intriguing title for an interesting article
              </h1>

              <p className="mb-6 flex items-center font-bold uppercase text-danger dark:text-danger-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="mr-2 h-5 w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                  />
                </svg>
                Hot news
              </p>

              <p className="mb-6">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
                sapiente molestias consectetur. Fuga nulla officia error placeat
                veniam, officiis rerum laboriosam ullam molestiae magni velit
                laborum itaque minima doloribus eligendi! Lorem ipsum, dolor sit
                amet consectetur adipisicing elit. Optio sapiente molestias
                consectetur. Fuga nulla officia error placeat veniam, officiis
                rerum laboriosam ullam molestiae magni velit laborum itaque
                minima doloribus eligendi!
              </p>

              <p className="mb-6">
                <strong>Optio sapiente molestias consectetur?</strong>
              </p>

              <p className="mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                architecto ex ab aut tempora officia libero praesentium, sint id
                magnam eius natus unde blanditiis. Autem adipisci totam sit
                consequuntur eligendi.
              </p>

              <p className="mb-6 rounded border-l-4 border-neutral-800 bg-neutral-100 p-2 dark:border-neutral-200 dark:bg-neutral-700">
                <strong>Note:</strong> Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Optio odit consequatur porro sequi ab
                distinctio modi. Rerum cum dolores sint, adipisci ad veritatis
                laborum eaque illum saepe mollitia ut voluptatum.
              </p>

              <p className="mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus, libero repellat molestiae aperiam laborum aliquid
                atque magni nostrum, inventore perspiciatis possimus quia
                incidunt maiores molestias eaque nam commodi! Magnam, labore.
              </p>

              <img
                src="https://mdbcdn.b-cdn.net/img/new/slides/194.jpg"
                className="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20"
                alt=""
              />

              <ul className="mb-6 list-inside list-disc">
                <li>Lorem</li>
                <li>Ipsum</li>
                <li>Dolor</li>
                <li>Sit</li>
                <li>Amet</li>
              </ul>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                temporibus nulla voluptatibus accusantium sapiente doloremque.
                Doloribus ratione laboriosam culpa. Ab officiis quidem, debitis
                nostrum in accusantium dolore veritatis eius est?
              </p>
            </section>
          </div>
        </p>
      </div>
      <NewsLetter />
    </div>
  );
};

export default Blog;
