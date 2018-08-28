const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "WLun - a blog starter for WLun", // <title>
  shortSiteTitle: "WLun的个人博客", // <title> ending for posts and pages
  siteDescription: "WLun的个人博客",
  siteUrl: "https://gatsby-starter-personal-blog.greglobinski.com",
  pathPrefix: "/",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "greg lobinski",
  authorTwitterAccount: "",
  // info
  infoTitle: "WLun",
  infoTitleNote: "个人博客",
  // manifest.json
  manifestName: "个人博客 - WLun的个人博客",
  manifestShortName: "PersonalBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "cwljay1991@126.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/WLunc" },
  ]
};
