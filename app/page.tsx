"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  Twitter,
  Linkedin,
  Youtube,
  Mail,
  BriefcaseIcon,
  CodeIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8">
        {/* Left Sidebar */}
        <div className="space-y-8">
          {/* Profile Header */}
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 overflow-hidden rounded-full">
              <Image
                src="/foto.JPG"
                alt="Profile"
                width={60}
                height={60}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-mono">Rafi</h1>
              <p className="text-gray-400">MOBILE DEVELOPER</p>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              As a final year student at Politeknik Negeri Jakarta, I am
              currently pursuing a career in mobile development while also
              holding interests in product management and data science.
            </p>
            {/* <Button variant="outline" className="rounded-full">
              More about Me
            </Button> */}
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://www.linkedin.com/in/rafiardian/"
                  target="_blank"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:rafi.ardian.work@gmail.com">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
            {/* <div className="text-gray-400 text-sm">
              <p>© by UIhub in Framer</p>
              <div className="flex gap-4">
                <Link href="#" className="hover:text-white">
                  Licensing
                </Link>
                <Link href="#" className="hover:text-white">
                  404
                </Link>
              </div>
            </div> */}
          </div>

          {/* Work Experience Timeline */}
          <div className="space-y-4">
            <h2 className="text-xl font-mono">EXPERIENCE</h2>
            <div className="space-y-6">
              {/* Timeline Item */}
              <div className="relative pl-12 border-l border-gray-700">
                <div className="absolute -left-3 top-0">
                  <div className="h-6 w-6 rounded-md overflow-hidden bg-gray-800 border border-gray-700">
                    <Image
                      src="/talent_insider.png"
                      alt="Company Logo"
                      width={24}
                      height={24}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-gray-400 text-sm">
                    02/12/2024 - 02/03/2025
                  </span>
                  <h3 className="font-medium">Mobile Developer</h3>
                  <p className="text-gray-400">Talent Insider</p>
                  <p className="text-sm text-gray-300">
                    Developed and implemented e-signature Flutter app with BLoC
                    state management, collaborating with cross-functional teams
                    to integrate APIs and enhance functionality for seamless
                    digital document signing.
                  </p>
                </div>
              </div>

              {/* Timeline Item */}
              <div className="relative pl-12 border-l border-gray-700">
                <div className="absolute -left-3 top-0">
                  <div className="h-6 w-6 rounded-md overflow-hidden bg-gray-800 border border-gray-700">
                    <Image
                      src="/maritim_logo.png"
                      alt="Company Logo"
                      width={32}
                      height={32}
                      className="rounded-md absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-gray-400 text-sm">
                    06/09/2024 - 31/12/2024
                  </span>
                  <h3 className="font-medium">Mobile Developer</h3>
                  <p className="text-gray-400">Maritim Muda Nusantara</p>
                  <p className="text-sm text-gray-300">
                    Designed and developed the Maritim Muda Connect app using
                    Flutter and GetX state management, crafting intuitive UI/UX
                    designs and integrating RESTful APIs to enable core
                    functionalities.{" "}
                  </p>
                </div>
              </div>

              {/* Timeline Item */}
              <div className="relative pl-12 border-l border-gray-700">
                <div className="absolute -left-3 top-0">
                  <div className="h-6 w-6 rounded-md overflow-hidden bg-gray-800 border border-gray-700">
                    <Image
                      src="/lokpro.png"
                      alt="Company Logo"
                      width={24}
                      height={24}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-gray-400 text-sm">
                    01/09/2024 - 31/12/2024
                  </span>
                  <h3 className="font-medium">Flutter Mobile Developer</h3>
                  <p className="text-gray-400">LOKPRO</p>
                  <p className="text-sm text-gray-300">
                    Collaborated with development team to create intuitive user
                    experiences.
                  </p>
                </div>
              </div>

              {/* Timeline Item */}
              <div className="relative pl-12 border-l border-gray-700">
                <div className="absolute -left-3 top-0">
                  <div className="h-6 w-6 rounded-md overflow-hidden bg-gray-800 border border-gray-700">
                    <Image
                      src="/visanka.png"
                      alt="Company Logo"
                      width={24}
                      height={24}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-gray-400 text-sm">
                    24/10/2023 - 23/11/2023
                  </span>
                  <h3 className="font-medium">Flutter Mobile Developer</h3>
                  <p className="text-gray-400">VISANKA TECHNOLOGIES PVT LTD</p>
                  <p className="text-sm text-gray-300">
                    Developed dummy mobile applications with Flutter, utilizing
                    GetX for state management and implementing designs using
                    Flutter code.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-8">
          {/* Menu Button - Only show on mobile */}
          <div className="flex justify-end lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6" />
            </Button>
          </div>

          {/* Projects Section */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-mono">My Projects</h2>
              {/* <Button variant="ghost" size="icon">
                <span className="sr-only">View all projects</span>→
              </Button> */}
            </div>

            {/* Grid untuk menampilkan proyek */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Proyek 1 */}
              <div className="relative rounded-lg overflow-hidden max-h-64 group">
                <Image
                  src="/explora.png"
                  alt="Explora Project"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center p-4">
                    <h3 className="font-bold text-lg">Explora</h3>
                    <p className="text-sm">
                      Leveraging the power of machine learning and mobile
                      programming, this educational app lets kindergarten
                      children instantly identify plants and access information
                      just by using their camera.
                    </p>
                  </div>
                </div>
              </div>

              {/* Proyek 2 */}
              <div className="relative rounded-lg overflow-hidden max-h-64 group">
                <Image
                  src="/sunwise.png"
                  alt="Sunwise Project"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center p-4">
                    <h3 className="font-bold text-lg">Sunwise</h3>
                    <p className="text-sm">
                      A real-time uv monitoring application with skin
                      recomendation features.{" "}
                    </p>
                  </div>
                </div>
              </div>

              {/* Proyek 3 */}
              <div className="relative rounded-lg overflow-hidden max-h-64 group">
                <Image
                  src="/aeropulse.png"
                  alt="AeroPulse Project"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center p-4">
                    <h3 className="font-bold text-lg">AeroPulse</h3>
                    <p className="text-sm">
                      Easily view current UV levels and air pollutant
                      information anywhere. Just tap on the map.{" "}
                    </p>
                  </div>
                </div>
              </div>

              {/* Proyek 4 */}
              <div className="relative rounded-lg overflow-hidden max-h-64 group">
                <Image
                  src="/maritim.png"
                  alt="Maritim Project"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center p-4">
                    <h3 className="font-bold text-lg">Maritim</h3>
                    <p className="text-sm">
                      Company profile application, developed using Flutter and
                      Getx.
                    </p>
                  </div>
                </div>
              </div>

              {/* Proyek 5 */}
              <div className="relative rounded-lg overflow-hidden max-h-64 group">
                <Image
                  src="/bidanapp.png"
                  alt="BidanApp Project"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center p-4">
                    <h3 className="font-bold text-lg">BidanApp</h3>
                    <p className="text-sm">
                      Mobile application for midwives to manage patient records
                      and appointments
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stack Section */}
          <section className="bg-blue-600 rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-mono">My Stack</h2>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <Image
                  src="/flutter.png"
                  alt="Flutter"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <Image
                  src="/bloc.png"
                  alt="BLoC"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <Image
                  src="/riverpod.png"
                  alt="Riverpod"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <Image
                  src="/getx.png"
                  alt="GetX"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <Image
                  src="/react.png"
                  alt="React"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <Image
                  src="/expo.png"
                  alt="Expo"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <Image
                  src="/kotlin.png"
                  alt="Kotlin"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <Image
                  src="/express.png"
                  alt="Express"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <Image
                  src="/mysql.png"
                  alt="MySQL"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
