# Asset Setup Instructions

## Required Assets

To complete the portfolio setup, you need to copy the following assets from the original project:

### 1. Project Images

Copy the project images from:
```
AnchalChauhan_Portfolio-main/client/public/assets/projects/
```

To:
```
portfolio-react/public/assets/projects/
```

Required files:
- `nestfinder.png`
- `devsecops.png`
- `skillswap.png`
- `smartbin.png`

### 2. Resume PDF

Copy the resume PDF from:
```
AnchalChauhan_Portfolio-main/client/public/resume.pdf
```

To:
```
portfolio-react/public/resume.pdf
```

### 3. Background Images (Optional)

The hero and projects sections use external CDN images. You can:
- Keep using the CDN URLs (current setup)
- Download and replace with local images in `public/assets/`

If replacing:
1. Download the images
2. Place them in `public/assets/`
3. Update the `src` attributes in `src/pages/Home.tsx`

## Quick Setup Command

If you're on the same machine, you can copy assets using:

```bash
# From the portfolio-react directory
mkdir -p public/assets/projects

# Copy project images
cp -r ../AnchalChauhan_Portfolio-main/AnchalChauhan_Portfolio-main/client/public/assets/projects/* public/assets/projects/

# Copy resume
cp ../AnchalChauhan_Portfolio-main/AnchalChauhan_Portfolio-main/client/public/resume.pdf public/
```

## Verify Assets

After copying, verify the structure:

```
portfolio-react/
└── public/
    ├── assets/
    │   └── projects/
    │       ├── nestfinder.png
    │       ├── devsecops.png
    │       ├── skillswap.png
    │       └── smartbin.png
    └── resume.pdf
```

## Notes

- The resume modal expects `/resume.pdf` to be available
- Project images are referenced as `/assets/projects/[filename].png`
- Background images are currently external CDN URLs and can be replaced if needed
