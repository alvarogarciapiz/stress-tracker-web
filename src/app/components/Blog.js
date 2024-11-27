import styles from "../css/Blog.module.css";

export default function Blog() {
  const articles = [
    {
      title: "The Best Apple Watch Apps to Track Stress in 2025 ⌚️",
      description: "Discover the top-rated apps for managing stress using your Apple Watch. Explore how features like HRV tracking can help improve your mental well-being.",
      link: "/blog/apple-watch-apps-track-stress"
    },
    {
      title: "How HRV Tracking on Apple Watch Can Help You Reduce Stress 😓",
      description: "Learn how heart rate variability (HRV) data from your Apple Watch provides actionable insights into your stress levels and recovery patterns.",
      link: "/blog/hrv-tracking-apple-watch-reduce-stress"
    },
    {
      title: "5 Tips for Using Your Apple Watch to Manage Stress Effectively ✋🏻",
      description: "Unlock the full potential of your Apple Watch with these tips for managing daily stress, monitoring sleep, and understanding recovery.",
      link: "/blog/tips-using-apple-watch-manage-stress"
    },
    {
      title: "Stress and Sleep: How Your Apple Watch Can Help Improve Both 🌙",
      description: "Explore the connection between stress and sleep, and see how Apple Watch apps can guide you toward better habits and recovery.",
      link: "/blog/stress-sleep-apple-watch-improve-both"
    }
  ];

  return (
    <section className={styles.blog}>
      <h2 className={styles.title}>Blog</h2>
      <p className={styles.description}>
        Delve into our blog to uncover the latest insights on stress management, heart rate variability (HRV), and overall wellness. From scientific research to practical strategies, we provide the tools you need to understand and improve your health. Stay informed and empowered with articles designed to help you achieve balance and resilience every day.
      </p>
      <div className={styles.articles}>
        {articles.map((article, index) => (
          <div key={index} className={styles.article}>
            <a href={article.link} className={styles.articleTitleLink}>
              <h3 className={styles.articleTitle}>{article.title}</h3>
            </a>
            <p className={styles.articleDescription}>{article.description}</p>
            <a href={article.link} className={styles.articleLink}>Read more</a>
          </div>
        ))}
      </div>
    </section>
  );
}