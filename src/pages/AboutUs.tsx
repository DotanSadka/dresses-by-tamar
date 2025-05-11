
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";

const AboutUs = () => {
  return (
    <PageLayout>
      <PageHeader
        title="About Us"
        description="The story behind our passion for dresses"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Meet Tamar</h2>
              <p className="text-lg text-gray-600 mb-4">
                Tamar's journey into the world of fashion began in her grandmother's sewing room.
                As a child, she would watch in wonder as her grandmother transformed simple fabrics into
                beautiful garments that told stories of their own.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                After graduating from the prestigious Fashion Institute of Design, Tamar worked with
                several high-end fashion houses in Paris and Milan, honing her craft and developing
                her unique aesthetic that blends classic elegance with modern sensibilities.
              </p>
              <p className="text-lg text-gray-600">
                In 2018, she founded her own label with a simple mission: to create dresses that make
                women feel beautiful, confident, and authentically themselves.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?q=80&w=600"
                alt="Tamar in her design studio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">Our Philosophy</h2>
            <div className="bg-purple-50 p-8 rounded-lg">
              <p className="text-lg text-gray-700 italic text-center">
                "A dress is not just an item of clothing; it's a form of self-expression, a confidence booster,
                and a silent storyteller. Every dress we create is designed to help you write your own story."
              </p>
              <p className="text-right font-medium mt-4 text-gray-800">— Tamar</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Sustainable Fashion</h3>
              <p className="text-gray-600 mb-4">
                We believe in creating fashion that respects our planet. All our dresses are crafted 
                using sustainable practices and eco-friendly materials whenever possible. 
                We work with suppliers who share our commitment to ethical production methods.
              </p>
              <h3 className="text-2xl font-bold mb-3 text-gray-800 mt-6">Quality Craftsmanship</h3>
              <p className="text-gray-600">
                Every dress in our collection is carefully constructed with attention to detail
                and quality. From the initial sketch to the final stitch, we ensure that each garment
                meets our high standards of excellence.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Inclusivity</h3>
              <p className="text-gray-600 mb-4">
                We celebrate diversity and believe that fashion should be accessible to everyone.
                Our designs are available in a wide range of sizes, and we continually strive to
                create dresses that flatter and enhance different body types.
              </p>
              <h3 className="text-2xl font-bold mb-3 text-gray-800 mt-6">Customer Experience</h3>
              <p className="text-gray-600">
                We're dedicated to providing an exceptional shopping experience from browsing our
                collection to receiving your dress. Our team is always ready to assist with sizing,
                styling advice, or any questions you might have.
              </p>
            </div>
          </div>

          <div className="bg-pink-50 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Our Studio</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <img
                src="https://images.unsplash.com/photo-1566677914817-56426959ae9c?q=80&w=500"
                alt="Our design studio"
                className="w-full h-72 object-cover rounded-lg"
              />
              <div className="flex flex-col justify-center">
                <p className="text-gray-700">
                  Located in the heart of the fashion district, our studio is where all the magic happens.
                  It's a creative space where ideas flow freely, fabrics are carefully selected,
                  and each dress is brought to life with precision and care.
                </p>
                <p className="text-gray-700 mt-4">
                  We invite you to be a part of our journey as we continue to create dresses that inspire
                  confidence and celebrate the beauty of femininity in all its forms.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Join Our Community</h2>
            <p className="text-lg text-gray-600 mb-8">
              Follow us on social media to stay updated on our latest collections, styling tips,
              and behind-the-scenes glimpses into our creative process.
            </p>
            <div className="flex justify-center gap-6">
              <button className="w-12 h-12 rounded-full bg-pink-100 hover:bg-pink-200 flex items-center justify-center transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 3.99-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-3.99-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="w-12 h-12 rounded-full bg-purple-100 hover:bg-purple-200 flex items-center justify-center transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="w-12 h-12 rounded-full bg-pink-100 hover:bg-pink-200 flex items-center justify-center transition-colors">
                <span className="sr-only">Pinterest</span>
                <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0a12 12 0 0 0-4.373 23.182c-.1-.937-.188-2.381.039-3.406.205-.92 1.317-5.866 1.317-5.866s-.336-.676-.336-1.678c0-1.572.911-2.746 2.045-2.746.964 0 1.429.724 1.429 1.591 0 .969-.618 2.417-.937 3.762-.266 1.13.566 2.049 1.681 2.049 2.016 0 3.573-2.126 3.573-5.188 0-2.714-1.956-4.607-4.747-4.607-3.234 0-5.133 2.416-5.133 4.909 0 .969.378 2.013.851 2.57.094.117.108.221.079.343-.085.353-.275 1.113-.312 1.269-.049.205-.165.248-.38.15-1.417-.656-2.3-2.736-2.3-4.4 0-3.577 2.606-6.861 7.518-6.861 3.949 0 7.002 2.814 7.002 6.567 0 3.911-2.461 7.066-5.878 7.066-1.146 0-2.223-.595-2.592-1.295l-.705 2.695c-.254.975-1.131 2.315-1.686 3.097C10.385 23.839 11.171 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutUs;
