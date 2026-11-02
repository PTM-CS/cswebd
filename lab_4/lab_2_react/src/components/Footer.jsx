import { useState, useEffect } from 'react';

function Footer() {
  const [sysInfo, setSysInfo] = useState({ agent: '', platform: '' });

  useEffect(() => {
    localStorage.setItem('browserAgent', navigator.userAgent);
    localStorage.setItem('osPlatform', navigator.platform);

    setSysInfo({
      agent: localStorage.getItem('browserAgent'),
      platform: localStorage.getItem('osPlatform')
    });
  }, []);

  return (
    <footer className="bg-slate-800 text-slate-300 text-center py-6 mt-auto">
      <div className="mb-4 px-4 text-xs text-slate-400 max-w-2xl mx-auto">
        <p><strong>ОС:</strong> {sysInfo.platform}</p>
        <p className="truncate"><strong>Браузер:</strong> {sysInfo.agent}</p>
      </div>
      <p className="text-sm hover:text-white transition-colors duration-200">
        &copy; 2026 [Синиця Петро]. Усі права захищено.
      </p>
    </footer>
  );
}

export default Footer;