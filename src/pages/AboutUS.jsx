import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="py-20 max-w-6xl mx-auto md:px-20 xs:px-10 px-5">
        <h1 className="xs:text-3xl text-2xl font-bold text-center py-5 ">
          About Us
        </h1>
        <div className="space-y-3">
          <div className="space-y-4">
            <h1 className="xs:text-xl text-lg font-bold ">Our Mission:</h1>
            <img
              src="/images/about.jpg"
              alt=" about-bg"
              className="sm:w-[20rem] xs:w-[15rem] xxs:w-[12rem] w-full sm:h-[12rem] xs:h-[10rem] xxs:h-[8rem] h-[10rem] object-cover float-left xxs:pr-5 pr-0 "
            />
            <p className="sm:text-sm text-[0.7rem] sm:leading-7 leading-6 tracking-wider text-justify">{`Internship Pakistan is dedicated to connecting students and young professionals with valuable internship opportunities across various industries. Our goal is to empower the next generation of talent by providing a platform that enables them to find, apply, and grow through internships that will shape their future careers.`}</p>

            <h1 className="xs:text-xl text-lg font-bold ">Our Vision:</h1>

            <p className="sm:text-sm text-[0.7rem] sm:leading-7 leading-6 tracking-wider text-justify">
              To be Pakistan's leading platform for internship and early career
              development, providing both local and international opportunities
              to young talent and helping businesses discover the leaders of
              tomorrow.
            </p>
          </div>
          <div className="space-y-4">
            <h1 className="text-xl font-bold ">Our Team:</h1>
            <img
              src="/images/teambg.webp"
              alt="team-bg"
              className="w-full md:h-[25rem] sm:h-[20rem] xs:h-[15rem] h-[12rem] object-cover object-center rounded-md"
            />
            <div className="grid md:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-5 py-5 ">
              <div className="p-3 bg-sky-800 rounded-lg space-y-4 text-white">
                <img
                  src="/images/founder.jpg"
                  alt="founder-img"
                  className="w-full h-[15rem] object-cover rounded-md"
                />
                <h1 className="text-lg font-bold leading-7 tracking-wider">
                  Founder & CEO: Shabbar Ali
                </h1>
                <p className="sm:text-[0.8rem] text-[0.7rem] sm:leading-6 leading-5 tracking-wider">
                  With a passion for youth development,{" "}
                  <span className="font-bold">Shabbar Ali</span> founded
                  Internship Pakistan with the vision of bridging the gap
                  between academia and professional industries.
                </p>
              </div>
              <div className="p-3 bg-sky-800 rounded-lg space-y-4 text-white">
                <img
                  src="/images/team.webp"
                  alt="team-member-img"
                  className="w-full h-[15rem] object-cover rounded-md"
                />
                <h1 className="text-lg font-bold  leading-7 tracking-wider">
                  Team Lead: [Name]
                </h1>
                <p className="sm:text-[0.8rem] text-[0.7rem] sm:leading-6 leading-5 tracking-wider">
                  [Name] leads our operations and ensures that every internship
                  listing is authentic and valuable for the applicants.
                </p>
              </div>
              <div className="p-3 bg-sky-800 rounded-lg space-y-4 text-white">
                <img
                  src="/images/partner.jpg"
                  alt="team-member-img"
                  className="w-full h-[15rem] object-cover rounded-md"
                />
                <h1 className="text-lg font-bold  leading-7 tracking-wider">
                  Partnership Manager: [Name]
                </h1>
                <p className="sm:text-[0.8rem] text-[0.7rem] sm:leading-6 leading-5 tracking-wider">
                  Responsible for building strong relationships with top
                  companies and organizations, [Name] ensures that businesses
                  have access to the brightest candidates.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-xl font-bold ">Our Journey</h1>

            <p className="sm:text-sm text-[0.8rem] sm:leading-7 leading-6 text-justify tracking-wide">
              2020: Internship Pakistan was founded with the goal of providing
              students and young professionals access to career-enhancing
              internships.
            </p>
            <p className="sm:text-sm text-[0.8rem] sm:leading-7 leading-6 text-justify tracking-wide">
              2021: Expanded the platform’s reach to multiple cities in
              Pakistan, offering a diverse range of opportunities.
            </p>
            <p className="sm:text-sm text-[0.8rem] sm:leading-7 leading-6 text-justify tracking-wide">
              2022: Partnered with over 100 companies and launched an internship
              guide and resources section to help applicants succeed.
            </p>
            <p className="sm:text-sm text-[0.8rem] sm:leading-7 leading-6 text-justify tracking-wide">
              2023: Introduced international internship programs, giving users
              access to global opportunities.
            </p>
            <p className="sm:text-sm text-[0.8rem] sm:leading-7 leading-6 text-justify tracking-wide">
              2024: Reached over 50,000 users and helped thousands of students
              take their first step towards their career.
            </p>
          </div>
          <div>
            <h1 className="text-xl font-bold ">Join Us:</h1>
            <p className="sm:text-sm text-[0.8rem] sm:leading-7 leading-6 text-justify tracking-wide">
              At Internship Pakistan, we believe in building futures, one
              internship at a time. Whether you're a company looking for talent
              or a student searching for opportunities, we’re here to guide you
              every step of the way.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
