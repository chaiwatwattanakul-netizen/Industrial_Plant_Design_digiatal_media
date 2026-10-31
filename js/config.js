/**
 * Industrial Plant Design • 17-week course catalog
 * แก้ไขเส้นทางไฟล์บทเรียนได้ที่ field `file` ของสัปดาห์นั้น
 * - ใช้ไฟล์ภายใน repo:  lessons/Industrial_Plant_Design_Week_01_Interactive.html
 * - ใช้ URL เต็มได้:      https://example.com/lesson.html
 * - `published: 'auto'`: ตรวจสอบไฟล์อัตโนมัติบน GitHub Pages
 * - `published: true` : เปิดลิงก์ทันที (เหมาะกับ external links)
 * - `published: false`: แสดงสถานะรอเผยแพร่
 */
window.IPD_CONFIG = {
  repoTitle: 'Industrial Plant Design',
  courseCode: '03-407-051-307',
  lessonFolder: 'lessons/',
  weeks: [
    { week: 1, phase: 'foundation', title:'รู้จักโรงงานและการออกแบบผัง', en:'Introduction to Industrial Plant Design', topics:['องค์ประกอบโรงงาน','เป้าหมายของผังที่ดี'], summary:'ทำความรู้จักระบบการผลิตและหลักคิดพื้นฐานของการออกแบบผังโรงงาน' },
    { week: 2, phase: 'foundation', title:'ผลิตภัณฑ์และลำดับกระบวนการผลิต', en:'Product & Process Analysis', topics:['Routing','Operation Process Chart'], summary:'อ่านเส้นทางการผลิตและจัดลำดับกระบวนการจากวัตถุดิบถึงสินค้าสำเร็จรูป' },
    { week: 3, phase: 'foundation', title:'กำลังการผลิตและจำนวนเครื่องจักรเบื้องต้น', en:'Basic Capacity & Machine Requirement', topics:['Cycle Time','จำนวนเครื่องจักร'], summary:'คำนวณกำลังการผลิต จำนวนเครื่องจักร และข้อมูลพื้นที่ตั้งต้น' },
    { week: 4, phase: 'analysis', title:'ปัจจัยการเลือกทำเลที่ตั้งโรงงาน', en:'Facility Location: Qualitative Factors', topics:['Location Factors','Factor Rating'], summary:'เปรียบเทียบทำเลจากปัจจัยด้านโลจิสติกส์ แรงงาน และสิ่งแวดล้อม' },
    { week: 5, phase: 'analysis', title:'คำนวณเปรียบเทียบทำเลอย่างง่าย', en:'Quantitative Location Analysis', topics:['Load–Distance','Center of Gravity'], summary:'ใช้ระยะทางถ่วงน้ำหนักและศูนย์ถ่วงช่วยตัดสินใจเลือกทำเล' },
    { week: 6, phase: 'analysis', title:'ชนิดของผังโรงงานและการเลือกใช้', en:'Types of Plant Layout', topics:['Product / Process','Fixed / Cellular'], summary:'รู้จักผังโรงงานรูปแบบหลักและเลือกให้เหมาะกับลักษณะการผลิต' },
    { week: 7, phase: 'analysis', title:'ปัญหาผังเดิมและสิ่งอำนวยความสะดวก', en:'Layout Problems & Supporting Facilities', topics:['Existing Layout','Supporting Facilities'], summary:'วิเคราะห์จุดตัด ทางย้อน และข้อจำกัดของผังโรงงานเดิม' },
    { week: 8, phase: 'exam', title:'สอบกลางภาค', en:'Midterm Examination', topics:['ทบทวนสัปดาห์ 1–7','สอบ 3 ชั่วโมง'], summary:'ประเมินพื้นฐานการออกแบบโรงงานและโจทย์คำนวณเบื้องต้น', exam:true },
    { week: 9, phase: 'design', title:'การวิเคราะห์การไหลของวัสดุ', en:'Material Flow Analysis', topics:['From–To Chart','Spaghetti Diagram'], summary:'มองเห็นปริมาณ ระยะทาง และเส้นทางการเคลื่อนย้ายระหว่างแผนก' },
    { week: 10, phase: 'design', title:'การวางผังอย่างเป็นระบบ ขั้นพื้นฐาน', en:'Systematic Layout Planning (SLP)', topics:['Activity Relationship Chart','Relationship Diagram'], summary:'กำหนดความสัมพันธ์ระหว่างพื้นที่และแปลงเป็นแนวคิดผังทางเลือก' },
    { week: 11, phase: 'design', title:'การกำหนดพื้นที่และผังโรงงานแบบบล็อก', en:'Space Planning & Block Layout', topics:['Space Requirement','Block Layout'], summary:'คำนวณพื้นที่ที่ใช้จริงและสร้างผังแบบบล็อกอย่างน้อย 2 ทางเลือก' },
    { week: 12, phase: 'design', title:'ระบบขนถ่ายวัสดุและความปลอดภัย', en:'Material Handling Systems', topics:['Forklift / Conveyor','AGV / AMR'], summary:'เลือกวิธีขนถ่ายและตรวจสอบเส้นทางให้เหมาะสมและปลอดภัย' },
    { week: 13, phase: 'design', title:'ประเมินและตัดสินใจเลือกผังโรงงาน', en:'Layout Evaluation & Decision Making', topics:['ระยะทางและต้นทุน','Weighted Scoring'], summary:'เปรียบเทียบทางเลือกด้วยตัวชี้วัดด้านระยะทาง ต้นทุน และความปลอดภัย' },
    { week: 14, phase: 'application', title:'เขียนผังโรงงานด้วยโปรแกรมสำเร็จรูป', en:'Computer-Aided Layout Design', topics:['2D Layout','diagrams.net / AutoCAD'], summary:'สร้างผังดิจิทัลสองมิติและสรุปผลก่อน–หลังด้วยโปรแกรม' },
    { week: 15, phase: 'application', title:'กรณีศึกษาออกแบบและปรับปรุงผังโรงงาน', en:'Integrated Plant Layout Case Study', topics:['CNC Case Study','Before / After'], summary:'บูรณาการข้อมูลทั้งรายวิชาเพื่อปรับปรุงผังโรงงาน CNC จำลอง' },
    { week: 16, phase: 'application', title:'นำเสนอโครงงานและสรุปความรู้', en:'Project Presentation & Course Synthesis', topics:['Project Presentation','Course Synthesis'], summary:'นำเสนอผังใหม่พร้อมเหตุผลและผลเปรียบเทียบเชิงวิศวกรรม' },
    { week: 17, phase: 'exam', title:'สอบปลายภาค', en:'Final Examination', topics:['ทบทวนสัปดาห์ 9–16','สอบ 3 ชั่วโมง'], summary:'ประเมินการประยุกต์ใช้ From–To, ARC และการเลือกผัง', exam:true }
  ]
};

// ไม่จำเป็นต้องแก้ส่วนนี้ หากตั้งชื่อไฟล์บทเรียนตามรูปแบบใน README
for (const lesson of window.IPD_CONFIG.weeks) {
  lesson.file ??= `${window.IPD_CONFIG.lessonFolder}Industrial_Plant_Design_Week_${String(lesson.week).padStart(2,'0')}_Interactive.html`;
  lesson.published ??= 'auto';
}
