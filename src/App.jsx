import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  ChevronLeft,
  BookOpen,
  User,
  Trophy,
  Settings,
  TrendingUp,
  MessageCircle,
  Star
} from 'lucide-react';

// VIDEO REAL
const VideoEmbed = ({ url }) => (
  <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-xl mt-6">
    <iframe
      className="w-full h-full"
      src={url}
      title="Video"
      allowFullScreen
    ></iframe>
  </div>
);

// WRAPPER
const SectionWrapper = ({ children, title, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="max-w-3xl mx-auto px-6 py-20"
  >
    <div className="flex items-center gap-3 mb-6">
      <Icon className="text-indigo-600" />
      <h2 className="text-sm font-bold uppercase text-indigo-500">{title}</h2>
    </div>
    {children}
  </motion.div>
);

export default function App() {
  const [page, setPage] = useState(0);

  const pages = [
    // COVER
    {
      content: (
        <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
          <BookOpen size={80} className="mb-6 text-indigo-600" />
          <h1 className="text-5xl font-black mb-4">
            My Jungle Book
          </h1>
          <p className="text-lg mb-6">
            The Olympics of My Life
          </p>
          <button onClick={() => setPage(1)} className="bg-black text-white px-6 py-3 rounded-full">
            Start Reading
          </button>
        </div>
      )
    },

    // CHAPTER 1
    {
      title: "Chapter 1: Who I Am",
      icon: User,
      content: (
        <>
          <h3 className="text-3xl font-bold mb-4">My Player Profile</h3>

          <p>
            Hi, my name is Jhonatan Perea. I am 21 years old and I am from Medellín, Colombia.
            I am a software engineering student, and I am passionate about technology and solving problems.
          </p>

          <p className="mt-4">
            I have strong logical reasoning and problem-solving skills, but sometimes I struggle with discipline and consistency.
          </p>

          <p className="mt-4">
            I am better than many people at learning and adapting to life’s challenges. I consider myself intelligent,
            and I really enjoy learning new things. I fall, but I always get up again, and that makes me stronger.
          </p>

          <p className="mt-4">
            I am the first programmer in my family. I also enjoy listening to music, especially Kanye West.
            My English is not very fluent yet, but I am improving every day.
          </p>

          <p className="mt-4">
            What makes me special is my perseverance. I never give up easily, even when I face difficulties.
          </p>
        </>
      )
    },

    // CHAPTER 2
    {
      title: "Chapter 2: My Challenge",
      icon: Trophy,
      content: (
        <>
          <h3 className="text-3xl font-bold mb-4">My Pororoca</h3>

          <VideoEmbed url="PEGAR_VIDEO_1" />

          <p className="mt-6">
            My biggest challenge in life has been economic difficulties. I come from a humble family,
            and sometimes life was not easy because of that.
          </p>

          <p className="mt-4">
            This situation was hard, but it motivated me to work harder every day.
            I want to change my future and help my family.
          </p>

          <p className="mt-4">
            I learned from my mother, who is a very strong and perseverant woman.
            She never gives up, and she taught me to always stand up after falling.
          </p>

          <p className="mt-4">
            If I stop trying, I could lose everything I have worked for.
            But if I continue, I might achieve a better life.
          </p>
        </>
      )
    },

    // CHAPTER 3
    {
      title: "Chapter 3: Rules",
      icon: Settings,
      content: (
        <>
          <h3 className="text-3xl font-bold mb-4">Rules of My Life</h3>

          <ul className="space-y-2">
            <li>I must study every day.</li>
            <li>I must not waste time; I must be productive.</li>
            <li>I have to practice English.</li>
            <li>I must stay focused.</li>
            <li>I must not give up.</li>
            <li>I must improve my skills.</li>
            <li>I need to manage my time better.</li>
            <li>I must be disciplined.</li>
            <li>I must learn from my mistakes.</li>
            <li>I must be consistent with my actions.</li>
          </ul>
        </>
      )
    },

    // CHAPTER 4
    {
      title: "Chapter 4: Progress",
      icon: TrendingUp,
      content: (
        <>
          <h3 className="text-3xl font-bold mb-4">My Progress</h3>

          <VideoEmbed url="PEGAR_VIDEO_2" />

          <p className="mt-6">
            Before, I could not express myself well in English, but now I can communicate better.
          </p>

          <p className="mt-4">
            I am more confident than before and better at programming.
          </p>

          <p className="mt-4">
            I learned that mistakes are part of the process, and they help me grow.
          </p>
        </>
      )
    },

    // CHAPTER 5
    {
      title: "Chapter 5: Advice",
      icon: MessageCircle,
      content: (
        <>
          <h3 className="text-3xl font-bold mb-4">Advice</h3>

          <VideoEmbed url="PEGAR_VIDEO_3" />

          <p className="mt-6">
            If I could give advice to my past self, I would say: use your time better.
            Life is short, so take advantage of every opportunity.
          </p>

          <p className="mt-4">
            You are not alone. You have God and people who love you.
            Communication is very important, and not doing it was one of my biggest mistakes.
          </p>

          <p className="mt-4">
            You should stay focused, and you must never give up.
          </p>
        </>
      )
    },

    // CHAPTER 6
    {
      title: "Final Reflection",
      icon: Star,
      content: (
        <>
          <h3 className="text-3xl font-bold mb-4">Final Reflection</h3>

          <p>
            During this course, I learned many important things. Before, I did not know much about the topics,
            but now I understand them better.
          </p>

          <p className="mt-4">
            My Olympic values are perseverance and hustle. These values help me never give up,
            even when things are difficult.
          </p>

          <p className="mt-4">
            My next goal is to improve my English. I will do this by watching series,
            listening to music in English, and using tools that help me practice.
          </p>

          <p className="mt-4">
            This experience helped me grow as a person and made me stronger.
          </p>
        </>
      )
    }
  ];

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        <motion.div key={page}>
          {page === 0 ? (
            pages[0].content
          ) : (
            <SectionWrapper title={pages[page].title} icon={pages[page].icon}>
              {pages[page].content}
            </SectionWrapper>
          )}
        </motion.div>
      </AnimatePresence>

      {page > 0 && (
        <div className="fixed bottom-10 left-0 right-0 flex justify-between px-10">
          <button onClick={() => setPage(page - 1)}>
            <ChevronLeft />
          </button>
          <button onClick={() => setPage(page + 1)}>
            <ChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}