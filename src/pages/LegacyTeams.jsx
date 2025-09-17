"use client";
import "./LegacyTeams.css";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaEnvelope, FaGithub } from "react-icons/fa";
import membersData from "@/data/members.json";

// Recursive flattening function
function flattenTeamData(node) {
  const result = {};
  if (!node.children) return result;

  node.children.forEach(section => {
    if (section.children && section.children.every(child => child.image)) {
      result[section.name] = section.children.map(member => ({
        name: member.name.replace(".pfp", "").replace(/_/g, " "),
        role: member.role || "",
        img: member.image,
        linkedin: member.linkedin,
        github: member.github,
        email: member.email,
      }));
    } else {
      Object.assign(result, flattenTeamData(section));
    }
  });

  return result;
}

export default function LegacyTeams() {
  const [activeSection, setActiveSection] = useState("");
  const teamData = flattenTeamData(membersData);

  // Refs for all sections
  const sectionRefs = useRef({});
  Object.keys(teamData).forEach(section => {
    if (!sectionRefs.current[section]) sectionRefs.current[section] = null;
  });

  // IntersectionObserver to track active section
  useEffect(() => {
    const observers = Object.keys(teamData).map(section => {
      const el = sectionRefs.current[section];
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(section);
        },
        { threshold: 0.3 }
      );

      observer.observe(el);
      return observer;
    });

    return () => {
      observers.forEach(obs => obs && obs.disconnect());
    };
  }, [teamData]);

  return (
    <main className="min-h-screen bg-black text-white relative teams-bg">
      <div className="flex max-w-7xl mx-auto py-8 px-6 gap-4 relative z-10">

        {/* Vertical Heading */}
        <div className="sticky top-28 self-start flex items-center justify-center">
          <div className="grid h-full justify-center content-center grid-cols-[max-content_max-content]">
            <h2 className="text-[80px] m-0 leading-[0.9] text-center writing-mode rotate font-['IM_Fell_Double_Pica'] text-[#B48CDE]">
              Core
            </h2>
            <h2 className="text-[80px] m-0 leading-[0.9] text-center writing-mode font-['IM_Fell_Double_Pica'] text-[#B48CDE]">
              Team
            </h2>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="hidden md:block w-1/8 sticky top-28 self-start px-4">
          <ul className="menu-hover-fill flex flex-col items-start leading-none text-xl capitalize space-y-6 font-Orbitron">
            {Object.keys(teamData).map((section, idx) => (
              <li key={idx} className={activeSection === section ? "active" : ""}>
                <a
                  href={`#${section}`}
                  data-text={section}
                  onClick={(e) => {
                    e.preventDefault(); // prevent router from matching URL
                    sectionRefs.current[section]?.scrollIntoView({ behavior: "smooth", block: "start" });
                    setActiveSection(section);
                  }}
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Team Sections */}
        <section className="flex-1 space-y-20">
          {Object.entries(teamData).map(([section, members]) => (
            <div
              id={section}
              key={section}
              ref={el => { sectionRefs.current[section] = el; }}
            >
              {/* Section Heading */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center justify-center mb-10"
              >
                <span className="flex-1 h-[2px] bg-[#B48CDE] mx-4"></span>
                <h2 className="text-4xl font-['IM_Fell_French_Canon_SC'] text-[#B48CDE] whitespace-nowrap">{section}</h2>
                <span className="flex-1 h-[2px] bg-[#B48CDE] mx-4"></span>
              </motion.div>

              {/* Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {members.map((member, idx) => (
                  <motion.div
                    key={idx}
                    className="card relative group w-64 h-80 mx-auto overflow-visible flex flex-col items-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative w-64 h-64">
                      <img
                        src="profileFrames/frame1.png"
                        alt="Frame"
                        className="object-contain w-full h-full absolute inset-0 transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                      />
                      <img
                        src="profileFrames/frame2.png"
                        alt="Frame Hover"
                        className="object-contain w-full h-full absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                      />
                      <motion.img
                        src={member.img}
                        alt={member.name}
                        className=" member-img absolute inset-0 w-40 h-40 object-cover mx-auto mt-12 rounded-full"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.05 }}
                      />
                      <div className="multi-button">
                        {member.linkedin && (
                          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn">
                            <FaLinkedinIn />
                          </a>
                        )}
                        {member.email && (
                          <a href={`mailto:${member.email}`} className="social-btn">
                            <FaEnvelope />
                          </a>
                        )}
                        {member.github && (
                          <a href={member.github} target="_blank" rel="noopener noreferrer" className="social-btn">
                            <FaGithub />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Info */}
                    <div className="mt-4 flex flex-col items-center relative w-full">
                      <h3 className="text-lg font-semibold">{member.name}</h3>
                      <p className="text-sm text-gray-300">{member.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
