"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

interface Service {
  title: string;
  description: string;
  details: string[];
  image: string;
}

export function EnhancedServicesGrid({ services }: { services: Service[] }) {
  const [active, setActive] = useState<Service | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  // Escape key handling
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Lock scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "auto";
  }, [active]);

  return (
    <div className="w-full">
      {/* OVERLAY */}
      <AnimatePresence mode="wait">
        {active && (
          <motion.div
            className="fixed inset-0 bg-black/60 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          />
        )}
      </AnimatePresence>

      {/* EXPANDED CARD */}
      <AnimatePresence mode="wait">
        {active && (
          <motion.div
            layoutId={`card-${active.title}-${id}`}
            ref={ref}
            className="fixed z-[60] inset-0 flex items-center justify-center px-4"
          >
            <motion.div
              className="bg-white max-w-3xl w-full rounded-2xl shadow-2xl overflow-hidden object-contain"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* IMAGE THUMBNAIL */}
              <div className="relative w-full h-[300px] sm:h-[360px] md:h-[400px] lg:h-[450px]">
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  className="object-contain"
                  priority
                />
                <button
                  onClick={() => setActive(null)}
                  className="absolute top-4 right-4 bg-white/90 rounded-full p-2 shadow hover:bg-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* CONTENT */}
              <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
                <h3 className="text-2xl font-bold text-gray-900">
                  {active.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {active.description}
                </p>
                <ul className="space-y-2 pt-2">
                  {active.details.map((item, i) => (
                    <li key={i} className="text-sm text-gray-600 flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <motion.div
            key={service.title}
            layoutId={`card-${service.title}-${id}`}
            layout="position"
            onClick={() => setActive(service)}
            whileHover={{ y: -4 }}
            className="cursor-pointer bg-white rounded-xl border border-gray-200 shadow hover:shadow-lg transition-shadow overflow-hidden"
          >
            {/* IMAGE in GRID */}
            <div className="relative w-full aspect-[16/9]">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* TEXT CONTENT */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-3 mt-1">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
