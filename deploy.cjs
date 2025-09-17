// deploy.cjs
const { execSync } = require("child_process");

function run(command, options = {}) {
  try {
    console.log(`\n▶ ${command}`);
    execSync(command, { stdio: "inherit", ...options });
    return true;
  } catch (err) {
    if (options.ignoreErrors) {
      console.warn(`⚠️ Command failed but ignored: ${command}`);
      return false;
    }
    throw err;
  }
}

try {
  console.log("🚀 Starting deployment...");

  // 1. Build the project
  run("npm run build");

  // 2. Stage dist/ (force, even if in .gitignore)
  run("git add dist -f");

  // 3. Commit only if there are changes
  const didCommit = run('git commit -m "chore: deploy latest build"', {
    ignoreErrors: true,
  });
  if (!didCommit) {
    console.log("ℹ️ No new changes to commit.");
  }

  // 4. Try pushing subtree to gh-pages
  console.log("📦 Deploying dist/ to gh-pages branch...");
  const pushed = run("git subtree push --prefix dist origin gh-pages", {
    ignoreErrors: true,
  });

  // 5. If subtree fails, fallback to force-push method
  if (!pushed) {
    console.log("⚠️ Subtree push failed. Falling back to force-push method...");

    // Create a temporary branch from dist/
    run("git subtree split --prefix dist -b gh-pages-temp");

    // Force push it to gh-pages
    run("git push origin gh-pages-temp:gh-pages --force");

    // Clean up temporary branch
    run("git branch -D gh-pages-temp");
  }

  console.log("✅ Deployment complete! Your site should be live shortly.");
} catch (err) {
  console.error("\n❌ Deployment failed with error:");
  console.error(err.message);
  process.exit(1);
}
