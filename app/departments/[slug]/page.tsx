// app/departments/[slug]/page.tsx
'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Users, BookOpen, Megaphone, TrendingUp, Heart, Code, Calendar, Target, CheckCircle } from 'lucide-react';

export default function DepartmentDetailPage() {
  const pathname = usePathname();
  const slug = pathname?.split('/').pop();

  const departmentData: any = {
    'akademik': {
      name: 'Departemen Akademik',
      icon: <BookOpen className="w-16 h-16" />,
      color: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=600&fit=crop',
      description: 'Departemen Akademik bertanggung jawab untuk meningkatkan kualitas akademik mahasiswa melalui berbagai program pembelajaran, workshop, dan kompetisi yang relevan dengan bidang Teknik Informatika.',
      vision: 'Menjadi pusat pengembangan kompetensi akademik mahasiswa yang unggul dan kompetitif di tingkat nasional maupun internasional.',
      mission: [
        'Menyelenggarakan program pelatihan dan workshop berkualitas',
        'Memfasilitasi mahasiswa dalam kompetisi akademik',
        'Membangun budaya belajar yang kolaboratif',
        'Menyediakan sumber belajar yang mudah diakses'
      ],
      proker: [
        {
          name: 'Workshop Programming',
          desc: 'Workshop intensif pemrograman dengan berbagai teknologi terkini seperti Web Development, Mobile Development, dan Data Science',
          timeline: 'Setiap bulan',
          target: 'Seluruh mahasiswa Teknik Informatika'
        },
        {
          name: 'Seminar Teknologi',
          desc: 'Menghadirkan praktisi dan akademisi untuk berbagi pengalaman dan pengetahuan tentang perkembangan teknologi terkini',
          timeline: 'Setiap semester',
          target: 'Mahasiswa dan umum'
        },
        {
          name: 'Tutorial Peer to Peer',
          desc: 'Program bimbingan belajar oleh mahasiswa senior untuk membantu mahasiswa yang kesulitan dalam mata kuliah tertentu',
          timeline: 'Setiap minggu',
          target: 'Mahasiswa yang membutuhkan'
        },
        {
          name: 'Kompetisi Coding Internal',
          desc: 'Lomba pemrograman internal untuk mengasah kemampuan problem solving dan algoritma mahasiswa',
          timeline: 'Setiap semester',
          target: 'Seluruh mahasiswa'
        }
      ],
      achievements: [
        'Juara 1 Hackathon Nasional 2024',
        '50+ Workshop terselenggara',
        '300+ Mahasiswa terlatih',
        'Kerjasama dengan 10+ Perusahaan Tech'
      ]
    },
    'psdm': {
      name: 'Departemen PSDM',
      icon: <Users className="w-16 h-16" />,
      color: 'from-purple-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
      description: 'Departemen Pengembangan Sumber Daya Manusia fokus pada pembentukan karakter, kepemimpinan, dan soft skills mahasiswa untuk menjadi individu yang berkualitas.',
      vision: 'Membentuk mahasiswa yang memiliki karakter kuat, jiwa kepemimpinan, dan soft skills yang mumpuni.',
      mission: [
        'Mengembangkan kepribadian dan karakter mahasiswa',
        'Melatih kemampuan kepemimpinan dan manajemen',
        'Memfasilitasi pengembangan soft skills',
        'Membangun jaringan dan networking mahasiswa'
      ],
      proker: [
        {
          name: 'Leadership Training',
          desc: 'Pelatihan kepemimpinan komprehensif untuk mengembangkan jiwa pemimpin dan kemampuan manajemen organisasi',
          timeline: 'Awal tahun kepengurusan',
          target: 'Pengurus HIMA dan mahasiswa aktif'
        },
        {
          name: 'Team Building',
          desc: 'Kegiatan outdoor dan indoor untuk membangun kerjasama tim, komunikasi, dan kekompakan antar anggota',
          timeline: 'Setiap semester',
          target: 'Seluruh anggota HIMA'
        },
        {
          name: 'Mentoring Program',
          desc: 'Program pendampingan mahasiswa baru oleh senior untuk membantu adaptasi dan pengembangan diri',
          timeline: 'Setiap tahun ajaran baru',
          target: 'Mahasiswa baru'
        },
        {
          name: 'Soft Skills Workshop',
          desc: 'Pelatihan public speaking, komunikasi efektif, networking, dan time management',
          timeline: 'Setiap 2 bulan',
          target: 'Seluruh mahasiswa'
        }
      ],
      achievements: [
        '200+ Mahasiswa terlatih dalam leadership',
        '15 Angkatan mentoring tersukseskan',
        'Kerjasama dengan 5+ Komunitas',
        '95% Kepuasan peserta program'
      ]
    },
    'medinfo': {
      name: 'Departemen Media & Informasi',
      icon: <Megaphone className="w-16 h-16" />,
      color: 'from-orange-500 to-red-500',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=600&fit=crop',
      description: 'Departemen Media & Informasi bertugas mengelola seluruh aspek komunikasi, dokumentasi, dan publikasi kegiatan himpunan melalui berbagai platform media.',
      vision: 'Menjadi pusat informasi dan komunikasi yang kreatif, inovatif, dan terpercaya bagi seluruh mahasiswa.',
      mission: [
        'Menyebarkan informasi secara cepat dan akurat',
        'Mendokumentasikan seluruh kegiatan himpunan',
        'Mengembangkan konten kreatif dan edukatif',
        'Mengelola brand image himpunan'
      ],
      proker: [
        {
          name: 'Konten Kreatif Digital',
          desc: 'Pembuatan konten edukatif, informatif, dan entertaining untuk media sosial himpunan (Instagram, Twitter, TikTok)',
          timeline: 'Setiap hari',
          target: 'Seluruh mahasiswa dan umum'
        },
        {
          name: 'Photography Workshop',
          desc: 'Pelatihan fotografi dan videografi untuk meningkatkan kualitas dokumentasi kegiatan',
          timeline: 'Setiap semester',
          target: 'Tim dokumentasi dan mahasiswa'
        },
        {
          name: 'Website Management',
          desc: 'Pengelolaan, pengembangan, dan maintenance website resmi himpunan',
          timeline: 'Berkelanjutan',
          target: 'Internal departemen'
        },
        {
          name: 'Design Competition',
          desc: 'Lomba desain grafis, poster, dan konten digital untuk mahasiswa',
          timeline: 'Setiap tahun',
          target: 'Seluruh mahasiswa'
        }
      ],
      achievements: [
        '10K+ Followers Media Sosial',
        '500+ Konten dipublikasikan',
        'Juara Desain Poster Tingkat Universitas',
        '1M+ Total Reach per bulan'
      ]
    },
    'kewirausahaan': {
      name: 'Departemen Kewirausahaan',
      icon: <TrendingUp className="w-16 h-16" />,
      color: 'from-green-500 to-teal-500',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=600&fit=crop',
      description: 'Departemen Kewirausahaan mengembangkan jiwa entrepreneurship mahasiswa melalui pelatihan, kompetisi, dan kolaborasi dengan pelaku bisnis.',
      vision: 'Menumbuhkan generasi entrepreneur muda yang inovatif, kreatif, dan berdampak positif bagi masyarakat.',
      mission: [
        'Mengembangkan mindset entrepreneurship mahasiswa',
        'Memfasilitasi pembelajaran bisnis praktis',
        'Membangun networking dengan pelaku usaha',
        'Mendorong inovasi dan kreativitas bisnis'
      ],
      proker: [
        {
          name: 'Startup Bootcamp',
          desc: 'Program intensif 3 bulan untuk belajar membangun startup dari ide hingga eksekusi bersama mentor berpengalaman',
          timeline: 'Setiap semester',
          target: 'Mahasiswa yang ingin memulai bisnis'
        },
        {
          name: 'Business Plan Competition',
          desc: 'Kompetisi rencana bisnis dengan hadiah modal usaha dan mentoring',
          timeline: 'Setiap tahun',
          target: 'Tim mahasiswa'
        },
        {
          name: 'UMKM Partnership',
          desc: 'Program kerjasama dengan UMKM untuk memberikan solusi teknologi dan pembelajaran praktis',
          timeline: 'Berkelanjutan',
          target: 'Mahasiswa dan UMKM lokal'
        },
        {
          name: 'Pitching Workshop',
          desc: 'Pelatihan cara mempresentasikan ide bisnis kepada investor dengan efektif',
          timeline: 'Setiap 3 bulan',
          target: 'Entrepreneur mahasiswa'
        }
      ],
      achievements: [
        '20+ Startup mahasiswa terbentuk',
        '5 Startup mendapat pendanaan',
        'Total Rp 500 juta modal usaha tersalurkan',
        'Kerjasama dengan 15+ UMKM'
      ]
    },
    'sosial': {
      name: 'Departemen Sosial & Lingkungan',
      icon: <Heart className="w-16 h-16" />,
      color: 'from-rose-500 to-pink-600',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&h=600&fit=crop',
      description: 'Departemen Sosial & Lingkungan menjalankan program pengabdian masyarakat dan kepedulian lingkungan untuk memberikan dampak positif.',
      vision: 'Menjadi agen perubahan yang memberikan kontribusi nyata bagi masyarakat dan lingkungan.',
      mission: [
        'Menjalankan program pengabdian masyarakat',
        'Meningkatkan kepedulian terhadap lingkungan',
        'Membangun relasi dengan masyarakat sekitar',
        'Memberdayakan masyarakat melalui teknologi'
      ],
      proker: [
        {
          name: 'Bakti Sosial',
          desc: 'Kegiatan pengabdian kepada masyarakat seperti mengajar, renovasi fasilitas umum, dan pemberian bantuan',
          timeline: 'Setiap 3 bulan',
          target: 'Masyarakat sekitar kampus'
        },
        {
          name: 'Kampung Digital',
          desc: 'Program literasi digital untuk masyarakat umum, UMKM, dan sekolah',
          timeline: 'Setiap semester',
          target: 'Masyarakat dan UMKM'
        },
        {
          name: 'Donor Darah',
          desc: 'Kegiatan donor darah rutin bekerjasama dengan PMI',
          timeline: 'Setiap 4 bulan',
          target: 'Mahasiswa dan dosen'
        },
        {
          name: 'Green Campus',
          desc: 'Program peduli lingkungan dengan penghijauan, bank sampah, dan kampanye reduce-reuse-recycle',
          timeline: 'Berkelanjutan',
          target: 'Civitas akademika'
        }
      ],
      achievements: [
        '10+ Desa dampingan',
        '500+ Penerima manfaat',
        '100+ Kantong darah terkumpul',
        '1000+ Pohon ditanam'
      ]
    },
    'riset': {
      name: 'Departemen Riset & Teknologi',
      icon: <Code className="w-16 h-16" />,
      color: 'from-indigo-500 to-purple-600',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=600&fit=crop',
      description: 'Departemen Riset & Teknologi mendorong mahasiswa untuk melakukan penelitian dan pengembangan teknologi inovatif.',
      vision: 'Menjadi pusat riset mahasiswa yang menghasilkan inovasi teknologi berdampak.',
      mission: [
        'Memfasilitasi kegiatan riset mahasiswa',
        'Mendorong publikasi ilmiah mahasiswa',
        'Mengembangkan teknologi inovatif',
        'Membangun kolaborasi riset'
      ],
      proker: [
        {
          name: 'Research Group',
          desc: 'Kelompok riset mahasiswa di bidang AI, IoT, Cybersecurity, dan Software Engineering',
          timeline: 'Berkelanjutan',
          target: 'Mahasiswa yang tertarik riset'
        },
        {
          name: 'Paper Writing Workshop',
          desc: 'Pelatihan penulisan paper ilmiah untuk publikasi di jurnal dan konferensi',
          timeline: 'Setiap semester',
          target: 'Mahasiswa peneliti'
        },
        {
          name: 'Innovation Challenge',
          desc: 'Kompetisi pengembangan teknologi untuk menyelesaikan masalah nyata di masyarakat',
          timeline: 'Setiap tahun',
          target: 'Tim mahasiswa'
        },
        {
          name: 'Journal Club',
          desc: 'Pertemuan rutin untuk mendiskusikan dan mereview jurnal ilmiah terbaru',
          timeline: 'Setiap 2 minggu',
          target: 'Research group'
        }
      ],
      achievements: [
        '15+ Paper dipublikasikan',
        '5 Inovasi teknologi dihasilkan',
        'Juara Kompetisi Inovasi Nasional',
        'Kerjasama riset dengan 3 universitas'
      ]
    }
  };

  const department = slug ? departmentData[slug] : null;

  if (!department) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Departemen tidak ditemukan</h1>
          <Link href="/departments" className="text-blue-600 hover:text-blue-700">
            Kembali ke daftar departemen
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img 
          src={department.image} 
          alt={department.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <Link href="/departments" className="inline-flex items-center text-white hover:text-gray-200 mb-6 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Kembali ke Departemen
            </Link>
            
            <div className="flex items-center space-x-6 mb-6">
              <div className={`w-20 h-20 bg-gradient-to-br ${department.color} rounded-2xl flex items-center justify-center text-white shadow-2xl`}>
                {department.icon}
              </div>
              <div>
                <h1 className="text-5xl font-bold text-white mb-2">{department.name}</h1>
                <p className="text-xl text-gray-200">{department.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className={`w-14 h-14 bg-gradient-to-br ${department.color} rounded-xl flex items-center justify-center text-white mb-6`}>
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visi</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{department.vision}</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className={`w-14 h-14 bg-gradient-to-br ${department.color} rounded-xl flex items-center justify-center text-white mb-6`}>
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Misi</h3>
              <ul className="space-y-3">
                {department.mission.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start text-gray-600">
                    <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${department.color} mt-2 mr-3 flex-shrink-0`}></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Program Kerja */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Program Kerja</h2>
          
          <div className="grid gap-8">
            {department.proker.map((program: any, idx: number) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{program.name}</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {program.timeline}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">{program.desc}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-2" />
                    <span>Target: {program.target}</span>
                  </div>
                  <button className={`bg-gradient-to-r ${department.color} text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all transform hover:scale-105`}>
                    Daftar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Pencapaian Kami</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {department.achievements.map((achievement: string, idx: number) => (
              <div key={idx} className="text-black bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-opacity-20 transition-all">
                <div className={`w-12 h-12 bg-gradient-to-br ${department.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <CheckCircle className="w-6 h-6" />
                </div>
                <p className="text-lg font-semibold">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Tertarik Bergabung dengan Departemen Ini?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Hubungi kami untuk informasi lebih lanjut atau bergabung dengan program-program menarik kami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className={`bg-gradient-to-r ${department.color} text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105`}>
              Hubungi Kami
            </Link>
            <Link href="/departments" className="bg-gray-100 text-gray-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-all">
              Lihat Departemen Lain
            </Link>
          </div>
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