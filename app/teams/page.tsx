// app/team/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, Linkedin, Instagram, ChevronDown, ChevronUp, Users, Award, Target, Heart, BookOpen, Megaphone, TrendingUp, Code } from 'lucide-react';

export default function TeamPage() {
  const [expandedDept, setExpandedDept] = useState<string | null>(null);

  const toggleDepartment = (deptId: string) => {
    setExpandedDept(expandedDept === deptId ? null : deptId);
  };

  const coreTeam = [
    {
      name: 'Ahmad Fauzi',
      position: 'Ketua Himpunan',
      period: '2024/2025',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      quote: 'Memimpin dengan hati, berinovasi dengan semangat',
      email: 'fauzi@hima.ac.id',
      linkedin: '#',
      instagram: '#'
    },
    {
      name: 'Siti Nurhaliza',
      position: 'Wakil Ketua',
      period: '2024/2025',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      quote: 'Bersama kita lebih kuat',
      email: 'siti@hima.ac.id',
      linkedin: '#',
      instagram: '#'
    },
    {
      name: 'Budi Santoso',
      position: 'Sekretaris Umum',
      period: '2024/2025',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      quote: 'Kerapian adalah kunci administrasi yang baik',
      email: 'budi@hima.ac.id',
      linkedin: '#',
      instagram: '#'
    },
    {
      name: 'Dewi Lestari',
      position: 'Bendahara Umum',
      period: '2024/2025',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      quote: 'Transparansi adalah kepercayaan',
      email: 'dewi@hima.ac.id',
      linkedin: '#',
      instagram: '#'
    }
  ];

  const departments = [
    {
      id: 'akademik',
      name: 'Departemen Akademik',
      icon: <BookOpen className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      members: [
        {
          name: 'Rahmat Hidayat',
          position: 'Kepala Departemen',
          image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
          email: 'rahmat@hima.ac.id',
          instagram: '#'
        },
        {
          name: 'Farah Diba',
          position: 'Wakil Kepala Departemen',
          image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop',
          email: 'farah@hima.ac.id',
          instagram: '#'
        },
        {
          name: 'Dimas Prasetya',
          position: 'Koordinator Workshop',
          image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=400&fit=crop',
          email: 'dimas@hima.ac.id',
          instagram: '#'
        },
        {
          name: 'Rina Marlina',
          position: 'Koordinator Seminar',
          image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
          email: 'rina@hima.ac.id',
          instagram: '#'
        },
        {
          name: 'Agus Firmansyah',
          position: 'Staff Akademik',
          image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop',
          email: 'agus@hima.ac.id',
          instagram: '#'
        },
        {
          name: 'Maya Sari',
          position: 'Staff Akademik',
          image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop',
          email: 'maya@hima.ac.id',
          instagram: '#'
        }
      ]
    },
    {
      id: 'psdm',
      name: 'Departemen PSDM',
      icon: <Users className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      members: [
        {
          name: 'Putri Amelia',
          position: 'Kepala Departemen',
          image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
          email: 'putri@hima.ac.id',
          instagram: '#'
        },
        {
          name: 'Rudi Hartono',
          position: 'Wakil Kepala Departemen',
          image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop',
          email: 'rudi@hima.ac.id',
          instagram: '#'
        },
        {
          name: 'Sinta Dewi',
          position: 'Koordinator Training',
          image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop',
          email: 'sinta@hima.ac.id',
          instagram: '#'
        },
        {
          name: 'Yoga Pratama',
          position: 'Koordinator Mentoring',
          image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop',
          email: 'yoga@hima.ac.id',
          instagram: '#'
        },
        {
          name: 'Lina Wijaya',
          position: 'Staff PSDM',
          image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop',
          email: 'lina@hima.ac.id',
          instagram: '#'
        }
      ]
    },
    {
      id: 'medinfo',
      name: 'Departemen Media & Informasi',
      icon: <Megaphone className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      members: [
        {
          name: 'Arif Setiawan',
          position: 'Kepala Departemen',
          image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop',
          email: 'arif@hima.ac.id',
          instagram: '#'
        },
        {
          name: 'Dina Mariana',
          position: 'Wakil Kepala Departemen',
          image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop',
          email: 'dina@hima.ac.id',
          instagram: '#'
        },
        {
          name: 'Gilang Ramadhan',
          position: 'Koordinator Konten',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
          email: 'gilang@hima.ac.id',
          instagram: '#'
        },
        {
          name: 'Nadia Putri',
          position: 'Koordinator Design',
          image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop',
          email: 'nadia@hima.ac.id',
          instagram: '#'
        },
        {
          name: 'Hendra Kusuma',
          position: 'Videographer',
          image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
          email: 'hendra@hima.ac.id',
          instagram: '#'
        },
        {
          name: 'Tiara Salsabila',
          position: 'Photographer',
          image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop',
          email: 'tiara@hima.ac.id',
          instagram: '#'
        },
        {
          name: 'Rizky Pratama',
          position: 'Web Developer',
          image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=400&h=400&fit=crop',
          email: 'rizky@hima.ac.id',
          instagram: '#'
        }
      ]
    },
    {
      id: 'kewirausahaan',
      name: 'Departemen Kewirausahaan',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-green-500 to-teal-500',
      bgColor: 'bg-green-50',
      members: [
        {
          name: 'Nina Kusuma',
          position: 'Kepala Departemen',
          image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop',
          email: 'nina@hima.ac.id',
          instagram: '#'
        },
        {
          name: 'Faisal Rahman',
          position: 'Wakil Kepala Departemen',
          image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
          email: 'faisal@hima.ac.id',
          instagram: '#'
        },
        {
          name: 'Anisa Rahma',
          position: 'Koordinator Bootcamp',
          image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
          email: 'anisa@hima.ac.id',
          instagram: '#'
        },
        {
          name: 'Bayu Aji',
          position: 'Koordinator Partnership',
          image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=400&fit=crop',
          email: 'bayu@hima.ac.id',
          instagram: '#'
        },
        {
          name: 'Citra Lestari',
          position: 'Staff Kewirausahaan',
          image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
          email: 'citra@hima.ac.id',
          instagram: '#'
        }
      ]
    },
    {
      id: 'sosial',
      name: 'Departemen Sosial & Lingkungan',
      icon: <Heart className="w-8 h-8" />,
      color: 'from-rose-500 to-pink-600',
      bgColor: 'bg-rose-50',
      members: [
        {
          name: 'Eko Prasetyo',
          position: 'Kepala Departemen',
          image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
          email: 'eko@hima.ac.id',
          instagram: '#'
        },
        {
          name: 'Ratna Sari',
          position: 'Wakil Kepala Departemen',
          image: 'https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=400&h=400&fit=crop',
          email: 'ratna@hima.ac.id',
          instagram: '#'
        },
        {
          name: 'Irfan Hakim',
          position: 'Koordinator Baksos',
          image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
          email: 'irfan@hima.ac.id',
          instagram: '#'
        },
        {
          name: 'Zahra Amini',
          position: 'Koordinator Lingkungan',
          image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
          email: 'zahra@hima.ac.id',
          instagram: '#'
        },
        {
          name: 'Bambang Sutrisno',
          position: 'Staff Sosial',
          image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop',
          email: 'bambang@hima.ac.id',
          instagram: '#'
        }
      ]
    },
    {
      id: 'riset',
      name: 'Departemen Riset & Teknologi',
      icon: <Code className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'bg-indigo-50',
      members: [
        {
          name: 'Lisa Anggraini',
          position: 'Kepala Departemen',
          image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
          email: 'lisa@hima.ac.id',
          instagram: '#'
        },
        {
          name: 'Kevin Wijaya',
          position: 'Wakil Kepala Departemen',
          image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop',
          email: 'kevin@hima.ac.id',
          instagram: '#'
        },
        {
          name: 'Sarah Mutia',
          position: 'Koordinator Research Group',
          image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
          email: 'sarah@hima.ac.id',
          instagram: '#'
        },
        {
          name: 'Doni Saputra',
          position: 'Koordinator Inovasi',
          image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop',
          email: 'doni@hima.ac.id',
          instagram: '#'
        },
        {
          name: 'Vera Anastasia',
          position: 'Staff Riset',
          image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop',
          email: 'vera@hima.ac.id',
          instagram: '#'
        }
      ]
    }
  ];

  const advisors = [
    {
      name: 'Prof. Dr. Ir. Bambang Sulistyo, M.Sc',
      position: 'Dosen Pembimbing',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
      expertise: 'Software Engineering & Management',
      email: 'bambang@university.ac.id'
    },
    {
      name: 'Dr. Eng. Sari Wulandari, S.T., M.T',
      position: 'Dosen Pendamping',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      expertise: 'Data Science & AI',
      email: 'sari@university.ac.id'
    }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Profesional',
      desc: 'Bekerja dengan standar profesional tinggi'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Integritas',
      desc: 'Jujur dan bertanggung jawab dalam setiap tindakan'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Kolaboratif',
      desc: 'Bekerja sama untuk mencapai tujuan bersama'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Inovatif',
      desc: 'Selalu mencari cara baru untuk berkembang'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="white" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Link href="/" className="inline-flex items-center text-white hover:text-gray-200 mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Kembali ke Beranda
          </Link>
          
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Tim pengurus periode 2024/2025 yang berdedikasi untuk mengembangkan himpunan dan mahasiswa
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nilai-Nilai Kami</h2>
            <p className="text-xl text-gray-600">Prinsip yang menjadi fondasi kerja tim kami</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pengurus Inti</h2>
            <p className="text-xl text-gray-600">Kepemimpinan periode 2024/2025</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreTeam.map((member, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-blue-300 font-medium mb-1">{member.position}</p>
                    <p className="text-gray-200 text-sm italic mb-4">"{member.quote}"</p>
                    
                    <div className="flex space-x-3">
                      <a href={`mailto:${member.email}`} className="w-8 h-8 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all">
                        <Mail className="w-4 h-4 text-white" />
                      </a>
                      <a href={member.linkedin} className="w-8 h-8 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all">
                        <Linkedin className="w-4 h-4 text-white" />
                      </a>
                      <a href={member.instagram} className="w-8 h-8 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all">
                        <Instagram className="w-4 h-4 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Struktur Departemen</h2>
            <p className="text-xl text-gray-600">Tim yang solid di setiap departemen</p>
          </div>

          <div className="space-y-6">
            {departments.map((dept) => (
              <div key={dept.id} className={`${dept.bgColor} rounded-2xl overflow-hidden border-2 border-gray-100 shadow-lg`}>
                {/* Department Header */}
                <button
                  onClick={() => toggleDepartment(dept.id)}
                  className="w-full px-8 py-6 flex items-center justify-between hover:bg-white/50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${dept.color} rounded-xl flex items-center justify-center text-white`}>
                      {dept.icon}
                    </div>
                    <div className="text-left">
                      <h3 className="text-2xl font-bold text-gray-900">{dept.name}</h3>
                      <p className="text-gray-600">{dept.members.length} Anggota</p>
                    </div>
                  </div>
                  {expandedDept === dept.id ? (
                    <ChevronUp className="w-6 h-6 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-600" />
                  )}
                </button>

                {/* Department Members */}
                {expandedDept === dept.id && (
                  <div className="px-8 pb-8">
                    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {dept.members.map((member, idx) => (
                        <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group">
                          <div className="relative h-56 overflow-hidden">
                            <img 
                              src={member.image} 
                              alt={member.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                            
                            {idx === 0 && (
                              <div className={`absolute top-3 right-3 bg-gradient-to-r ${dept.color} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                                Kepala
                              </div>
                            )}
                            {idx === 1 && (
                              <div className={`absolute top-3 right-3 bg-gradient-to-r ${dept.color} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                                Wakil
                              </div>
                            )}
                            
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                              <h4 className="text-lg font-bold text-white mb-1">{member.name}</h4>
                              <p className="text-gray-200 text-sm mb-3">{member.position}</p>
                              
                              <div className="flex space-x-2">
                                <a href={`mailto:${member.email}`} className="w-7 h-7 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all">
                                  <Mail className="w-3.5 h-3.5 text-white" />
                                </a>
                                <a href={member.instagram} className="w-7 h-7 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all">
                                  <Instagram className="w-3.5 h-3.5 text-white" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Dosen Pembimbing</h2>
            <p className="text-xl text-gray-600">Mentor dan pendamping kami</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {advisors.map((advisor, idx) => (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={advisor.image} 
                      alt={advisor.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{advisor.name}</h3>
                    <p className="text-purple-600 font-medium mb-2">{advisor.position}</p>
                    <p className="text-gray-600 mb-4">{advisor.expertise}</p>
                    
                    <a href={`mailto:${advisor.email}`} className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                      <Mail className="w-4 h-4 mr-2" />
                      {advisor.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Terima Kasih Kepada Para Pembimbing</h3>
              <p className="text-gray-600 text-lg">
                Dedikasi dan bimbingan dari para dosen sangat berarti bagi perkembangan himpunan dan mahasiswa
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Chart CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8">
            <Users className="w-16 h-16 mx-auto mb-6 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Struktur Organisasi Lengkap</h2>
            <p className="text-lg text-gray-600 mb-6">
              Lihat bagan struktur organisasi lengkap HIMA Teknik periode 2024/2025
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105">
              Download Struktur Organisasi
            </button>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
          <h2 className="text-4xl font-bold mb-6">Ingin Bergabung dengan Tim Kami?</h2>
          <p className="text-xl mb-8 text-gray-100">
            Kami selalu membuka kesempatan bagi mahasiswa yang ingin berkontribusi dan berkembang bersama
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
              Hubungi Kami Sekarang
            </Link>
            <Link href="/departments" className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all">
              Lihat Program Departemen
            </Link>
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
                <li><Link href="/team" className="hover:text-white transition-colors">Tim Kami</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Departemen</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/departments/akademik" className="hover:text-white transition-colors">Akademik</Link></li>
                <li><Link href="/departments/psdm" className="hover:text-white transition-colors">PSDM</Link></li>
                <li><Link href="/departments/medinfo" className="hover:text-white transition-colors">Media & Informasi</Link></li>
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