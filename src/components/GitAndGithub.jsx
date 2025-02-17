import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code, Github,  Sun, Moon, ArrowUp } from "lucide-react";

// Git and GitHub commands data
const GIT_COMMANDS = [
  {
    category: "Getting Started",
    commands: [
      {
        title: "Initialize a Repository",
        command: "git init",
        description: "Initializes a new Git repository in the current directory.",
      },
      {
        title: "Clone a Repository",
        command: "git clone <repository-url>",
        description: "Clones a repository from a remote URL to your local machine.",
      },
    ],
  },
  {
    category: "Basic Commands",
    commands: [
      {
        title: "Check Repository Status",
        command: "git status",
        description: "Shows the status of changes as untracked, modified, or staged.",
      },
      {
        title: "Stage Changes",
        command: "git add <file>",
        description: "Stages a specific file for commit. Use `git add .` to stage all changes.",
      },
      {
        title: "Commit Changes",
        command: 'git commit -m "Commit message"',
        description: "Commits staged changes with a descriptive message.",
      },
      {
        title: "Push Changes to Remote",
        command: "git push <remote> <branch>",
        description: "Pushes local commits to a remote repository.",
      },
      {
        title: "Pull Latest Changes",
        command: "git pull <remote> <branch>",
        description: "Fetches and merges changes from a remote repository.",
      },
    ],
  },
  {
    category: "Branching and Merging",
    commands: [
      {
        title: "Create a New Branch",
        command: "git branch <branch-name>",
        description: "Creates a new branch.",
      },
      {
        title: "Switch Branches",
        command: "git checkout <branch-name>",
        description: "Switches to the specified branch.",
      },
      {
        title: "Merge Branches",
        command: "git merge <branch-name>",
        description: "Merges the specified branch into the current branch.",
      },
    ],
  },
  {
    category: "Advanced Commands",
    commands: [
      {
        title: "View Commit History",
        command: "git log",
        description: "Displays the commit history for the current branch.",
      },
      {
        title: "Undo Last Commit",
        command: "git reset --soft HEAD~1",
        description: "Undoes the last commit while keeping changes staged.",
      },
      {
        title: "Stash Changes",
        command: "git stash",
        description: "Temporarily stores changes that are not ready to be committed.",
      },
      {
        title: "Apply Stashed Changes",
        command: "git stash apply",
        description: "Applies the most recently stashed changes.",
      },
      {
        title: "Rebase Branch",
        command: "git rebase <branch>",
        description: "Reapplies commits on top of another base tip.",
      },
    ],
  },
  {
    category: "Remote Repositories",
    commands: [
      {
        title: "View Remote Repositories",
        command: "git remote -v",
        description: "Lists all remote repositories connected to the local repository.",
      },
      {
        title: "Add a Remote Repository",
        command: "git remote add <name> <url>",
        description: "Adds a new remote repository with a specified name and URL.",
      },
      {
        title: "Remove a Remote Repository",
        command: "git remote remove <name>",
        description: "Removes a remote repository.",
      },
      {
        title: "Fetch Remote Changes",
        command: "git fetch <remote>",
        description: "Downloads changes from a remote repository without merging them.",
      },
    ],
  },
  {
    category: "Tags",
    commands: [
      {
        title: "Create a Tag",
        command: "git tag <tag-name>",
        description: "Creates a tag for a specific point in the commit history.",
      },
      {
        title: "Push Tags to Remote",
        command: "git push --tags",
        description: "Pushes all tags to the remote repository.",
      },
    ],
  },
];

function GitAndGithub() {
  const [darkMode, setDarkMode] = useState(true);
  const [showButton, setShowButton] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Show/hide "Back to Top" button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-gray-950 dark:to-blue-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 z-50"
        >
          {darkMode ? (
            <Sun size={24} className="text-yellow-400" />
          ) : (
            <Moon size={24} className="text-gray-800" />
          )}
        </button>

        {/* Header */}
        <section className="max-w-4xl mx-auto px-6 py-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4 flex items-center"
          >
            <Github size={32} className="mr-2" />
            Git & GitHub Documentation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-300"
          >
            A comprehensive guide to Git and GitHub commands for developers.
          </motion.p>
        </section>

        {/* Commands Section */}
        <section className="max-w-4xl mx-auto px-6 py-12">
          {GIT_COMMANDS.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                {category.category}
              </h2>
              <div className="space-y-6">
                {category.commands.map((cmd, cmdIndex) => (
                  <motion.div
                    key={cmdIndex}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + cmdIndex * 0.1 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      {cmd.title}
                    </h3>
                    <div className="flex items-center space-x-2 mb-4">
                      <Code size={20} className="text-gray-600 dark:text-gray-300" />
                      <span className="font-mono text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                        {cmd.command}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{cmd.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </section>

        {/* Footer */}
        <footer className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Git & GitHub Documentation. All rights reserved.
          </p>
        </footer>

        {/* Back to Top Button */}
        {showButton && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-blue-600 dark:bg-blue-400 text-white rounded-full shadow-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition-all duration-300"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </div>
    </div>
  );
}

export default GitAndGithub;