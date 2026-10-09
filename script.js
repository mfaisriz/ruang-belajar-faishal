/*
  RUANG BELAJAR FAISHAL — pengaturan konten
  Ganti judul, deskripsi, tautan video, dan berkas sesuai milik Anda.
  Untuk berkas lokal, letakkan PDF/PPT di folder materi lalu gunakan path seperti "materi/modul-kelas-4.pdf".
*/
const materials = [
  {title:'Mengenal Teks dan Cerita',subject:'Bahasa Indonesia',grade:3,description:'Latihan memahami gagasan utama, tokoh, dan urutan peristiwa dalam cerita.',icon:'📖',color:'green',type:'Bahan belajar',url:'#unduhan'},
  {title:'Asyik Berhitung',subject:'Matematika',grade:2,description:'Penguatan konsep penjumlahan, pengurangan, dan strategi berhitung.',icon:'➗',color:'yellow',type:'Latihan konsep',url:'#kuis'},
  {title:'Ekosistem di Sekitar Kita',subject:'IPAS',grade:5,description:'Mengenal hubungan makhluk hidup dengan lingkungan di sekitarnya.',icon:'🌱',color:'green',type:'Materi tematik',url:'#unduhan'},
  {title:'Hidup Rukun dan Bergotong Royong',subject:'Pendidikan Pancasila',grade:4,description:'Contoh sikap saling menghargai dan bekerja sama dalam kehidupan sehari-hari.',icon:'🤝',color:'blue',type:'Bahan diskusi',url:'#unduhan'},
  {title:'Aku Anak Berakhlak Baik',subject:'PAI',grade:4,description:'Kegiatan refleksi tentang sikap jujur, santun, dan tanggung jawab.',icon:'✨',color:'yellow',type:'Bahan refleksi',url:'#unduhan'},
  {title:'My School and My Friends',subject:'Bahasa Inggris',grade:5,description:'Kosakata sederhana tentang sekolah, teman, dan kegiatan harian.',icon:'🔤',color:'pink',type:'Vocabulary',url:'#unduhan'},
  {title:'Pola dan Kreasi Bentuk',subject:'Seni Budaya',grade:1,description:'Eksplorasi warna, bentuk, dan pola melalui aktivitas kreatif.',icon:'🎨',color:'pink',type:'Aktivitas kreatif',url:'#unduhan'},
  {title:'Menulis Paragraf Sederhana',subject:'Bahasa Indonesia',grade:4,description:'Menyusun kalimat menjadi paragraf yang runtut dan mudah dipahami.',icon:'✍️',color:'blue',type:'Kegiatan menulis',url:'#unduhan'},
  {title:'Pecahan dalam Kehidupan',subject:'Matematika',grade:4,description:'Memahami pecahan melalui contoh benda dan kegiatan sehari-hari.',icon:'🍕',color:'yellow',type:'Konsep dan latihan',url:'#kuis'}
];
const downloads = [
  {title:'Contoh Lembar Refleksi Belajar',description:'Templat awal yang dapat disesuaikan untuk kegiatan refleksi siswa.',format:'PDF',icon:'PDF',url:'',color:'pdf'},
  {title:'Contoh Presentasi Pembelajaran',description:'Tempat untuk membagikan presentasi materi yang Bapak susun.',format:'PPT/PPTX',icon:'PPT',url:'',color:'ppt'},
  {title:'Templat Perencanaan Pembelajaran',description:'Contoh berkas kerja untuk menyusun kegiatan dan asesmen.',format:'DOC/DOCX',icon:'DOC',url:'',color:'doc'}
];
const articles = [
  {category:'Strategi Mengajar',title:'Setiap Anak Belajar dengan Cara yang Berbeda',description:'Mengapa variasi aktivitas dan pilihan cara menunjukkan pemahaman dapat membantu pembelajaran lebih inklusif.',icon:'🧩',color:'mint',body:'Mulailah dari pengamatan sederhana: apa yang sudah dipahami siswa, dukungan apa yang mereka perlukan, dan cara apa yang membuat mereka terlibat. Guru dapat menawarkan pilihan seperti menulis, menggambar, berdiskusi, atau mempresentasikan ide. Tujuannya bukan memberi label pada anak, melainkan membuka lebih banyak jalan untuk mencapai tujuan belajar yang sama.'},
  {category:'Teknologi Pendidikan',title:'Menggunakan AI dengan Bijak di Sekolah',description:'AI dapat membantu merancang ide, tetapi hasilnya tetap perlu diperiksa oleh pendidik.',icon:'💡',color:'gold',body:'Gunakan AI sebagai rekan berpikir, bukan pengganti pertimbangan guru. Periksa kebenaran informasi, sesuaikan bahasa dengan usia siswa, dan hindari memasukkan data pribadi siswa. Guru tetap bertanggung jawab atas materi, ketepatan isi, serta keputusan pembelajaran.'},
  {category:'Belajar Bermakna',title:'Pertanyaan yang Menumbuhkan Rasa Ingin Tahu',description:'Pertanyaan terbuka memberi ruang bagi siswa untuk menjelaskan alasan dan menghubungkan ide.',icon:'🌿',color:'blue',body:'Selain bertanya “apa jawabannya?”, cobalah bertanya “bagaimana kamu mengetahuinya?”, “adakah cara lain?”, atau “apa yang akan terjadi jika…?”. Beri waktu berpikir, dengarkan alasan siswa, dan bantu mereka membandingkan bukti. Kebiasaan kecil ini dapat mendukung komunikasi dan berpikir kritis.'}
];
const quizQuestions = [
  {question:'Ketika membaca teks, informasi yang paling banyak dibahas dalam paragraf disebut …',options:['Gagasan utama','Nama pengarang','Daftar pustaka','Tanda baca'],answer:0,explanation:'Gagasan utama adalah ide pokok yang menjadi inti pembahasan paragraf.'},
  {question:'Di kebun sekolah terdapat 4 baris tanaman. Setiap baris berisi 5 tanaman. Berapa jumlah tanaman seluruhnya?',options:['9 tanaman','15 tanaman','20 tanaman','25 tanaman'],answer:2,explanation:'Ada 4 kelompok yang masing-masing berisi 5 tanaman, sehingga 4 × 5 = 20 tanaman.'},
  {question:'Sikap yang paling tepat ketika teman menyampaikan pendapat berbeda adalah …',options:['Memotong pembicaraannya','Mengejek pendapatnya','Langsung meninggalkan diskusi','Mendengarkan lalu menanggapi dengan santun'],answer:3,explanation:'Mendengarkan dan menanggapi dengan santun menunjukkan sikap menghargai orang lain.'}
];

