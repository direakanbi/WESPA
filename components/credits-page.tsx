import Link from "next/link";

interface CreditItemProps {
  initial: string;
  name: string;
  description: string;
}

const CreditItem: React.FC<CreditItemProps> = ({
  initial,
  name,
  description,
}) => (
  <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md bg-gradient-to-br from-white to-primary/10">
    <div className="relative flex items-center justify-center w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
      <img src={`/images/scrabble-${initial.toLowerCase()}.png`} alt={name} className="w-full h-full object-contain" />
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
            <Link href="/" className="text-primary hover:underline">
              Home
            </Link>{" "}
            {">"}{" "}
            <Link href="/about" className="text-primary hover:underline">
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
            name="Katy Yiakmis"
            description="Design work on the logo and masthead"
          />
          <CreditItem
            initial="S"
            name="Sam Kantimathi"
            description="Original logo concept"
          />
          <CreditItem
            initial="L"
            name="Llewellyn Jegels"
            description="Previous webmaster — early work on the website"
          />
          <CreditItem
            initial="C"
            name="Craig Beevers,"
            description="Previous webmaster — early work on the website"
          />
        </div>

        <p className="text-center text-xl mt-12 font-bold">
          Thank you to all volunteers and contributors.
        </p>
        <div className="text-center mt-6">
          <Link href="/" className="text-primary hover:underline text-lg font-bold">
            Back to Home {">"}
          </Link>
        </div>
      </main>
    </div>
  );
};

export default CreditsPage;