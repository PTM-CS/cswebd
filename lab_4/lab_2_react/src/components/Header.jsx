function Header({ theme, toggleTheme }) {
  return (
    <header className="bg-slate-800 dark:bg-slate-950 text-white py-10 px-4 text-center shadow-lg rounded-b-3xl mb-6 relative transition-colors duration-300">
      <button 
        onClick={toggleTheme}
        className="absolute top-4 right-4 md:right-8 bg-slate-700 hover:bg-slate-600 dark:bg-slate-800 dark:hover:bg-slate-700 text-sm px-4 py-2 rounded-full transition"
      >
        {theme === 'light' ? '🌙 Нічна тема' : '☀️ Денна тема'}
      </button>

      <h1 className="text-4xl md:text-5xl font-bold tracking-wider mb-2">Синиця Петро</h1>
      <p className="text-lg md:text-xl text-blue-300 font-light tracking-wide">Студент КБ</p>
    </header>
  );
}

export default Header;