// app/departments/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Users, BookOpen, Megaphone, TrendingUp, Heart, Code } from 'lucide-react';

export default function DepartmentsPage() {
  const departments = [
    {
      id: 'akademik',
      name: 'Departemen Akademik',
      icon: <BookOpen className="w-12 h-12" />,
      description: 'Fokus pada peningkatan kualitas akademik mahasiswa melalui berbagai program pembelajaran',
      color: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop',
      proker: [
        { name: 'Workshop Programming', desc: 'Pelatihan pemrograman untuk meningkatkan skill teknis mahasiswa' },
        { name: 'Seminar Teknologi', desc: 'Menghadirkan pembicara profesional di bidang teknologi' },
        { name: 'Tutorial Peer to Peer', desc: 'Program bimbingan antar mahasiswa untuk mata kuliah sulit' },
        { name: 'Kompetisi Coding Internal', desc: 'Lomba coding untuk mengasah kemampuan problem solving' }
      ]
    },
    {
      id: 'psdm',
      name: 'Departemen PSDM',
      icon: <Users className="w-12 h-12" />,
      description: 'Pengembangan Sumber Daya Manusia untuk membentuk karakter dan soft skill mahasiswa',
      color: 'from-purple-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      proker: [
        { name: 'Leadership Training', desc: 'Pelatihan kepemimpinan untuk mengembangkan jiwa pemimpin' },
        { name: 'Team Building', desc: 'Kegiatan membangun kerjasama dan kekompakan tim' },
        { name: 'Mentoring Program', desc: 'Program pendampingan mahasiswa baru oleh senior' },
        { name: 'Soft Skills Workshop', desc: 'Pelatihan public speaking, komunikasi, dan networking' }
      ]
    },
    {
      id: 'medinfo',
      name: 'Departemen Media & Informasi',
      icon: <Megaphone className="w-12 h-12" />,
      description: 'Mengelola media komunikasi dan dokumentasi seluruh kegiatan himpunan',
      color: 'from-orange-500 to-red-500',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
      proker: [
        { name: 'Konten Kreatif Digital', desc: 'Pembuatan konten edukatif dan informatif di media sosial' },
        { name: 'Photography Workshop', desc: 'Pelatihan fotografi dan videografi untuk dokumentasi' },
        { name: 'Website Management', desc: 'Pengelolaan dan pengembangan website himpunan' },
        { name: 'Design Competition', desc: 'Lomba desain grafis untuk mahasiswa' }
      ]
    },
    {
      id: 'kewirausahaan',
      name: 'Departemen Kewirausahaan',
      icon: <TrendingUp className="w-12 h-12" />,
      description: 'Mengembangkan jiwa entrepreneurship dan keterampilan bisnis mahasiswa',
      color: 'from-green-500 to-teal-500',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop',
      proker: [
        { name: 'Startup Bootcamp', desc: 'Pelatihan intensif membangun startup dari nol' },
        { name: 'Business Plan Competition', desc: 'Kompetisi rencana bisnis mahasiswa' },
        { name: 'UMKM Partnership', desc: 'Kerjasama dengan UMKM untuk pembelajaran praktis' },
        { name: 'Pitching Workshop', desc: 'Pelatihan presentasi ide bisnis kepada investor' }
      ]
    },
    {
      id: 'sosial',
      name: 'Departemen Sosial & Lingkungan',
      icon: <Heart className="w-12 h-12" />,
      description: 'Menjalankan program pengabdian masyarakat dan kepedulian lingkungan',
      color: 'from-rose-500 to-pink-600',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop',
      proker: [
        { name: 'Bakti Sosial', desc: 'Kegiatan pengabdian kepada masyarakat sekitar kampus' },
        { name: 'Kampung Digital', desc: 'Program literasi digital untuk masyarakat umum' },
        { name: 'Donor Darah', desc: 'Kegiatan donor darah rutin bersama PMI' },
        { name: 'Green Campus', desc: 'Program peduli lingkungan dan penghijauan kampus' }
      ]
    },
    {
      id: 'riset',
      name: 'Departemen Riset & Teknologi',
      icon: <Code className="w-12 h-12" />,
      description: 'Mendorong mahasiswa dalam penelitian dan pengembangan teknologi',
      color: 'from-indigo-500 to-purple-600',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      proker: [
        { name: 'Research Group', desc: 'Kelompok riset mahasiswa di berbagai bidang teknologi' },
        { name: 'Paper Writing Workshop', desc: 'Pelatihan penulisan paper ilmiah' },
        { name: 'Innovation Challenge', desc: 'Kompetisi inovasi teknologi untuk menyelesaikan masalah' },
        { name: 'Journal Club', desc: 'Diskusi dan review jurnal ilmiah terkini' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-white hover:text-gray-200 mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Kembali ke Beranda
          </Link>
          <h1 className="text-5xl font-bold mb-4">Departemen Kami</h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            Berbagai departemen dengan program kerja yang dirancang untuk mengembangkan mahasiswa secara holistik
          </p>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept) => (
              <div key={dept.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={dept.image} 
                    alt={dept.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className={`absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br ${dept.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                    {dept.icon}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{dept.name}</h3>
                  <p className="text-gray-600 mb-6">{dept.description}</p>
                  
                  <h4 className="font-semibold text-gray-900 mb-3">Program Kerja:</h4>
                  <ul className="space-y-3">
                    {dept.proker.map((program, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${dept.color} mt-2 mr-3 flex-shrink-0`}></span>
                        <div>
                          <span className="font-medium text-gray-900">{program.name}</span>
                          <p className="text-sm text-gray-600">{program.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href={`/departments/${dept.id}`}
                    className={`inline-block mt-6 bg-gradient-to-r ${dept.color} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105`}
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Tertarik Bergabung?</h2>
          <p className="text-xl mb-8 text-gray-100">
            Setiap departemen membuka kesempatan bagi mahasiswa untuk berkontribusi dan berkembang
          </p>
          <Link href="/#contact" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
            Hubungi Kami
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Himpunan Mahasiswa Teknik Informatika. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
