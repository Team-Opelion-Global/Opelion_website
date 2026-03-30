export default function Stats() {
  return (
    <section className="bg-black py-16">

      <div className="grid md:grid-cols-4 text-center gap-10 max-w-6xl mx-auto">

        <div>
          <h2 className="text-4xl font-bold">40+</h2>
          <p className="text-gray-400 mt-2">Countries Served</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold">25K+</h2>
          <p className="text-gray-400 mt-2">MT Exported</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold">ISO</h2>
          <p className="text-gray-400 mt-2">Certified Quality</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold">10+</h2>
          <p className="text-gray-400 mt-2">Years Experience</p>
        </div>

      </div>

    </section>
  );
}