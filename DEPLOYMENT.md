# Deployment Guide for Bricks & Legacy Website

## Overview
This website uses a hybrid data system:
- **Local hardcoded data**: Sample properties and gallery images built into the code
- **Admin-added data**: Properties and gallery images added through the admin panel
- **Node.js hosting**: Server-side file writing for direct admin panel updates

## For Development (Local)

When adding properties through the admin panel locally:
- Data is saved to `localStorage` in your browser
- Works for testing and development
- **Only visible in your browser**

## For Production Deployment (Node.js Hosting)

### Direct Admin Panel Updates ✅
With Node.js hosting, admin panel changes are **immediately visible to all users**:
- Admin panel saves directly to JSON files on the server
- No export/import needed
- Real-time updates across all users

### Deployment Steps:

#### Step 1: Prepare the Project
1. Ensure `public/data/` directory exists
2. Create empty JSON files:
   - `public/data/admin-properties.json` (with `[]`)
   - `public/data/admin-gallery.json` (with `[]`)

#### Step 2: Build the Project
```bash
npm run build
```

#### Step 3: Deploy to Node.js Hosting
1. Upload the entire project (not just `dist/`)
2. Install dependencies on server: `npm install --production`
3. Start the server: `npm run dev` or `node server.js`
4. Configure your hosting to run the Node.js server

#### Step 4: Configure Production
- Set environment variables if needed
- Ensure the server has write permissions to `public/data/`
- Configure reverse proxy (nginx/apache) if needed

## How the Data System Works

### Development Mode:
- Admin panel saves to `localStorage` in your browser
- Frontend falls back to localStorage if server files aren't available
- Perfect for testing and development

### Production Mode (Node.js):
- Admin panel saves directly to `public/data/*.json` files
- All users see the same data from JSON files
- Real-time updates - no redeployment needed
- Automatic fallback to localStorage if file writing fails

### Frontend Data Loading:
1. First tries to load from server JSON files (`public/data/*.json`)
2. Falls back to localStorage if JSON files aren't available
3. Combines local hardcoded data with admin-added data
4. Sorts properties: featured first, then by date

## Server Configuration

### File System Requirements:
- Server must have write permissions to `public/data/` directory
- JSON files must be writable by the Node.js process
- Typical permissions: 755 for directory, 644 for files

### Environment Setup:
```bash
# Install dependencies
npm install

# Build the project
npm run build

# Start production server
npm run dev
```

### Process Manager (PM2):
```bash
# Install PM2
npm install -g pm2

# Start the application
pm2 start npm --name "bnl-website" -- start dev

# Configure PM2 to start on boot
pm2 startup
pm2 save
```

## Reverse Proxy Configuration

### Nginx Example:
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Apache Example:
```apache
<VirtualHost *:80>
    ServerName your-domain.com
    ProxyPreserveHost On
    ProxyPass / http://localhost:8080/
    ProxyPassReverse / http://localhost:8080/
</VirtualHost>
```

## Adding New Content After Deployment

### Via Admin Panel (Recommended):
1. Go to `/admin` on your live site
2. Add/edit properties and gallery images
3. Changes are immediately visible to all users
4. No redeployment needed

### Direct JSON File Editing:
1. SSH into your server
2. Edit `public/data/admin-properties.json` or `public/data/admin-gallery.json`
3. Changes are immediately reflected
4. No server restart needed

## JSON File Format

### admin-properties.json:
```json
[
  {
    "id": "unique-id",
    "category": "dubai-apartments",
    "title": "Property Title",
    "location": "Location",
    "price": "AED 1,000,000",
    "bedrooms": "2",
    "area": "1,500 sq ft",
    "description": "Short description",
    "full_description": "Full description",
    "image_url": "/path/to/image.jpg",
    "image_path": null,
    "gallery": ["/image1.jpg", "/image2.jpg"],
    "highlights": ["Feature 1", "Feature 2"],
    "featured": true,
    "published": true,
    "created_at": "2024-01-01T00:00:00.000Z",
    "updated_at": "2024-01-01T00:00:00.000Z"
  }
]
```

### admin-gallery.json:
```json
[
  {
    "id": "unique-id",
    "title": "Gallery Image Title",
    "caption": "Image caption",
    "image_url": "/path/to/image.jpg",
    "image_path": null,
    "sort_order": 1,
    "published": true,
    "created_at": "2024-01-01T00:00:00.000Z"
  }
]
```

## Image Management

All images should be placed in the `public/` directory:
- Property images: `public/properties/`
- Gallery images: `public/properties/` (can share same folder)
- Other assets: `public/__l5e/assets-v1/`

Use relative paths in JSON files:
- ✅ `/properties/image-name.jpg`
- ❌ `https://example.com/image.jpg` (unless using external hosting)

## Troubleshooting

### Admin panel changes not visible to other users:
1. Check server write permissions to `public/data/`
2. Verify JSON files are being updated on the server
3. Check server logs for file system errors
4. Ensure Node.js process has proper permissions

### Properties not showing:
1. Check that JSON files exist in `public/data/` folder
2. Verify JSON files are valid JSON format
3. Check browser console for errors
4. Ensure `published: true` in property data

### Images not loading:
1. Verify image paths in JSON files are correct
2. Check that images exist in the `public/` directory
3. Ensure image files are included in deployment
4. Check file permissions on image files

### File write errors:
1. Check `public/data/` directory permissions (should be 755)
2. Ensure Node.js process has write access
3. Check disk space on server
4. Review server error logs

## Hosting Provider Specific Notes

### Node.js Hosting (DigitalOcean, AWS, etc.):
- Deploy entire project with `package.json`
- Run `npm install --production` on server
- Use PM2 for process management
- Configure reverse proxy for domain

### VPS with cPanel:
- Ensure Node.js is available
- Setup Node.js application in cPanel
- Configure domain to point to Node.js app
- Set up proper file permissions

### PaaS (Heroku, Railway, etc.):
- Use their Node.js buildpacks
- Set file system as ephemeral storage
- Consider using external storage for persistent data
- May need to adapt for read-only file systems

## Security Considerations

### Admin Panel Protection:
- Admin panel requires authentication
- Uses Supabase auth middleware
- Only authenticated admin users can modify data

### File System Security:
- Restrict write permissions to necessary directories only
- Don't make entire project writable
- Use environment variables for sensitive data
- Regular backups of JSON data files

### Backup Strategy:
```bash
# Backup JSON data files
tar -czf backup-$(date +%Y%m%d).tar.gz public/data/

# Automated backup script (add to crontab)
0 2 * * * tar -czf /backups/bnl-$(date +\%Y\%m\%d).tar.gz /path/to/public/data/
```

## Support
For issues or questions:
1. Check this guide first
2. Review server logs for errors
3. Verify file permissions and paths
4. Test locally before deploying
5. Check Node.js server configuration
