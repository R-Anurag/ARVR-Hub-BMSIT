const { execSync } = require("child_process");

try {
  console.log("📦 Building project...");
  execSync("npm run build", { stdio: "inherit" });

  console.log("🚀 Deploying to gh-pages branch...");
  execSync("git add .", { stdio: "inherit" });
  execSync('git commit -m "chore: deploy latest build"', { stdio: "inherit" });

  execSync("git push origin main", { stdio: "inherit" });

  execSync("git subtree push --prefix dist origin gh-pages", { stdio: "inherit" });

  console.log("✅ Deployment successful! Your site should be live soon.");
} catch (error) {
  console.error("❌ Deployment failed:", error.message);
}
