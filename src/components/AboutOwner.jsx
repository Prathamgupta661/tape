import React from "react";
import { motion } from "framer-motion";
import owner from "../assets/owner.jpeg";
import owner2 from "../assets/owner2.jpeg";

const owners = [
  {
    name: "AK Saxena",
    role: "Founder & CEO",
    image: owner,
    bio: `The concern runs since 2009. His inexhaustible perseverance, never say die spirit, clinging to human values are amazing. He is open and above board in all his dealing. He worked hard and honestly to rise to heights. He never compromises with values and quality. `,
    contact : "9997028787",
  },
  {
    name: "Akalavaya Saxena",
    role: "Co-Founder & Operations Head",
    image: owner2,
    bio: `The concern runs since 2009. His inexhaustible perseverance, never say die spirit, clinging to human values are amazing. He is open and above board in all his dealing. He worked hard and honestly to rise to heights. He never compromises with values and quality. `,
    contact : "9458201918",
  },

];

const AboutOwner = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-[#f3e7d2] via-white to-[#f3e7d2]">
      <h2 className="text-4xl font-bold text-center text-[#1a2341] mb-10 tracking-tight">
        Meet Our Leadership
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10 px-4">
        {owners.map((owner, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-3xl shadow-xl border border-[#e5d3b3] p-8 flex flex-col items-center group hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: idx * 0.12 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="w-32 h-32 mb-5 rounded-full overflow-hidden shadow-lg border-4 border-[#b07a3c]">
              <motion.img
                src={owner.image}
                alt={owner.name}
                className="w-full h-full object-cover object-left transition-transform duration-300 group-hover:scale-110"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.4 }}
              />
            </div>
            <div className="text-xl font-bold text-[#1a2341] mb-1">
              {owner.name}
            </div>
            <div className="text-[#b07a3c] font-semibold mb-3">
              {owner.role}
            </div>
            <p className="text-[#4b4b4b] text-center text-sm px-4">
              {owner.bio}
            </p>
            <div className="text-[#b07a3c] font-semibold mt-4">
              Contact: {owner.contact}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutOwner;
