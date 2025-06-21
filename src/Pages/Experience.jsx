

const experiences = [
    {
        title: 'Associate Software Developer',
        company: 'Fuzionest Private Ltd',
        duration: 'Jan 2024 - Sep 2024 (9 months)',
    },
    {
        title: 'Web Development Intern',
        company: 'Fuzionest Private Ltd',
        duration: '2 Months',
    },
    {
        title: 'Web Development Intern',
        company: 'Techvolt Private Ltd',
        duration: '2 Months',
    },
    {
        title: 'B.E (CSE)',
        company: 'M.A.M College of Engineering',
        duration: 'Graduated Jul 2022',
    },
    {
        title: 'HSC',
        company: 'Sowdambikaa Matric Hr. Sec School',
        duration: 'Completed Mar 2018',
    },
    {
        title: 'SSLC',
        company: 'S.F.S Matric Hr. Sec School',
        duration: 'Completed Mar 2016',
    },
];

const Experience = () => {
    return (
        <section className="experience_bg">
            <div className="container">
                <div className="experience_wrapper">
                    <h2>Experience</h2>
                    <div className="experience_list">
                        {experiences.map((exp, index) => (
                            <div className="experience_card" key={index}>
                                <h3>{exp.title}</h3>
                                <p className="company">{exp.company}</p>
                                <p className="duration">{exp.duration}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
