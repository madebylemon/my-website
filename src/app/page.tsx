export default function Home() {
  return (
    <main>
      <img
        src="/profile.jpg"
        alt="James Le"
        style={{
          width: 72,
          height: 72,
          borderRadius: "50%",
          margin: "0 auto 2rem auto",
          display: "block",
          objectFit: "cover",
          border: "2px solid var(--border)"
        }}
      />
      <h1>James Le</h1>
      <p>
        I'm a Data Engineer, Developer, and Tennis Player. I love building things on the internet.
      </p>
      <div className="links">
        <a href="mailto:hoangkhang.17jle@gmail.com">Email</a>
        <a href="https://www.instagram.com/mylemoniszesty">Instagram</a>
        <a href="https://github.com/madebylemon">GitHub</a>
      </div>
      <p>
        Hi, I&apos;m James! I love building data pipelines, web apps, and sharing what I learn. Currently working as a Data Engineer and always exploring new technologies. When I'm not coding, you’ll find me spending time with my family, playing tennis, or cooking a good meal.
      </p>
      {/* Where Section */}
        <section style={{ textAlign: "center", marginBottom: "2.5rem" }}>
        <div style={{ marginBottom: "0.5rem" }}>
          <img src="mylocation.png" alt="Map" style={{ width: 400, borderRadius: 12, margin: "0 auto" }} />
        </div>
        <div
          style={{
            fontWeight: 500,
            color: "#888",
            marginLeft: "270px",
            display: "inline-block",
            fontSize: "1.05rem"
          }}
        >
          <span role="img" aria-label="location" style={{ marginRight: 6 }}>𓊼</span>
          Houston, TX
        </div>
      </section>
      
      {/* Projects Section */}
      <section style={{ maxWidth: 600, margin: "0 auto 2.5rem auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: "1rem" }}>Projects</h2>
        <div>Projects coming soon!</div>
      </section>
      <footer style={{ textAlign: "center", marginTop: "3rem", color: "var(--foreground)", fontSize: "0.95rem" }}>
        © {new Date().getFullYear()} James Le. All rights reserved.
      </footer>
    </main>
  );
}