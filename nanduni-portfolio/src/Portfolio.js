
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <main className="bg-gradient-to-br from-[#0a0f1a] to-[#0d1b2a] text-gray-100 min-h-screen px-6 py-10 font-sans">
      {/* Logo Section */}
      <section className="text-center mb-10">
        <img src="/logo/blogme-logo.png" alt="BlogMe Logo" className="mx-auto w-32 h-32" />
      </section>

      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 text-blue-300">Nanduni Sanjana Wanniarachchi</h1>
        <p className="text-xl text-blue-100">Web Developer & Graphic Designer passionate about building beautiful digital experiences</p>
      </section>

      {/* Navigation to Education Page */}
      <section className="text-center mb-16">
        <Link to="/education" className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full transition">📘 View Education Details</Link>
      </section>

      {/* Degrees Section */}
      <section className="mb-16 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-blue-400">🎓 Education</h2>
        <div className="text-blue-100 space-y-2">
          <p><strong>BICT (Hons)</strong> – University of Vavuniya (2022 - 2026)</p>
          <p><strong>Software Engineer</strong> – Java Institute for Advanced Technology (2021 - 2026)</p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-blue-400">🚀 Projects</h2>
        <div className="grid gap-6">
          <a href="https://success.sona.lk/Beer" target="_blank" className="block p-4 bg-[#1c2a3a] rounded-2xl shadow-md hover:bg-[#263545] transition">
            <h3 className="text-2xl font-semibold text-blue-200">E-commerce Platform – Beer Shop</h3>
            <p className="text-sm mt-1 text-blue-100">Responsive online shop for beer products.</p>
            <img src="/images/beer-shop.png" alt="Beer Shop Project" className="mt-4 rounded-xl" />
          </a>
          <a href="https://success.sona.lk/Furniture" target="_blank" className="block p-4 bg-[#1c2a3a] rounded-2xl shadow-md hover:bg-[#263545] transition">
            <h3 className="text-2xl font-semibold text-blue-200">E-commerce Platform – Furniture Shop</h3>
            <p className="text-sm mt-1 text-blue-100">Responsive website for a modern furniture store.</p>
            <img src="/images/furniture-shop.png" alt="Furniture Shop Project" className="mt-4 rounded-xl" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-blue-400">👩‍💻 About Me</h2>
        <div className="max-w-3xl mx-auto text-center text-blue-100">
          <img src="/images/nanduni-profile.jpg" alt="Nanduni Sanjana" className="mx-auto w-40 h-40 rounded-full mb-4 object-cover border-4 border-blue-500" />
          <p>I’m a fullstack developer with experience in HTML, CSS, PHP, JavaScript, C#, C++, MySQL, MongoDB, Laravel, and Java. I also specialize in UI/UX and graphic design using Figma, Canva, Photoshop, and Illustrator. I love blending code with creativity to craft impactful digital products.</p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-blue-400">🛠️ Skills</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-center items-center">
          {[
            { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
            { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" },
            { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
            { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
            { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
            { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
            { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
            { name: "Photoshop", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" }
          ].map((skill) => (
            <div key={skill.name} className="flex flex-col items-center">
              <img src={skill.logo} alt={skill.name} className="w-12 h-12" />
              <span className="text-sm mt-1 text-blue-100">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4 text-blue-400">📫 Get in Touch</h2>
        <div className="flex justify-center gap-6 flex-wrap">
          <a href="mailto:naduniwanniarachchi919@gmail.com" className="text-blue-300 hover:underline">Email</a>
          <a href="https://github.com/BlogMe2025" target="_blank" className="text-blue-300 hover:underline">GitHub</a>
          <a href="https://www.linkedin.com/in/nanduni-wanniarachchi-007b64297/" target="_blank" className="text-blue-300 hover:underline">LinkedIn</a>
        </div>
      </section>
    </main>
  );
}
