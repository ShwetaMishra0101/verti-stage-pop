import { useState } from 'react'
import { convertUrlToCDNUrl } from '../../utils/convertUrlToCDNUrl'
import ChevronRight from '../common/ChevronRight'
import ChevronLeft from '../common/ChevronLeft'

interface SuccessStory {
  alumniName: string
  imageUrl: {
    url: string
  }
  description: string
  location: string
  jobTitle: string
}

const successStories: SuccessStory[] = [
  {
    alumniName: 'Mayuri Samanta',
    imageUrl: {
      url: 'https://masai-website-images.s3.ap-south-1.amazonaws.com/ezgif_com_resize_4357f9695a.webp',
    },
    description: `Mayuri comes from Navsari, near Surat in Gujarat. As a child, she showed promise and attended an English medium school, where she consistently ranked among the top students. After scoring exceptionally well in her 12th-grade exams, Mayuri received widespread recognition in her district, with her achievements featured in local newspapers.

She chose to pursue commerce after high school. To support her family, she provided tuition to neighbourhood kids while also aspiring to become a Chartered Accountant.

Unfortunately, her dream of becoming a CA didn't materialize despite several attempts at the exams.

Facing pressure to marry, Mayuri felt trapped and kept her desire for a different career path hidden. To delay marriage, she pretended to have completed a course in banking and government exams, all while working in low-paying jobs. Her life took a turn when a friend suggested Masai. Even though Mayuri was sceptical of the pay-after-placement model, she was determined to pursue a career in tech. After convincing her parents, she saw Masai as her last chance before agreeing to an arranged marriage.

Mayuri excelled in the Masai School Admission Test (MSAT) and thrived in Masai's intense 11-11-6 routine and updated curriculum, mastering Java and improving her English skills. Her hard work paid off when she landed a position as a JAVA Developer at LogwinTech Pvt. Ltd.

Today, Mayuri is progressing rapidly in her career, engaging in public speaking and contributing her industry insights to the Masai alumni network. Her journey is a testament to her determination and resilience, proving that with the right opportunity and hard work, anyone can rewrite their story.

Mayuri's journey is a tale of transformation, fuelled by Masai's spirit. It proves that where one starts doesn't determine one's fate. Effort, learning, and courage can change one's destiny.`,
    location: 'Navsari, Gujarat',
    jobTitle: 'Fresher to SDE1 at LogWinTech Pvt. Ltd.',
  },
  {
    alumniName: 'Pratham Sharma',
    imageUrl: {
      url: 'https://masai-website-images.s3.ap-south-1.amazonaws.com/ezgif_com_resize_1_4879e0dbe9.webp',
    },
    description: `Pratham, from a quiet town in Dehradun, Uttarakhand surrounded by hills, always had a passion for coding. He loved numbers and science since he was young and wanted to pursue Computer Science Engineering after school. However, his family couldn't afford it. So, Pratham took matters into his own hands.

He worked at the Survey of India during the day and pursued a degree in Mathematics at night. Amidst this, he found Masai—a chance to learn software engineering without financial strain. His family wanted him to aim for a secure government job, but Pratham's heart was set on tech. It took time, but eventually, his mom supported his decision to join Masai.

In July 2022, Pratham joined Masai. The atmosphere was charged with the same goals—code, career, change. His IA, Chetan, helped ease his mom's worries in the beginning. He remembered a friend who cracked IIT and guided him into backend development. "No big degrees needed," his friend had said. Pratham dove into Java basics and web development.

The 9-9-6 routine felt like boot camp with code. Switching between backend and frontend assignments fried his brain, but Masai's spirit and tutors kept him going. Communication classes turned him from a fumbling introvert into a confident speaker. Isha Kataria and other soft skills instructors helped him express his ideas.

From student to professional, the transition brought growth. In his first tech job at Cure Foods Pvt Ltd (Eatfit), he combined backend and user experience, creating seamless digital experiences. His manager guided him, and he was surrounded by logical and creative techies.

Now a full-stack developer, Pratham's thirst for knowledge remains unquenched. Java, Spring Boot, and other languages beckon. Though his time at Masai has ended, his journey in tech is just beginning.`,
    location: 'Dehradun, Uttarakhand to Bengaluru',
    jobTitle: 'GIS Analyst to Full Stack Engineer at Curefoods',
  },
  {
    alumniName: 'Mohammed Hassan',
    imageUrl: {
      url: 'https://masai-website-images.s3.ap-south-1.amazonaws.com/ezgif_com_resize_2_65ad6be9d2.webp',
    },
    description: `Hassan's journey with Masai started in the very early days of the first batch "The Vikings". After joining Masai, Hassan became one of the first individuals to complete their Income Share Agreement (ISA, now Pay After Placement - PAP). Reflecting on his initial scepticism about the ISA model, his dissatisfaction with his current job and his desire for change overshadowed his concerns. His persistent inquiries to the Masai team, coupled with their patient and sincere responses, convinced him to take the leap of faith into joining the Vikings batch.

Support from Hassan's family played a crucial role in his decision. Despite initial doubts, his father encouraged him to pursue his aspirations, eventually recognizing Masai's potential through his dedication and the efforts of the Masai team.

Transitioning from Masai to his role as a Software Engineer at Sharechat, Hassan found himself surrounded by colleagues from prestigious backgrounds. As an intern, he keenly observed his seniors' work ethic, realizing their success stemmed from relentless dedication. This realization, coupled with his experiences at Masai, provided a solid foundation for his career growth.

Comparing the traditional educational model with Masai's ISA-based approach, Hassan highlighted the latter's emphasis on accountability. Unlike traditional systems where success feels uncertain, Masai's model instilled hope by aligning the institution's success with that of its students.

Expressing his support for implementing ISAs on a national scale in India, Hassan believed it would create a more participative learning environment. By holding educational institutions accountable for their students' success, the ISA model could motivate educators to align their efforts with student outcomes.

Hassan exemplifies how an ISA can transform one's educational prospects. With his extensive knowledge and skills, Hassan is now a consultant serving Growble, poised for further career growth with improved salary packages.`,
    location: 'Salem, Tamil Nadu to Bengaluru',
    jobTitle: 'Workshop Trainee to SDE 2 at Sharechat',
  },
  {
    alumniName: 'Shashank Dubey',
    imageUrl: {
      url: 'https://masai-website-images.s3.ap-south-1.amazonaws.com/ezgif_com_resize_3_31aac1e90d.webp',
    },
    description: `Shashank grew up in a family that struggled to make ends meet. Money was tight, especially after his father faced some difficulties. To continue his education after the 10th grade, Shashank had to rely on his savings and his elder brother's earnings.

When it was time for college, Shashank wanted to pursue engineering, but the high fees of private colleges were beyond his family's means. Instead, he opted for a BSc degree, hoping it would lead to a better future.

His dream of studying engineering had to be put on hold due to financial constraints. He started his BSc but found it wasn't the right fit for him. After two years, he dropped out and decided to pursue a diploma, believing it could be equivalent to a B.Tech if he completed his MCA afterward.

To pay for his diploma, Shashank worked part-time jobs and saved every penny. However, even with his efforts, it was challenging to support himself and sometimes his siblings. Amidst the struggles, a friend from Masai, Ankush, showed him a new path. Ankush had already secured a job, giving Shashank hope. After hearing about Masai from other friends like Atin and Vivek, he saw it as an opportunity worth pursuing. Masai's unique feature of not requiring upfront fees was perfect for Shashank. It offered a ray of hope, allowing him to pursue his dreams without the burden of financial pressure.

His experience at Masai was transformative. The rigorous classes, comprehensive learning of full-stack development, and mastering new programming languages expanded his knowledge and opened new doors.

Shashank's life changed significantly after he landed an SDE-I role at STREAMS Solutions Pvt. Ltd.. He worked hard, overcame his fear of English, and honed his technical skills.

Although job interviews were challenging, he persevered and eventually landed a good job where he could communicate effectively and continue to grow.

For Shashank, it's not just about the pay check; it's about being in an environment that fosters continuous learning and growth. With gratitude to Masai for providing him with the tools to build a better life, he looks forward to a future filled with bigger dreams and opportunities.`,
    location: 'Lucknow, Uttar Pradesh to Gurugram',
    jobTitle: 'Fresher to Assoc. Software Engineer at STREAMS Solutions',
  },
  {
    alumniName: 'Aman Kashyap',
    imageUrl: {
      url: 'https://masai-website-images.s3.ap-south-1.amazonaws.com/ezgif_com_resize_4_4addcb3316.webp',
    },
    description: `Aman Kashyap was born in Kanpur, Uttar Pradesh. He had a keen interest in computers since his school days. Aman decided to turn this spark into a roaring fire and bravely chose computer science as an optional subject in 12th grade, while attending OSVN Inter College, a state board school.

However, life threw curveballs at Aman. As much as he wanted to soar into the sky of technology, financial constraints anchored his family to the ground. He longed to study at IIT, but his dreams collided with reality. To support his family, he slung a bag over his shoulder, not filled with books, but with food parcels, becoming a delivery executive for Swiggy.

The shadow of COVID-19 loomed, halting his educational goals further. Aman found himself working in leather factories, scrutinizing products for quality before they made their way to the eager hands of customers. Yearning for stability, he joined a Government Polytechnic College, but his heart wasn't in textile technology – it was in computing.

Looking for better career paths, Aman came across Masai, his schoolmate, Arpit Sachan, told him about an institute that offered a coding course with a "pay after placement" mode. Aman did his homework and discovered Masai's success testimonials on social media platforms. His determination blazed; he joined Masai, setting forth on a journey that would challenge him to the core.

With no technical background, Aman had to work harder than others in the initial phases of his Masai journey, sometimes needing to repeat units to solidify his understanding. But he grew, and he enhanced his skills day by day. The pedagogical prowess of his mentors sculpted the raw clay of his skills, and he left Masai not just with improved technical acumen but with soft skills and the ability to communicate confidently in English.

The cherry on top? Aman conquered the odds and landed a job as a Software Developer at Swiggy. The journey was arduous, but the rewards were sweet.

Aman's transformation from a delivery executive at Swiggy to an assistant SDE, also at Swiggy is a cornerstone of Masai's "Impact Book." Stories like his ripple through villages and cities and inspire hopes of rising after hitting rock bottom and winning against all odds.`,
    location: 'Kanpur, Uttar Pradesh to Bengaluru',
    jobTitle: 'Swiggy Delivery Partner to SDE1 at Swiggy',
  },
  {
    alumniName: 'Satyajit Arun Sahu',
    imageUrl: {
      url: 'https://masai-website-images.s3.ap-south-1.amazonaws.com/ezgif_com_resize_5_8ffc7dba44.webp',
    },
    description: `Satyajit was born in a modest family in Odisha. But he was brought up in the hustle and bustle of Mumbai. His father was an auto-rickshaw driver.

Before his journey in tech began, he had picked up a teaching gig at a local college after studying B.Sc. in Physics. He realized he was generally curious about technology since he studied science in 11th and 12th, which included some computer knowledge. After a year of teaching, he decided to dive into tech.

He struggled to find a job. One of his friends told him about Masai. His friends had been in Masai's curriculum and spoke highly about it since it had quite a good impact on him. So, he thought of giving it a shot.

But his family had its fair share of doubts. They raised questions on its authenticity and asked some difficult questions - "What will you do in the next six months? How will you pay for this course?" There was constant pressure because even after three years of teaching he did not have a stable job and was babbling around experimenting with one thing or the other.

He made his family understand Masai's model, where you only pay when you start earning after the course. His family finally gave in and agreed. Especially since Masai seemed to have a real impact on their friend's life back in the village.

The transition wasn't easy. There were fights at home about jobs. Despite the pressure, he persevered. When Satyajit finally managed to bag a job after the course, attitudes changed. His father, who never used to talk about these things directly, felt proud.

Before Masai, Satyajit had no mentor and no role model. He just learned from available online resources. But he felt lost and without direction. Joining Masai changed his life. He improved his professional skills, like time management and communication, and gained confidence in speaking English. He learned to ask questions and solve problems collaboratively.

Now, he works as a React.js developer at Indus Valley Partners, applying skills like JavaScript learned at Masai. He's also learning new things like TypeScript and testing libraries. He's grateful for the journey at Masai, where mentors like Yogesh taught him valuable lessons like "The Power of Compounding," setting him on a new path.

Looking ahead, he remains passionate about technology and is eager to learn new technologies that come their way, aiming for professional growth rather than worrying about the future.`,
    location: 'Mumbai to New Delhi',
    jobTitle: 'Teacher to SDE1 at Indus Valley Partners',
  },
  {
    alumniName: 'Arunabh Singh Thakur',
    imageUrl: {
      url: 'https://masai-website-images.s3.ap-south-1.amazonaws.com/ezgif_com_resize_6_57df020344.webp',
    },
    description: `Arunabh grew up in Gorakhpur, where the prevailing belief was that the brightest students should pursue science. Despite his interest in commerce and dreams of becoming a Chartered Accountant, his family's influence steered him toward science, and he ended up studying Civil Engineering in college.

In college, Arunabh excelled academically, but after graduation, he struggled to find a well-paying job. His first job in Faridabad paid only 6000 rupees per month, and the demonetization in India left him jobless, forcing him to return to his hometown and work as a Junior Site Engineer.

After witnessing his father's declining health and facing stagnant career prospects, Arunabh decided to make a change. He moved to Bengaluru to pursue an MBA but soon realized it wasn't financially feasible. It was in Bengaluru that he discovered his interest in IT, encouraged by his sister and friends who recognized his talent for Mathematics.

Arunabh enrolled in a bootcamp for software development, hoping to transition into a tech career. However, the bootcamp fell short of his expectations, and he struggled to find opportunities in the competitive IT industry. Feeling disillusioned, Arunabh was about to leave Bengaluru when he stumbled upon an article about Masai. Intrigued by its "learn first, pay later" model and inclusive approach, he reached out to them. After a reassuring conversation with Yogesh from Masai, Arunabh decided to take a chance and join Masai.

At Masai, Arunabh faced a steep learning curve but found the support and guidance he needed. The intense schedule and immersive curriculum helped him gain the skills and confidence to enter the tech industry.

After completing the program, Arunabh's career took off. He landed a job as a software engineer at Revv, and within four years, he has worked at four different companies, gaining valuable experience and skills. Today, Arunabh has risen up the ranks of software development to become a Senior Software Engineer at Quintype Technologies.

Looking into the future, Arunabh aims to further his career in web development and eventually move into tech leadership roles. He credits Masai with providing him with the tools and support he needed to succeed in the tech world, giving him control over his professional destiny.`,
    location: 'Gorakhpur, UP to Bengaluru',
    jobTitle: 'Site Engineer to SDE1 at Quintype Technologies Pvt Ltd',
  },
  {
    alumniName: 'Sumanta Mallik',
    imageUrl: {
      url: 'https://masai-website-images.s3.ap-south-1.amazonaws.com/ezgif_com_resize_7_e6d29acb2a.webp',
    },
    description: `Born to a modest family in Odisha, Sumanta had a simple upbringing. School days came with their share of struggles. He was smart, but resources were tight. When others had books and support, he had his determination.

He grew up wanting to study tech, to dive deep into computers, but fate had other plans. His family needed money, and he had to work. He opted for a regular B.Sc. degree from Utkal University— not what his heart wanted, but it was education nonetheless.

Fast forward, a few years later he landed a job in Bengaluru. A city of dreams for many; he thought opportunities would knock on his door. But they didn't, not until Masai caught his attention. He heard stories, and saw ads — something clicked. Masai was different; it promised to make him job-ready. The doubts? They were there. Is Masai real? Will it work? But then he met Prateek, Masai's CEO & co-founder. Prateek asked, "How much can you work?" and that resonated with him. This fellow worked hard already, doing night shifts, squeezing hours to learn coding after his data operator job. Prateek's faith convinced him — it was time for a jump into a career in tech.

Masai wasn't easy. Some quit, but not him. He stayed because turning back wasn't an option. The journey was tough, but he persevered. He started with no tech background, and the learning curve was steep, but Masai's mentors like Prateek, Nrupul, and others were there, always pushing him to do better.

Now, post-Masai, he's soaring. He's at LegalZoom, with a promising career in tech. His family sees the changes —the confidence, the skills, the professional attitude. The future? Bright. He's thinking of scaling up, maybe a Master's Degree, complemented by Masai's continuous learning, ensuring he stays on top of his game.`,
    location: 'Balasore, Odisha to Bengaluru',
    jobTitle: 'Operations Executive to SDE 2 at LegalZoom',
  },
]

