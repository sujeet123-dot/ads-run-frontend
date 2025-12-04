import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialCard = ({ quote, author, company, role }) => {
  return (
    <div className="relative h-full p-8 rounded-2xl bg-[#141625] border border-white/5 shadow-xl transition-all duration-300 hover:border-indigo-500/30 hover:-translate-y-1">
      
      {/* Decorative Quote Icon (Faded Background) */}
      <div className="absolute top-6 right-6 text-indigo-500/10">
        <Quote size={48} />
      </div>

      {/* Quote Content */}
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          {/* Star Rating (Optional visual flair) */}
          <div className="flex gap-1 mb-4 text-amber-400 text-sm">
            {[...Array(5)].map((_, i) => (
              <i key={i} className="fas fa-star fill-current">★</i>
            ))}
          </div>

          <p className="text-gray-300 italic leading-relaxed text-lg mb-6">
            "{quote}"
          </p>
        </div>

        {/* Author Info */}
        <div className="flex items-center gap-4 pt-6 border-t border-white/5">
          {/* Avatar Placeholder (or image if you add an 'image' prop later) */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
            {author.charAt(0)}
          </div>
          
          <div>
            <p className="font-bold text-white text-base">{author}</p>
            <p className="text-sm text-indigo-400 font-medium">
              {company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;