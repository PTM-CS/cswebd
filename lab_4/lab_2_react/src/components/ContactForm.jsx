import { useState, useEffect } from 'react';

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl w-full max-w-md relative transition-colors duration-300">
        <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">Залиште свій відгук</h2>
        <form action="https://formspree.io/f/mjyyppzg" method="POST" className="flex flex-col gap-4">
          <input 
            type="text" name="name" placeholder="Ваше ім'я" required 
            className="p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input 
            type="email" name="email" placeholder="Ваш Email" required 
            className="p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input 
            type="tel" name="phone" placeholder="Номер телефону" 
            className="p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea 
            name="message" rows="4" placeholder="Ваше повідомлення" required
            className="p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          
          <div className="flex gap-3 mt-2">
            <button 
              type="button" 
              onClick={() => setIsOpen(false)}
              className="flex-1 px-4 py-2 bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500 transition"
            >
              Закрити
            </button>
            <button 
              type="submit" 
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Надіслати
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;