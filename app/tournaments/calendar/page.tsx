import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function TournamentCalendarPage() {
  return (
    <div className="font-poppins">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-darkBlue text-white py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundImage: "url('/images/tiles-hero.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Tournament Calendar</h1>
            <p className="text-xl mb-8">Explore all WESPA-sanctioned tournaments by continent and category.</p>
            <div className="text-sm breadcrumbs text-gray-300 justify-center">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/ratings">Ratings</a></li>
                <li><span className="text-primary">Full rankings</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="bg-background py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center bg-white rounded-full shadow-md p-2 mb-8">
              <input
                type="text"
                placeholder="search tournament..."
                className="flex-grow px-4 py-2 rounded-full focus:outline-none"
              />
              <button className="bg-primary text-white rounded-full p-3 hover:bg-accent">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button className="bg-primary text-white px-6 py-2 rounded-full shadow-md hover:bg-accent">Africa</button>
              <button className="bg-white text-gray-700 px-6 py-2 rounded-full shadow-md hover:bg-gray-200">Europe</button>
              <button className="bg-white text-gray-700 px-6 py-2 rounded-full shadow-md hover:bg-gray-200">Asia</button>
              <button className="bg-white text-gray-700 px-6 py-2 rounded-full shadow-md hover:bg-gray-200">Americas</button>
              <button className="bg-white text-gray-700 px-6 py-2 rounded-full shadow-md hover:bg-gray-200">Oceania</button>
              <button className="bg-white text-gray-700 px-6 py-2 rounded-full shadow-md hover:bg-gray-200">Online</button>
            </div>
          </div>
        </section>

        {/* Tournament Table */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-primary">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Start</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">End</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Nation</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Event</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Location</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Organiser</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Games</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* Sample Data */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">2025-11-10</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">2025-11-10</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text flex items-center">
                    <img src="/images/flags/ghana.webp" alt="Ghana Flag" className="h-4 w-6 mr-2" /> GHA
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-primary flex items-center">
                    WESPA Championship 2025 - Akwaaba - Early Bird <span className="ml-2">🥇</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">Accra</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">SCAG</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">10</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">2025-11-11</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">2025-11-11</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text flex items-center">
                    <img src="/images/flags/ghana.webp" alt="Ghana Flag" className="h-4 w-6 mr-2" /> GHA
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-primary flex items-center">
                    WESPA Championship 2025 - LCQ <span className="ml-2">⭐</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">Accra</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">SCAG</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">TBD</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">2025-11-12</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">2025-11-16</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text flex items-center">
                    <img src="/images/flags/ghana.webp" alt="Ghana Flag" className="h-4 w-6 mr-2" /> GHA
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-primary flex items-center">
                    WESPA Championship 2025 - Main Event <span className="ml-2">⚪</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">Accra</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">SCAG</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">TBD</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">2025-11-12</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">2025-11-14</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text flex items-center">
                    <img src="/images/flags/ghana.webp" alt="Ghana Flag" className="h-4 w-6 mr-2" /> GHA
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-primary flex items-center">
                    WESPA Championship 2025 - Sika - Gold Challenge <span className="ml-2">🟫</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">Accra</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">SCAG</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">24</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">2025-11-15</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">2025-11-15</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text flex items-center">
                    <img src="/images/flags/ghana.webp" alt="Ghana Flag" className="h-4 w-6 mr-2" /> GHA
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-primary flex items-center">
                    WESPA Championship 2025 - Sankofa - Invictus Challenge <span className="ml-2">🟫</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">Accra</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">SCAG</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">8</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">2025-11-16</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">2025-11-16</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text flex items-center">
                    <img src="/images/flags/ghana.webp" alt="Ghana Flag" className="h-4 w-6 mr-2" /> GHA
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-primary flex items-center">
                    WESPA Championship 2025 - Adinkra Challenge <span className="ml-2">⚪</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">Accra</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">SCAG</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">8</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">2025-12-05</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">2025-12-07</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text flex items-center">
                    <img src="/images/flags/liberia.webp" alt="Liberia Flag" className="h-4 w-6 mr-2" /> LBR
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-primary flex items-center">
                    ScrabbleMania 3.0 <span className="ml-2">⭐</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">Monrovia</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">Mind Brilliance Inc</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">30</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">2026-08-28</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">2026-08-30</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text flex items-center">
                    <img src="/images/flags/nigeria.webp" alt="Nigeria Flag" className="h-4 w-6 mr-2" /> NGA
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-primary flex items-center">
                    PANASA President's Cup <span className="ml-2">🥇</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">Nigeria</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">Adekojejo Adegbesan</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text">24</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Tournament Categories Legend */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-text">Tournament Categories (Legend)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <span className="text-2xl mr-4">⭐</span> <span className="text-lg font-medium text-text">Platinum / Majors</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-4">🥇</span> <span className="text-lg font-medium text-text">Gold Badge</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-4">⚪</span> <span className="text-lg font-medium text-text">Silver Badge</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-4">🟫</span> <span className="text-lg font-medium text-text">Bronze Badge</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}