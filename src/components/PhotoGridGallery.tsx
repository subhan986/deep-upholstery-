import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_PHOTOS } from '../data/upholsteryData';
import { X, Sparkles } from 'lucide-react';

export const PhotoGridGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof GALLERY_PHOTOS[0] | null>(null);

  return (
    <section id="gallery" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            London Transformation Gallery
          </h2>
          <p className="text-base text-slate-600 font-medium max-w-2xl mx-auto mb-10">
            Recent carpet extraction and upholstery revivals across London, Walthamstow, Wood Street E17, and surrounding areas.
          </p>
        </motion.div>

        {/* 8 Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {GALLERY_PHOTOS.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative h-48 sm:h-56 rounded-2xl overflow-hidden cursor-pointer shadow-sm border border-slate-200 hover:shadow-xl transition"
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-3 text-left">
                <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  {photo.tag}
                </span>
                <span className="text-xs font-bold text-white line-clamp-1">
                  {photo.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl p-4 space-y-4"
              >
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition z-10 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="h-80 sm:h-96 rounded-xl overflow-hidden">
                  <img
                    src={selectedPhoto.image}
                    alt={selectedPhoto.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="text-left space-y-1">
                  <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest">
                    {selectedPhoto.category}
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900">
                    {selectedPhoto.title}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

