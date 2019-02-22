const experience = {
  PERSONAL_PROJECTS: {
    projectList: [
      {
        title: "TITLE_1",
        website: "WEBSITE",
        desc: "DESCRIPTION",
        tech: ["TECH"],
        contributionList: [
          {
            detail: "DETAIL",
            images: []
          },
          {
            html: true,
            detail: {
              __html: '<a target="_blank" href="" class=""/></a>'
            },
            images: []
          }
        ]
      }
    ]
  },
  COMPANY_WITH_PROJECTS: {
    website: "WEBSITE",
    title: "TITLE_2",
    period: ["1970", "Present"],
    projectList: [
      {
        website: "WEBSITE",
        title: "TITLE_3",
        desc: "DESCRIPTION",
        tech: ["TECH"],
        contributionList: [
          {
            detail: "DETAIL",
            images: []
          }
        ]
      }
    ]
  },
  COMPANY_AS_A_JOB: {
    type: "job",
    website: "WEBSITE",
    title: "TITLE_4",
    period: ["1970", "2019"],
    tech: ["TECH"],
    desc: "DESCRIPTION",
    contributionList: [
      {
        detail: "DETAIL_5",
        images: []
      }
    ]
  }
};

export default experience;
