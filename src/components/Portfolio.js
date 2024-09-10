import { useState } from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [projects] = useState([
    {
      id: 1,
      title: 'Project 1',
      description: 'This is project 1',
      technologies: ['React', 'JavaScript', 'HTML/CSS'],
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'This is project 2',
      technologies: ['Node.js', 'Express', 'MongoDB'],
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'This is project 3',
      technologies: ['Python', 'Django', 'PostgreSQL'],
      image: 'https://via.placeholder.com/150',
    },
  ]);

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen">
      <header className="bg-gray-800 py-4 sticky top-0 shadow-lg">
        <nav className="container mx-auto flex justify-between">
          <h1 className="text-3xl font-bold">Portfolio</h1>
          <ul className="flex items-center space-x-6">
            <li>
              <Link to="#about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="#projects" className="hover:text-white">
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto p-6">
        <section id="about" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-gray-400">
            I am a software engineer with a passion for building innovative applications.
          </p>
        </section>
        <section id="projects" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <ul className="space-y-4">
            {projects.map((project) => (
              <li key={project.id} className="bg-gray-800 p-4 rounded shadow-lg">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-32 h-32 object-cover mb-4 rounded"
                />
                <Link
                  to={`/project/${project.id}`}
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mt-2 inline-block"
                >
                  More
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
