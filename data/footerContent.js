module.exports = [
  {
    id: 1,
    title: "For Candidates",
    menuList: [
      { name: "Browse Jobs", route: "/jobs" },
      { name: "Candidate Dashboard", route: "/candidates-dashboard/dashboard" },
      { name: "Job Alerts", route: "/candidates-dashboard/job-alerts" },
      {
        name: "My Bookmarks",
        route: "/candidates-dashboard/short-listed-jobs",
      },
    ],
  },
  {
    id: 2,
    title: "For Companies",
    menuList: [
      {
        name: "Browse Candidates",
        route: "/candidates-list-v1",
      },
      { name: "Employer Dashboard", route: "/employers-dashboard/dashboard" },
      { name: "Add Job", route: "/employers-dashboard/post-jobs" },
      { name: "Job Packages", route: "/employers-dashboard/packages" },
    ],
  },
  {
    id: 3,
    title: "About Us",
    menuList: [
      { name: "About Us", route: "/about" },
      { name: "Job Page Invoice", route: "/invoice" },
      { name: "Terms Page", route: "/terms" },
      { name: "Blog", route: "/blog-list-v1" },
      { name: "Contact", route: "/contact" },
    ],
  },
  {
    id: 4,
    title: "Helpful Resources",
    menuList: [
      { name: "Site Map", route: "/" },
      { name: "Terms of Use", route: "/terms" },
      { name: "Privacy Center", route: "/" },
      { name: "Security Center", route: "/" },
      { name: "Accessibility Center", route: "/" },
    ],
  },
];
