import { useState, useEffect } from 'react';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/19/comments')
      .then(response => response.json())
      .then(data => {
        setReviews(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Помилка завантаження:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <section className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 transition-colors duration-300">
      <h2 className="text-2xl font-semibold text-slate-700 dark:text-slate-100 mb-4 border-b-2 border-orange-500 inline-block pb-1">
        Відгуки роботодавців
      </h2>
      
      {isLoading ? (
        <p className="text-slate-500 dark:text-slate-400">Завантаження відгуків...</p>
      ) : (
        <div className="space-y-4">
          {reviews.map(review => (
            <div key={review.id} className="bg-slate-50 dark:bg-slate-700 p-4 rounded-xl border border-slate-100 dark:border-slate-600">
              <h3 className="font-semibold text-slate-800 dark:text-white">{review.name}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-300 mb-2">{review.email}</p>
              <p className="text-slate-600 dark:text-slate-200 leading-relaxed">{review.body}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Reviews;