import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorAura() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [cursor, setCursor] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const updatePointerType = () => setIsDesktop(media.matches);
    updatePointerType();
    media.addEventListener("change", updatePointerType);
    return () => media.removeEventListener("change", updatePointerType);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    const onMove = (event) => {
      setCursor({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
      <motion.div
        animate={{ x: cursor.x - 90, y: cursor.y - 90 }}
        transition={{ type: "spring", damping: 22, stiffness: 180, mass: 0.7 }}
        className="absolute h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(34,51,255,0.12)_0%,rgba(34,51,255,0.035)_45%,transparent_72%)]"
      />
      <motion.div
        animate={{ x: cursor.x - 5, y: cursor.y - 5 }}
        transition={{ type: "spring", damping: 30, stiffness: 500, mass: 0.35 }}
        className="absolute h-2.5 w-2.5 rounded-full bg-[#2233ff]/45 shadow-[0_0_10px_rgba(34,51,255,0.35)]"
      />
    </div>
  );
}