const materialGrid = document.getElementById('materialGrid');
const emptyState = document.getElementById('emptyState');
function renderMaterials(){
  const q = document.getElementById('materialSearch').value.trim().toLowerCase();
  const grade = document.getElementById('gradeFilter').value;
  const subject = document.getElementById('subjectFilter').value;
  const filtered = materials.filter(m => (grade==='all'||String(m.grade)===grade) && (subject==='all'||m.subject===subject) && `${m.title} ${m.subject} ${m.description} ${m.type}`.toLowerCase().includes(q));
  materialGrid.innerHTML = filtered.map(m => `<article class="material-card"><div class="card-top"><span class="subject-icon icon-${safe(m.color)}">${safe(m.icon)}</span><span class="grade-badge">Kelas ${m.grade}</span></div><h3>${safe(m.title)}</h3><p>${safe(m.description)}</p><div class="card-meta">${safe(m.subject)} · ${safe(m.type)}</div><a class="card-link" href="${safeUrl(m.url)}">Jelajahi materi <span>→</span></a></article>`).join('');
  emptyState.hidden = filtered.length > 0;
}
function safe(v){return String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function safeUrl(v){return /^(https?:|mailto:|#|materi\/)/i.test(v)?safe(v):'#';}
document.getElementById('materialSearch').addEventListener('input',renderMaterials);
document.getElementById('gradeFilter').addEventListener('change',renderMaterials);
document.getElementById('subjectFilter').addEventListener('change',renderMaterials);
document.querySelectorAll('[data-subject-link]').forEach(a=>a.addEventListener('click',()=>{document.getElementById('subjectFilter').value=a.dataset.subjectLink;renderMaterials();}));

const downloadGrid = document.getElementById('downloadGrid');
downloadGrid.innerHTML = downloads.map(d=>`<article class="download-card"><span class="file-icon ${safe(d.color)}">${safe(d.icon)}</span><div><h3>${safe(d.title)}</h3><p>${safe(d.description)}</p>${d.url?`<a class="download-link" href="${safeUrl(d.url)}" download>Unduh berkas ↓</a>`:`<button class="download-link needs-file" type="button" data-title="${safe(d.title)}">Tambahkan berkas ↓</button>`}</div></article>`).join('');
downloadGrid.querySelectorAll('.needs-file').forEach(btn=>btn.addEventListener('click',()=>showToast(`Berkas “${btn.dataset.title}” belum ditautkan. Tambahkan file dan tautannya di script.js.`)));

const articleGrid = document.getElementById('articleGrid');
articleGrid.innerHTML = articles.map((a,i)=>`<article class="article-card"><div class="article-art art-${safe(a.color)}"><span class="art-emoji">${safe(a.icon)}</span></div><div class="article-body"><span class="article-category">${safe(a.category)}</span><h3>${safe(a.title)}</h3><p>${safe(a.description)}</p><button class="read-article" type="button" aria-expanded="false" aria-controls="articleExtra${i}">Baca ringkasan <span>→</span></button><div class="article-extra" id="articleExtra${i}" hidden>${safe(a.body)}</div></div></article>`).join('');
articleGrid.querySelectorAll('.read-article').forEach(btn=>btn.addEventListener('click',()=>{const extra=document.getElementById(btn.getAttribute('aria-controls'));const opening=extra.hidden;extra.hidden=!opening;btn.setAttribute('aria-expanded',String(opening));btn.innerHTML=opening?'Tutup ringkasan ↑':'Baca ringkasan →';}));

let quizIndex=0, quizAnswers=[];
const quizContent=document.getElementById('quizContent'),quizResult=document.getElementById('quizResult');
function renderQuiz(){const q=quizQuestions[quizIndex];document.getElementById('quizProgress').textContent=`Pertanyaan ${quizIndex+1} dari ${quizQuestions.length}`;document.getElementById('progressBar').style.width=`${((quizIndex+1)/quizQuestions.length)*100}%`;quizResult.hidden=true;quizContent.hidden=false;quizContent.innerHTML=`<div class="quiz-question">${safe(q.question)}</div><div class="answer-list">${q.options.map((o,i)=>`<button class="answer-option ${quizAnswers[quizIndex]===i?'selected':''}" type="button" data-answer="${i}" aria-pressed="${quizAnswers[quizIndex]===i}"><span class="letter">${String.fromCharCode(65+i)}</span><span>${safe(o)}</span></button>`).join('')}</div><div class="quiz-controls"><button id="quizNext" class="quiz-next" type="button" ${quizAnswers[quizIndex]===undefined?'disabled':''}>${quizIndex===quizQuestions.length-1?'Lihat hasil':'Pertanyaan berikutnya →'}</button></div>`;
quizContent.querySelectorAll('[data-answer]').forEach(btn=>btn.addEventListener('click',()=>{quizAnswers[quizIndex]=Number(btn.dataset.answer);renderQuiz();}));document.getElementById('quizNext').addEventListener('click',()=>{if(quizAnswers[quizIndex]===undefined)return;if(quizIndex<quizQuestions.length-1){quizIndex++;renderQuiz();}else showQuizResult();});}
function showQuizResult(){const score=quizQuestions.reduce((n,q,i)=>n+(quizAnswers[i]===q.answer?1:0),0);quizContent.hidden=true;quizResult.hidden=false;quizResult.innerHTML=`<h3>Skor kamu: ${score} dari ${quizQuestions.length}</h3><p>${score===quizQuestions.length?'Hebat! Semua jawaban tepat. Terus pelihara semangat belajarmu.':score>0?'Bagus, kamu sudah mulai! Baca umpan balik di bawah dan coba lagi.':'Jangan menyerah. Belajar adalah proses, dan setiap percobaan membantumu berkembang.'}</p>${quizQuestions.map((q,i)=>`<p class="quiz-feedback"><strong>${i+1}. ${quizAnswers[i]===q.answer?'✓':'↻'} ${safe(q.options[q.answer])}.</strong> ${safe(q.explanation)}</p>`).join('')}<button id="quizRestart" class="quiz-restart" type="button">Ulangi kuis ↻</button>`;document.getElementById('quizRestart').addEventListener('click',()=>{quizIndex=0;quizAnswers=[];renderQuiz();});}
renderMaterials();renderQuiz();

const menuToggle=document.getElementById('menuToggle'),mainNav=document.getElementById('mainNav');
menuToggle.addEventListener('click',()=>{const open=mainNav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));});
mainNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mainNav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');}));
document.getElementById('videoInfoButton').addEventListener('click',()=>showToast('Untuk menampilkan video, ganti area video pada index.html dengan embed YouTube milik Bapak.'));
let toastTimer;function showToast(message){const toast=document.getElementById('toast');toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),3600);}
document.getElementById('currentYear').textContent=new Date().getFullYear();
