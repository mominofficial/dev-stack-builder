import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Search, Sparkles, Filter, CheckCircle2, AlertCircle } from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechCard from './components/TechCard';
import YourStack from './components/YourStack';
import Footer from './components/Footer';
import LoadingSkeleton from './components/LoadingSkeleton';

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stack, setStack] = useState(() => {
    // Initial state from localStorage if available
    try {
      const saved = localStorage.getItem('dev_stack_items');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Persist stack changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('dev_stack_items', JSON.stringify(stack));
    } catch (e) {
      console.error('Failed to save stack to localStorage', e);
    }
  }, [stack]);

  // Fetch technologies data asynchronously from JSON file
  useEffect(() => {
    setLoading(true);
    fetch('./data/technologies.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to load technologies: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        // Fallback in case of path issue
        fetch('/data/technologies.json')
          .then((res) => res.json())
          .then((data) => {
            setTechnologies(data);
            setLoading(false);
          })
          .catch((e) => {
            console.error('Fallback fetch also failed', e);
            setLoading(false);
          });
      });
  }, []);

  // Add technology to stack
  const handleAddToStack = (tech) => {
    const exists = stack.some((item) => item.id === tech.id);
    if (exists) {
      toast.warning(`${tech.name} is already in your stack!`, {
        icon: <AlertCircle className="w-5 h-5 text-amber-500" />,
      });
      return;
    }

    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack!`, {
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" />,
    });
  };

  // Remove individual technology from stack
  const handleRemoveFromStack = (id) => {
    const itemToRemove = stack.find((item) => item.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));
    toast.info(`${itemToRemove ? itemToRemove.name : 'Technology'} removed from stack.`, {
      icon: '🗑️',
    });
  };

  // Remove all technologies from stack
  const handleRemoveAll = () => {
    if (stack.length === 0) return;
    setStack([]);
    toast.error('All technologies removed from your stack.', {
      icon: '🧹',
    });
  };

  // Scroll to section helper
  const scrollToTechnologies = () => {
    const el = document.getElementById('technologies');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Categories list
  const categories = [
    'All',
    'Frontend',
    'Backend',
    'Database',
    'Language',
    'Styling',
    'DevOps',
    'Tools',
  ];

  // Filtered technologies based on category and search query
  const filteredTechnologies = technologies.filter((tech) => {
    const matchesCategory =
      selectedCategory === 'All' || tech.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      tech.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tech.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tech.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#fafbff] flex flex-col font-sans selection:bg-pink-500 selection:text-white">
      {/* Toast Notification Container */}
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastClassName="rounded-2xl shadow-lg border border-slate-100 font-sans text-xs sm:text-sm"
      />

      {/* Sticky Navbar */}
      <Navbar onNavigate={scrollToTechnologies} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Banner / Hero Section */}
        <Hero
          onExploreClick={scrollToTechnologies}
          onLearnMoreClick={scrollToTechnologies}
        />

        {/* Technologies & Your Stack Section */}
        <section id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
          
          {/* Section Heading matching UI */}
          <div className="text-left mb-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Explore the <span className="text-brand-gradient">Technologies</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-2 font-normal">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          {/* Filter Bar & Search */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8 bg-white border border-slate-200/80 p-3 rounded-2xl shadow-2xs">
            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-semibold px-3.5 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[240px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9.5 pr-4 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all"
              />
            </div>
          </div>

          {/* 2-Column Desktop Layout: (Left: 3-column tech card grid, Right: 1-column Your Stack) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Area: Tech Grid (8 or 9 cols on large screen) */}
            <div className="lg:col-span-8 xl:col-span-9">
              {loading ? (
                /* Loading State Requirement */
                <LoadingSkeleton />
              ) : filteredTechnologies.length === 0 ? (
                /* Empty Search Result State */
                <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center space-y-3">
                  <p className="text-base font-bold text-slate-700">
                    No matching technologies found
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400">
                    Try clearing your search or switching categories.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory('All');
                      setSearchQuery('');
                    }}
                    className="mt-2 text-xs font-semibold text-pink-600 hover:text-pink-700 underline cursor-pointer"
                  >
                    Reset filters
                  </button>
                </div>
              ) : (
                /* 3-Column Layout (1 on mobile, 2 on tablet, 3 on desktop) */
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
                  {filteredTechnologies.map((tech) => {
                    const isAdded = stack.some((item) => item.id === tech.id);
                    return (
                      <TechCard
                        key={tech.id}
                        tech={tech}
                        isAdded={isAdded}
                        onAdd={handleAddToStack}
                      />
                    );
                  })}
                </div>
              )}
            </div>

            {/* Right Area: Your Stack Sidebar (4 or 3 cols on large screen) */}
            <div className="lg:col-span-4 xl:col-span-3">
              <YourStack
                stack={stack}
                onRemove={handleRemoveFromStack}
                onRemoveAll={handleRemoveAll}
              />
            </div>

          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
