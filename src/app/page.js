'use client'
import Link from 'next/link';

const LanguageCard = ({ language, description, url }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <h2 className="text-xl font-bold mb-2">{language}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link href={url} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md inline-block">
          Start Learning
      </Link>
    </div>
  );
};

const Home = () => {
  const languages = [
    {
      language: 'HTML',
      description: 'Learn the structure of web pages.',
      url: '/home/html',
    },
    {
      language: 'CSS',
      description: 'Style your web pages beautifully.',
      url: '/home/css',
    },
    {
      language: 'JavaScript',
      description: 'Add interactivity and dynamics to your websites.',
      url: '/home/javascript',
    },
    {
      language: 'Python',
      description: 'A versatile language used in web development, data analysis, AI, and more.',
      url: '/home/python',
    },
    {
      language: 'Java',
      description: 'A widely-used object-oriented programming language for enterprise applications.',
      url: '/home/java',
    },
    {
      language: 'C++',
      description: 'A powerful language used in system/application software, games, and more.',
      url: '/home/c++',
    },
    {
      language: 'Ruby',
      description: 'Known for its simplicity and productivity, used in web development.',
      url: '/home/ruby',
    },
    {
      language: 'Swift',
      description: 'Develop iOS/macOS applications with a modern, concise programming language.',
      url: '/home/swift',
    },
    {
      language: 'PHP',
      description: 'A server-side scripting language for web development.',
      url: '/home/php',
    },
    // Add more languages as needed
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to Your Code Learning App</h1>
        {/* Displaying Language Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {languages.map((lang, index) => (
            <LanguageCard key={index} language={lang.language} description={lang.description} url={lang.url} />
          ))}
        </div>
      </main>

      {/* Footer */}
      
    </div>
  );
};

export default Home;
