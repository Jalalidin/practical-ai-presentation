#!/bin/bash

echo "🚀 Setting up GitHub repository for Practical AI Presentation"
echo "Repository: https://github.com/Jalalidin/practical-ai-presentation.git"
echo ""

# Step 1: Clean up any Git lock files
echo "1. Cleaning up Git lock files..."
rm -f .git/config.lock
rm -f .git/index.lock
echo "✅ Lock files removed"

# Step 2: Check Git status
echo ""
echo "2. Checking Git status..."
git status

# Step 3: Configure Git if needed
echo ""
echo "3. Configuring Git..."
git config --global user.name "Jalalidin" 2>/dev/null || echo "Git user already configured"
git config --global user.email "your-email@example.com" 2>/dev/null || echo "Git email already configured"

# Step 4: Add remote origin
echo ""
echo "4. Adding remote origin..."
git remote remove origin 2>/dev/null || echo "No existing origin to remove"
git remote add origin https://github.com/Jalalidin/practical-ai-presentation.git
echo "✅ Remote origin added"

# Step 5: Verify remote
echo ""
echo "5. Verifying remote configuration..."
git remote -v

# Step 6: Add files and commit
echo ""
echo "6. Adding files and creating commit..."
git add .
git commit -m "🚀 Initial commit: Interactive AI Presentation with 14 slides

Features:
- Modern React TypeScript frontend with animations
- Express.js backend with storage interface
- 14 interactive slides covering AI tools and concepts
- Professional UI with Framer Motion animations
- Responsive design with Tailwind CSS
- Ready for GitHub Pages deployment

Categories covered:
- Content Creation (ChatGPT, Claude, Jasper, Copy.ai)
- Image & Video (DALL-E, Midjourney, Runway ML, Stable Diffusion)
- Code & Development (GitHub Copilot, Replit, CodeT5, Tabnine)
- Business & Productivity (Notion AI, Grammarly, Zapier, Calendly)
- Data & Analytics (DataRobot, H2O.ai, Tableau, MonkeyLearn)"

# Step 7: Push to GitHub
echo ""
echo "7. Pushing to GitHub..."
git push -u origin main

echo ""
echo "🎉 Setup complete! Your repository is now live at:"
echo "https://github.com/Jalalidin/practical-ai-presentation"
echo ""
echo "To enable GitHub Pages:"
echo "1. Go to your repository settings"
echo "2. Navigate to Pages section"
echo "3. Select 'GitHub Actions' as source"
echo "4. Your site will be available at: https://jalalidin.github.io/practical-ai-presentation/"