import Link from "next/link";

interface CreditItemProps {
  initial: string;
  number: number;
  name: string;
  description: string;
}

const CreditItem: React.FC<CreditItemProps> = ({
  initial,
  number,
  name,
  description,
}) => (
  <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
    <div className="relative flex items-center justify-center w-16 h-16 bg-black-100 text-blue-600 text-2xl font-bold rounded-full">
      {initial}
      <span className="absolute bottom-0 right-0 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
        {number}
      </span>
    </div>
    <div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const CreditsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-5">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 px-4 text-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: "url('/images/tiles-hero.png')" }}
        ></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Credits</h1>
          <p className="text-xl mb-20">
            Acknowledging the talented professionals whose vision and effort have
            supported WESPA's global mission.
          </p>
          <nav className="text-sm" >
            <Link href="/" className="text-blue-300 hover:underline">
              Home
            </Link>{" "}
            {">"}{" "}
            <Link href="/about" className="text-blue-300 hover:underline">
              About
            </Link>{" "}
            {">"} <span className="text-white">Credits</span>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          A huge thank-you to:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <CreditItem
            initial="K"
            number={5}
            name="Katy Yiakmis"
            description="Design work on the logo and masthead"
          />
          <CreditItem
            initial="S"
            number={1}
            name="Sam Kantimathi"
            description="Original logo concept"
          />
          <CreditItem
            initial="L"
            number={1}
            name="Llewellyn Jegels"
            description="Previous webmaster — early work on the website"
          />
          <CreditItem
            initial="C"
            number={3}
            name="Craig Beevers,"
            description="Previous webmaster — early work on the website"
          />
        </div>

        <p className="text-center text-xl mt-12">
          Thank you to all volunteers and contributors.
        </p>
        <div className="text-center mt-6">
          <Link href="/" className="text-blue-600 hover:underline text-lg">
            Back to Home {">"}
          </Link>
        </div>
      </main>
    </div>
  );
};

export default CreditsPage;