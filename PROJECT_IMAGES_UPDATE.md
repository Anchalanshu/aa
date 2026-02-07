# Project Images Update Guide

## Current Status
The project images are currently using placeholder images. You need to replace them with relevant visuals that match each project's theme.

## Required Image Updates

### 1. NestFinder (`/assets/projects/nestfinder.png`)
**Theme:** Housing / Map / Rental Platform UI
- Should show: Map interface, property listings, rental platform UI
- Style: Modern real estate app interface
- Colors: Apply purple overlay to match theme

### 2. AI-Driven DevSecOps Pipeline (`/assets/projects/devsecops.png`)
**Theme:** Cybersecurity / Code Analysis / DevOps Pipeline
- Should show: Code analysis dashboard, security scanning interface, CI/CD pipeline visualization
- Style: Technical dashboard with code metrics
- Colors: Apply purple overlay to match theme

### 3. Skill Swap Platform (`/assets/projects/skillswap.png`)
**Theme:** Collaboration / Networking / Students Working / Teamwork UI
- Should show: Collaboration interface, networking features, student profiles, team workspace
- Style: Social/collaboration platform UI
- Colors: Apply purple overlay to match theme

### 4. Smart Waste Segregation Bin (`/assets/projects/smartbin.png`)
**Theme:** Smart Bin / Sensors / IoT Hardware
- Should show: IoT device, sensors, smart bin hardware, technical diagram
- Style: Hardware/IoT product image
- Colors: Apply purple overlay to match theme

## Image Specifications
- **Format:** PNG (with transparency preferred)
- **Size:** Recommended 800x600px or similar aspect ratio
- **Location:** `/public/assets/projects/`
- **Naming:** Keep existing filenames (nestfinder.png, devsecops.png, skillswap.png, smartbin.png)

## Purple Theme Overlay
The images will automatically have a purple gradient overlay applied via CSS:
```css
bg-gradient-to-br from-[#7C5CFF]/40 via-[#A855F7]/30 to-[#5B8CFF]/40
```

This ensures all images match the portfolio's purple-tech theme even if source images have different color schemes.

## How to Update
1. Create or find images matching each project's theme
2. Apply purple overlay if needed (or let CSS handle it)
3. Save images to `/public/assets/projects/` with correct filenames
4. Images will automatically appear in the portfolio

## Image Sources (Suggestions)
- **Unsplash** - Free high-quality images
- **Pexels** - Free stock photos
- **Dribbble/Behance** - UI mockups and designs
- **Your own screenshots** - If you have actual project screenshots
