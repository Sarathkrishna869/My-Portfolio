import { useNavigate } from 'react-router-dom';

const ProjectInfo = () => {
  const navigate = useNavigate();
  const projectId = window.location.pathname.split('/').pop();
  const projects = [
    {
      id: 1,
      title: 'My Portfolio',
      description: 'Portfolio Project',
      technologies: ['React', 'JavaScript', 'HTML/CSS','Tailwind CSS'],
      link:'https://sarathkrishna869.github.io/My-Portfolio/',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'This is project 2',
      technologies: ['Node.js', 'Express', 'MongoDB'],
    },
    {  id: 3,
      title: 'Project 3',
      description: 'This is project 2',
      technologies: ['Node.js', 'Express', 'MongoDB'],
    }
  ];

  const project = projects.find((p) => p.id === Number(projectId));

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen">
      <header className="bg-gray-800 py-4 sticky top-0 shadow-lg">
        <nav className="container mx-auto flex justify-between">
          <h1 className="text-3xl font-bold">Project Info</h1>
          <button
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
            onClick={() => navigate('/')}
          >
            Back
          </button>
        </nav>
      </header>
      <main className="container mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">{project?.title}</h2>
        <p className="text-gray-400">{project?.description}</p>
        <ul>
          {project?.technologies.map((tech) => (
            <li key={tech} className="text-gray-400">{tech}</li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default ProjectInfo;
