"use client";
import { useState, useRef } from "react";
import {
  Linkedin,
  Instagram,
  Github,
  Mail,
  ChevronRight,
  Fullscreen,
} from "lucide-react";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { File, Folder, Tree } from "@/components/ui/file-tree";
import { Iphone15Pro } from "@/components/ui/iphone-15-pro";
import { NavLink } from "react-router-dom";
import members from "@/data/members.json";
import { motion } from "framer-motion";

const ELEMENTS = [
  {
    id: "1",
    isSelectable: true,
    name: "arvr_club",
    children: [
      {
        id: "2",
        isSelectable: true,
        name: "faculty_advisors",
        children: [
          { id: "3", isSelectable: true, name: "dr_srivani_p.pfp" },
          { id: "4", isSelectable: true, name: "dr_bharathi_r.pfp" },
          { id: "5", isSelectable: true, name: "dr_durga_bhavani.pfp" },
        ],
      },
      {
        id: "6",
        isSelectable: true,
        name: "core_team",
        children: [
          {
            id: "7",
            isSelectable: true,
            name: "leadership",
            children: [
              { id: "8", isSelectable: true, name: "arindam.pfp (Advisor)" },
              { id: "9", isSelectable: true, name: "sayandeep.pfp (Advisor)" },
              { id: "10", isSelectable: true, name: "dhamini.pfp (Advisor)" },
              { id: "11", isSelectable: true, name: "rishith.pfp (Chair)" },
              { id: "12", isSelectable: true, name: "neha_h.pfp (Vice Chair)" },
              {
                id: "13",
                isSelectable: true,
                name: "abhinav_singh.pfp (Co Chair)",
              },
            ],
          },
          {
            id: "14",
            isSelectable: true,
            name: "administration",
            children: [
              {
                id: "15",
                isSelectable: true,
                name: "aditi_d.pfp (Chief Secretary)",
              },
              { id: "16", isSelectable: true, name: "adwit.pfp (Secretary)" },
              {
                id: "17",
                isSelectable: true,
                name: "mujawar_zaid.pfp (Treasurer)",
              },
            ],
          },
          {
            id: "18",
            isSelectable: true,
            name: "sub_divisions",
            children: [
              {
                id: "19",
                isSelectable: true,
                name: "web_development",
                children: [
                  { id: "20", isSelectable: true, name: "anurag.pfp (Head)" },
                  {
                    id: "21",
                    isSelectable: true,
                    name: "marmik_jain.pfp (Associate)",
                  },
                  {
                    id: "22",
                    isSelectable: true,
                    name: "ansu_kumar.pfp (Associate)",
                  },
                ],
              },
              {
                id: "23",
                isSelectable: true,
                name: "technical_team",
                children: [
                  {
                    id: "24",
                    isSelectable: true,
                    name: "priyanka_h_navale.pfp (Head)",
                  },
                  {
                    id: "25",
                    isSelectable: true,
                    name: "mehul_paul.pfp (Co-Head)",
                  },
                  {
                    id: "26",
                    isSelectable: true,
                    name: "samarth_pasalkar.pfp (Associate)",
                  },
                  {
                    id: "27",
                    isSelectable: true,
                    name: "ananya_gupta.pfp (Associate)",
                  },
                ],
              },
              {
                id: "28",
                isSelectable: true,
                name: "event_organizing",
                children: [
                  {
                    id: "29",
                    isSelectable: true,
                    name: "m_chaitanya_pannegar.pfp (Head)",
                  },
                  {
                    id: "30",
                    isSelectable: true,
                    name: "bhoomika_r.pfp (Event Coordinator)",
                  },
                  {
                    id: "31",
                    isSelectable: true,
                    name: "rakshan.pfp (Event Coordinator)",
                  },
                ],
              },
              {
                id: "32",
                isSelectable: true,
                name: "marketing_team",
                children: [
                  { id: "33", isSelectable: true, name: "asish.pfp (Head)" },
                  {
                    id: "34",
                    isSelectable: true,
                    name: "i_g_chirag.pfp (Associate)",
                  },
                  {
                    id: "35",
                    isSelectable: true,
                    name: "srushti_k.pfp (Associate)",
                  },
                  {
                    id: "36",
                    isSelectable: true,
                    name: "kushal_raj_g_s.pfp (Associate)",
                  },
                  {
                    id: "37",
                    isSelectable: true,
                    name: "shree_gowri.pfp (Associate)",
                  },
                ],
              },
              {
                id: "38",
                isSelectable: true,
                name: "social_media",
                children: [
                  { id: "39", isSelectable: true, name: "nisha.pfp (Head)" },
                  {
                    id: "40",
                    isSelectable: true,
                    name: "pranathi_shetty.pfp (Associate)",
                  },
                  {
                    id: "41",
                    isSelectable: true,
                    name: "nisha_nandisha.pfp (Associate)",
                  },
                  {
                    id: "42",
                    isSelectable: true,
                    name: "abdullah.pfp (Associate-Blog writer)",
                  },
                ],
              },
              {
                id: "43",
                isSelectable: true,
                name: "public_relations",
                children: [
                  {
                    id: "44",
                    isSelectable: true,
                    name: "charuvi_suresh.pfp (Associate)",
                  },
                  {
                    id: "45",
                    isSelectable: true,
                    name: "devesh_kumar_singh.pfp (Associate)",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

function Iphone15ProDemo({ member }) {
  if (!member) return null;

  return (
    <div className="relative">
      {/* iPhone itself */}
      <Iphone15Pro
        src={member.image}
        frameColor="#B48CDE"
        bodyColor="#1a1a1a"
        bezelColor="#000000"
        notchColor="#000000"
        className="size-full rotate-6"
      />

      {/* Social buttons (overlay at bottom) */}
      <div className="absolute top-[71%] left-[5%] flex gap-4 z-10 rotate-6">
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-[#0A66C2] hover:opacity-80 transition"
          >
            <Linkedin className="w-3 h-3 text-white" />
          </a>
        )}
        {member.instagram && (
          <a
            href={member.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:opacity-80 transition"
          >
            <Instagram className="w-3 h-3 text-white" />
          </a>
        )}
        {member.email && (
          <a
            href={`mailto:${member.email}`}
            className="p-2 rounded-full bg-red-500 hover:opacity-80 transition"
          >
            <Mail className="w-3 h-3 text-white" />
          </a>
        )}
        {member.github && (
          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-800 hover:opacity-80 transition"
          >
            <Github className="w-3 h-3 text-white" />
          </a>
        )}
      </div>
    </div>
  );
}

export function SectionWithFlickerBehindTree() {
  const initialSelectedId = "20"; // anurag.pfp

  function findMemberById(node, id) {
    if (node.id === id) return node;
    if (node.children) {
      for (const child of node.children) {
        const result = findMemberById(child, id);
        if (result) return result;
      }
    }
    return null;
  }

  const [selectedMember, setSelectedMember] = useState(() =>
    findMemberById(members, initialSelectedId)
  );

  const iphoneRef = useRef(null);

  function handleSelect(payload) {
    const id = typeof payload === "string" ? payload : payload?.id;
    const member = findMemberById(members, id);
    if (member && member.image) {
      setSelectedMember(member);

      // Scroll iPhone into view
      if (iphoneRef.current) {
        iphoneRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center", // aligns to center
        });
      }
    } else {
      setSelectedMember(null);
    }
  }

  return (
    <section className="relative flex flex-col lg:flex-row w-full py-10 px-6 md:px-10 gap-10">
      {/* Left Column */}
      <motion.div
        className="flex flex-col w-full lg:w-2/5 justify-center items-center lg:items-end text-center lg:text-right"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-orbitron text-[#B48CDE]">
          Meet Our Core
        </h1>
        <p className="text-base md:text-xl text-gray-300 mb-4 max-w-md">
          Discover the principles that drive our innovation and team.
        </p>
        <NavLink to="/LegacyTeams">
          <button className="flex items-center gap-2 border-2 border-[#B48CDE] text-[#B48CDE] font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:gap-4">
            Navigation for Millennials
            <ChevronRight className="transition-transform duration-300 group-hover:translate-x-2" />
          </button>
        </NavLink>
      </motion.div>

      {/* Right Column */}
      <div className="relative w-full lg:w-3/5 flex flex-col items-center justify-center gap-8 overflow-hidden">
        {/* Flickering Grid behind */}
        <FlickeringGrid
          className="absolute inset-0 z-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
          squareSize={4}
          gridGap={6}
          color="#B48CDE"
          maxOpacity={0.5}
          flickerChance={0.1}
          height={window.innerHeight}
          width={window.innerWidth}
        />

        {/* File Tree */}
        <motion.div
          className="relative z-10 w-full h-full rounded-lg border border-gray-700 p-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Tree
            className="h-full w-full overflow-auto rounded-md bg-transparent p-2"
            initialSelectedId="20"
            initialExpandedItems={[]}
            elements={ELEMENTS}
            onSelect={handleSelect}
          >
            {/* JSX structure reflecting hierarchy */}
            <Folder element="arvr_club" value="1">
              <Folder element="faculty_advisors" value="2">
                <File value="3">
                  <p>dr_srivani_p.pfp</p>
                </File>
                <File value="4">
                  <p>dr_bharathi_r.pfp</p>
                </File>
                <File value="5">
                  <p>dr_durga_bhavani.pfp</p>
                </File>
              </Folder>
              <Folder element="core_team" value="6">
                <Folder element="leadership" value="7">
                  <File value="8">
                    <p>arindam.pfp (Advisor)</p>
                  </File>
                  <File value="9">
                    <p>sayandeep.pfp (Advisor)</p>
                  </File>
                  <File value="10">
                    <p>dhamini.pfp (Advisor)</p>
                  </File>
                  <File value="11">
                    <p>rishith.pfp (Chair)</p>
                  </File>
                  <File value="12">
                    <p>neha_h.pfp (Vice Chair)</p>
                  </File>
                  <File value="13">
                    <p>abhinav_singh.pfp (Co Chair)</p>
                  </File>
                </Folder>
                <Folder element="administration" value="14">
                  <File value="15">
                    <p>aditi_d.pfp (Chief Secretary)</p>
                  </File>
                  <File value="16">
                    <p>adwit.pfp (Secretary)</p>
                  </File>
                  <File value="17">
                    <p>mujawar_zaid.pfp (Treasurer)</p>
                  </File>
                </Folder>
                <Folder element="sub_divisions" value="18">
                  <Folder element="web_development" value="19">
                    <File value="20">
                      <p>anurag.pfp (Head)</p>
                    </File>
                    <File value="21">
                      <p>marmik_jain.pfp (Associate)</p>
                    </File>
                    <File value="22">
                      <p>ansu_kumar.pfp (Associate)</p>
                    </File>
                  </Folder>
                  <Folder element="technical_team" value="23">
                    <File value="24">
                      <p>priyanka_h_navale.pfp (Head)</p>
                    </File>
                    <File value="25">
                      <p>mehul_paul.pfp (Co-Head)</p>
                    </File>
                    <File value="26">
                      <p>samarth_pasalkar.pfp (Associate)</p>
                    </File>
                    <File value="27">
                      <p>ananya_gupta.pfp (Associate)</p>
                    </File>
                  </Folder>
                  <Folder element="event_organizing" value="28">
                    <File value="29">
                      <p>m_chaitanya_pannegar.pfp (Head)</p>
                    </File>
                    <File value="30">
                      <p>bhoomika_r.pfp (Event Coordinator)</p>
                    </File>
                    <File value="31">
                      <p>rakshan.pfp (Event Coordinator)</p>
                    </File>
                  </Folder>
                  <Folder element="marketing_team" value="32">
                    <File value="33">
                      <p>asish.pfp (Head)</p>
                    </File>
                    <File value="34">
                      <p>i_g_chirag.pfp (Associate)</p>
                    </File>
                    <File value="35">
                      <p>srushti_k.pfp (Associate)</p>
                    </File>
                    <File value="36">
                      <p>kushal_raj_g_s.pfp (Associate)</p>
                    </File>
                    <File value="37">
                      <p>shree_gowri.pfp (Associate)</p>
                    </File>
                  </Folder>
                  <Folder element="social_media" value="38">
                    <File value="39">
                      <p>nisha.pfp (Head)</p>
                    </File>
                    <File value="40">
                      <p>pranathi_shetty.pfp (Associate)</p>
                    </File>
                    <File value="41">
                      <p>nisha_nandisha.pfp (Associate)</p>
                    </File>
                    <File value="42">
                      <p>abdullah.pfp (Associate-Blog writer)</p>
                    </File>
                  </Folder>
                  <Folder element="public_relations" value="43">
                    <File value="44">
                      <p>charuvi_suresh.pfp (Associate)</p>
                    </File>
                    <File value="45">
                      <p>devesh_kumar_singh.pfp (Associate)</p>
                    </File>
                  </Folder>
                </Folder>
              </Folder>
            </Folder>
          </Tree>
        </motion.div>

        {/* Iphone */}
        <motion.div
          ref={iphoneRef}
          className="relative z-20 w-[220px] mx-auto lg:absolute lg:-top-10 lg:right-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Iphone15ProDemo member={selectedMember} />
        </motion.div>
      </div>
    </section>
  );
}
