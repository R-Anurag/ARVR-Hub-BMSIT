"use client";
import { useState } from "react";
import { Linkedin, Instagram, Github, Mail } from "lucide-react"; 
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { File, Folder, Tree } from "@/components/ui/file-tree";
import { Iphone15Pro } from "@/components/ui/iphone-15-pro";
import { NavLink } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import members from "@/data/members.json";

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
          { id: "3", isSelectable: true, name: "dr_srivani_p.mdx" },
          { id: "4", isSelectable: true, name: "dr_bharathi_r.mdx" },
          { id: "5", isSelectable: true, name: "dr_durga_bhavani.mdx" },
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
              { id: "8", isSelectable: true, name: "arindam.mdx (Advisor)" },
              { id: "9", isSelectable: true, name: "sayandeep.mdx (Advisor)" },
              { id: "10", isSelectable: true, name: "dhamini.mdx (Advisor)" },
              { id: "11", isSelectable: true, name: "rishith.mdx (Chair)" },
              { id: "12", isSelectable: true, name: "neha_h.mdx (Vice Chair)" },
              { id: "13", isSelectable: true, name: "abhinav_singh.mdx (Co Chair)" },
            ],
          },
          {
            id: "14",
            isSelectable: true,
            name: "administration",
            children: [
              { id: "15", isSelectable: true, name: "aditi_d.mdx (Chief Secretary)" },
              { id: "16", isSelectable: true, name: "adwit.mdx (Secretary)" },
              { id: "17", isSelectable: true, name: "mujawar_zaid.mdx (Treasurer)" },
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
                  { id: "20", isSelectable: true, name: "anurag.mdx (Head)" },
                  { id: "21", isSelectable: true, name: "marmik_jain.mdx (Associate)" },
                  { id: "22", isSelectable: true, name: "ansu_kumar.mdx (Associate)" },
                ],
              },
              {
                id: "23",
                isSelectable: true,
                name: "technical_team",
                children: [
                  { id: "24", isSelectable: true, name: "priyanka_h_navale.mdx (Head)" },
                  { id: "25", isSelectable: true, name: "mehul_paul.mdx (Co-Head)" },
                  { id: "26", isSelectable: true, name: "samarth_pasalkar.mdx (Associate)" },
                  { id: "27", isSelectable: true, name: "ananya_gupta.mdx (Associate)" },
                ],
              },
              {
                id: "28",
                isSelectable: true,
                name: "event_organizing",
                children: [
                  { id: "29", isSelectable: true, name: "m_chaitanya_pannegar.mdx (Head)" },
                  { id: "30", isSelectable: true, name: "bhoomika_r.mdx (Event Coordinator)" },
                  { id: "31", isSelectable: true, name: "rakshan.mdx (Event Coordinator)" },
                ],
              },
              {
                id: "32",
                isSelectable: true,
                name: "marketing_team",
                children: [
                  { id: "33", isSelectable: true, name: "asish.mdx (Head)" },
                  { id: "34", isSelectable: true, name: "i_g_chirag.mdx (Associate)" },
                  { id: "35", isSelectable: true, name: "srushti_k.mdx (Associate)" },
                  { id: "36", isSelectable: true, name: "kushal_raj_g_s.mdx (Associate)" },
                  { id: "37", isSelectable: true, name: "shree_gowri.mdx (Associate)" },
                ],
              },
              {
                id: "38",
                isSelectable: true,
                name: "social_media",
                children: [
                  { id: "39", isSelectable: true, name: "nisha.mdx (Head)" },
                  { id: "40", isSelectable: true, name: "pranathi_shetty.mdx (Associate)" },
                  { id: "41", isSelectable: true, name: "nisha_nandisha.mdx (Associate)" },
                  { id: "42", isSelectable: true, name: "abdullah.mdx (Associate-Blog writer)" },
                ],
              },
              {
                id: "43",
                isSelectable: true,
                name: "public_relations",
                children: [
                  { id: "44", isSelectable: true, name: "charuvi_suresh.mdx (Associate)" },
                  { id: "45", isSelectable: true, name: "devesh_kumar_singh.mdx (Associate)" },
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
  if (!member) {
    console.log("❌ No member selected");
    return null;
  }

  console.log("✅ Selected member:", member)

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
  const [selectedMember, setSelectedMember] = useState(null);

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

function handleSelect(payload) {
  console.log("Tree onSelect payload:", payload);

  // If payload is just the id (string)
  const id = typeof payload === "string" ? payload : payload?.id;

  const member = findMemberById(members, id);
  console.log("Matched member:", member);

  if (member && member.image) {
    setSelectedMember(member);
  } else {
    setSelectedMember(null);
  }
}




  return (
    <section className="relative flex w-full py-10 px-10 gap-10">
      {/* Left Column */}
      <div className="flex flex-col w-2/5 justify-center items-end">
        <h1 className="text-6xl font-bold mb-4 font-orbitron text-right text-[#B48CDE]">
            Meet Our Core
        </h1>
        <p className="text-xl text-gray-300 text-right mb-4">
            Discover the principles that drive our innovation and team.
        </p>
        <NavLink to="/LegacyTeams">
            <button className="flex items-center gap-2 border-2 border-[#B48CDE] text-[#B48CDE] font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:gap-4">
            Navigation for Millennials
            <ChevronRight className="transition-transform duration-300 group-hover:translate-x-2" />
            </button>
        </NavLink>
        </div>

      {/* Right Column */}
      <div className="relative w-3/5 flex flex-col items-center justify-center">
        {/* Flickering Grid behind */}
        <FlickeringGrid
          className="absolute inset-0 z-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
          squareSize={4}
          gridGap={6}
          color="#B48CDE"
          maxOpacity={0.5}
          flickerChance={0.1}
          height={400}
          width={600}
        />

        {/* Iphone floating on top-right */}
        <div className="absolute -top-10 right-0 z-20 w-[220px]">
          <Iphone15ProDemo member={selectedMember} />
        </div>

        {/* File Tree on top */}
        <div className="relative z-10 w-full h-[400px] rounded-lg border border-gray-700 p-4 overflow-visible">
          <Tree
            className="h-full w-full overflow-auto rounded-md bg-transparent p-2"
            initialSelectedId="7"
            initialExpandedItems={[
              "1","2","3","4","5","6","7","8","9","10","11",
              "12","13","14","15","16","17","18","19","20","21",
              "22","23","24","25","26","27","28","29","30","31",
              "32","33","34","35","36","37","38","39","40","41",
              "42","43","44","45"
            ]}
            elements={ELEMENTS}
            onSelect={handleSelect} // hook into selection
          >
            {/* JSX structure reflecting the same hierarchy */}
            <Folder element="arvr_club" value="1">
              <Folder element="faculty_advisors" value="2">
                <File value="3"><p>dr_srivani_p.mdx</p></File>
                <File value="4"><p>dr_bharathi_r.mdx</p></File>
                <File value="5"><p>dr_durga_bhavani.mdx</p></File>
              </Folder>

              <Folder element="core_team" value="6">
                <Folder element="leadership" value="7">
                  <File value="8"><p>arindam.mdx (Advisor)</p></File>
                  <File value="9"><p>sayandeep.mdx (Advisor)</p></File>
                  <File value="10"><p>dhamini.mdx (Advisor)</p></File>
                  <File value="11"><p>rishith.mdx (Chair)</p></File>
                  <File value="12"><p>neha_h.mdx (Vice Chair)</p></File>
                  <File value="13"><p>abhinav_singh.mdx (Co Chair)</p></File>
                </Folder>

                <Folder element="administration" value="14">
                  <File value="15"><p>aditi_d.mdx (Chief Secretary)</p></File>
                  <File value="16"><p>adwit.mdx (Secretary)</p></File>
                  <File value="17"><p>mujawar_zaid.mdx (Treasurer)</p></File>
                </Folder>

                <Folder element="sub_divisions" value="18">
                  <Folder element="web_development" value="19">
                    <File value="20"><p>anurag.mdx (Head)</p></File>
                    <File value="21"><p>marmik_jain.mdx (Associate)</p></File>
                    <File value="22"><p>ansu_kumar.mdx (Associate)</p></File>
                  </Folder>

                  <Folder element="technical_team" value="23">
                    <File value="24"><p>priyanka_h_navale.mdx (Head)</p></File>
                    <File value="25"><p>mehul_paul.mdx (Co-Head)</p></File>
                    <File value="26"><p>samarth_pasalkar.mdx (Associate)</p></File>
                    <File value="27"><p>ananya_gupta.mdx (Associate)</p></File>
                  </Folder>

                  <Folder element="event_organizing" value="28">
                    <File value="29"><p>m_chaitanya_pannegar.mdx (Head)</p></File>
                    <File value="30"><p>bhoomika_r.mdx (Event Coordinator)</p></File>
                    <File value="31"><p>rakshan.mdx (Event Coordinator)</p></File>
                  </Folder>

                  <Folder element="marketing_team" value="32">
                    <File value="33"><p>asish.mdx (Head)</p></File>
                    <File value="34"><p>i_g_chirag.mdx (Associate)</p></File>
                    <File value="35"><p>srushti_k.mdx (Associate)</p></File>
                    <File value="36"><p>kushal_raj_g_s.mdx (Associate)</p></File>
                    <File value="37"><p>shree_gowri.mdx (Associate)</p></File>
                  </Folder>

                  <Folder element="social_media" value="38">
                    <File value="39"><p>nisha.mdx (Head)</p></File>
                    <File value="40"><p>pranathi_shetty.mdx (Associate)</p></File>
                    <File value="41"><p>nisha_nandisha.mdx (Associate)</p></File>
                    <File value="42"><p>abdullah.mdx (Associate-Blog writer)</p></File>
                  </Folder>

                  <Folder element="public_relations" value="43">
                    <File value="44"><p>charuvi_suresh.mdx (Associate)</p></File>
                    <File value="45"><p>devesh_kumar_singh.mdx (Associate)</p></File>
                  </Folder>
                </Folder>
              </Folder>
            </Folder>
          </Tree>
        </div>
      </div>
    </section>
  );
}