const Flip = () => {
  // The stack order: 0 is top, last is back
  const [stack, setStack] = useState<SuccessStory[]>([...successStories])

  const goToNext = () => {
    // Move the top card to the back
    setStack((prevStack) => [...prevStack.slice(1), prevStack[0]])
  }

  const goToPrev = () => {
    // Move the last card to the front
    setStack((prevStack) => [
      prevStack[prevStack.length - 1],
      ...prevStack.slice(0, prevStack.length - 1),
    ])
  }

  return (
    <div className="w-full mx-auto py-[80px] md:py-[100px] relative isolate flex flex-col items-center">
      <img
        className="absolute top-0 left-0 w-full h-full z-[-1]"
        src={convertUrlToCDNUrl(
          'https://masai-website-images.s3.ap-south-1.amazonaws.com/ezgif_7a736cbbdbeab8_9f2fa4922a.webp',
        )}
        alt=""
        loading="lazy"
      />

      <h2 className="text-[28px] mb-[40px] md:mb-[150px] px-4 lg:text-[40px] font-[600] font-poppins text-[#222] mx-auto my-auto text-center">
        Shaping Success Stories Since 2019 <br />
        Your Goal. Our Mission
      </h2>

      <div className="relative flex flex-col items-center w-full px-4 h-[720px] md:h-[450px] overflow-hidden">
        <div className="w-full h-full relative overflow-hidden" style={{ perspective: '1000px', perspectiveOrigin: 'center center' }}>
          {stack.slice(0, 5).map((story, i) => (
            <div
              key={`${story.alumniName}-${i}`}
              className="absolute left-1/2 -translate-x-1/2 w-full max-w-[1195px] min-h-[320px] bg-white rounded-[36px] border border-[#FD93A8] p-6 md:p-[44px] flex flex-col shadow-xl transition-all duration-500 ease-in-out overflow-hidden"
              style={{
                bottom: `${i * 40}px`,
                zIndex: 10 - i,
                transform: `translate3d(0, 0, ${-i * 60}px) rotateX(${i * 3}deg) scale(${1 - i * 0.08})`,
                opacity: 1 - i * 0.13,
                boxShadow: '0 8px 32px 0 rgba(237,3,49,0.08)',
                pointerEvents: i === 0 ? 'auto' : 'none',
                transformStyle: 'preserve-3d',
                willChange: 'transform, opacity',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="46"
                viewBox="0 0 50 46"
                fill="none"
              >
                <path
                  d="M19.5312 45.1172H0V20.8984C0 14.388 1.30208 9.44011 3.90625 6.05469C6.77083 2.53906 11.5885 0.520834 18.3594 0V11.5234C16.0156 11.5234 14.0625 12.5 12.5 14.4531C11.7187 15.4948 11.3281 17.513 11.3281 20.5078V24.2188H19.5312V45.1172ZM50 45.1172H30.4688V20.8984C30.4688 14.388 31.6406 9.63542 33.9844 6.64063C37.1094 2.73438 42.0573 0.520834 48.8281 0V11.5234C44.7917 11.5234 42.513 13.5417 41.9922 17.5781C41.862 18.099 41.7969 19.0755 41.7969 20.5078V24.2188H50V45.1172Z"
                  fill="#E9E7E7"
                />
              </svg>
              <div className="relative mt-[24px] flex-1">
                <div className="absolute top-[-1px] left-0 right-0 h-4 bg-gradient-to-t from-transparent to-white z-10"></div>
                <div className="absolute bottom-[-1px] left-0 right-0 h-4 bg-gradient-to-b from-transparent to-white z-10"></div>
                <div className="text-[18px] max-h-[400px] md:max-h-[200px] overflow-y-auto font-poppins text-[#868686] font-[400] leading-[30px] relative z-0">
                  <p>&quot;{story.description}&quot;</p>
                </div>
              </div>
              <div className="flex items-center gap-4 pt-[40px] mt-[auto] relative z-10">
                <img
                  src={convertUrlToCDNUrl(story.imageUrl.url)}
                  alt={story.alumniName}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-semibold text-[#ED0331] text-lg">
                    {story.alumniName}
                  </h3>
                  <p className="text-gray-600 text-sm">{story.jobTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-10">
        <button
          className="w-12 h-12 active:scale-90 cursor-pointer flex items-center justify-center rounded-full bg-[#F6EDE7] text-[#ED0331] hover:bg-[#ED0331] hover:text-white transition-all text-2xl"
          onClick={goToPrev}
        >
          <ChevronLeft />
        </button>
        <div className="flex gap-2">
          {successStories.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${stack[0].alumniName === successStories[i].alumniName
                  ? 'w-8 bg-[#ED0331]'
                  : 'w-2 bg-[#F3DEDE]'
                }`}
            ></div>
          ))}
        </div>
        <button
          className="w-12 h-12 active:scale-90 cursor-pointer flex items-center justify-center rounded-full bg-[#F6EDE7] text-[#ED0331] hover:bg-[#ED0331] hover:text-white transition-all text-2xl"
          onClick={goToNext}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}

export default Flip
