// app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Users, Calendar, Award, BookOpen, Mail, Instagram, Twitter, Facebook, ArrowRight, Target, Lightbulb, Heart } from 'lucide-react';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const programs = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Akademik",
      description: "Program peningkatan kompetensi akademik mahasiswa melalui workshop dan seminar"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Sosial",
      description: "Kegiatan pengabdian masyarakat dan pemberdayaan lingkungan sekitar"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Prestasi",
      description: "Pembinaan mahasiswa berprestasi dalam berbagai kompetisi nasional dan internasional"
    }
  ];

  const events = [
    {
      date: "15 Nov",
      title: "Workshop UI/UX Design",
      category: "Workshop",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=400&h=300&fit=crop"
    },
    {
      date: "22 Nov",
      title: "Seminar Nasional Teknologi",
      category: "Seminar",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop"
    },
    {
      date: "30 Nov",
      title: "Bakti Sosial Kampung Digital",
      category: "Sosial",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">HM</span>
              </div>
              <div>
                <h1 className={`font-bold text-xl ${scrolled ? 'text-gray-900' : 'text-white'}`}>HIMA TEKNIK</h1>
                <p className={`text-xs ${scrolled ? 'text-gray-600' : 'text-gray-200'}`}>Universitas Indonesia</p>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className={`font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>Beranda</Link>
              <Link href="#about" className={`font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>Tentang</Link>
              <Link href="/departments" className={`font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>Departemen</Link>
              <Link href="#events" className={`font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>Kegiatan</Link>
              <Link href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">Hubungi Kami</Link>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X className={scrolled ? 'text-gray-900' : 'text-white'} /> : <Menu className={scrolled ? 'text-gray-900' : 'text-white'} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">Beranda</Link>
              <Link href="#about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">Tentang</Link>
              <Link href="/departments" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">Departemen</Link>
              <Link href="#events" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">Kegiatan</Link>
              <Link href="#contact" className="block px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded text-center">Hubungi Kami</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="white" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
        
        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-yellow-400 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-400 rounded-full opacity-10 blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Bersama Membangun<br />
                <span className="text-yellow-300">Masa Depan Gemilang</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-100 mb-8">
                Himpunan Mahasiswa Teknik Informatika, wadah aspirasi dan pengembangan mahasiswa
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href="/departments" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 inline-flex items-center justify-center">
                  Jelajahi Program <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="#about" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105">
                  Tentang Kami
                </Link>
              </div>
            </div>
            
            <div className="relative hidden md:block">
              <div className="relative w-full h-96">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop" 
                  alt="Team collaboration"
                  className="rounded-3xl shadow-2xl object-cover w-full h-full transform rotate-3"
                />
                <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-gray-900 px-6 py-4 rounded-2xl shadow-xl">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-sm">Anggota Aktif</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white w-8 h-8" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=600&fit=crop" 
                alt="Students working together"
                className="rounded-3xl shadow-2xl object-cover w-full h-96"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white px-8 py-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Tahun Berdiri</div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Tentang Kami</h2>
              <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                Himpunan Mahasiswa Teknik Informatika adalah organisasi kemahasiswaan yang bergerak dalam bidang pengembangan soft skill dan hard skill mahasiswa.
              </p>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Kami berkomitmen untuk menciptakan lingkungan yang kondusif bagi mahasiswa untuk berkembang, berinovasi, dan berkontribusi kepada masyarakat.
              </p>
              
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600 text-sm">Anggota Aktif</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
                  <div className="text-gray-600 text-sm">Program/Tahun</div>
                </div>
                <div className="text-center p-4 bg-indigo-50 rounded-xl">
                  <div className="text-4xl font-bold text-indigo-600 mb-2">15+</div>
                  <div className="text-gray-600 text-sm">Prestasi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Visi & Misi</h2>
            <p className="text-xl text-gray-600">Panduan kami dalam berkarya dan berkontribusi</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visi</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Menjadi wadah pengembangan mahasiswa yang unggul, inovatif, dan berdampak positif bagi masyarakat melalui penguasaan teknologi informasi dan kepemimpinan yang berkualitas.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-white mb-6">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Misi</h3>
              <ul className="space-y-3 text-gray-600 text-lg">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Mengembangkan kompetensi akademik dan non-akademik mahasiswa</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Memfasilitasi inovasi dan kreativitas mahasiswa</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Membangun kerjasama dengan berbagai pihak</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Program Kerja Kami</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Berbagai program untuk mengembangkan potensi mahasiswa di berbagai bidang
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 group border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  {program.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{program.description}</p>
                <Link href="/departments" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                  Lihat Detail <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Kegiatan Mendatang</h2>
            <p className="text-xl text-gray-600">Ikuti berbagai kegiatan menarik yang kami selenggarakan</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white rounded-xl px-4 py-2 text-center shadow-lg">
                    <div className="text-2xl font-bold">{event.date.split(' ')[0]}</div>
                    <div className="text-xs">{event.date.split(' ')[1]}</div>
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-block bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full mb-3">{event.category}</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                    Detail <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="white" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Heart className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
          <h2 className="text-4xl font-bold mb-6">Bergabunglah Bersama Kami</h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Jadilah bagian dari keluarga besar HIMA dan kembangkan potensi terbaikmu dalam berbagai bidang
          </p>
          <Link href="#contact" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
            Hubungi Kami Sekarang
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Mari Bergabung Bersama Kami</h2>
              <p className="text-xl mb-8 text-gray-600">
                Jadilah bagian dari keluarga besar HIMA dan kembangkan potensi terbaikmu
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-700">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <span>hima.teknik@university.ac.id</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Calendar className="w-6 h-6 text-blue-600" />
                  <span>Senin - Jumat, 09.00 - 17.00 WIB</span>
                </div>
              </div>
              <div className="flex space-x-4 mt-8">
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Kirim Pesan</h3>
              <div className="space-y-4">
                <input type="text" placeholder="Nama Lengkap" className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <textarea rows={4} placeholder="Pesan Anda" className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105">
                  Kirim Pesan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">HM</span>
                </div>
                <div>
                  <h3 className="font-bold text-white">HIMA TEKNIK</h3>
                </div>
              </div>
              <p className="text-sm text-gray-400">Wadah aspirasi dan pengembangan mahasiswa Teknik Informatika</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Navigasi</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="hover:text-white transition-colors">Beranda</Link></li>
                <li><Link href="#about" className="hover:text-white transition-colors">Tentang</Link></li>
                <li><Link href="/departments" className="hover:text-white transition-colors">Departemen</Link></li>
                <li><Link href="#events" className="hover:text-white transition-colors">Kegiatan</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Departemen</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/departments/akademik" className="hover:text-white transition-colors">Akademik</Link></li>
                <li><Link href="/departments/psdm" className="hover:text-white transition-colors">PSDM</Link></li>
                <li><Link href="/departments/medinfo" className="hover:text-white transition-colors">Media & Informasi</Link></li>
                <li><Link href="/departments/kewirausahaan" className="hover:text-white transition-colors">Kewirausahaan</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Kontak</h4>
              <ul className="space-y-2 text-sm">
                <li>hima.teknik@university.ac.id</li>
                <li>Gedung Fakultas Teknik Lt.3</li>
                <li>Universitas Indonesia</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 Himpunan Mahasiswa Teknik Informatika. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}